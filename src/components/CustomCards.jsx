import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheck, faMoneyBill, faSackDollar, faMoneyBillWheat } from '@fortawesome/free-solid-svg-icons'

import './CardStyle.css'

function CustomCards() {
    return (
        <Container fluid className='CardMain'>
            <Row className='CardRow'>
                <Col xs={6} sm={6}>
                    <Card style={{ width: '8rem', height: "22vh"}} className='cardOne' >
                        <Card.Body>
                            <FontAwesomeIcon icon={faMoneyCheck} className='mb-2' />
                            <Card.Subtitle className="cardTitle">Total Withdraw</Card.Subtitle>
                            <Card.Text>
                                40,775.00 PKR
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} >
                    <Card style={{ width: '8rem', height: "22vh"}} className='cardTwo'>
                        <Card.Body>
                            <FontAwesomeIcon icon={faMoneyBill} className='mb-2'/>
                            <Card.Subtitle className="cardTitle">Total Deposit</Card.Subtitle>
                            <Card.Text>
                                40,775.00 PKR
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row >
                <Col xs={6} >
                    <Card style={{ width: '8rem', height: "22vh"}} className='cardThree'>
                        <Card.Body>
                            <FontAwesomeIcon icon={faSackDollar} className='mb-2'/>
                            <Card.Subtitle className="cardTitle">Total investment</Card.Subtitle>
                            <Card.Text>
                                40,775.00 PKR
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} >
                    <Card style={{ width: '8rem', height: "22vh"}} className='cardFour' >
                        <Card.Body>
                        <FontAwesomeIcon icon={faMoneyBillWheat} className='mb-2'/>
                            <Card.Subtitle className="cardTitle">Current Investment</Card.Subtitle>
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