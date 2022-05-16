import React, { useContext, useEffect, useState } from 'react';
import { Navbar, Offcanvas, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import s from './ExtraPages.module.css';
import { ViewPortContext } from '../ViewPortContext';

export default function NavBar()  {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const db = getFirestore();
        let categoriesQuery = [];
       
        categoriesQuery = collection(db, 'categories');
        
        getDocs(categoriesQuery).then( 
            (snapshot) => {
                setCategories(
                    snapshot.docs.map(
                            (doc) => ({ id: doc.id, ...doc.data() })
                        )
                );
            }
        )
        .catch(error => console.log(error));
    
    }, []);

    const greeting = 'Disfruta de todos nuestros sabores y productos artesanales hechos con amor'
    const { width } = useContext(ViewPortContext);

    return (
    <>
        <Navbar expand="sm" className={s.NavBar}>
            <Container fluid>
                <Navbar.Brand as={Link} to="/">VenChi Bake</Navbar.Brand>
                { width <= 575 ? 
                    <><CartWidget />< OffCanvasNav categories={categories}/></> : 
                    <><NavOptions categories={categories} /><CartWidget /></>}
            </Container>
        </Navbar>
        <p className={'d-flex justify-content-center ' + s.welcome}>{greeting}</p>
    </>
    );
}

function OffCanvasNav({ categories }) {

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
                    <NavOptions categories={categories}/>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </>
    )
}

function NavOptions({ categories }) {

    return (
    <>
        <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
            {categories.map(category => 
                <NavDropdown.Item as={Link} to={'/category/' + category.category} key={category.id}>
                    {category.category}
                </NavDropdown.Item>
            )} 
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/">Todos</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    </>
    )
}

