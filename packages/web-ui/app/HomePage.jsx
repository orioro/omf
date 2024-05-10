'use client'

import { Intro } from './sections/Intro'
import { Data } from './sections/Data'
import { Partnerships } from './sections/Partnerships'

export function HomePage() {
  return (
    <>
      <Intro />
      <Data />
      <Partnerships />
    </>
  )
}
