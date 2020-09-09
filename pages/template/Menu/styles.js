import { FaCalendarCheck } from 'react-icons/fa';
import styled from 'styled-components'

export const Container = styled.div`
  width: 80vw;  
  background-color: black;
  border-radius: 6px;
`

export const Navbar = styled.div`
  height: 50px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  
`

export const NavbarBrand = styled.a`
  margin-left: 20px;
  color: #ddd;
  display: flex;
  justify-content: center;
`
export const HomeIcon = styled(FaCalendarCheck)`
  color: #ddd;
  margin-right: 10px; 
`

export const NavLink = styled.span`
  color: #ddd;
  margin-right: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;

`





















