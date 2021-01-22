import { SET_PEOPLE, SET_PEOPLE_BIRTH_YEAR,SET_CURRENT_PEOPLE_LIST } from './actionType'

const initialState = {
  peopleList: [],
  birthYears: [],
  currentPeopleList:[],
}

export function peopleReducer (state = initialState, action) {
  switch (action.type) {
    case SET_PEOPLE:
      return { ...state, peopleList: action.peopleList }
    case SET_PEOPLE_BIRTH_YEAR:
      return { ...state, birthYears: action.birthYears }
    case SET_CURRENT_PEOPLE_LIST:{
      return { ...state, currentPeopleList: action.currentPeopleList }
    }
    default:
      return state
  }
}
