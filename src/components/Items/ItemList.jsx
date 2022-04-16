import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Item from './Item';
import s from './ItemList.module.css';

export default  function ItemList({ items }) {
    
    return (
        <>
        <Container fluid id={s.ItemList}>
            <Row className="justify-content-evenly">
                {items.map(item => <Item key = {item.id} item = {item} />)}
            </Row>
        </Container>
        </>
    );
}