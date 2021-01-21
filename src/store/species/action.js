import { SET_SPECIES} from './actionType';
import { urlSpecies } from '../../constants'

export const fetchSpecies = () => dispatch => {
  fetch(urlSpecies).then(res => res.json()).then(res => {
    dispatch(fetchSpeciesSuccess(res.results))
  })
}
function fetchSpeciesSuccess (species) {
  return { type: SET_SPECIES, species }
}
