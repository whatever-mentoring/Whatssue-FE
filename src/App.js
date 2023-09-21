import React, { Component, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from "./components/nav/Nav";

import Main from "./pages/main.container";
import Login from "./pages/user/login.container";
import Join from './pages/user/join.container';

import Schedule from './pages/calendar/schedule.container';
import Detail from './pages/calendar/detail.container';
import Register from './pages/calendar/register.container';

import Accounting from './pages/accounting/accounting.container';
import AccountingRegister from './pages/accounting/accountingRegister.container';
import ChargedRegister from './pages/accounting/chargedRegister.container';

import Manage from './pages/manage/manage.container';

import Attendance from './pages/attendance/attendance.container';

import Setting from './pages/setting/setting.container';
import Membermain from './pages/member/main.container';
import Membercalendar from './pages/member/calendar/schedule.container';
import Memberdetail from './pages/member/calendar/detail.container';
import Memberattendance from './pages/member/calendar/attendance.container';
import Memberabsent from './pages/member/calendar/absent.container';

import Nonregister from './pages/nonregister.container';
import JoinGroup from './pages/member/join/joingroup.container'



function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/calendar' element={<Schedule/>}></Route>
          <Route path='/attendance' element={<Attendance/>}></Route>
          <Route path='/manage' element={<Manage/>}></Route>
          <Route path='/setting' element={<Setting/>}></Route>

          <Route path='/setting' element={<Setting/>}></Route>

          <Route path='/accounting' element={<Accounting/>}></Route>
          <Route path='/accounting/register' element={<AccountingRegister/>}></Route>
          <Route path='/charge/register' element={<ChargedRegister/>}></Route>

          <Route path='/login' element={<Login/>}></Route>
          <Route path='/join' element={<Join/>}></Route>

          <Route path='/detail' element={<Detail/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          
          <Route path='/Membermain' element={<Membermain/>}></Route>
          <Route path='/Membercalendar' element={<Membercalendar/>}></Route>
          <Route path='/Memberdetail' element={<Memberdetail/>}></Route>
          <Route path='/Memberattendance' element={<Memberattendance/>}></Route>
          <Route path='/Memberabsent' element={<Memberabsent/>}></Route>

          <Route path='/Nonregister' element={<Nonregister/>}></Route>
          <Route path='/JoinGroup' element={<JoinGroup/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
