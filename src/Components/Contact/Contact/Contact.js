import React , {useState}from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import './Contact.css';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
const Contact = () => {
    return (
        <Aux>
            <div className = "photos">
                <Container>
                    <Row>
                        <Col>
                            <ul className = "icon-list">
                                <li>
                                    <a href = "#"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href = "#"><i class="fab fa-skype"></i></a>
                                </li>
                                <li>
                                    <a href = "#"><i class="fab fa-linkedin-in"></i></a>
                                </li>
                                <li>
                                    <a href = "#"><i class="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Aux>
    )
}
export default Contact;