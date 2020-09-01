import React from 'react';
import { Alert } from 'reactstrap';
import Todo from '../todo/todo'
import About from '../about/about'
import Menu from '../template/menu'


function App() {
  return (
    <div className="App">
      <Menu />
      <Todo />
      <About />
    </div>
  );
}

export default App;
