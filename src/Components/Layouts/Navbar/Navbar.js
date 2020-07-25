import React , {Component}from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import {
    Container,
    Row,
    Col,
    Navbar,
    Button,
    Nav,
    Form,
    FormControl
} from 'react-bootstrap';
import Photo from '../../../assets/imgs/img2.png';
//import './control.js';
class navbar extends Component  {
    render(){
        return (
            <Aux>
                <div className = "header">
                    <Container>
                        <Row>
                            <Col lg = {12} sm = {12}>
                            <Navbar expand="lg">
                                <Navbar.Brand href="#home">
                                    <img src = {Photo} alt = "" width = "80"/>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <NavLink exact to="/" className = "nav-link">Home</NavLink>
                                    <Nav.Link href="#home">about</Nav.Link>
                                    <Nav.Link href="#home">volunteers</Nav.Link>
                                    <Nav.Link href="#link">partners</Nav.Link>
                                    <NavLink to="/categories" className = "nav-link">categories</NavLink>
                                    <NavLink to="/news" className = "nav-link">news</NavLink>
                                    </Nav>
                                    <Form inline>
                                        <div className = 'input-group'>
                                            <FormControl type="text" placeholder="Search" className="mr-sm-2" placeholder = "Search Here..."/>
                                            <a href = "#">
                                                <i className="fas fa-search"></i>
                                            </a>
                                        </div>
                                        <Button variant="outline-success">Donation</Button>
                                    </Form>
                                    </Navbar.Collapse>
                                </Navbar>
                            </Col>
                        </Row>
                    </Container> 
                </div>
            </Aux>
        )
    }
}
export default navbar;