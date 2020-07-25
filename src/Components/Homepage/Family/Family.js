import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import './Family.css';
import Photo1 from '../../../assets/imgs/img20.jpg';
import Photo2 from '../../../assets/imgs/img21.jpg';
import Photo3 from '../../../assets/imgs/img22.jpg';
import Photo4 from '../../../assets/imgs/img23.jpg';
import Photo5 from '../../../assets/imgs/img24.jpg';
import {
    Container,
    Row,
    Col,
    Carousel
} from 'react-bootstrap';
const Family = () => {
    return (
        <Aux>
            <div className = "family">
                <Container>
                    <Row>
                        <Col lg = {12} sm = {12}>
                            <h3>what our <strong>family say?</strong></h3>
                            <Carousel indicators = {false}>
                                <Carousel.Item>
                                    <img
                                    src = {Photo1}
                                    alt="First slide"
                                    width = "100"
                                    />
                                    <Carousel.Caption>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae veniam nobis veritatis quidem repellendus molestiae quia dignissimos libero.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    src = {Photo2}
                                    alt="Third slide"
                                    width = "100"
                                    />
                                    <Carousel.Caption>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae veniam nobis veritatis quidem repellendus molestiae quia dignissimos libero.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    src = {Photo3}
                                    alt="Third slide"
                                    width = "100"
                                    />
                                    <Carousel.Caption>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae veniam nobis veritatis quidem repellendus molestiae quia dignissimos libero.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    src = {Photo4}
                                    alt="Fourth slide"
                                    width = "100"
                                    />
                                    <Carousel.Caption>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae veniam nobis veritatis quidem repellendus molestiae quia dignissimos libero.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    src = {Photo5}
                                    alt="Fifth slide"
                                    width = "100"
                                    />
                                    <Carousel.Caption>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae veniam nobis veritatis quidem repellendus molestiae quia dignissimos libero.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Aux>
    )
}
export default Family;