import React, { useState } from 'react'
import SquadButton from '../SquadButton'

import { FaPlus } from 'react-icons/fa'


export default function TodoLIst(props) {

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        <td>{ todo.description }</td>
        <td>
          <SquadButton>
            <span>
              <FaPlus size={20} color="#a8a8b3"/>
            </span>              
          </SquadButton>
        </td>
      </tr>
    ))
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}