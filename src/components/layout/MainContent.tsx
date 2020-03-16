import React, { PropsWithChildren } from 'react'
import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
`

export default function MainContent({ children }: PropsWithChildren<{}>) {
  return (
    <Wrapper>
      { children }
    </Wrapper>
  );
}
