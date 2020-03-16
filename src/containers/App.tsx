import React from 'react'
import styled from 'styled-components'
import Header from '../components/layout/Header'
import SearchMoviesField from './SearchMoviesField'
import MainContent from '../components/layout/MainContent'
import SearchMoviesResult from '../components/movies/SearchMoviesResult'

const Wrapper = styled.div`
  height: 100%;
`

const SearchMoviesFieldWithMargin = styled(SearchMoviesField)`
  padding: 0.5em 0;
`

const FullHeightSearchMoviesResult = styled(SearchMoviesResult)`
  flex: 1;
`

export default function App() {
  return (
    <Wrapper>
      <Header appName="Search Movies (with react hooks)" />
      <MainContent>
        <SearchMoviesFieldWithMargin />
        <FullHeightSearchMoviesResult />
      </MainContent>
    </Wrapper>
  )
}
