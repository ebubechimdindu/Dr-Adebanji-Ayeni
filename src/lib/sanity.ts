import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'your-project-id', // Replace with your Sanity project ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};