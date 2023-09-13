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
    const weekDay = ['월', '화', '수', '목', '금', '토', '일'];

    const [response, setResponse] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const [markedDate, setMarkedDate] = useState([]);

    const navigate = useNavigate();

    const handlePage = (e) => {
        console.log(e.target.id);
        navigate('/detail', {
            state: e.target.id
        })
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://115.85.183.74:8090/api/schedule/list/month:${moment(value).format("YYYY-MM")}`)
            console.log(response);
            setResponse(response.data);

            response.data.map((e) => {
                if(!markedDate.find((el) => e.scheduleDate === el)){
                    setMarkedDate((prev) => [...prev, e.scheduleDate])
                }
            });
        }
        fetchData();
    }, []);

    // 해당 날짜 스케줄 찾기
    const findSchedule = (e) => {
        setFilteredRes(response.filter((es) => es.scheduleDate === moment(e).format("YYYY-MM-DD")));
    };

    return(
        <S.MainWrapper>
            <S.GroupNameTxt>양파시 광산동</S.GroupNameTxt>
            <S.CalendarWrapper>
                <S.CalendarBox>
                    <MyCalendar mark={markedDate} findSchedule={findSchedule} value={value} onChange={onChange} setNowDate={setNowDate}/>
                </S.CalendarBox>
                {nowDate !== "" && 
                (<>
                    <S.DateTxt style={{'color': '#fff'}}>{nowDate} {`${weekDay[moment(value).format("e")]}요일`}</S.DateTxt>
                    <S.ScheduleWrapper style={{'color': '#fff'}}>
                    <S.ScheduleUl>
                        {filteredRes.length !== 0 && (filteredRes.map((e, i) => (
                            <S.ScheduleLi key={e.scheduleId}>
                                <S.ScheduleLeftSide>
                                    <S.ScheduleLine></S.ScheduleLine>
                                    <S.ScheduleTxt id={e.scheduleId} onClick={handlePage}>{e.scheduleTitle}</S.ScheduleTxt>
                                </S.ScheduleLeftSide>
                                <S.ScheduleRightSide>
                                    {parseInt(e.scheduleTime.split(":")[0]) >= 12 ? `${parseInt(e.scheduleTime.split(":")[0]) - 12}:${e.scheduleTime.split(":")[1]}` : `${parseInt(e.scheduleTime.split(":")[0])}:${e.scheduleTime.split(":")[1]}`} {parseInt(e.scheduleTime.split(":")[0]) >= 12 ? `PM` : `AM`}
                                </S.ScheduleRightSide>
                            </S.ScheduleLi>
                        )))}
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