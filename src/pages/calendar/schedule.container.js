import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from './schedule.styles.js';
import moment from 'moment';
import MyCalendar from '../../components/calendar/MyCalendar.container.js';

import register from "../../assets/register.png";

function Schedule(){
    const [value, onChange] = useState(new Date());
    const [nowDate, setNowDate] = useState(moment(value).format('YYYY년 MM월 DD일'));
    const [nowMonth, setNowMonth] = useState(new Date());
    const weekDay = ['일', '월', '화', '수', '목', '금', '토'];

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

    const fetchData = async (getDate) => {
        console.log(getDate);
        const response = await axios.get(`http://115.85.183.74:8090/api/schedule/list/month:${moment(getDate).format("YYYY-MM")}`)
        console.log(response);
        setResponse(response.data);
    }

    useEffect(() => {fetchData(value);}, []);
    useEffect(() => {setMarkedDate([]); fetchData(nowMonth);}, [nowMonth]);

    useEffect(() => {
        console.log(markedDate);
        if(markedDate.length === 0 && response.length !== 0){
            response.map((e) => {
                if(markedDate.findIndex((el) => e.scheduleDate === el) === -1){
                    setMarkedDate((prev) => [...prev, e.scheduleDate])
                }
            });
        }
    }, [response]);


    // 달을 변경할 때마다 데이터 불러오기
    const findMonthSchdule = async (e) => {
        setMarkedDate([]);
        let currentDate = value;

        if(e === "p"){
            currentDate.setMonth(value.getMonth() - 1);
        } else {
            currentDate.setMonth(value.getMonth() + 1);
        }

        setNowMonth(new Date(currentDate));

        // fetchData(new Date(currentDate));
        // const response = await axios.get(`http://115.85.183.74:8090/api/schedule/list/month:${moment(nowMonth).format("YYYY-MM")}`)
        // console.log(response);
        // setResponse(response.data);

        // response.data.map((e) => {
        //     console.log(e.scheduleDate, markedDate);
        //     if(!markedDate.find((el) => e.scheduleDate === el)){
        //         setMarkedDate((prev) => [...prev, e.scheduleDate])
        //     }
        // });
    };
    
    // 해당 날짜 스케줄 찾기
    const findSchedule = (e) => {
        setFilteredRes(response.filter((es) => es.scheduleDate === moment(e).format("YYYY-MM-DD")));
    };

    // PM & AM 형식으로 변경
    const formatTime = (getTime) => {
        const [hour, minute] = getTime.split(":");
        const formattedHour = parseInt(hour) > 12 ? parseInt(hour) - 12 : parseInt(hour);
        const period = parseInt(hour) >= 12 ? "PM" : "AM";

        return `${formattedHour < 10 ? `0${formattedHour}` : formattedHour}:${minute} ${period}`;
    };


    return(
        <S.MainWrapper>
            <S.GroupNameTxt>양파시 광산동</S.GroupNameTxt>
            <S.CalendarWrapper>
                <S.CalendarBox>
                    <MyCalendar setMarkedDate={setMarkedDate} mark={markedDate} findSchedule={findSchedule} findMonthSchdule={findMonthSchdule} fetchData={fetchData} value={value} onChange={onChange} setNowMonth={setNowMonth} setNowDate={setNowDate}/>
                </S.CalendarBox>

                    <S.DateTxt style={{'color': '#fff'}}>{nowDate} {`${weekDay[moment(value).format("e")]}요일`}</S.DateTxt>
                    <S.ScheduleWrapper style={{'color': '#fff'}}>
                    <S.ScheduleUl>
                        {response.filter((es) => es.scheduleDate === moment(value).format("YYYY-MM-DD")).length !== 0 && 
                        (response.filter((es) => es.scheduleDate === moment(value).format("YYYY-MM-DD")).map((e, i) => (
                            <S.ScheduleLi key={e.scheduleId}>
                                <S.ScheduleLeftSide>
                                    <S.ScheduleLine></S.ScheduleLine>
                                    <S.ScheduleTxt key={e.scheduleId} id={e.scheduleId} onClick={handlePage}>{e.scheduleTitle}</S.ScheduleTxt>
                                </S.ScheduleLeftSide>
                                <S.ScheduleRightSide>
                                    {formatTime(e.scheduleTime)}
                                </S.ScheduleRightSide>
                            </S.ScheduleLi>
                        )))}
                    </S.ScheduleUl>
                    </S.ScheduleWrapper>

            </S.CalendarWrapper>
            <S.AddBtnWrapper><S.AddBtn onClick={(e) => navigate("/register", {
                state: nowDate
            })}><img width='20px' height='20px' src={register} alt="register"/></S.AddBtn></S.AddBtnWrapper>
        </S.MainWrapper>
    )
}

export default Schedule;