import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url';

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({

  projectId: 'hourmrx6', // Replace with your Sanity Project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2023-01-01', // Use the latest API version
  useCdn: true, // Set to false if you want fresh data
});

const builder = imageUrlBuilder(client);

// Function to build image URLs
export const urlFor = (source: any) => builder.image(source);

// Export client for data fetching
export default client;
