import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import MainContent from '../layout/MainContent'
import SearchMoviesField from './SearchMoviesField'
import SearchMoviesResult from './SearchMoviesResult'
import { ApplicationState } from '../../store'
import Loader from '../shared/Loader'

const FullHeightMainContent = styled(MainContent)`
  flex: 1;
`

const SearchMoviesFieldWithMargin = styled(SearchMoviesField)`
  margin: 1em;
  padding: 0.5em 0;
  flex: 0 0 auto;
`

const FullHeightSearchMoviesResult = styled(SearchMoviesResult)`
  margin: 0 2% 2%;
  flex: 1;
`

const LoaderWrapper = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

interface Props {
  moviesAreLoading: boolean
}

function MoviesPage({ moviesAreLoading }: Props) {
  const loader = (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  )

  return (
    <FullHeightMainContent>
      <SearchMoviesFieldWithMargin placeholder="Enter Movies or Series name" />
      {moviesAreLoading ? loader : <FullHeightSearchMoviesResult />}
    </FullHeightMainContent>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  moviesAreLoading: state.movies.loading,
})

export default connect(mapStateToProps)(MoviesPage)
