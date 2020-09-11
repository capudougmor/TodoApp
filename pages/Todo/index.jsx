import React, { useState, Component } from 'react'
import api from '../api'

import { Container, } from './styles'

import PageHeader from '../template/PageHeader';
import Layout from '../template/Layout';
import TodoForm from '../template/TodoForm';
import TodoLIst from '../template/TodoList';

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

  constructor(props) {
    super(props)
    this.state = { description: '', list: []}

    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleRemove = this.handleRemove.bind(this)

    this.refresh()
  }

  refresh() {
    api.get('todos?sort=-createdAt')
      .then((resp) => this.setState({...this.state, description: '', list: resp.data}));
  }

  handleChange(e) {
    this.setState({...this.state, description: e.target.value})
  }

  handleAdd() {
    const description = this.state.description
    api.post('todos', { description })
      .then(resp => this.refresh())
  }

  handleRemove(todo) {
    api.delete(`todos/${todo._id}`)
      .then(resp => this.refresh())
  }

  render() {
    return (
      <Layout>
        <Container>
          <PageHeader name='Tarefas' small='Cadastro' />
          <TodoForm 
            description={this.state.description}
            handleChange={this.handleChange}
            handleAdd={this.handleAdd}
            />
          <TodoLIst
            list={this.state.list} 
            handleRemove={this.handleRemove}          
          
          />
        </Container>
      </Layout>
  
    );
  }
  
}
