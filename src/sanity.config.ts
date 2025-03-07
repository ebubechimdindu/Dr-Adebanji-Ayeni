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
      'https://adebanji-ayeni.vercel.app'
    ],
    credentials: true,
  }
})