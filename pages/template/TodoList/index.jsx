import React, { useState } from 'react'
import SquadButton from '../SquadButton'

import { Description, Menu, Table } from './styles'

export default function TodoLIst(props) {

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <div key={todo._id}>
        <tr >
          {!todo.done && <Description >{todo.description}</Description>}
          {todo.done && <Description markAsDone='markAsDone' >{todo.description}</Description>}
          <td>
            <SquadButton
              icon='check'
              hide={todo.done}
              onClick={() => props.handleMarkAsDone(todo)}
              />
            <SquadButton
              icon='undo'
              hide={!todo.done}
              onClick={() => props.handleMarkAsPending(todo)}
              />
            <SquadButton
              icon='trash'
              hide={!todo.done}
              onClick={() => props.handleRemove(todo)}
            />
          </td>
        </tr>
        <hr />
      </div>
    ))
  }
  return (
    <Table>
      <thead>
        <Menu>
          <th>Descrição</th>
          <th>Ações</th>
        </Menu>
        {/* <hr /> */}
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </Table>
  )
}