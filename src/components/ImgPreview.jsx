import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import s from './Items/ItemDetail.module.css';

export default function ImgPreview({ item }) {
    const [imgURL, setImg] = useState(item.img);

    const handleClick = (img) => {
        setImg(img);
    }

    return (
        <>
        <Container fluid>
            <Row className="justify-content-center">

                <Col xs={{size:true, order: 'last'}} sm={{order: 'first'}} 
                    className={s.ImgList + " d-flex flex-sm-column justify-content-center justify-content-sm-start"}>

                    {item.all_imgs.map((small_img, index) => (
                        <React.Fragment key={small_img} >
                            <img src={small_img} alt={"Imagen del producto: " + item.name} className={s.PreviewImage + " align-self-end"} onClick={ () => {handleClick(small_img)} }/> 
                        </React.Fragment>
                    ))}

                </Col>
                
                <Col xs={12} sm={7} md={4} className="d-flex justify-content-center justify-content-sm-start">
                    <img src={imgURL} alt={"Imagen del producto: " + item.name} className={s.ImageShown + " justify-content-center"}/>
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
