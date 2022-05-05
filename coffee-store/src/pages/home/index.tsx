import React from 'react'
import Swaper from '../../components/container/swaper'
import Header from "../../components/header"

function Home() {
  return (
    <div style={{height:1500}}>
      <Header/>
      <div style={{paddingTop:60}}>
        <Swaper/>
      </div>
    </div>
  )
}

export default Home