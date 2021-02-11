import { connect } from 'react-redux'
import { Movie as MovieModel } from '../../store/movies/types'
import { ApplicationState } from '../../store'
import ErrorMessageWrapper from '../shared/ErrorMessageWrapper'
import MoviesList from './MoviesList'

type MovieModelWithId = MovieModel & { id: string }

interface Props {
  className?: string
  movies: MovieModelWithId[] | undefined
  errorMessage?: string
}

function SearchMoviesResult({ className, movies, errorMessage }: Props) {
  if (errorMessage) {
    return (
      <ErrorMessageWrapper className={className}>
        {errorMessage}
      </ErrorMessageWrapper>
    )
  }

  if (movies) {
    return <MoviesList className={className} movies={movies} />
  }

  return null
}

SearchMoviesResult.defaultProps = {
  className: undefined,
  errorMessage: undefined,
}

const mapStateToProps = (state: ApplicationState) => ({
  movies: state.movies.data?.map((x) => ({ id: x.imdbID, ...x })),
  errorMessage: state.movies.error,
})

export default connect(mapStateToProps)(SearchMoviesResult)
