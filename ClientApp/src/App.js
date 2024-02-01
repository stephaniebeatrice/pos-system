import React from 'react';
import Sidebar from './components/Sidebar'
import './custom.css'
import Home from './components/Home'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from './components/Pages/Products'
import Categories from './components/Pages/Categories'
import Customers from './components/Pages/Customers'
import Suppliers from './components/Pages/Suppliers'
import BarcodeScanner from './components/Pages/BarcodeScanner'
import Orders from './components/Pages/Orders'
import Reports from './components/Pages/Reports' 

function App() {
  
  return (
    <div className='grid-container'>
      <Header />
       <Sidebar />  
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/suppliers" element={<Suppliers/>}></Route>
        <Route path="/barcodeScanner" element={<BarcodeScanner />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/reports" element={<Reports />}></Route> 
      </Routes>
        </div>

  );
}

export default App
