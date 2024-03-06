import React from 'react'
import styled from 'styled-components'
import { useKey } from 'rooks'
import { BottomSheet as BottomSheet__ } from 'react-spring-bottom-sheet'
import { Close } from '@mui/icons-material'

const BottomSheet_ = styled(BottomSheet__)`
  --rsbs-backdrop-bg: rgba(0, 0, 0, 0.6);
  --rsbs-bg: #fff;
  --rsbs-handle-bg: hsla(0, 0%, 0%, 0.14);
  --rsbs-max-w: 1000px;
  --rsbs-ml: auto;
  --rsbs-mr: auto;
  --rsbs-overlay-rounded: 16px;

  @media (hover: hover) {
    *::-webkit-scrollbar-thumb {
      background-color: var(--grey);
    }
  }
`

const ContentContainer = styled.div`
  position: relative;
  padding: 20px 75px 100px 75px;

  @media (max-width: 600px) {
    padding: 20px 30px;
  }
`

const CloseButton = styled.button`
  position: absolute;
  padding: 0;
  border: none;
  top: 20px;
  right: 15px;

  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  cursor: pointer;

  > svg {
    width: 24px;
    height: 24px;
  }
`

export function BottomSheet({ isOpen, onSetIsOpen, children, ...props }) {
  useKey('Escape', () => {
    if (isOpen) {
      onSetIsOpen(false)
    }
  })

  return (
    <BottomSheet_
      initialFocusRef={false}
      open={isOpen}
      expandOnContentDrag
      defaultSnap={({ maxHeight }) => (maxHeight * 95) / 100}
      snapPoints={({ maxHeight }) => [
        (maxHeight * 95) / 100,
        // maxHeight - maxHeight / 10,
        // maxHeight / 4,
        // maxHeight * 0.6,
      ]}
      onDismiss={() => onSetIsOpen(false)}
      {...props}
    >
      <ContentContainer>
        <CloseButton type="button" onClick={() => onSetIsOpen(false)}>
          <Close />
        </CloseButton>
        {children}
      </ContentContainer>
    </BottomSheet_>
  )
}
