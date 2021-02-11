import { combineReducers, Reducer } from 'redux'
import { all, fork, StrictEffect } from 'redux-saga/effects'

import moviesSaga from './movies/sagas'
import { MoviesState } from './movies/types/state'
import { moviesReducer } from './movies/reducer'

export interface ApplicationState {
  movies: MoviesState
}

export const createRootReducer: () => Reducer<ApplicationState> = () =>
  combineReducers({
    movies: moviesReducer,
  })

export function* rootSaga(): Generator<StrictEffect, void, void> {
  yield all([fork(moviesSaga)])
}
