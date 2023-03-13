'use client'

import sanityConfig from '@/sanity.config'
import { NextStudioLoading } from 'next-sanity/studio/loading'

export default function Loading() {
  return <NextStudioLoading config={sanityConfig} />
}
