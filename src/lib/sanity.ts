import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'a9960a07', // Using the project ID from your URL
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-29', // Using today's date as API version
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};