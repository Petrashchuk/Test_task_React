import React, { useEffect, useState } from 'react'
import { TableContainer } from '../TableContainer/TableContainer'
import InformationModal from '../InformationModal/InformationModal'
import { connect } from 'react-redux'

export function Main ({ peopleList, films, species, spaceships, currentPage }) {
  const [modalState, setModalState] = useState(false);
  const [currentPeopleList, setCurrentPeopleList] = useState([]);
  const [person, setPerson] = useState(null);
  const [personFilms, setPersonFilms] = useState([]);
  const [personSpecies, setPersonSpecies] = useState([]);
  const [personSpaceships, setPersonSpaceships] = useState([]);

  useEffect(() => {
    if (peopleList.length) {
      setCurrentPeopleList(peopleList[ currentPage - 1 ])
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
  const handleClose = () => {
    setModalState((prevState => !prevState));
  }
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
                            pagesReducer: { currentPage }
                          }) {
  return { peopleList, films, species, spaceships, currentPage }
}

export default connect(mapStateToProps, null)(Main)

