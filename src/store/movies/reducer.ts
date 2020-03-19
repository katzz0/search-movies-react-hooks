import { Reducer } from 'redux'
import { MoviesState, MoviesActionTypes } from './types'

export const initialState: MoviesState = {
  data: [],
  error: undefined,
  loading: false
}

const reducer: Reducer<MoviesState> = (state = initialState, action) => {
  switch (action.type) {
    case MoviesActionTypes.SEARCH_REQUEST: {
      return { ...state, loading: true }
    }
    case MoviesActionTypes.SEARCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: undefined
      }
    }
    case MoviesActionTypes.SEARCH_ERROR: {
      return { ...state, loading: false, error: action.payload }
    }
    default: {
      return state
    }
  }
}

export { reducer as moviesReducer }
