import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Photo from '../../../assets/imgs/img2.png';
import './Footer.css';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
const Footer = () => {
    return (
        <Aux>
            <div className = "footer">
                <Container>
                    <Row>
                        <Col lg = {12} sm = {12}>
                            <div className = "footer-content">
                                <div className = "text-center">
                                    <img src = {Photo} alt = "" width = "100"/>
                                </div>
                                <Row>
                                    <Col lg = {3} md = {6} sm = {12}>
                                        <div className = "contact">
                                            <h4>contact us</h4>
                                            <ul>
                                                <li>
                                                    <i class="fas fa-mobile-alt"></i>
                                                    <span>+(290) 520-7927</span>
                                                </li>
                                                <li>
                                                    <i class="fas fa-mobile-alt"></i>
                                                    <span>Egypt</span>
                                                </li>
                                                <li>
                                                    <i class="far fa-envelope"></i>
                                                    <span>congar.com</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col lg = {3} md = {6} sm = {12}>
                                    <div className = "contact">
                                            <h4>our company</h4>
                                            <ul>
                                                <li>
                                                    <a href = "#">about</a>
                                                </li>
                                                <li>
                                                    <a href = "#">product</a>
                                                </li>
                                                <li>
                                                    <a href = "#">portfolio</a>
                                                </li>
                                                <li>
                                                    <a href = "#">career</a>
                                                </li>
                                                <li>
                                                    <a href = "#">blog</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col lg = {3} md = {6} sm = {12}>
                                    <div className = "contact">
                                            <h4>social contact</h4>
                                            <ul>
                                                <li>
                                                    <a href = "#">facebook</a>
                                                </li>
                                                <li>
                                                    <a href = "#">linked in</a>
                                                </li>
                                                <li>
                                                    <a href = "#">youtube</a>
                                                </li>
                                                <li>
                                                    <a href = "#">vimeo</a>
                                                </li>
                                                <li>
                                                    <a href = "#">skype</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col lg = {3} md = {6} sm = {12}>
                                        <div className = "contact">
                                            <h4>address</h4>
                                            <p>internet systems consortium, inc 950 charter street redwood city , CA USA.</p>
                                            <h4>follow us</h4>
                                            <div className = "icons">
                                                <a href = "#">
                                                    <i class="fab fa-facebook-f"></i>
                                                </a>
                                                <a href = "#">
                                                    <i class="fab fa-skype"></i>
                                                </a>
                                                <a href = "#">
                                                    <i class="fab fa-linkedin-in"></i>
                                                </a>
                                                <a href = "#">
                                                    <i class="fab fa-instagram"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Aux>
    )
}
export default Footer;