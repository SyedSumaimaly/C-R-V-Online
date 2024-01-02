import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheck, faMoneyBill, faSackDollar, faMoneyBillTransfer, faHouse } from '@fortawesome/free-solid-svg-icons'
import './FooterStyle.css'



function CustomFooter() {
  return (
    <Container fluid className='FooterMain'>
      <Row className='FooterRow'>
        <Col className='FooterCol'>
          <FontAwesomeIcon icon={faMoneyCheck} className=' IconStyle' />
          <p>Deposit</p>
        </Col>

        <Col className='FooterCol'>
          <FontAwesomeIcon icon={faSackDollar} className=' IconStyle' />

          <p>My Invest</p>
        </Col>

        <Col className='FooterCol '>
          <FontAwesomeIcon icon={faHouse} className=' IconStyle colHome' />
          <p>Home</p>
        </Col>

        <Col className='FooterCol'>
          <FontAwesomeIcon icon={faMoneyBill} className=' IconStyle' />
          <p>Withdraw</p>
        </Col>

        <Col className='FooterCol'>
          <FontAwesomeIcon icon={faMoneyBillTransfer} className=' IconStyle' />
          <p>Transfer</p>
        </Col>

      </Row>
    </Container>
  )
}

export default CustomFooter