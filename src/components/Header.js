import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";

function Header() {
  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }
  return(
    <Navbar bg="dark" variant="dark" style={{display: 'flex', justifyContent: 'space-between'}}>
      <Navbar.Brand href="#home">Prime Quizzes</Navbar.Brand>
      <Nav>
        <Nav.Link><Link to="/">Home</Link></Nav.Link>
        <Nav.Link><Link to="/signup">Sign Up</Link></Nav.Link>
        <Nav.Link><Link to="/signin">Sign In</Link></Nav.Link>
        <Nav.Link><Link onClick={doSignOut} to="/">Sign Out</Link></Nav.Link>
        <Nav.Link><Link to="/new">Create Quiz</Link></Nav.Link>
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