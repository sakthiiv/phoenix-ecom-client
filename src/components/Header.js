import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/admin">PHOENIX</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <NavItem eventKey={1} href="/category-list">
        Categories
      </NavItem>
      <NavItem eventKey={2} href="/product-list">
        Products
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;
