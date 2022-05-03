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
import ViewPortProvider from './components/ViewPortContext';

export default function App() {

  return (
    <>
    <ViewPortProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={ < ItemListContainer /> }/>
            <Route path="/category/:categoryId" element={ < ItemListContainer /> }/>
            <Route path="/item/:id" element={ < ItemDetailContainer /> }/>
            <Route exact path="/cart" element={ < Cart /> }/>
            <Route exact path="/buyCart" element={ < BuyCart /> }/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </ViewPortProvider>
    </>
  );
}