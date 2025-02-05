import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '9uqjt3zf',
  dataset: 'production',
  apiVersion: '2024-01-29',
  useCdn: true,
  token: process.env.SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};