import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

function Header() {
  return(
    <Navbar bg="dark" variant="dark" style={{display: 'flex', justifyContent: 'space-between'}}>
      <Navbar.Brand href="#home">Prime Quizzes</Navbar.Brand>
      <Nav>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#signin">Sign In</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
}

export default Header;