
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { amount, currency = 'BRL', type, creator_id, description } = await req.json()

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    )

    // Get user from JWT
    const { data: { user } } = await supabaseClient.auth.getUser()
    
    if (!user) {
      throw new Error('Unauthorized')
    }

    const stripeSecretKey = Deno.env.get('STRIPE_SECRET_KEY')
    if (!stripeSecretKey) {
      throw new Error('Stripe secret key not configured')
    }

    // Create Stripe payment intent
    const stripe = new (await import('https://esm.sh/stripe@12.18.0')).default(stripeSecretKey, {
      apiVersion: '2023-10-16',
    })

    let paymentIntent

    if (type === 'subscription') {
      // Create subscription
      const { data: profile } = await supabaseClient
        .from('profiles')
        .select('stripe_account_id')
        .eq('id', creator_id)
        .single()

      paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: currency.toLowerCase(),
        automatic_payment_methods: {
          enabled: true,
        },
        metadata: {
          user_id: user.id,
          creator_id,
          type: 'subscription'
        },
        description: description || 'Assinatura CreatorHub'
      })
    } else {
      // One-time payment (donation)
      paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100),
        currency: currency.toLowerCase(),
        automatic_payment_methods: {
          enabled: true,
        },
        metadata: {
          user_id: user.id,
          creator_id,
          type: 'donation'
        },
        description: description || 'Doação CreatorHub'
      })
    }

    // Store payment intent in database
    if (type === 'subscription') {
      await supabaseClient
        .from('subscriptions')
        .upsert({
          subscriber_id: user.id,
          creator_id,
          price: amount,
          status: 'pending',
          stripe_subscription_id: paymentIntent.id
        })
    } else {
      await supabaseClient
        .from('donations')
        .insert({
          donor_id: user.id,
          creator_id,
          amount,
          stripe_payment_intent_id: paymentIntent.id,
          status: 'pending'
        })
    }

    return new Response(
      JSON.stringify({
        client_secret: paymentIntent.client_secret,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})
