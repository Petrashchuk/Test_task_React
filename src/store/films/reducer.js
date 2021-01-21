import { SET_FILMS } from './actionType'

const initialState = {
  films: [],
}

export function filmsReducer (state = initialState, action) {
  switch (action.type) {
    case SET_FILMS:
      return { ...state, films: action.films }
    default:
      return state
  }
}
