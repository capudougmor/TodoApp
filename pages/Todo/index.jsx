import React, { useState } from 'react';

import { Container, } from './styles'

import PageHeader from '../template/PageHeader';
import Layout from '../template/Layout';
import TodoForm from '../template/TodoForm';
import TodoLIst from '../template/TodoList';


function Todo() {

  const [description, setDescription] = useState('')

  function handleChange(e) {
    setDescription(e.target.value)
  }

  function handleAdd() {
    console.log('add');
  }

  return (
    <Layout>
      <Container>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm />
        <TodoLIst />
      </Container>
    </Layout>

  );
}

export default Todo;