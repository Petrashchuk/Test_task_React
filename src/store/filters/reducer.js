import {
  SET_FILTER_BY_FILM,
  SET_FILTER_BY_SPECIE,
  SET_RANGE_YEAR_DATA
} from './actionType'

const initialState = {
  filterByFilm: { selected: false, filmId: 'None' },
  filterBySpecie: { selected: false, specieId: 'None' },
  rangeData: { maxYear: 0, currentRange: 0, minYear: 0 }
}

export function filtersReducer (state = initialState, action) {
  switch (action.type) {
    case SET_FILTER_BY_FILM:
      return { ...state, filterByFilm: action.filterByFilm }
    case SET_FILTER_BY_SPECIE:
      return { ...state, filterBySpecie: action.filterBySpecie }
    case SET_RANGE_YEAR_DATA:
      return { ...state, rangeData: action.rangeData }
    default:
      return state
  }
}
