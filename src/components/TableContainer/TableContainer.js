import React from 'react'
import { Table } from 'react-bootstrap'
import './TableContainer.css'
import { Draggable } from 'react-beautiful-dnd'

export const TableContainer = ({ peopleList, handleCharacter }) => {
  return (
    <Table striped bordered hover>
      <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
      </tr>
      </thead>
      <tbody>
      {peopleList.map((item, index) => {
        return (
          <Draggable
            key={item.url}
            draggableId={item.url}
            index={index}
          >
            {(provided, snapshot) => {
              return (
                <tr ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps} className={'listRow'}
                    key={item.url}
                    onClick={() => handleCharacter(item)}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                </tr>
              )
            }}
          </Draggable>
        )
      })}
      </tbody>
    </Table>
  )
}