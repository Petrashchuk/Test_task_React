import React, { useCallback, useState } from 'react'
import { TableContainer } from './TableContainer'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../utils/Items'
import { PersonItemNoDrag } from './ListElement'

export const BoxTarget = () => {
  const [favoritesList, setFavoritesList] = useState([])

  const addToFavorites = ({ person }, monitor) => {
    if (!isPersonAddedAlready(person)) {
      const copyFavoritesList = [...favoritesList]
      copyFavoritesList.push(person)
      setFavoritesList(copyFavoritesList)
    }
  }

  const isPersonAddedAlready = (person) => {
    return !(favoritesList.includes(person)) ? false : true
  }
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.PERSON,
    drop: addToFavorites,
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    })
  })

  const removePerson = useCallback((person) => {
    const updateFavoritesList = favoritesList.filter(p => p !== person)
    setFavoritesList(updateFavoritesList)
  }, [favoritesList])

  return (
    <div className={'container_favorites'}>
      <h4>Add Favorites:</h4>
      <div ref={drop}
           style={{ backgroundColor: isOver ? 'lightgreen' : 'lightgrey' }}
           className={"container_favorites-block"}>
        <TableContainer peopleList={favoritesList}
        >
          {favoritesList.map((person, index) => {
            return (
              <PersonItemNoDrag key={person.url} item={person} index={index}
                                removePerson={removePerson} />
            )
          })}
        </TableContainer>
      </div>
    </div>
  )
}