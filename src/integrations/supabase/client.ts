// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ckqsdvzcymludvfkkpss.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrcXNkdnpjeW1sdWR2ZmtrcHNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1MjM3NzAsImV4cCI6MjA2NjA5OTc3MH0.SjfDT8gaL7f2PeGkFc8KhkSJIdh80PnQ2bsxF4wm-oA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);