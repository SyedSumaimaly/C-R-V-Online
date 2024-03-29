import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import CustomCards from './CustomCards';

function HeroSection() {
    return (
        <Container fluid>
            <Row className='HeroSecRow'>
                <Col sm={12} sx={10} className='HeroSubSection'>
                    <p>Account Balance</p>
                    <p>800.00PKR</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CustomCards />
                </Col>
            </Row>
        </Container>
    )
}

export default HeroSection