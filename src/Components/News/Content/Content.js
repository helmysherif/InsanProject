import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import './Content.css';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
const Gallery = () => {
    return (
        <Aux>
            <div className = "gallery-info">
                <Container>
                    <Row>
                        <Col lg = {12} sm = {12}>
                            <div className = "gallery-content">
                                <div className = "name">
                                <h3>fancy name</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus architecto sunt quam similique consectetur voluptate molestias laudantium ad laborum. Unde soluta magni consequatur commodi accusamus optio, accusantium vero adipisci ex, recusandae quam id, aut obcaecati. Distinctio dicta temporibus ad explicabo magnam atque doloribus. Veniam praesentium obcaecati corrupti nihil sunt! Placeat, saepe odio facere sunt necessitatibus eos beatae nisi, fugit laudantium expedita nesciunt dolorem. Voluptas quibusdam alias molestias iusto saepe, quisquam unde accusantium odit corrupti totam soluta reprehenderit, facilis architecto quasi officia? Quae ipsa, et quasi odio in minus eum, cumque illum eligendi atque, sed animi magnam harum molestiae sapiente quibusdam!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id, doloremque nulla veniam ipsam quisquam nobis eius alias. Culpa placeat magnam blanditiis similique unde harum facilis doloribus, repellendus illum possimus pariatur excepturi corporis, tenetur minima ea neque maxime sunt consequuntur.</p>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13801.862978863091!2d31.66252085!3d30.138097600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1592580897769!5m2!1sar!2seg"  frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Aux>
    )
}
export default Gallery;