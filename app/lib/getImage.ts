import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanityClient'

const builder = imageUrlBuilder(client)

export function getImage(source: any) {
  return builder.image(source)
}
