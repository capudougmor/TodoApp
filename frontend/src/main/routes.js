import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
  <BrowserRouter >
    <Route path='/' exact component={Todo} />
    <Route path='/about' component={About} />
  </BrowserRouter>
)