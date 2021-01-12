import React from "react";
import { LinkContainer } from 'react-router-bootstrap'


import { Navbar, Nav, Container} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>StarShop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <LinkContainer to="/cart">
            <Nav.Link><FontAwesomeIcon icon="shopping-cart" /></Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
          <Nav.Link>Sign In</Nav.Link>
          </LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
