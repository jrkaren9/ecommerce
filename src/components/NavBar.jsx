import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function NavBar()  {

    return (
    <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">VenChi Bake</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Salados</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Dulces</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Navideños</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Todos</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
}