import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '9uqjt3zf',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-29',
})

export const getProfile = async () => {
  try {
    const profile = await client.fetch(`*[_type == "profile"][0]`)
    return profile
  } catch (error) {
    console.log('Error fetching profile:', error)
    // Return null to allow fallback to static data
    return null
  }
}

export const getCV = async () => {
  try {
    const cv = await client.fetch(`*[_type == "cv"][0]`)
    return cv
  } catch (error) {
    console.log('Error fetching CV:', error)
    // Return null to allow fallback to static data
    return null
  }
}