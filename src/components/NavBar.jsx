import React from 'react';
import { Navbar, Offcanvas, Container, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';

export default function NavBar()  {

    const { width } = useViewport();

    return (
    <>
        <Navbar expand="sm" className="Nav-Bar">
            <Container fluid>
                <Navbar.Brand href="#home">VenChi Bake</Navbar.Brand>
                { width <= 575 ? 
                    <><CartWidget />< OffCanvasNav /></> : 
                    <><NavOptions /><CartWidget /></>}
            </Container>
        </Navbar>
    </>
    );
}

function OffCanvasNav() {

    return (
        <>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">VenChi Bake</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <NavOptions />
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </>
    )
}

function NavOptions() {

    return (
    <>
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
    </>
    )
}

const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    // Add a second state variable "height" and default it to the current window height
    const [height, setHeight] = React.useState(window.innerHeight);
  
    React.useEffect(() => {
      const handleWindowResize = () => {
        setWidth(window.innerWidth);
        // Set the height in state as well as the width
        setHeight(window.innerHeight);
      }
  
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    // Return both the height and width
    return { width, height };
  }