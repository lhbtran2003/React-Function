import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../style/navbar.css'
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
  InputGroup
} from "react-bootstrap";
import { SearchHeart } from "react-bootstrap-icons";

export const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="p-0">
        <Container className="text-white">
          <div className="col-12 d-flex justify-content-center fst-italic">
            <p className="mr-1 m-0 text-white">
              Summer Sale For All Swim Suit And Free Express Delivery
            </p>
            <a href="" className="ms-2 text-white">
              Shop Now
            </a>
          </div>
        </Container>
        <Nav className="ms-auto">
          <NavDropdown
            title="Dropdown"
            id="basic-nav-dropdown"
            className="text-white me-3 custom-dropdown ms-auto"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Something else
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
      <Navbar bg="white" variant="light" className="p-0">
        <Container className="p-0">
          <Navbar.Brand href="#home" className="fw-bold fs-2">
            Exclusive
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#home" className="ms-4">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="ms-4">
              Contact
            </Nav.Link>
            <Nav.Link href="#pricing" className="ms-4">
              About
            </Nav.Link>
            <Nav.Link href="#signup" className="ms-4">
              Sign Up
            </Nav.Link>
          </Nav>
          <Form id="form-1">
            <InputGroup className="border border-1 rounded-2 input-group">
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="form-control"
                className="border border-0"
              />
              <Button className="form-control-sm border-0">
                <SearchHeart className="" />
              </Button>
            </InputGroup>
          </Form>
        </Container>
      </Navbar>
      <hr className="m-0" />
    </div>
  );
};
