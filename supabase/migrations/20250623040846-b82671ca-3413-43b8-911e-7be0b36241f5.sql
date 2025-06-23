
-- Create messages table for chat functionality
CREATE TABLE IF NOT EXISTS public.messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  receiver_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  read_at TIMESTAMPTZ,
  message_type TEXT DEFAULT 'text' -- 'text', 'image', 'video'
);

-- Create subscriptions table
CREATE TABLE IF NOT EXISTS public.subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subscriber_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  creator_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'active', -- 'active', 'cancelled', 'expired'
  stripe_subscription_id TEXT,
  price DECIMAL(10,2),
  created_at TIMESTAMPTZ DEFAULT now(),
  expires_at TIMESTAMPTZ,
  UNIQUE(subscriber_id, creator_id)
);

-- Create content table for posts/reels
CREATE TABLE IF NOT EXISTS public.content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  type TEXT NOT NULL, -- 'photo', 'video', 'reel'
  title TEXT,
  description TEXT,
  media_url TEXT NOT NULL,
  thumbnail_url TEXT,
  duration INTEGER, -- for videos in seconds
  is_premium BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create likes table
CREATE TABLE IF NOT EXISTS public.likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  content_id UUID REFERENCES public.content(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, content_id)
);

-- Create favorites table
CREATE TABLE IF NOT EXISTS public.favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  creator_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, creator_id)
);

-- Create follows table
CREATE TABLE IF NOT EXISTS public.follows (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  follower_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  following_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(follower_id, following_id)
);

-- Create live_streams table
CREATE TABLE IF NOT EXISTS public.live_streams (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  stream_key TEXT UNIQUE,
  status TEXT DEFAULT 'scheduled', -- 'scheduled', 'live', 'ended'
  viewer_count INTEGER DEFAULT 0,
  started_at TIMESTAMPTZ,
  ended_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create donations table
CREATE TABLE IF NOT EXISTS public.donations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  creator_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  amount DECIMAL(10,2) NOT NULL,
  message TEXT,
  stripe_payment_intent_id TEXT,
  status TEXT DEFAULT 'pending', -- 'pending', 'completed', 'failed'
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Update profiles table to include creator-specific fields
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS username TEXT UNIQUE;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS bio TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS avatar_url TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS banner_url TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS is_creator BOOLEAN DEFAULT false;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS subscription_price DECIMAL(10,2) DEFAULT 29.90;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS stripe_account_id TEXT;

-- Enable Row Level Security for new tables
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.follows ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.live_streams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

-- RLS Policies for messages
CREATE POLICY "Users can view their own messages" ON public.messages
  FOR SELECT USING (auth.uid() = sender_id OR auth.uid() = receiver_id);

CREATE POLICY "Users can send messages" ON public.messages
  FOR INSERT WITH CHECK (auth.uid() = sender_id);

-- RLS Policies for subscriptions
CREATE POLICY "Users can view their subscriptions" ON public.subscriptions
  FOR SELECT USING (auth.uid() = subscriber_id OR auth.uid() = creator_id);

CREATE POLICY "Users can create subscriptions" ON public.subscriptions
  FOR INSERT WITH CHECK (auth.uid() = subscriber_id);

-- RLS Policies for content
CREATE POLICY "Everyone can view public content" ON public.content
  FOR SELECT USING (NOT is_premium OR EXISTS (
    SELECT 1 FROM public.subscriptions 
    WHERE subscriber_id = auth.uid() AND creator_id = public.content.creator_id AND status = 'active'
  ));

CREATE POLICY "Creators can manage their content" ON public.content
  FOR ALL USING (auth.uid() = creator_id);

-- RLS Policies for likes
CREATE POLICY "Users can view all likes" ON public.likes FOR SELECT USING (true);
CREATE POLICY "Users can manage their likes" ON public.likes FOR ALL USING (auth.uid() = user_id);

-- RLS Policies for favorites
CREATE POLICY "Users can view all favorites" ON public.favorites FOR SELECT USING (true);
CREATE POLICY "Users can manage their favorites" ON public.favorites FOR ALL USING (auth.uid() = user_id);

-- RLS Policies for follows
CREATE POLICY "Users can view all follows" ON public.follows FOR SELECT USING (true);
CREATE POLICY "Users can manage their follows" ON public.follows FOR ALL USING (auth.uid() = follower_id);

-- RLS Policies for live_streams
CREATE POLICY "Everyone can view live streams" ON public.live_streams FOR SELECT USING (true);
CREATE POLICY "Creators can manage their streams" ON public.live_streams FOR ALL USING (auth.uid() = creator_id);

-- RLS Policies for donations
CREATE POLICY "Users can view their donations" ON public.donations
  FOR SELECT USING (auth.uid() = donor_id OR auth.uid() = creator_id);

CREATE POLICY "Users can create donations" ON public.donations
  FOR INSERT WITH CHECK (auth.uid() = donor_id);

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public) VALUES 
  ('avatars', 'avatars', true),
  ('banners', 'banners', true),
  ('content', 'content', true),
  ('reels', 'reels', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies
CREATE POLICY "Public access to avatars" ON storage.objects FOR SELECT USING (bucket_id = 'avatars');
CREATE POLICY "Users can upload avatars" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'avatars' AND auth.role() = 'authenticated');

CREATE POLICY "Public access to banners" ON storage.objects FOR SELECT USING (bucket_id = 'banners');
CREATE POLICY "Users can upload banners" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'banners' AND auth.role() = 'authenticated');

CREATE POLICY "Public access to content" ON storage.objects FOR SELECT USING (bucket_id = 'content');
CREATE POLICY "Users can upload content" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'content' AND auth.role() = 'authenticated');

CREATE POLICY "Public access to reels" ON storage.objects FOR SELECT USING (bucket_id = 'reels');
CREATE POLICY "Users can upload reels" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'reels' AND auth.role() = 'authenticated');

-- Enable realtime for messages
ALTER PUBLICATION supabase_realtime ADD TABLE public.messages;
ALTER PUBLICATION supabase_realtime ADD TABLE public.live_streams;
ALTER PUBLICATION supabase_realtime ADD TABLE public.donations;
