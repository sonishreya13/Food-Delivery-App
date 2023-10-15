import React from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Body from './component/Body';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Cart from './component/Cart';
import Contact from './component/Contact';
import Foods from './component/Foods';
import Home from './component/Home';
import Login from './component/Login';
import AddtoCart from './component/AddtoCart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/foods' element={<Foods/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/addtocart' element={<AddtoCart/>}/>
    </Routes>
    <Footer/>
    {/* <React.Fragment>
      Welcome to my channel;
      </React.Fragment> */}
    </BrowserRouter>

  );
}

export default App;
