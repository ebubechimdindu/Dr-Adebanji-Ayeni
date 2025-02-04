import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '9uqjt3zf',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-29',
  token: process.env.SANITY_TOKEN
})

// Helper function to get profile data
export const getProfile = async () => {
  try {
    const profile = await client.fetch(`*[_type == "profile"][0]`)
    return profile
  } catch (error) {
    console.error('Error fetching profile:', error)
    return null
  }
}

// Helper function to get CV data
export const getCV = async () => {
  try {
    const cv = await client.fetch(`*[_type == "cv"][0]`)
    return cv
  } catch (error) {
    console.error('Error fetching CV:', error)
    return null
  }
}