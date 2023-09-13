import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import * as S from "./main.styles";

import prev from "../assets/prevIcon.png";
import next from "../assets/nextIcon.png";
import back from "../assets/back.png";
import status from "../assets/status.png";

function Main (){
    const [nowDate, setNowDate] = useState(new Date);
    const weekDay = ['일', '월', '화', '수', '목', '금', '토'];

    const [response, setResponse] = useState([]);

    const fetchData = async (date) => {
        const response = await axios.get(`http://115.85.183.74:8090/api/schedule/list/date:${moment(date).format("YYYY-MM-DD")}`)
        console.log(response);
        setResponse(response.data);
    }

    useEffect(() => {
        fetchData(nowDate);
    }, []);

    const handlePrevDate = () => {
        const yesterday = new Date(nowDate.setDate(nowDate.getDate() - 1));
        setNowDate(yesterday);
        fetchData(yesterday);
    }

    const handleNextDate = () => {
        const tommorow = new Date(nowDate.setDate(nowDate.getDate() + 1));
        setNowDate(tommorow);
        fetchData(tommorow);
    }

    const backToday = () => {
        const today = new Date();
        setNowDate(today); 
        fetchData(today);
    }


    return(
        <S.MainWrapper>
            <S.TitleWrapper>
                <S.TitleTxt>나의 모임</S.TitleTxt>
                <S.GroupWrapper><S.GroupName>양파시 광산동</S.GroupName><S.GroupRole><S.RoleBox><img width="20px" height="20px" src={status}/><S.RoleTxt>참여 상태</S.RoleTxt></S.RoleBox>관리자</S.GroupRole></S.GroupWrapper>
            </S.TitleWrapper>
            <S.ContentWrapper>
                <S.ContentDateWrapper>
                    <S.ContentDateTxt>오늘의 일정</S.ContentDateTxt>
                    <S.DateBox>
                        <S.PrevDay onClick={handlePrevDate}><img width="20px" height="20px" src={prev}/></S.PrevDay>
                        <S.NowDateTxt>{moment(nowDate).format("YYYY.MM.DD ")} {`${weekDay[moment(nowDate).format("e")]}요일`}</S.NowDateTxt>
                        <S.Nextday onClick={handleNextDate}><img width="20px" height="20px" src={next}/></S.Nextday>
                    </S.DateBox>
                    <S.TodayBtn onClick={backToday}><img src={back}/><div>오늘</div></S.TodayBtn>
                    <S.ScheduleBox>
                        <S.ScheduleWrapper style={{'color': '#fff'}}>
                        <S.ScheduleUl>
                            {response.map((e) => (<S.ScheduleLi><S.ScheduleLine></S.ScheduleLine><S.ScheduleTxt>{e.scheduleTitle}</S.ScheduleTxt></S.ScheduleLi>))}
                        </S.ScheduleUl>
                        </S.ScheduleWrapper>
                    </S.ScheduleBox>
                </S.ContentDateWrapper>
            </S.ContentWrapper>
        </S.MainWrapper>
    )
}

export default Main;