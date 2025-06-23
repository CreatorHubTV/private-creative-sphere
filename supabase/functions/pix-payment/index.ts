
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
    const { amount, creator_id, description } = await req.json()

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

    // For PIX, we'll generate a simple payment code (QR code data)
    // In a real implementation, you'd integrate with a Brazilian payment provider
    const pixKey = 'creatorhub@pix.com.br' // This would be the platform's PIX key
    const pixCode = `PIX-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    
    // Store PIX payment in database
    const { error } = await supabaseClient
      .from('donations')
      .insert({
        donor_id: user.id,
        creator_id,
        amount,
        status: 'pending',
        stripe_payment_intent_id: pixCode // Reusing this field for PIX code
      })

    if (error) throw error

    return new Response(
      JSON.stringify({
        pix_code: pixCode,
        pix_key: pixKey,
        amount,
        qr_code: `data:image/svg+xml;base64,${btoa(`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="white"/><text x="100" y="100" text-anchor="middle" fill="black">PIX: R$ ${amount}</text></svg>`)}`
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
