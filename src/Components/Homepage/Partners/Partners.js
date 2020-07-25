import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import './Partners.css';
import Photo from '../../../assets/imgs/earth-2.0.svg';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
const Partners = () => {
    return (
        <Aux>
            <div className = "partners">
                <Container>
                    <Row>
                        <Col lg = {12} sm = {12}>
                            <h2>our partners</h2>
                            <p className = "text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, corrupti, suscipit<br/> voluptas atque veniam enim sint, quaerat reprehenderit ipsa vero est eaque.</p>
                            <Row>
                                <Col lg = {4} md = {4} sm = {12}>
                                    <div className = "partner">
                                        <img src = {Photo} alt = "" width = "150"/>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, officiis neque.</p>
                                        <a href = "#">learn more</a>
                                    </div>
                                </Col>
                                <Col lg = {4} md = {4} sm = {12}>
                                <div className = "partner" style = {{marginTop:'-50px'}}>
                                        <img src = {Photo} alt = "" width = "150"/>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, officiis neque.</p>
                                        <a href = "#">learn more</a>
                                    </div>
                                </Col>
                                <Col lg = {4} md = {4} sm = {12}>
                                <div className = "partner">
                                        <img src = {Photo} alt = "" width = "150"/>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, officiis neque.</p>
                                        <a href = "#">learn more</a>
                                    </div>
                                </Col>
                            </Row>
                            <Row style = {{marginTop:'30px'}}>
                                <Col lg = {4} md = {4} sm = {12}>
                                    <div className = "partner">
                                        <img src = {Photo} alt = "" width = "150"/>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, officiis neque.</p>
                                        <a href = "#">learn more</a>
                                    </div>
                                </Col>
                                <Col lg = {4} md = {4} sm = {12}>
                                <div className = "partner" style = {{marginTop:'-50px'}}>
                                        <img src = {Photo} alt = "" width = "150"/>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, officiis neque.</p>
                                        <a href = "#">learn more</a>
                                    </div>
                                </Col>
                                <Col lg = {4} md = {4} sm = {12}>
                                <div className = "partner">
                                        <img src = {Photo} alt = "" width = "150"/>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, officiis neque.</p>
                                        <a href = "#">learn more</a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Aux>
    )
}
export default Partners;