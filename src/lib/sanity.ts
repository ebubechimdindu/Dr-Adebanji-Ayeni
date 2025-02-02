import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '9uqjt3zf',
  dataset: 'production',
  apiVersion: '2024-01-29',
  useCdn: false, // Disable CDN to ensure fresh data
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};