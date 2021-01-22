import { useDrag } from 'react-dnd'
import { ItemTypes } from '../utils/Items'
import React from 'react'

export const PersonItemWithDrag = ({ item, handleCharacter, index }) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.PERSON,
      person: item
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })
  return (
    <tr ref={drag}
        style={{ opacity: isDragging ? 0.5 : 1 }}
        className={'listRow'}
        onClick={() => handleCharacter(item)}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
    </tr>
  )
}
export const PersonItemNoDrag = ({ item, removePerson, index }) => {
  return (
    <tr className={'listRow'}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td onClick={()=>removePerson(item)}>&#10006;</td>
    </tr>
  )
}