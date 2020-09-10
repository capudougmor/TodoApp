import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'


import { Container, Form, ButtonSoma, ButtonIcon } from './styles'
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
        <SquadButton onClick={props.handleAdd}>
          asdfas 
        </SquadButton>
      </Form>
    </Container>
  )
}

