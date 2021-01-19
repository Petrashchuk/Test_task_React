const initialState = {
  currentPeopleList: []
}

export function peopleReducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_PEOPLE':
      return { ...state, currentPeopleList: action.currentPeopleList }
    case 'DECREMENT':
      return state.count - 1
    default:
      return state
  }
}
