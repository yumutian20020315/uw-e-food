import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDTVKrIChyNxtseMTbLncW-O2kDceE-Dhw",
  authDomain: "info340b-sp22-emmaaa88.firebaseapp.com",
  databaseURL: "https://info340b-sp22-emmaaa88-default-rtdb.firebaseio.com",
  projectId: "info340b-sp22-emmaaa88",
  storageBucket: "info340b-sp22-emmaaa88.appspot.com",
  messagingSenderId: "183883221566",
  appId: "1:183883221566:web:d60c6e039437d95b4a9f6f"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);