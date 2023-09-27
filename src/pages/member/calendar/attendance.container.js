import * as S from './attendance.style.js';
import { useState } from 'react';
import { useLocation, useNavigate} from "react-router-dom";
import moment from "moment";

import 'react-datepicker/dist/react-datepicker.css';
import './customDatePicker.css';

import axios from "axios";
import checkSquare from '../../../assets/checkSquare.png';
import close from "../../../assets/close.png";

function Attendance (){
    const baseUrl = "http://115.85.183.74:8090/";
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state.title);

    const [code, setCode] = useState("");
    
    const checkAttendance = async () => {
        try{
            const response = await axios.post(baseUrl + `api/schedule/${location.state.id}/attendance/check`, {
                "number": +code
            });
            console.log(response);
            if(response.status === 200){
                alert("출석 확인되었습니다.");
                navigate("/Memberdetail", {state: location.state.id});
            }
        } catch(error){
            console.log(error);
            if(error.response.status === 404){
                alert("번호가 일치하지 않습니다.");
            }
        }
    }

    return(
        <S.MainWrapper>
            <S.CloseBtn><S.CloseImg src={close} onClick={(e) => navigate("/Memberdetail", {state: location.state.id})}/></S.CloseBtn>
            <S.CheckIcon src={checkSquare}></S.CheckIcon>
            <S.TitleTxt>{location.state.title}</S.TitleTxt>
            <S.AttendanceNum value={code} onChange={(e) => setCode(e.target.value)}/>
            <S.AttendanceBtn onClick={checkAttendance}> 출석하기</S.AttendanceBtn>
        </S.MainWrapper>
    ) 
}

export default Attendance;