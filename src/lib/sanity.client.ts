import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '9uqjt3zf',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-29',
})

export const getProfile = async () => {
  return client.fetch(`*[_type == "profile"][0]`)
}

export const getCV = async () => {
  return client.fetch(`*[_type == "cv"][0]`)
}