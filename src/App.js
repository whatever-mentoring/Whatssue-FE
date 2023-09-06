import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from "./pages/login.container";
import Join from './pages/join.container';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/join' element={<Join/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
