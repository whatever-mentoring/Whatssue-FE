import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/main.container';
import Login from "./pages/login.container";
import Join from './pages/join.container';
import Detail from './pages/detail.container';
import Register from './pages/register.container';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/detail' element={<Detail/>}></Route>
          <Route path='/register' element={<Register/>}></Route>

          <Route path='/login' element={<Login/>}></Route>
          <Route path='/join' element={<Join/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
