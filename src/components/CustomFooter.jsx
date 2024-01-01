import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import { WalletOutlined, HomeOutlined, ShareAltOutlined } from '@ant-design/icons';
import './FooterStyle.css'



function CustomFooter() {
  return (
    <Container fluid className='FooterMain'>
      <Row className='FooterRow'>
        <Col>
          <WalletOutlined style={{ fontSize: '25px' }} className='IconStyle' />
          <p>Deposit</p>
        </Col>

        <Col>
          <WalletOutlined style={{ fontSize: '25px' }} className='IconStyle'/>
          <p>My Invest</p>
        </Col>

        <Col>
          <HomeOutlined style={{ fontSize: '25px' }} className='IconStyle'/>
          <p>Home</p>
        </Col>

        <Col>
          <WalletOutlined style={{ fontSize: '25px' }} className='IconStyle'/>
          <p>Withdraw</p>
        </Col>

        <Col>
          <ShareAltOutlined style={{ fontSize: '25px' }} className='IconStyle'/>
          <p>Transfer</p>
        </Col>

      </Row>
    </Container>
  )
}

export default CustomFooter