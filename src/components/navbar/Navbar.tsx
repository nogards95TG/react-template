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

type NavLogo = {
  imgName: string;
  desc?: string;
};

type NavSearchBar = {
  placeholder: string;
  buttonLabel: string;
};

type NavDropdownItem = {
  label: string;
  items: string[];
};

type NavBar = {
  title: string;
  logo?: NavLogo;
  searchBar?: NavSearchBar;
  links?: NavLinkItem[];
  dropdowns?: NavDropdownItem[];
};

const NavBar: FC<NavBar> = ({
  title,
  logo,
  searchBar,
  links = [],
  dropdowns = [],
}) => {
  const { placeholder, buttonLabel } = searchBar || {};
  const { desc, imgName } = logo || {};
  const buttonCta = () => {
    //Implement call to action here
    console.log("la cta funziona");
  };
  return (
    <Navbar bg="light" expand="md lg">
      <Container className="d-flex">
        
        {logo ? (
          <img
            className="nav-logo"
            src={require(`../../assets/${imgName}`)}
            alt={desc ? desc : ""}
          ></img>
        ) : null}

        <Navbar.Brand href="/">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav m-2">
          <Nav className="d-flex nav-container">
            {searchBar ? (
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder={placeholder}
                  className="me-2"
                  aria-label="Search"
                />
                <Button onClick={buttonCta} variant="outline-success">
                  {buttonLabel}
                </Button>
              </Form>
            ) : null}
            {links.map(({ label, href }, index) => (
              <Nav.Link key={index} href={href ? `${href}` : undefined}>
                {label}
              </Nav.Link>
            ))}
            {dropdowns.map(({ label, items = [] }, index) => (
              <NavDropdown key={index} title={label} id="basic-nav-dropdown">
                {items.map((dItem, index) => (
                  <NavDropdown.Item key={index} href={`action/${dItem}`}>
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
