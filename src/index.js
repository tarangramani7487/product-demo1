import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './features/Home/Home';
import Login from './features/Home/Login';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product/:productsId' element={<h1>ProductDetail</h1>}/>
          <Route path='/login' element={<Login />}/>
          {/* <Route path='/dashboard' element={<Dashboard />}/> */}
          <Route path='*' element={<h1>404 Error Data Not found</h1>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
