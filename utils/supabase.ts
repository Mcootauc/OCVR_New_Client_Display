import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Client = {
  id: number
  timestamp: string
  owner_name: string
  home_address: string
  city: string
  state: string
  zip_code: string
  cell_phone: string
  email: string
  pet_name: string
  species: string
  breed: string
  age: string
  sex: string
  spayed_or_neutered: boolean
  color: string
  microchip: string
  initials: string
  created_at: string
}

