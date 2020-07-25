import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import './Video.css';
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
                            <div className = "content">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Aux>
    )
}
export default Gallery;