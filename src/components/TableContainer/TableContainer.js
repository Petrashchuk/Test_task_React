import React from 'react'
import { Table } from 'react-bootstrap'
import './TableContainer.css'


export const TableContainer = ({children }) => {
  return (
    <Table striped bordered hover>
      <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
      </tr>
      </thead>
      <tbody>
      {children }
      </tbody>
    </Table>
  )
}

