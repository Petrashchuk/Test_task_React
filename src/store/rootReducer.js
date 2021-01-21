import { combineReducers } from 'redux'
import { peopleReducer } from './people/reducer';
import { filmsReducer } from './films/reducer';
import { speciesReducer } from './species/reducer';
import { spaceshipsReducer } from './spaceships/reducer';
import { pagesReducer } from './pages/reducer';
import { filtersReducer } from './filters/reducer';

export default combineReducers({
  peopleReducer: peopleReducer,
  spaceshipsReducer: spaceshipsReducer,
  speciesReducer: speciesReducer,
  filmsReducer: filmsReducer,
  pagesReducer: pagesReducer,
  filtersReducer: filtersReducer
  // planetsReducer: {},
  // vehiclesReducer: {},
})
