import React from 'react'
import { Jumbotron } from 'reactstrap';

export default props => {
  return (
    <Jumbotron color="light" >
      <h3 className="display-4" > {props.name}<small className="lead">  {props.small} </small></h3>
      <hr className="my-2" />
      
    </Jumbotron>
  )
}