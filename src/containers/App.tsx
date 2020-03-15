import React from 'react'
import styled from 'styled-components'
import Header from '../components/layout/Header'

const Wrapper = styled.div`
  height: 100%;
`

function App() {
  return (
    <Wrapper>
      <Header appName="Search Movies (with react hooks)" />
    </Wrapper>
  )
}

export default App
