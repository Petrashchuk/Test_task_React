import { SET_SPACESHIPS } from './actionType'

const initialState = {
  spaceships: []
}

export function spaceshipsReducer (state = initialState, action) {
  switch (action.type) {
    case SET_SPACESHIPS:
      return { ...state, spaceships: action.spaceships }
    default:
      return state
  }
}
