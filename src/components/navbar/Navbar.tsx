import React, { FC } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import "./Navbar.scss";
import { Button } from "react-bootstrap";

type NavLinkItem = {
  label: string;
  href?: string;
};

type NavSearchBar = {
  label: string;
  placeholder: string;
};

type NavDropdownItem = {
  label: string;
  items: string[];
};

type NavBar = {
  title: string;
  logo?: string;
  searchBar?: NavSearchBar;
  links?: NavLinkItem[];
  dropdowns?: NavDropdownItem[];
};

const NavBar: FC<NavBar> = ({
  title,
  links = [],
  dropdowns = [],
  searchBar,
}) => {
  return (
    <Navbar bg="light" expand="md lg">
      <Container className="d-flex">
        <Navbar.Brand href="/">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {searchBar ? (
            <Form className="d-flex bc-red">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          ) : null}
          <Nav className="d-flex nav-container">
            {links.map(({ label, href }) => (
              <Nav.Link href={href ? `${href}` : undefined}>{label}</Nav.Link>
            ))}
            {dropdowns.map(({ label, items = [] }) => (
              <NavDropdown title={label} id="basic-nav-dropdown">
                {items.map((dItem) => (
                  <NavDropdown.Item href={`action/${dItem}`}>
                    {dItem}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
