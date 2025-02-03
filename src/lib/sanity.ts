import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const token = typeof process !== 'undefined' ? process.env.SANITY_TOKEN : undefined;

export const client = createClient({
  projectId: '9uqjt3zf',
  dataset: 'production',
  apiVersion: '2024-01-29',
  useCdn: true,
  token: token
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};