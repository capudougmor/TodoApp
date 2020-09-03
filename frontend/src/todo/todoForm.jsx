import React from 'react'
import { Button, Form, FormGroup, Label, Input, Row, FormText, Col, InputGroup, InputGroupAddon } from 'reactstrap';
import Grid from '../template/grid'

export default props => {
  return (
    <form>
      <InputGroup >
        <Grid cols='12 6 4' ></Grid>
        <Input 
          className="mb-2 mx-sm-2 mb-sm-0" 
          placeholder='Adicione uma tarefa'
          value={props.description}
          onChange={props.handleChange}
        />
        <Button onClick={props.handleAdd} className="mb-2 mx-sm-2 mb-sm-0" color="info">+</Button>
        <Button className="mb-2 mx-sm-2 mb-sm-0" color="info">+</Button>
      </InputGroup>
    </form>

  )
}