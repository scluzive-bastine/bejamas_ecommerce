import { createCurrentUserHook } from 'next-sanity'
import createClient from '@sanity/client'

import createImageUrlBuilder from '@sanity/image-url'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-03-25',
  useCdn: process.env.NODE_ENV === 'production',
}

// set up the client for fetching data in tehe getProps page function
export const sanityClient = createClient(config)

// set up a helper function for generating img url with only the asset reference data in your documents
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// Helper function for using the current logged in user account
export const useCurrentuser = createCurrentUserHook(config)
