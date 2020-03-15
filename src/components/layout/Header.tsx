import React from 'react'
import styled from 'styled-components'

interface Props {
  appName: string
}

const Wrapper = styled.header`
  padding: 0.5rem 1.5rem;
  background-color: deepskyblue;
  color: whitesmoke;
  font-family: 'Roboto', sans-serif;
`

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderLeft = styled.div`
  padding-right: 1rem;
`

const Title = styled.h2`
  margin: 0;
  font-weight: 500;
`

export default function Header({ appName }: Props) {
  return (
    <Wrapper>
      <HeaderInner>
        <HeaderLeft>
          <Title>{appName}</Title>
        </HeaderLeft>
      </HeaderInner>
    </Wrapper>
  )
}
