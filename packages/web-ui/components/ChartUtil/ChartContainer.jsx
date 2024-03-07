import React, { useRef } from 'react'
import styled from 'styled-components'
import { useInViewport } from 'react-in-viewport'

import { ResponsiveContainer } from 'recharts'

const Container = styled.div`
  height: 450px;
`

export function ChartContainer({ children, alwaysActive = false, ...props }) {
  const containerRef = useRef()
  const { inViewport, enterCount } = useInViewport(containerRef, {
    threshold: 0.6,
  })

  return (
    <Container ref={containerRef} {...props}>
      {(alwaysActive || enterCount > 0 || inViewport) && (
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      )}
    </Container>
  )
}
