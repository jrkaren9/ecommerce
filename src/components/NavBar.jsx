import React from 'react';
import { Navbar, Offcanvas, Container, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';

export default function NavBar()  {

    const greeting = 'Disfruta de todos nuestros sabores y productos artesanales hechos con amor'
    const { width } = useViewport();

    return (
    <>
        <Navbar expand="sm" className="Nav-Bar">
            <Container fluid>
                <Navbar.Brand>VenChi Bake</Navbar.Brand>
                { width <= 575 ? 
                    <><CartWidget />< OffCanvasNav /></> : 
                    <><NavOptions /><CartWidget /></>}
            </Container>
        </Navbar>
        <p className='d-flex justify-content-center welcome'>{greeting}</p>
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
            <Nav.Link href="/">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="/category/Salado">Salados</NavDropdown.Item>
                <NavDropdown.Item href="/category/Dulce">Dulces</NavDropdown.Item>
                <NavDropdown.Item href="/category/Navideño">Navideños</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Todos</NavDropdown.Item>
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