import { action, PayloadAction } from 'typesafe-actions'
import { Movie, MoviesActionTypes } from './types'

export const searchRequest = (
  searchText: string
): PayloadAction<MoviesActionTypes.SEARCH_REQUEST, string> =>
  action(MoviesActionTypes.SEARCH_REQUEST, searchText)
export const searchSuccess = (
  data: Movie[]
): PayloadAction<MoviesActionTypes.SEARCH_SUCCESS, Movie[]> =>
  action(MoviesActionTypes.SEARCH_SUCCESS, data)
export const searchError = (
  message: string
): PayloadAction<MoviesActionTypes.SEARCH_ERROR, string> =>
  action(MoviesActionTypes.SEARCH_ERROR, message)
