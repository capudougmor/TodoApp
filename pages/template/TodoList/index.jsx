import React, { useState } from 'react'
import SquadButton from '../SquadButton'

import { Menu, Table } from './styles'

export default function TodoLIst(props) {

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        <td>{ todo.description }</td>
        <td>
          <SquadButton 
            icon='trash' 
            onClick={() => props.handleRemove(todo)}
          />
        </td>
      </tr>
    ))
  }
  return (
    <Table>
      <thead>
        <Menu>
          <th>Descrição</th>
          <th>Ações</th>
        </Menu>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </Table>
  )
}