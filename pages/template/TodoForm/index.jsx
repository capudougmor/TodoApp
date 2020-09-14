import React from 'react'
import { FaPlus, FaUndo, FaTrash, FaCheck, FaSearch, FaTimes } from 'react-icons/fa'

import { Container, Form} from './styles'
import SquadButton from '../SquadButton'

export default function TodoForm(props) {

  return (
    <Container>
      <Form>
        <input
          placeholder='Adicione uma tarefa'
          onChange={props.handleChange}
          value={props.description}
        />
        <SquadButton onClick={props.handleAdd} icon='plus'/>
        <SquadButton onClick={props.handleSearch} icon='info'/>
        <SquadButton onClick={props.handleClear} icon='clear'/>
      </Form>
    </Container>
  )
}

