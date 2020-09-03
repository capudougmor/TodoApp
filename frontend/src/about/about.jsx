import React from 'react'
import PageHeader from '../template/pageHeader'
import Menu from '../template/menu'


export default props => {
  return (
    <div>
      <Menu />
      <PageHeader name='Sobre' small='Nós' />
    </div>
  )
}