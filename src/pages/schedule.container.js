import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from './schedule.styles.js';
import moment from 'moment';
import MyCalendar from '../components/calendar/MyCalendar.container.js';

import register from "../assets/register.png";

function Schedule(){
    const [value, onChange] = useState(new Date());
    const [nowDate, setNowDate] = useState(moment(value).format('YYYY년 MM월 DD일'));

    const navigate = useNavigate();

    const handlePage = (e) => {
        navigate('/detail', {
            state: nowDate
        })
    };

    useEffect(() => {
        const fetchData = async () => {
            // const response = await axios.get(`http://115.85.183.74:8090/api/schedule/list/month:${moment(nowDate).format("YYYY-MM")}`)
            // console.log(response);
        }
        fetchData();
    }, []);

    return(
        <S.MainWrapper>
            <S.GroupNameTxt>양파시 광산동</S.GroupNameTxt>
            <S.CalendarWrapper>
                <S.CalendarBox>
                    <MyCalendar value={value} onChange={onChange} setNowDate={setNowDate}/>
                </S.CalendarBox>
                {nowDate !== "" && 
                (<>
                    <S.DateTxt style={{'color': '#fff'}}>{nowDate}</S.DateTxt>
                    <S.ScheduleWrapper style={{'color': '#fff'}}>
                    <S.ScheduleUl>
                        <S.ScheduleLi><S.ScheduleLine></S.ScheduleLine><S.ScheduleTxt onClick={handlePage}>UI 회의</S.ScheduleTxt></S.ScheduleLi>
                        <S.ScheduleLi><S.ScheduleLine></S.ScheduleLine><S.ScheduleTxt onClick={handlePage}>백엔드 모임</S.ScheduleTxt></S.ScheduleLi>
                        <S.ScheduleLi><S.ScheduleLine></S.ScheduleLine><S.ScheduleTxt onClick={handlePage}>와이어 프레임 작성 회의</S.ScheduleTxt></S.ScheduleLi>
                    </S.ScheduleUl>
                    </S.ScheduleWrapper>
                </>
                )}
            </S.CalendarWrapper>
            <S.AddBtnWrapper><S.AddBtn onClick={(e) => navigate("/register", {
                state: nowDate
            })}><img width='20px' height='20px' src={register} alt="register"/></S.AddBtn></S.AddBtnWrapper>
        </S.MainWrapper>
    )
}

export default Schedule;