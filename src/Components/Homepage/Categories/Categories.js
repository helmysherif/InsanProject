import React , {Component}from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import './Categories.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Photo1 from '../../../assets/imgs/img5.svg';
import Photo2 from '../../../assets/imgs/img7.svg';
import Photo3 from '../../../assets/imgs/img4.svg';
import {
    Container,
    Row,
    Col,
    Card,
    Button
} from 'react-bootstrap';
class Categories extends Component {
    state= {
        responsive:{
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    }
    render(){
        return (
            <Aux>
                <div className = "categories">
                    <Container>
                        <Row>
                            <Col lg = {12} sm = {12}>
                                <h3>Categories</h3>
                                <OwlCarousel
                                    className="owl-theme"
                                    loop
                                    margin={10}
                                    nav
                                    dots = {false}
                                    autoplay = {true}
                                    responsive = {this.state.responsive}
                                >
                                    <div className = "item">
                                        <Card style={{ width: '20rem' }}>
                                            <Card.Img variant="top" src={Photo1} alt = "" width = ""/>
                                            <Card.Body>
                                                <Card.Title>learning</Card.Title>
                                                <Card.Text>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error ducimus ab consequatur totam!
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className = "item">
                                        <Card style={{ width: '20rem' }}>
                                            <Card.Img variant="top" src={Photo2} alt = ""/>
                                            <Card.Body>
                                                <Card.Title>
                                                    group <strong>communication</strong>
                                                </Card.Title>
                                                <Card.Text>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error ducimus ab consequatur totam!
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className = "item">
                                        <Card style={{ width: '20rem' }}>
                                            <Card.Img variant="top" src={Photo3} alt = ""/>
                                            <Card.Body>
                                                <Card.Title>
                                                    request <strong>donation</strong>
                                                </Card.Title>
                                                <Card.Text>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error ducimus ab consequatur totam!
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className = "item">
                                        <Card style={{ width: '20rem' }}>
                                            <Card.Img variant="top" src={Photo1} alt = "" width = ""/>
                                            <Card.Body>
                                                <Card.Title>learning</Card.Title>
                                                <Card.Text>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error ducimus ab consequatur totam!
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className = "item">
                                        <Card style={{ width: '20rem' }}>
                                            <Card.Img variant="top" src={Photo2} alt = ""/>
                                            <Card.Body>
                                                <Card.Title>
                                                    group <strong>communication</strong>
                                                </Card.Title>
                                                <Card.Text>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error ducimus ab consequatur totam!
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className = "item">
                                        <Card style={{ width: '20rem' }}>
                                            <Card.Img variant="top" src={Photo3} alt = ""/>
                                            <Card.Body>
                                                <Card.Title>
                                                    request <strong>donation</strong>
                                                </Card.Title>
                                                <Card.Text>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error ducimus ab consequatur totam!
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </OwlCarousel>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Aux>
        )
    }
}
export default Categories;