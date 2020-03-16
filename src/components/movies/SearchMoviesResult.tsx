import React from 'react'
import { connect } from 'react-redux'
import List from '../shared/List'
import { Movie as MovieModel } from '../../store/movies/types'
import MovieCard from './MovieCard'
import { ApplicationState } from '../../store'
import ErrorMessageWrapper from '../shared/ErrorMessageWrapper'

type MovieModelWithId = MovieModel & { id: string }

interface Props {
  className?: string
  movies: MovieModelWithId[]
  errorMessage?: string
}

function SearchMoviesResult<T>({ className, movies, errorMessage }: Props) {
  if (errorMessage) {
    return (
      <ErrorMessageWrapper className={className}>
        {errorMessage}
      </ErrorMessageWrapper>
    )
  }

  return <List className={className} itemComponent={MovieCard} data={movies} />
}

const mapStateToProps = (state: ApplicationState) => ({
  movies: state.movies.data.map(x => ({ id: x.imdbID, ...x })),
  errorMessage: state.movies.error
})

export default connect(mapStateToProps)(SearchMoviesResult)
