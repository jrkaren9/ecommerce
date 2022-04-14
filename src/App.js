import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import ItemListContainer from './components/Items/ItemListContainer';
import NavBar from './components/NavBar';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import ItemDetailContainer from './components/Items/ItemDetailContainer';

export default function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path="/" element={ItemListContainer}/>
        </Routes>
      <ItemListContainer 
        greeting='Disfruta de todos nuestros sabores y productos artesanales hechos con amor'/>
      <ItemDetailContainer />
      <Footer />
      </BrowserRouter>
    </>
  );
}