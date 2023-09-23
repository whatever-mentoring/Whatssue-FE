import { useState, useEffect } from "react";
import * as S from "./register.styles";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import close from "../../../assets/close.png";
import clock from "../../../assets/clock.png";
import pencil from "../../../assets/pencil.png";

function Register (){
    const navigate = useNavigate();
    const location = useLocation();

    const hourList = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const minuteList = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];

    const [scheduleTitle, setScheduleTitle] = useState("");
    const [scheduleContent, setScheduleContent] = useState("");
    const [time, setTime] = useState({
        hour: '01',
        minute: '00',
        zone: 'AM'
    })

    // YYYY년 MM월 DD일 => YYYY-MM-DD
    function formatDate(inputDate) {
        const year = inputDate.substring(0, 4);
        const month = inputDate.substring(6, 8);
        const day = inputDate.substring(10, 12);
      
        const formattedDate = `${year}-${month}-${day}`;
      
        return formattedDate;
    };

    // HH:MM AM | PM => HH:MM
    function formatTime (getTime){
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

    
    const handleRegister = async () => {
        const requestData = {
            "scheduleTitle": scheduleTitle,
            "scheduleContent": scheduleContent,
            "scheduleDate": formatDate(location.state),
            "scheduleTime": formatTime(time)
        };

        axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem("token")}`;
        console.log(requestData);
        const response = await axios.post(
            `http://115.85.183.74:8090/api/schedule`,
            requestData,
            {"Content-Type": "application/json"}
        )
        console.log(response);
        if(response.status === 200){
            alert("일정 등록되었습니다.");
            navigate("/calendar");
        }
    };

    return(
        <S.MainWrapper>
            <S.CloseBtn><S.CloseImg src={close} onClick={(e) => navigate("/calendar")}/></S.CloseBtn>
            <S.ContentWrapper>
                <S.ScheduleTable>
                    <S.ScheduleTr>
                        <S.ScheduleFirstTd><S.Circle></S.Circle></S.ScheduleFirstTd>
                        <S.ScheduleTd>
                            <S.TitleInput 
                                placeholder="제목" 
                                value={scheduleTitle} 
                                onChange={(e) => setScheduleTitle(e.target.value)}
                            />
                        </S.ScheduleTd>
                    </S.ScheduleTr>
                    <S.ScheduleTr>
                        <S.ScheduleFirstTd><img src={clock}/></S.ScheduleFirstTd>
                        <S.ScheduleTd>
                            <S.DateTxt>{location.state}</S.DateTxt>
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
                                value={scheduleContent}
                                onChange={(e) => setScheduleContent(e.target.value)}
                            />
                        </S.ScheduleTd>
                    </S.ScheduleTr>
                </S.ScheduleTable>
            </S.ContentWrapper>
            <S.BtnWrapper>
                <S.ModifyBtn onClick={handleRegister}>등록하기</S.ModifyBtn>
            </S.BtnWrapper>
        </S.MainWrapper>
    );
}

export default Register;