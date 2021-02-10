import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

interface Props {
  className?: string
}

export default function MainContent({
  className,
  children,
}: PropsWithChildren<Props>) {
  return <Wrapper className={className}>{children}</Wrapper>
}
