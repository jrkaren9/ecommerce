import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import ItemListContainer from './components/Items/ItemListContainer';
import NavBar from './components/NavBar';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';

export default function App() {

  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={ < ItemListContainer /> }/>
          <Route path="/category/:categoryId" element={ < ItemListContainer /> }/>
          <Route path="/item/:id" element={ < ItemDetailContainer /> }/>
          <Route path="/cart" element={ < Cart /> }/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
    </>
  );
}