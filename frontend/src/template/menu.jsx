import React, { useState } from 'react'
import { FaCalendarCheck } from 'react-icons/fa';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

export default props => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">
          <FaCalendarCheck size={20} color="#ccc" /> TodoApp
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#/todos">Tarefas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#/about">Sobre</NavLink>
            </NavItem>            
          </Nav>
        </Collapse>
      </Navbar>
    </div>

  )
}