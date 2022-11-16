import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import InverterNumeros from './pages/Exercicio1/index.js';
import Figurinha from './pages/Exercicio2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/exercicio1' element={<InverterNumeros/>} />
        <Route path='/exercicio2' element={<Figurinha/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

