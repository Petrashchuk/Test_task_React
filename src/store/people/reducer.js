import { SET_PEOPLE, SET_PEOPLE_BIRTH_YEAR } from './actionType'

const initialState = {
  peopleList: [],
  birthYears: [],
}

export function peopleReducer (state = initialState, action) {
  switch (action.type) {
    case SET_PEOPLE:
      return { ...state, peopleList: action.peopleList }
    case SET_PEOPLE_BIRTH_YEAR:
      return { ...state, birthYears: action.birthYears }
    default:
      return state
  }
}
