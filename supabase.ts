import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  event_type: string;
  date: string | null;
  start_time: string | null;
  end_time: string | null;
  location: string;
  price: string;
  level: string;
  image_url: string;
  external_link: string;
  is_recurring: boolean;
  recurrence_pattern: string;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}
