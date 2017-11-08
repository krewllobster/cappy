import React, { Component } from 'react'
import { Image, Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class Header extends Component {

  render () {
    return (
      <Navbar staticTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Image 
              src='http://www.estateprints.com/media/catalog/category/ColdwellBanker-01.png'
              alt='Coldwell Banker Logo'
            />
          </Navbar.Brand>
        </Navbar.Header>
        <Nav >
          <LinkContainer exact to='/'>
            <NavItem>Home</NavItem>
          </LinkContainer>
          <LinkContainer to='/about'>
            <NavItem>About</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    )
  }
}

export default Header
