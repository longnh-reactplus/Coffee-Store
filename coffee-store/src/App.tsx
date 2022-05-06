import React from 'react';
import 'antd/dist/antd.min.css';
import './App.css';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Order from './pages/order';
import Coffee from './pages/coffee';
import Tea from './pages/tea';
import HouseStory from './pages/housestory';
import Recruit from './pages/recruit';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Order/>}/>
        <Route path='/coffee' element={<Coffee/>}/>
        <Route path='/tea' element={<Tea/>}/>
        <Route path='/housestory' element={<HouseStory/>}/>
        <Route path='/recruit' element={<Recruit/>}/>
      </Routes>
    </div>
  );
}

export default App;
