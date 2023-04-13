import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCAHJloikMB6z38wuAwoameAqoBjaCCCZ0",
  authDomain: "uw-e-food.firebaseapp.com",
  projectId: "uw-e-food",
  storageBucket: "uw-e-food.appspot.com",
  messagingSenderId: "574929907430",
  appId: "1:574929907430:web:8c3008ffb913b1bc325527"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);