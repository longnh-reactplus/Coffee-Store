import { Col, Image, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'

function Header() {

  return (
    <div style={{height:60, width:"100%",position:'fixed',zIndex:100,top:0,backgroundColor:"rgba(255, 255, 255, 0.8)"}}>
      <Row style={{paddingRight:100,paddingLeft:100}}>
        <Col span={6}>
          <Image preview={false} style={{height:60}} src="http://product.hstatic.net/200000377829/product/logo_tch_5a89533f917942b4993dabd0b031e6c6_grande.png"><Link to={'/'}></Link></Image>
        </Col>
        <Col span={18}>
          <Navbar/>
        </Col>
      </Row>
    </div>
  )
}

export default Header