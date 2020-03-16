import React from 'react'
import styled from 'styled-components'
import Header from '../components/layout/Header'
import SearchMoviesField from './SearchMoviesField';
import MainContent from '../components/layout/MainContent';

const Wrapper = styled.div`
  height: 100%;
`

const SearchMoviesFieldWithMargin = styled(SearchMoviesField)`
  padding: .5em 0;
`

function App() {
  return (
    <Wrapper>
      <Header appName="Search Movies (with react hooks)" />
      <MainContent>
        <SearchMoviesFieldWithMargin />
      </MainContent>
    </Wrapper>
  )
}

export default App
