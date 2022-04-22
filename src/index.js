import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCrFnMPFaCYz6ZZ9Fdk1NT1CG_qLfHKqhI",
  authDomain: "venchibake.firebaseapp.com",
  projectId: "venchibake",
  storageBucket: "venchibake.appspot.com",
  messagingSenderId: "307865694231",
  appId: "1:307865694231:web:5ab666acbcef9c83dbec52",
  measurementId: "G-419YM2XL1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
