import React, { useState, Component } from 'react';

import { Container, } from './styles'

import PageHeader from '../template/PageHeader';
import Layout from '../template/Layout';
import TodoForm from '../template/TodoForm';
import TodoLIst from '../template/TodoList';

export default class Todo extends Component {

  constructor(props) {
    super(props)
    this.state = { description: '', list: []}

    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }
  handleChange(e) {
    this.setState({...this.state, description: e.target.value})
  }

  handleAdd() {
    console.log(this.state.description)
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
          <TodoLIst />
        </Container>
      </Layout>
  
    );
  }
  
}
