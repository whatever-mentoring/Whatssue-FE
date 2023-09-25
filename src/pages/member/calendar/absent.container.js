import { useEffect, useState } from "react";
import * as S from './absent.style.js';
import 'react-datepicker/dist/react-datepicker.css';
import './customDatePicker.css';

import axios from "axios";
import checkSquare from '../../../assets/absent.png'
import { useNavigate, useLocation } from "react-router-dom";

import close from "../../../assets/close.png";
import moment from "moment";

function Absent (){
    const baseUrl = "http://115.85.183.74:8090/";
    const navigate = useNavigate();
    const location = useLocation();
    const date = new Date();

    const [content, setContent] = useState("");

    const registerAbsent = async () => {
        try{
            axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem("token")}`;
            console.log(location.state.id, content, moment(date).format("YYYY-MM-DD"));
            const response = await axios.post(baseUrl + `api/schedule/${location.state.id}/absent-request`, {
                "absentReason": content,
                "absentDate": moment(date).format("YYYY-MM-DD")
            });
            console.log(response);
        } catch(error){
            console.log(error);
        }
    };

    return(
        <S.MainWrapper>
            <S.CloseBtn><S.CloseImg src={close} onClick={(e) => navigate("/Membercalendar")}/></S.CloseBtn>
            <S.CheckIcon src={checkSquare}></S.CheckIcon>
            <S.TitleTxt>{location.state.title}</S.TitleTxt>
            <S.TextWrapper>
                <S.ReasonTxt>공결 신청 사유</S.ReasonTxt>
                <S.ReasonInput 
                    placeholder="공결 신청 사유를 작성해주세요."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></S.ReasonInput>
                <S.AbsentBtn onClick={registerAbsent}> 공결 신청하기</S.AbsentBtn>
            </S.TextWrapper>
            
        </S.MainWrapper>
    ) 
}

export default Absent;