import { SET_PEOPLE } from './actionType'

const initialState = {
  peopleList: []
}

export function peopleReducer (state = initialState, action) {
  switch (action.type) {
    case SET_PEOPLE:
      return { ...state, peopleList: action.peopleList }
    default:
      return state
  }
}
