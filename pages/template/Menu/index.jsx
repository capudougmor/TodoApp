import React, { useState } from 'react'
import Link from 'next/link'

import { Container, Navbar, NavbarBrand, NavLink, HomeIcon } from './styles'

export default function Menu(props) {

  return (
    <Container>
      <Navbar>
        <NavbarBrand >
          <Link href="/">
            <NavLink><HomeIcon />TodoApp</NavLink>
          </Link>
        </NavbarBrand>
        <Link href='Todo' >
          <NavLink>Tarefas</NavLink>
        </Link>

        <Link href='About' >
          <NavLink >Sobre</NavLink>
        </Link>
      </Navbar>
    </Container>

  )
}