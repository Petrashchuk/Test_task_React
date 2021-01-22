import React, { useEffect, useState } from 'react'
import { TableContainer } from '../components/TableContainer/TableContainer'
import InformationModal from '../components/InformationModal/InformationModal'
import { connect, useDispatch } from 'react-redux'
import { setPeopleBirthYear } from '../store/people/action';

export function Main ({
                        peopleList,
                        films,
                        species,
                        spaceships,
                        currentPage,
                        filterByFilm,
                        filterBySpecie,
                        rangeData
                      }) {
  const [modalState, setModalState] = useState(false);
  const [person, setPerson] = useState(null);
  const [personFilms, setPersonFilms] = useState([]);
  const [personSpecies, setPersonSpecies] = useState([]);
  const [personSpaceships, setPersonSpaceships] = useState([]);
  const [currentPeopleList, setCurrentPeopleList] = useState([])
  const dispatch = useDispatch();
  const onFilter = (currentList) => {
    if (filterBySpecie.selected) {
      currentList = currentList.filter(person => person[ 'species' ].includes(filterBySpecie.specieId));
    }
    if (filterByFilm.selected) {
      currentList = currentList.filter(person => person[ 'films' ].includes(filterByFilm.filmId));
    }
    return currentList.filter(person => (parseFloat(person.birth_year) >= rangeData.currentRange || person.birth_year === 'unknown'))
  }

  useEffect(() => {
    if (peopleList.length) {
      const currentList = [...peopleList[ currentPage - 1 ]];
      setCurrentPeopleList(onFilter(currentList));
    }
  }, [rangeData, filterByFilm, filterBySpecie]);

  useEffect(() => {
    if (peopleList.length) {
      const correctBirthYears = [...peopleList[ currentPage - 1 ]]
      .filter(p => !(p.birth_year.includes('unknown')))
      .map(p => p.birth_year);
      dispatch(setPeopleBirthYear(correctBirthYears))
    }
  }, [currentPage, peopleList])

  const handleCharacter = (item) => {
    const userFilms = films.filter(film => film.characters.includes(item.url));
    const userSpecies = species.filter(specie => item.species.includes(specie.url));
    const userSpaceships = spaceships.filter(spaceship => item.starships.includes(spaceship.url))
    setPersonSpaceships(userSpaceships)
    setPersonSpecies(userSpecies);
    setPersonFilms(userFilms)
    setPerson(item)
    setModalState(true);
  }

  const handleClose = () => setModalState((prevState => !prevState));

  return (
    <div>
      {currentPeopleList.length && <>
        <TableContainer handleCharacter={handleCharacter}
                        peopleList={currentPeopleList} />

      </>}

      <InformationModal personSpaceships={personSpaceships}
                        personSpecies={personSpecies}
                        personFilms={personFilms}
                        person={person}
                        open={modalState}
                        handleClose={handleClose} />
    </div>

  )
}

function mapStateToProps ({
                            peopleReducer: { peopleList },
                            filmsReducer: { films },
                            speciesReducer: { species },
                            spaceshipsReducer: { spaceships },
                            pagesReducer: { currentPage },
                            filtersReducer: {
                              filterByFilm,
                              filterBySpecie,
                              rangeData
                            }
                          }) {
  return {
    peopleList,
    films,
    species,
    spaceships,
    currentPage,
    filterByFilm,
    filterBySpecie,
    rangeData
  }
}

export default connect(mapStateToProps, null)(Main)

