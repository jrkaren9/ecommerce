import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCrFnMPFaCYz6ZZ9Fdk1NT1CG_qLfHKqhI",
  authDomain: "venchibake.firebaseapp.com",
  projectId: "venchibake",
  storageBucket: "venchibake.appspot.com",
  messagingSenderId: "307865694231",
  appId: "1:307865694231:web:7d6003af549e8cc2dbec52",
  measurementId: "G-WX4SF5JQL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
