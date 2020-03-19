import { Movie } from './models/movie'

export interface MoviesState {
  readonly loading: boolean
  readonly data: Movie[] | undefined
  readonly error?: string
}
