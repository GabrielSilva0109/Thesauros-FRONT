import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';
import ThemeProvider from '../../ThemeProvider'

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
  background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
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
    background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
    -webkit-background-clip: text;
    color: transparent;
  }

  &.active {
    color: #1e30f3;
  }
`

const BtnLogin = styled(Link)`
  background: red;
  padding: 12px;
  text-decoration: none;
  color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};

  &:hover {
    background: darkred;
  }
`

const Navbar = () => {
  const location = useLocation()

  const isActiveLink = (pathname, currentPath) => {
    return pathname === currentPath ? 'active' : '';
  }

  return (
    <Container>
      <Title>Thesauros</Title>
      <Nav>
        <NavItem>
          <NavLink to="/" className={isActiveLink(location.pathname, '/')}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/home" className={isActiveLink(location.pathname, '/home')}>Mission</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/games" className={isActiveLink(location.pathname, '/games')}>Games</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" className={isActiveLink(location.pathname, '/contact')}>Contact</NavLink>
        </NavItem>
      </Nav>
      <BtnLogin to="/login">
        Login
      </BtnLogin>
    </Container>
  )
}

export default Navbar