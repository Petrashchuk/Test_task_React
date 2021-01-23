import React,{memo,useMemo} from 'react'
import { Modal } from 'react-bootstrap'


export default memo(function ({personFilms,person, open, handleClose,personSpecies,personSpaceships }) {
  const IsSelectedPerson = !!person
  const moviesTitle = useMemo(()=>personFilms.map(movie=>movie.title),[personFilms]).join(', ');
  const speciesName = useMemo(()=>personSpecies.map(specie=>specie.name),[personSpecies]).join(', ');
  const spaceshipsName = useMemo(()=>personSpaceships.map(spaceship=>spaceship.name),[personSpaceships]).join(', ');
  return (
    <>
      {IsSelectedPerson && <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>More Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Name: {person.name}</p>
          <p>Species: {speciesName}</p>
          <p>Movies: {moviesTitle}</p>
          <p>Spaceships: {spaceshipsName} </p>
        </Modal.Body>
      </Modal>}
    </>
  )
})
