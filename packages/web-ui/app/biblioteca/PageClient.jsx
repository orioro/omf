'use client'

import { Intro } from './sections/Intro'
import { Documents } from './sections/Documents'

export function PageClient({ params }) {
  return (
    <>
      <Intro />
      <Documents />
    </>
  )
}
