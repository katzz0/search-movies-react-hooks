import React from 'react'
import styled from 'styled-components'
import Header from './layout/Header'
import SearchMoviesField from './movies/SearchMoviesField'
import MainContent from './layout/MainContent'
import SearchMoviesResult from './movies/SearchMoviesResult'

const Wrapper = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`

const FullHeightMainContent = styled(MainContent)`
  flex: 1;
`

const SearchMoviesFieldWithMargin = styled(SearchMoviesField)`
  margin: 1em;
  padding: 0.5em 0;
`

const FullHeightSearchMoviesResult = styled(SearchMoviesResult)`
  margin: 0 2% 2%;
  flex: 1;
`

export default function App() {
  return (
    <Wrapper>
      <Header appName="Search Movies (with react hooks)" />
      <FullHeightMainContent>
        <SearchMoviesFieldWithMargin placeholder="Enter Movies or Series name" />
        <FullHeightSearchMoviesResult />
      </FullHeightMainContent>
    </Wrapper>
  )
}
