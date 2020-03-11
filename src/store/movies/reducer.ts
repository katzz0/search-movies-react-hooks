import { Reducer } from 'redux'
import { MoviesState, MoviesActionTypes } from './types'

export const initialState: MoviesState = {
  data: [],
  errors: undefined,
  loading: false
}

const reducer: Reducer<MoviesState> = (state = initialState, action) => {
  switch (action.type) {
    case MoviesActionTypes.SEARCH_REQUEST: {
      return { ...state, loading: true }
    }
    case MoviesActionTypes.SEARCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case MoviesActionTypes.SEARCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      return state
    }
  }
}

export { reducer as moviesReducer }
