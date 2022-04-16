import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Item from './Item';
import s from './ItemList.module.css';

export default  function ItemList({ items }) {
    
    return (
        <>
        <Container fluid id={s.ItemList}>
            <Row className="justify-content-center">
                {items.map(item => <Item key = {item.id} item = {item} />)}
            </Row>
        </Container>
        </>
    );
}