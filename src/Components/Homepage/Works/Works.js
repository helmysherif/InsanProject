import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Photo from '../../../assets/imgs/img3.svg';
import './Works.css';
import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap';
const Works = () => {
    return (
        <Aux>
            <div className = "works">
                <Container>
                    <Row>
                        <Col lg = {12} sm = {12}>
                            <div className = "title">
                                <h1>we help our family<br/>to life like us</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis aliquid itaque praesentium<br/> maiores quibusdam corporis ex rem? Fugiat officia libero repellendus!</p>
                                <div className = "buttons">
                                    <Button variant="primary" className = "work">our works</Button>
                                    <Button variant="primary" className = "more">know more</Button>
                                </div>
                                <img src = {Photo} alt = ""/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Aux>
    )
}
export default Works;