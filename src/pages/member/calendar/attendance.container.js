import { useEffect, useState } from "react";
import * as S from './attendance.style.js';
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment";
import 'react-datepicker/dist/react-datepicker.css';
import './customDatePicker.css';

import axios from "axios";
import checkSquare from '../../../assets/checkSquare.png'




function Attendance (){

    return(
        <S.MainWrapper>
            <S.CheckIcon src={checkSquare}></S.CheckIcon>
            <S.TitleTxt>와이어 프레임 작성 회의</S.TitleTxt>
            <S.AttendanceNum/>
            <S.AttendanceBtn> 출석하기</S.AttendanceBtn>
        </S.MainWrapper>
    ) 
}

export default Attendance;