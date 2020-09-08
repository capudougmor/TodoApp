import React from 'react'

import { Container, Title, Small  } from './styles'


export default function PageHeader (props) {

  return (
    <Container >
      <Title> {props.name}<Small>{props.small}</Small></Title>
      <hr/>
      
    </Container>
  )
}