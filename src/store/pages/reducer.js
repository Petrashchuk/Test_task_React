import { SET_CURRENT_PAGE } from './actionType'

const initialState = {
  currentPage: 1,
}

export function pagesReducer (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    default:
      return state
  }
}
