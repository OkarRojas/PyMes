import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yxsmssdtulwrrdpyeshd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4c21zc2R0dWx3cnJkcHllc2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3MDUzNjgsImV4cCI6MjA3MzI4MTM2OH0.6dUkRpIJ7IZZ-76nr8mpWCRojec0vASqfotjGx84bfc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
