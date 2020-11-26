import React, { Component } from 'react';
import { Navbar, Nav, Button, NavDropdown, ButtonGroup } from 'react-bootstrap';

class NavBar extends Component {
    state = {  }


    render() { 
        return (
<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
    <ButtonGroup aria-label="Basic example">
      <Button onClick={() => {this.props.fetchProducts("jackets")}} variant="secondary">Jackets</Button>
      <Button onClick={() => {this.props.fetchProducts("shirts")}} variant="secondary">Shirts</Button>
      <Button onClick={() => {this.props.fetchProducts("accessories")}} variant="secondary">Accessories</Button>
    </ButtonGroup>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
    }
}
 
export default NavBar;