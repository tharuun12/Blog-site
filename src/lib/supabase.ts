import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kweoqbobxytkjpvovzgm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3ZW9xYm9ieHl0a2pwdm92emdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM2ODAyNjgsImV4cCI6MjA0OTI1NjI2OH0.i-J7zOd-DAChCfQ2AI9Mt7BTT6Z-7UI64KWZ622I1ew';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);