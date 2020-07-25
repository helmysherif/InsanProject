import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import './Problems.css';
import {
    Container,
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap';
const Problems = () => {
    return (
        <Aux>
            <div className = "problems">
                <Container>
                    <Row>
                        <Col lg = {12} sm = {12}>
                            <p>facing problem?</p>
                            <h2>lets get in touch now</h2>
                            <div className = "contact">
                                <Form>
                                    <Row>
                                        <Col lg = {6} md = {6} sm = {12}>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>first name</Form.Label>
                                                <Form.Control type="text" placeholder="Robert Lee" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg = {6} md = {6} sm = {12}>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>last name</Form.Label>
                                                <Form.Control type="text" placeholder="Anderson" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Your Email address</Form.Label>
                                        <Form.Control type="email" placeholder="name@mail.com" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>which related?</Form.Label>
                                        <Form.Control as="select">
                                        <option selected>Select One</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>type your message</Form.Label>
                                        <textarea rows = "7" placeholder = "Your Message...."></textarea>
                                    </Form.Group>
                                    <div className = "text-center">
                                        <Button variant = "primary">Submit</Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Aux>
    )
}
export default Problems;