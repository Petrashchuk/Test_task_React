import { SET_FILMS, } from './actionType';
import { urlFilms } from '../../constants'

export const fetchFilms = () => dispatch => {
  fetch(urlFilms).then(res => res.json()).then(res => {
    dispatch(fetchFilmsSuccess(res.results))
  })
}
function fetchFilmsSuccess (films) {
  return { type: SET_FILMS, films }
}