import React from 'react';
import { Form } from 'react-bootstrap'

export function Select ({ films, onChange, labelText,children }) {

  return (
    <Form.Group>
      <Form.Label>{labelText}</Form.Label>
      <Form.Control onChange={onChange} as="select">
        <option value={'None'}>None</option>
        {children}
      </Form.Control>
    </Form.Group>
  )
}