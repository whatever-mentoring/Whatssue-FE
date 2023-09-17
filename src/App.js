import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from "./components/nav/Nav";

import Main from "./pages/main.container";
import Login from "./pages/user/login.container";
import Join from './pages/user/join.container';

import Schedule from './pages/calendar/schedule.container';
import Detail from './pages/calendar/detail.container';
import Register from './pages/calendar/register.container';

import Manage from './pages/manage/manage.container';

import Attendance from './pages/attendance/attendance.container';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<Main/>}></Route>

          <Route path='/calendar' element={<Schedule/>}></Route>
          <Route path='/detail' element={<Detail/>}></Route>
          <Route path='/register' element={<Register/>}></Route>

          <Route path='/attendance' element={<Attendance/>}></Route>

          <Route path='/manage' element={<Manage/>}></Route>

          <Route path='/login' element={<Login/>}></Route>
          <Route path='/join' element={<Join/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
