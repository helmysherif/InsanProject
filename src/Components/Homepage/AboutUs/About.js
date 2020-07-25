import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Photo from '../../../assets/imgs/Group 2656.svg';
import Photo2 from '../../../assets/imgs/img4.svg';
import './About.css';
import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap';
const AboutUs = () => {
    return (
        <Aux>
            <div className = "about-us">
                <Container>
                    <Row>
                        <Col lg = {6} md = {6} sm = {12}>
                            <h3>the cycle</h3>
                            <h2>about our work</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat vel culpa consequuntur. Nesciunt, libero cupiditate possimus consequuntur quisquam id deleniti omnis illum minus, porro, ipsam consectetur iste odit ut! Reprehenderit architecto natus vel eum fuga rerum dicta eveniet nihil.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum a inventore, obcaecati cumque aliquam similique earum aut quam blanditiis vel doloremque temporibus voluptatum. Hic, odit?</p>
                            <Button variant="primary">know more</Button>
                        </Col>
                        <Col lg = {6} md = {6} sm = {12}>
                            <img src = {Photo} alt = ""/>
                        </Col>
                    </Row>
                    <Row style = {{marginTop:'50px'}}>
                        <Col lg = {6} md = {6} sm = {12}>
                            <img src = {Photo2} alt = ""/>
                        </Col>
                        <Col lg = {6} md = {6} sm = {12}>
                            <h3>we are here to</h3>
                            <h2>always help you</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat vel culpa consequuntur. Nesciunt, libero cupiditate possimus consequuntur quisquam id deleniti omnis illum minus, porro, ipsam consectetur iste odit ut! Reprehenderit architecto natus vel eum fuga rerum dicta eveniet nihil.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum a inventore, obcaecati cumque aliquam similique earum aut quam blanditiis vel doloremque temporibus voluptatum. Hic, odit?</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Aux>
    )
}
export default AboutUs;