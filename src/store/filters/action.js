import { SET_FILTER_BY_SPECIE, SET_FILTER_BY_FILM, SET_RANGE_YEAR_DATA} from './actionType';

export function setFilterByFilm (filterByFilm) {
  return { type: SET_FILTER_BY_FILM, filterByFilm }
}

export function setFilterBySpecie (filterBySpecie) {
  return { type: SET_FILTER_BY_SPECIE, filterBySpecie }
}
export function setRangeYearData (rangeData ) {
  return { type: SET_RANGE_YEAR_DATA, rangeData }
}