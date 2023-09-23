import { useEffect, useState } from "react";
import * as S from './detail.styles.js';
import { useNavigate, useLocation } from "react-router-dom";

import 'react-datepicker/dist/react-datepicker.css';
import './customDatePicker.css';

import moment from "moment";
import 'react-datepicker/dist/react-datepicker.css';
import './customDatePicker.css';
import { StyledDatePicker } from "./detail.styles.js";

import axios from "axios";

import close from "../../../assets/close.png";
import clock from "../../../assets/clock.png";
import pencil from "../../../assets/pencil.png";

function Detail (){
    const navigate = useNavigate();
    const location = useLocation();

    const [data, setData] = useState({});
    const [startDate, setStartDate] = useState(new Date());

    // 상세 정보 받아오기
    useEffect(() => {
        const fetchData = async () => {
            console.log(location.state);
            axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem("token")}`;
            const response = await axios.get(`http://115.85.183.74:8090/api/schedule/${parseInt(location.state)}`)
            console.log(response);
            setData(response.data);
            setStartDate(new Date(response.data.scheduleDate));
        }
        fetchData();
    }, []);

 

  

    // YYYY-MM-DD => YYYY년 MM월 DD일
    function formatDate(inputDate) {
        if(inputDate){
            const parts = inputDate.split('-');
            return `${parts[0]}년 ${parts[1]}월 ${parts[2]}일`;
        }
    }

    // PM & AM 형식으로 변경
    const formatTime = (getTime) => {
        if(getTime){
            const [hour, minute] = getTime.split(":");
            const formattedHour = parseInt(hour) > 12 ? parseInt(hour) - 12 : parseInt(hour);
            const period = parseInt(hour) >= 12 ? "PM" : "AM";

            return `${formattedHour < 10 ? `0${formattedHour}` : formattedHour}:${minute} ${period}`;
        }
    }

  

    return(
        <S.MainWrapper>
            <S.CloseBtn><S.CloseImg src={close} onClick={(e) => navigate("/Membercalendar")}/></S.CloseBtn>
            <S.ContentWrapper>
                <S.ScheduleTable>
                    <S.ScheduleTr>
                        <S.ScheduleFirstTd><S.Circle></S.Circle></S.ScheduleFirstTd>
                        <S.ScheduleTd><S.TitleTxt>{data.scheduleTitle}</S.TitleTxt></S.ScheduleTd>
                    </S.ScheduleTr>
                    <S.ScheduleTr>
                        <S.ScheduleFirstTd><img src={clock}/></S.ScheduleFirstTd>
                        <S.ScheduleTd><S.DateTxt>{formatDate(data.scheduleDate)}</S.DateTxt><S.TimeTxt>{formatTime(data.scheduleTime)}</S.TimeTxt></S.ScheduleTd>
                    </S.ScheduleTr>
                    <S.ScheduleTr>
                        <td><img src={pencil}/></td>
                        <S.ScheduleTd><S.ContentTxt>{data.scheduleContent}</S.ContentTxt></S.ScheduleTd>
                    </S.ScheduleTr>     
                </S.ScheduleTable>   
            </S.ContentWrapper>
            <S.BtnWrapper>
                <S.AttendanceBtn onClick={(e) => navigate("/Memberattendance")}>출석하기</S.AttendanceBtn>
                <S.AbsentBtn onClick={(e) => navigate("/Memberabsent")}>공결 신청 하기</S.AbsentBtn>
                <S.AbsentBtn >공결 신청 하기</S.AbsentBtn>
            </S.BtnWrapper>
        </S.MainWrapper>
    )
}

export default Detail;