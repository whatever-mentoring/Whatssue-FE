import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from "./pages/main.container";
import Login from "./pages/user/login.container";
import Join from './pages/user/join.container';

import Schedule from './pages/calendar/schedule.container';
import Detail from './pages/calendar/detail.container';
import Register from './pages/calendar/register.container';

import Member from './pages/member/member.container';

import Attendance from './pages/attendance/attendance.container';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>

          <Route path='/calendar' element={<Schedule/>}></Route>
          <Route path='/detail' element={<Detail/>}></Route>
          <Route path='/register' element={<Register/>}></Route>

          <Route path='/attendance' element={<Attendance/>}></Route>

          <Route path='/member' element={<Member/>}></Route>

          <Route path='/login' element={<Login/>}></Route>
          <Route path='/join' element={<Join/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
