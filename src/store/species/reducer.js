import { SET_SPECIES } from './actionType'

const initialState = {
  species: []
}

export function speciesReducer (state = initialState, action) {
  switch (action.type) {
    case SET_SPECIES:
      return { ...state, species: action.species }
    default:
      return state
  }
}
