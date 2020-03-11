import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'

import moviesSaga from './movies/sagas'
import { MoviesState } from './movies/types/state'
import { moviesReducer } from './movies/reducer'

export interface ApplicationState {
  movies: MoviesState
}

export const createRootReducer = () =>
  combineReducers({
    movies: moviesReducer
  })

export function* rootSaga() {
  yield all([fork(moviesSaga)])
}
