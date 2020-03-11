import { Movie } from './movie'

export interface SearchMoviesResult {
  Search: Movie[]
  Response: 'True' | 'False'
  Error?: string
}
