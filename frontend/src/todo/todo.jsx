import React from 'react';
import PageHeader from '../template/pageHeader';
import Menu from '../template/menu'
import TodoForm from './todoForm';
import TodoList from './todoList';
import { useState } from 'react';


function Todo() {

  const [description, setDescription] = useState('')

  function handleChange(e) {
    setDescription(e.target.value)
  }

  function handleAdd() {
    console.log('add');
  }

  return (
    <div>
      <Menu />
      <PageHeader name='Tarefas' small='Cadastro' ></PageHeader>
      <TodoForm 
        handleAdd={handleAdd}
        description={description}
        handleChange={handleChange}
      />
      <TodoList />
    </div>
  );
}

export default Todo;