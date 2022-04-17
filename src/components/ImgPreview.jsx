import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import s from './Items/ItemDetail.module.css'

export default function ImgPreview({ item }) {
  return (
    <>
    <Container>
        <Row className="justify-content-center">
            <Col xs={true} className="d-flex flex-column">
                {item.all_imgs.map((small_img, index) => (
                    <React.Fragment key={small_img} >
                        <img src={small_img} alt={"Imagen del producto: " + item.name} className={s.PreviewImage + " align-self-end"}/> 
                    </React.Fragment>
                ))}
            </Col>
            
            <Col xs={8} md={4} className="align-self-start">
                <img src={item.img} alt={"Imagen del producto: " + item.name} className={s.ImageShown + " justify-content-center"}/>
            </Col>

            <Col xs={{ size:6, order: 'first' }} sm={{ order: 'last'}} md={4} >
                <h2>{item.name}</h2>
                <p>{item.text}</p>
            </Col>    
        </Row>  
    </Container>
    </>
  )
}
