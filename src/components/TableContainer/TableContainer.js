import React from 'react';
import { Table } from 'react-bootstrap'
import './TableContainer.css';

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
          <tr className={'listRow'} key={item.url}
              onClick={() => handleCharacter(item)}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
          </tr>
        )
      })}
      </tbody>
    </Table>
  )
}