'use client'

import sanityConfig from '@/sanity.config'
import { NextStudio } from 'next-sanity/studio'

export default function StudioPage() {
  return <NextStudio config={sanityConfig} />
}
