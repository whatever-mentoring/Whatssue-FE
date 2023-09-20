import { useEffect, useState } from "react";
import * as S from './absent.style.js';
import 'react-datepicker/dist/react-datepicker.css';
import './customDatePicker.css';

import axios from "axios";
import checkSquare from '../../../assets/absent.png'
import { useNavigate } from "react-router-dom";



function Absent (){
    const navigate = useNavigate();

    return(
        <S.MainWrapper>
            <S.CheckIcon src={checkSquare}></S.CheckIcon>
            <S.TitleTxt>와이어 프레임 작성 회의</S.TitleTxt>
            <S.TextWrapper>
                <S.ReasonTxt>공결 신청 사유</S.ReasonTxt>
                <S.ReasonInput placeholder="공결 신청 사유를 작성해주세요."></S.ReasonInput>
                <S.AbsentBtn onClick={(e) => navigate("/Membercalendar")}> 공결 신청하기</S.AbsentBtn>
            </S.TextWrapper>
            
        </S.MainWrapper>
    ) 
}

export default Absent;