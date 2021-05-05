import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import firebase from "firebase/app";

function Header() {
  const history = useHistory();
  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
      history.push('/');
    }).catch(function(error) {
      console.log(error.message);
    });
  }
  return(
    <Navbar bg="dark" variant="dark" style={{display: 'flex', justifyContent: 'space-between'}}>
      <Navbar.Brand href="#home">Prime Quizzes</Navbar.Brand>
      <Nav>
        <Nav.Link><Link to="/">Home</Link></Nav.Link>
        <Nav.Link><Link to="/new">Create Quiz</Link></Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <Nav.Link><Link to="/signup">Sign Up</Link></Nav.Link>
          <Nav.Link><Link to="/signin">Sign In</Link></Nav.Link>
          <Nav.Link><Link onClick={doSignOut} to="/">Sign Out</Link></Nav.Link>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
}

export default Header;