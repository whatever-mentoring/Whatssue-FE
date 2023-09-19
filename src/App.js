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

import Setting from './pages/setting/setting.container';
import Membermain from './pages/member/main.container';
import Membercalendar from './pages/member/calendar/schedule.container';
import Memberdetail from './pages/member/calendar/detail.container';
import Memberattendance from './pages/member/calendar/attendance.container';

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

          <Route path='/setting' element={<Setting/>}></Route>

          <Route path='/login' element={<Login/>}></Route>
          <Route path='/join' element={<Join/>}></Route>

          
          <Route path='/Membermain' element={<Membermain/>}></Route>
          <Route path='/Membercalendar' element={<Membercalendar/>}></Route>
          <Route path='/Memberdetail' element={<Memberdetail/>}></Route>
          <Route path='/Memberattendance' element={<Memberattendance/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
