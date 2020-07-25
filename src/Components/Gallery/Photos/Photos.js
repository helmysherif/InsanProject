import React , {useState}from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import './Photos.css';
import Photo from '../../../assets/imgs/img8.jpg';
import {
    Container,
    Row,
    Col,
    Modal,
    Button
} from 'react-bootstrap';
const Gallery = () => {
    const [show , setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Aux>
            <div className = "photos">
                <Container>
                    <div className = "content">
                        <Row>
                            <Col lg = {4} md = {4} sm = {12}>
                                <div className = "images">
                                    <img src = {Photo} alt = "" onClick={handleShow}/>
                                    <img src = {Photo} alt = "" height = "350" onClick={handleShow}/>
                                    <img src = {Photo} alt = "" onClick={handleShow}/>
                                </div>
                            </Col>
                            <Col lg = {4} md = {4} sm = {12}>
                                <div className = "images">
                                    <img src = {Photo} alt = "" height = "350" onClick={handleShow}/>
                                    <img src = {Photo} alt = "" onClick={handleShow}/>
                                    <img src = {Photo} alt = "" onClick={handleShow}/>
                                </div>
                            </Col>
                            <Col lg = {4} md = {4} sm = {12}>
                            <div className = "images">
                                    <img src = {Photo} alt = "" height = "370" onClick={handleShow}/>
                                    <img src = {Photo} alt = "" height = "370" onClick={handleShow}/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Body>
                            <img src = {Photo} style = {{width:'100%'}}/>
                        </Modal.Body>
                    </Modal>
                </Container>
            </div>
        </Aux>
    )
}
export default Gallery;