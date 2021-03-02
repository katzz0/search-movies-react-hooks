import {
  all,
  call,
  cancelled,
  fork,
  put,
  StrictEffect,
  takeLatest,
} from 'redux-saga/effects'
import { searchError, searchSuccess } from './actions'
import { makeGetRequest } from '../../utils/api'
import { MoviesActionTypes, SearchMoviesResult } from './types'
import { AppAction } from '../../utils/appAction'

function* handleSearch(action: AppAction) {
  const abortController = new AbortController()

  try {
    const res: SearchMoviesResult = yield call(
      makeGetRequest,
      abortController.signal,
      `s=${action.payload}`
    )

    if (res.Error) {
      yield put(searchError(res.Error))
    } else if (res.Search.length === 0) {
      yield put(
        searchError('There are no movies found. Try another search request.')
      )
    } else {
      yield put(searchSuccess(res.Search))
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(searchError(err.stack))
    } else {
      yield put(searchError('An unknown error occurred'))
    }
  } finally {
    if (yield cancelled()) {
      abortController.abort()
    }
  }
}

function* watchFetchRequest() {
  yield takeLatest(MoviesActionTypes.SEARCH_REQUEST, handleSearch)
}

function* moviesSaga(): Generator<StrictEffect, void, void> {
  yield all([fork(watchFetchRequest)])
}

export default moviesSaga
