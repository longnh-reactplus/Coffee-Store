import { Col, Row } from 'antd'
import React from 'react'
import Header from '../../components/header'

function Order() {
  return (
    <div style={{paddingLeft:100,paddingRight:100,marginTop:60}}>
        <Header/>
        <Row>
          <Col span={5} style={{backgroundColor:'red'}}>
            
          </Col>
          <Col span={19}></Col>
        </Row>
    </div>
  )
}

export default Order