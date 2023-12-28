import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl: string | undefined = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey: string | undefined = import.meta.env.VITE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or Anon Key not provided");
}

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase;
