import { SET_SPACESHIPS } from './actionType';
import { urlSpaceships } from '../../constants'

export const fetchSpaceships = () => dispatch => {
  (async () => {
    const spaceships = [];
    let isNextPage = true;
    let index = 1;
    while (isNextPage) {
      const response = await fetch(urlSpaceships + index).then(res => res.json());
      spaceships.push(response.results)
      response.next ? index++ : isNextPage = false;
    }
    dispatch(fetchSpaceshipsSuccess(spaceships.flat()))
  })()

}

function fetchSpaceshipsSuccess (spaceships) {
  return { type: SET_SPACESHIPS, spaceships }
}
