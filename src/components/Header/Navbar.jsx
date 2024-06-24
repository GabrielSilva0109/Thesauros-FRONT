import React, { useState } from "react"
import styled from "styled-components"
import { Link, useLocation } from 'react-router-dom'
import ThemeProvider from '../../ThemeProvider'
import ToggleButton from "../Buttons/Togle"

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.mode === 'dark' ? 'black' : 'white'};
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Title = styled.h2`
  background: rgb(253,29,29);
  background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,0,0,1) 46%, rgba(252,176,69,1) 100%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 1.5rem;
  font-weight: bold;
`

const Nav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled.li`
  margin: 0 10px;
`

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  transition: 0.5s;
  position: relative;
  display: inline-block;
  white-space: nowrap;
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};

  &:hover {
    background: rgb(253,29,29);
  background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,0,0,1) 46%, rgba(252,176,69,1) 100%);
    -webkit-background-clip: text;
    color: transparent;
  }

  &.active {
    background: rgb(253,29,29);
    background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,0,0,1) 46%, rgba(252,176,69,1) 100%);
       -webkit-background-clip: text;
    color: transparent;
  }
`

const BtnLogin = styled(Link)`
  background: rgb(253,29,29);
  background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,0,0,1) 46%, rgba(252,176,69,1) 100%);
  padding: 12px;
  text-decoration: none;
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
    font-weight: bold;
  border-radius: 8px;

  &:hover {
    background: darkred;
  }
`

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    background: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
    height: 3px;
    width: 25px;
    margin: 4px 0;
    transition: 0.4s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileNav = styled.ul`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  background-color: ${(props) =>
    props.theme.mode === 'dark' ? 'black' : 'white'};
  z-index: 999;
`;

const MobileNavItem = styled.li`
  margin: 10px 0;
  text-align: center;
`;

const MobileNavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};

  &:hover {
    color: darkred;
  }

  &.active {
    color: darkred;
  }
`;


const Navbar = () => {
  const location = useLocation()

  const isActiveLink = (pathname, currentPath) => {
    return pathname === currentPath ? 'active' : ''
  }

  return (
    <Container>
      <Title>Thesauros</Title>
      <Nav>
        <NavItem>
          <NavLink to="/" className={isActiveLink(location.pathname, '/')}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/mission" className={isActiveLink(location.pathname, '/misson')}>Mission</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/games" className={isActiveLink(location.pathname, '/games')}>Games</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" className={isActiveLink(location.pathname, '/contact')}>Contact</NavLink>
        </NavItem>
      </Nav>
      <ToggleButton />
      {/* <BtnLogin to="/login">
        Login
      </BtnLogin> */}
    </Container>
  )
}

export default Navbar