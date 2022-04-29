import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import CartContextProvider from './components/CartContext';
import NavBar from './components/general/NavBar';
import Footer from './components/general/Footer';
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import Cart from './components/Cart';
import BuyCart from './components/BuyCart';

export default function App() {

  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={ < ItemListContainer /> }/>
          <Route exact path="/buyCart" element={ < BuyCart /> }/>
          <Route path="/category/:categoryId" element={ < ItemListContainer /> }/>
          <Route path="/item/:id" element={ < ItemDetailContainer /> }/>
          <Route exact path="/cart" element={ < Cart /> }/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
    </>
  );
}