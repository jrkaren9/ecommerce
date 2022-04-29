import React, { useState } from 'react'
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
        <Row className="justify-content-start">

            <Col xs={{order: 'last'}} sm={{span: 3, order: 2}} md={{order: 'first'}}
                className={s.ImgList + " d-flex flex-sm-column justify-content-center justify-content-sm-start"}>

                {item.all_imgs && item.all_imgs.map((small_img, index) => (
                    <React.Fragment key={small_img} >
                        <img src={small_img} alt={"Imagen del producto: " + item.name} className={s.PreviewImage + " align-self-end"} onClick={ () => {handleClick(small_img)} }/> 
                    </React.Fragment>
                ))}

            </Col>
            
            <Col xs={12} sm={{span: true, order:3}} md={4} className="d-flex justify-content-center justify-content-sm-start">
                <img src={imgURL} alt={"Imagen del producto: " + item.name} className={s.ImageShown + " justify-content-center"}/>
            </Col>

            <Col xs={{span:12, order: 'first' }} sm={{span:12}} md={{span:4, order: 'last'}} >
                <h2>{item.name}</h2>
                <p className={s.ItemText}>{item.text}</p>
            </Col>    

        </Row>  
        </>
    )
}
