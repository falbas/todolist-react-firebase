import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import App from './App';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
render (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" components={() => "404 NOT FOUND"} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
