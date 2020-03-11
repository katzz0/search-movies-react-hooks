import { action } from 'typesafe-actions'
import { Movie, MoviesActionTypes } from './types'

export const searchRequest = (searchText: string) =>
  action(MoviesActionTypes.SEARCH_REQUEST, searchText)
export const searchSuccess = (data: Movie[]) =>
  action(MoviesActionTypes.SEARCH_SUCCESS, data)
export const searchError = (message: string) =>
  action(MoviesActionTypes.SEARCH_ERROR, message)
