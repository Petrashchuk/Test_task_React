import { SET_PEOPLE, SET_PEOPLE_BIRTH_YEAR,SET_CURRENT_PEOPLE_LIST } from './actionType';
import { urlPeopleByPage } from '../../constants'

export const fetchPeople = () => dispatch => {
  (async () => {
    const people = [];
    let isNextPage = true;
    let index = 1;
    while (isNextPage) {
      const response = await fetch(urlPeopleByPage + index).then(res => res.json());
      people.push(response.results)
      response.next ? index++ : isNextPage = false;
    }
    dispatch(fetchPeopleSuccess(people))
  })()

}

function fetchPeopleSuccess (peopleList) {
  return { type: SET_PEOPLE, peopleList }
}

export function setPeopleBirthYear (birthYears) {
  return { type: SET_PEOPLE_BIRTH_YEAR, birthYears }
}
export function setCurrentPeopleList (currentPeopleList) {
  return { type: SET_CURRENT_PEOPLE_LIST, currentPeopleList }
}