import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainContent from '../layout/MainContent';
import SearchMoviesField from './SearchMoviesField';
import SearchMoviesResult from './SearchMoviesResult';
import { ApplicationState } from '../../store';
import { connect } from 'react-redux';

const FullHeightMainContent = styled(MainContent)`
  flex: 1;
`

const SearchMoviesFieldWithMargin = styled(SearchMoviesField)`
  margin: 1em;
  padding: 0.5em 0;
  flex: 0 0 auto;
`

const FullHeightSearchMoviesResult = styled(SearchMoviesResult)<{ occupySpace: boolean, transparent: boolean }>`
  margin: 0 2% 2%;
  flex: ${ ({ occupySpace }) => occupySpace ? '1' : '0' };
  opacity: ${ ({ transparent }) => transparent ? '1' : '0' };
  transition: flex 100ms ease-in-out, opacity 100ms linear;
`

interface Props {
  moviesAreLoading: boolean
}

function MoviesPage({ moviesAreLoading }: Props) {
  const [hasRequested, setHasRequested] = useState(false)

  useEffect(() => {
    if (!moviesAreLoading) {
      return;
    }

    setHasRequested(true)
  }, [moviesAreLoading])

  return (
    <FullHeightMainContent>
      <SearchMoviesFieldWithMargin placeholder="Enter Movies or Series name" />
      <FullHeightSearchMoviesResult occupySpace={hasRequested} transparent={!moviesAreLoading} />
    </FullHeightMainContent>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  moviesAreLoading: state.movies.loading
})

export default connect(mapStateToProps)(MoviesPage)
