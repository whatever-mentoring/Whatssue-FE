import { useEffect, useState } from "react";
import * as S from './detail.styles.js';
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment";
import 'react-datepicker/dist/react-datepicker.css';
import './customDatePicker.css';
import { StyledDatePicker } from "./detail.styles.js";
import axios from "axios";

import close from "../../assets/close.png";
import clock from "../../assets/clock.png";
import pencil from "../../assets/pencil.png";

function Detail (){
    const navigate = useNavigate();
    const location = useLocation();

    const hourList = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const minuteList = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];

    const [time, setTime] = useState({
        hour: '01',
        minute: '00',
        zone: 'AM'
    })
    const [data, setData] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [isModify, setIsModify] = useState(false);

    // 상세 정보 받아오기
    useEffect(() => {
        const fetchData = async () => {
            console.log(location.state);
            const response = await axios.get(`http://115.85.183.74:8090/api/schedule/${parseInt(location.state)}`)
            console.log(response);
            setData(response.data);
            setStartDate(new Date(response.data.scheduleDate));
        }
        fetchData();
    }, []);

    // 상세 정보 수정
    const modifyData = async (e) => {
        const requestData = {
            "scheduleTitle": data.scheduleTitle,
            "scheduleContent": data.scheduleContent,
            "scheduleDate": moment(startDate).format("YYYY-MM-DD"),
            "scheduleTime": formatShortTime(time)
        }
        console.log(requestData);
        const response = await axios.patch(
            `http://115.85.183.74:8090/api/schedule/${parseInt(location.state)}`,
            requestData
        )
        console.log(response);
        if(response.status === 200){
            alert('일정 수정되었습니다.');
            navigate("/calendar");
        }
        setIsModify(false);
        // setData(response.data);
    }

    // 일정 삭제
    const deleteSchedule = async (e) => {
        const response = await axios.delete(
            `http://115.85.183.74:8090/api/schedule/${parseInt(location.state)}`
        )
        console.log(response);
        if(response.status === 200){
            alert('일정 삭제되었습니다');
            navigate("/calendar");
        }
    }

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

    // HH:MM AM | PM => HH:MM
    function formatShortTime (getTime){
        let newHour = getTime.hour;
        if(getTime.zone === 'PM' && parseInt(getTime.hour) !== 12){
            newHour = `${parseInt(getTime.hour) + 12}`;
        } else if(getTime.zone === 'AM' && parseInt(getTime.hour) === 12){
            newHour = '00';
        } else if(getTime.zone === 'AM' && parseInt(getTime.hour) < 10){
            newHour = `0${parseInt(getTime.hour)}`;
        }
        setTime((prev) => ({...prev, hour: newHour}));

        return `${newHour}:${time.minute}`;
    }

    return(
        <S.MainWrapper>
            <S.CloseBtn><S.CloseImg src={close} onClick={(e) => navigate("/calendar")}/></S.CloseBtn>
            <S.ContentWrapper>
                {isModify ? (
                    <S.ScheduleTable>
                    <S.ScheduleTr>
                        <S.ScheduleFirstTd><S.Circle></S.Circle></S.ScheduleFirstTd>
                        <S.ScheduleTd>
                            <S.TitleInput 
                                placeholder="제목" 
                                value={data.scheduleTitle} 
                                onChange={(e) => setData((prev) => ({...prev, "scheduleTitle": e.target.value}))}
                            />
                        </S.ScheduleTd>
                    </S.ScheduleTr>
                    <S.ScheduleTr>
                        <S.ScheduleFirstTd><img src={clock}/></S.ScheduleFirstTd>
                        <S.ScheduleTd>
                            <S.DateTxt>
                                <StyledDatePicker
                                    formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
                                    showYearDropdown
                                    scrollableYearDropdown
                                    yearDropdownItemNumber={100}
                                    dateFormat="yyyy년 MM월 dd일"
                                    shouldCloseOnSelect
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                />
                            </S.DateTxt>
                            <S.TimeTxt>
                                <S.TimeSelect onChange={(e) => setTime((prev) => ({...prev, hour: e.target.value}))}>
                                    {hourList.map((e) => <option value={e}>{e}</option>)}
                                </S.TimeSelect>
                                <S.TimeSelect onChange={(e) => setTime((prev) => ({...prev, minute: e.target.value}))}>
                                    {minuteList.map((e) => <option value={e}>{e}</option>)}
                                </S.TimeSelect>
                                <S.TimeSelect onChange={(e) => setTime((prev) => ({...prev, zone: e.target.value}))}>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </S.TimeSelect>
                            </S.TimeTxt>
                        </S.ScheduleTd>
                    </S.ScheduleTr>
                    <S.ScheduleTr>
                        <td><img src={pencil}/></td>
                        <S.ScheduleTd>
                            <S.ContentInput 
                                placeholder="설명" 
                                value={data.scheduleContent}
                                onChange={(e) => setData((prev) => ({...prev, "scheduleContent": e.target.value}))}
                            />
                        </S.ScheduleTd>
                    </S.ScheduleTr>
                </S.ScheduleTable>
                ): (
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
                )}
            </S.ContentWrapper>
            {isModify ? (
                <S.BtnWrapper>
                    <S.ModifyBtn onClick={modifyData}>수정완료</S.ModifyBtn>
                </S.BtnWrapper>
            ) : (
                <S.BtnWrapper>
                    <S.ModifyBtn onClick={() => setIsModify(true)}>수정하기</S.ModifyBtn>
                    <S.DeleteBtn onClick={deleteSchedule}>삭제하기</S.DeleteBtn>
                </S.BtnWrapper>
            )}
        </S.MainWrapper>
    )
}

export default Detail;