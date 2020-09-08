import React, { useState } from 'react'

import { Container, Form, ButtonSoma, ButtonIcon } from './styles'


export default function TodoForm(props) {

  return (
    <Container>
      <Form>
        <input
          placeholder='Adicione uma tarefa'
        />
        <ButtonSoma>
          <ButtonIcon />
        </ButtonSoma>
      </Form>
    </Container>
  )
}

