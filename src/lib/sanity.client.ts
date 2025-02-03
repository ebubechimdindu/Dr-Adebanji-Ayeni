import { createClient } from '@sanity/client'
import { supabase } from "@/integrations/supabase/client";

// Initialize client with project details
export const client = createClient({
  projectId: '9uqjt3zf',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-29',
  token: process.env.SANITY_TOKEN // This will be automatically populated from Supabase
})

// Helper function to get profile data
export const getProfile = async () => {
  try {
    const profile = await client.fetch(`*[_type == "profile"][0]`)
    return profile
  } catch (error) {
    console.log('Error fetching profile:', error)
    return null
  }
}

// Helper function to get CV data
export const getCV = async () => {
  try {
    const cv = await client.fetch(`*[_type == "cv"][0]`)
    return cv
  } catch (error) {
    console.log('Error fetching CV:', error)
    return null
  }
}