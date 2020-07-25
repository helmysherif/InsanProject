import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import './gallery.css';
import {NavLink} from 'react-router-dom';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
const Gallery = () => {
    return (
        <Aux>
            <div className = "gallery">
                <Container>
                    <Row>
                        <Col lg = {12} sm = {12}>
                            <div className = "gallery-img">
                                <img src = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt = ""/>
                                <ul>
                                    <li><NavLink to = "/news">overview</NavLink></li>
                                    <li style = {{textAlign:'center'}}><NavLink to = "/gallery">gallery</NavLink></li>
                                    <li style = {{textAlign:'center'}}><NavLink to = "/videos">videos</NavLink></li>
                                    <li className = "contact"><NavLink to = "/contact" >contact</NavLink></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Aux>
    )
}
export default Gallery;