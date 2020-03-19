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

const FullHeightSearchMoviesResult = styled(SearchMoviesResult)<{
  occupySpace: boolean
  transparent: boolean
}>`
  margin: 0 2% 2%;
  flex: ${({ occupySpace }) => (occupySpace ? '1' : '0')};
  opacity: ${({ transparent }) => (transparent ? '1' : '0')};
  transition: flex 100ms ease-in-out, opacity 100ms linear;
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
  hasData: boolean
}

function MoviesPage({ moviesAreLoading, hasData }: Props) {
  const loader = (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  )
  const movies = (
    <FullHeightSearchMoviesResult
      occupySpace={hasData}
      transparent={!moviesAreLoading}
    />
  )

  return (
    <FullHeightMainContent>
      <SearchMoviesFieldWithMargin placeholder="Enter Movies or Series name" />
      {moviesAreLoading ? loader : movies}
    </FullHeightMainContent>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  moviesAreLoading: state.movies.loading,
  hasData: !!state.movies.data
})

export default connect(mapStateToProps)(MoviesPage)
