import React from 'react'
import styled from 'styled-components'
import Header from './layout/Header'
import MoviesPage from './movies/MoviesPage';

const Wrapper = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`

export default function App() {
  return (
    <Wrapper>
      <Header appName="Search Movies (with react hooks)" />
      <MoviesPage />
    </Wrapper>
  )
}
