import { SET_PEOPLE } from './type';
import { urlPeopleByPage } from '../../constants/index'

export const fetchPeople = pageNumber => dispatch => {
  const url = urlPeopleByPage + pageNumber;
  fetch(url).then(res => res.json()).then(res => {
    dispatch(fetchPeopleSuccess(res.results))
  })
}

function fetchPeopleSuccess (currentPeopleList) {
  return { type: SET_PEOPLE, currentPeopleList }
}
