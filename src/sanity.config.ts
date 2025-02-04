import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Academic Portfolio',
  projectId: '9uqjt3zf',
  dataset: 'production',
  basePath: '/studio',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  cors: {
    origin: [
      'http://localhost:8080',
      'http://localhost:5173',
      'https://a9960a07-d6b7-4f7c-afb6-4029de7720be.lovableproject.com',
      'https://preview--p-113468.lovable.app',
      'https://p-113468.lovable.app'
    ],
    credentials: true,
  }
})