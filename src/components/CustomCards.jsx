import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MoneyCollectOutlined } from '@ant-design/icons';
import './CardStyle.css'

function CustomCards() {
    return (
        <Container className='CardMain'>
            <Row className='CardRow'>
                <Col xs={6}>
                    <Card style={{ width: '10rem' }} >
                        <Card.Body>
                            <MoneyCollectOutlined style={{ fontSize: '25px' }} />
                            <Card.Subtitle className="mb-2">Total Withdraw</Card.Subtitle>
                            <Card.Text>
                                40,775.00 PKR
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6}>
                    <Card style={{ width: '10rem' }} >
                        <Card.Body>
                            <MoneyCollectOutlined style={{ fontSize: '25px' }} />
                            <Card.Subtitle className="mb-2">Total Deposit</Card.Subtitle>
                            <Card.Text>
                                40,775.00 PKR
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row >
                <Col xs={6}>
                    <Card style={{ width: '10rem' }} >
                        <Card.Body>
                            <MoneyCollectOutlined style={{ fontSize: '25px' }} />
                            <Card.Subtitle className="mb-2">Total investment</Card.Subtitle>
                            <Card.Text>
                                40,775.00 PKR
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6}>
                    <Card style={{ width: '10rem' }} >
                        <Card.Body>
                            <MoneyCollectOutlined style={{ fontSize: '25px' }} />
                            <Card.Subtitle className="mb-2">Current Ivestment</Card.Subtitle>
                            <Card.Text>
                                40,775.00 PKR
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default CustomCards