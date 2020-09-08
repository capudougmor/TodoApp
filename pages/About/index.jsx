import React from 'react'
import PageHeader from '../template/PageHeader'
import Menu from '../template/Menu'

import { Container, } from './styles'
import Layout from '../template/Layout'

export default function About(props) {
  return (
    <Layout>
      <Container>
        <PageHeader name='Sobre' small='Nós' />
      </Container>
    </Layout>

  )
}