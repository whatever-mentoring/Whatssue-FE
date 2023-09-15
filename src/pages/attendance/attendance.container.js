import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import * as S from "./attendance.styles";
import Timer from "../../components/timer/Timer";

import prev from "../../assets/prevIcon.png";
import next from "../../assets/nextIcon.png";
import back from "../../assets/back.png";
import status from "../../assets/status.png";
import checked from "../../assets/checked.png";
import notChecked from "../../assets/notChecked.png";

function Attendance (){
    const baseUrl = "http://115.85.183.74:8090";
    const T = 10;

    const [nowDate, setNowDate] = useState(new Date);
    const weekDay = ['일', '월', '화', '수', '목', '금', '토'];

    const [category, setCategory] = useState(1);
    const [modalPage, setModalPage] = useState(1);
    const [isModal, setIsModal] = useState(false);
    const [scheduleId, setScheduleId] = useState(0);

    const [timerOn, setTimerOn] = useState(false);
    const [time, setTime] = useState(0); // 남은 시간 (단위: 초)

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

    useEffect(() => {
        console.log(scheduleId);
        // 출석 상세 조회
    }, [scheduleId]);

    // 출석 시작
    const startAttendance = async(e) => {
        console.log("출석 시작");
        setModalPage(2);
        // 출석 시작 api
        // const atten = await axios.post(
        //     baseUrl + `/api/schedule/${scheduleId}/attendance/start`
        // )
        // console.log(atten);
    };

    // 출석 종료
    const endAttendance = async(e) => {
        console.log("출석 종료");
        setIsModal(false); 
        setModalPage(1);
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
                        <S.NowDateTxt>{moment(nowDate).format("YYYY.MM.DD ")} {`${ weekDay[moment(nowDate).format("e")]}요일`}</S.NowDateTxt>
                        <S.Nextday onClick={handleNextDate}><img width="20px" height="20px" src={next}/></S.Nextday>
                    </S.DateBox>
                    <S.TodayBtn onClick={backToday}><img src={back}/><div>오늘</div></S.TodayBtn>
                    <S.ScheduleBox>
                        <S.ScheduleWrapper style={{'color': '#fff'}}>
                        <S.ScheduleUl>
                            {response.map((e) => (
                                <S.ScheduleLi key={e.scheduleId} id={e.scheduleId} onClick={() => {
                                    if (!e.checked) {
                                      setIsModal(true);
                                      setScheduleId(e.scheduleId); // 이건 출석 종료됐을 때 하기
                                    } else {
                                      setScheduleId(e.scheduleId);
                                    }
                                  }}>
                                    {e.checked ? (<S.ScheduleImg width="20px" height="20px" src={checked}/>) : (<S.ScheduleImg width="20px" height="20px" src={notChecked}/>)}
                                    <S.ScheduleTxt>{e.scheduleTitle}</S.ScheduleTxt>
                                </S.ScheduleLi>
                            ))}
                        </S.ScheduleUl>
                        </S.ScheduleWrapper>
                    </S.ScheduleBox>
                    {(scheduleId !== 0 && !isModal) && (
                        <S.AttendanceWrapper>
                        <S.AttendanceNav>
                            <S.AttendanceUl style={{'color': '#fff'}}>
                                <S.AttendanceLi onClick={(e) => setCategory(1)}><S.AttendanceBox clicked={category === 1}>출석</S.AttendanceBox></S.AttendanceLi>
                                <S.AttendanceLi onClick={(e) => setCategory(2)}><S.AttendanceBox clicked={category === 2}>공결</S.AttendanceBox></S.AttendanceLi>
                                <S.AttendanceLi onClick={(e) => setCategory(3)}><S.AttendanceBox clicked={category === 3}>결석</S.AttendanceBox></S.AttendanceLi>
                            </S.AttendanceUl>
                        </S.AttendanceNav>
                        <S.AttendanceNameWrapper>
                            <S.AttendanceName>김준영</S.AttendanceName>
                            <S.AttendanceName>김예진</S.AttendanceName>
                            <S.AttendanceName>문해빈</S.AttendanceName>
                            <S.AttendanceName>이해송</S.AttendanceName>
                            <S.AttendanceName>지민혁</S.AttendanceName>
                            <S.AttendanceName>김준영</S.AttendanceName>
                            <S.AttendanceName>김예진</S.AttendanceName>
                            <S.AttendanceName>문해빈</S.AttendanceName>
                            <S.AttendanceName>이해송</S.AttendanceName>
                            <S.AttendanceName>지민혁</S.AttendanceName>
                            <S.AttendanceName>김준영</S.AttendanceName>
                            <S.AttendanceName>김예진</S.AttendanceName>
                            <S.AttendanceName>문해빈</S.AttendanceName>
                            <S.AttendanceName>이해송</S.AttendanceName>
                            <S.AttendanceName>지민혁</S.AttendanceName>
                            <S.AttendanceName>김준영</S.AttendanceName>
                            <S.AttendanceName>김예진</S.AttendanceName>
                            <S.AttendanceName>문해빈</S.AttendanceName>
                            <S.AttendanceName>이해송</S.AttendanceName>
                            <S.AttendanceName>지민혁</S.AttendanceName>
                        </S.AttendanceNameWrapper>
                    </S.AttendanceWrapper>
                    )}
                </S.ContentDateWrapper>
            </S.ContentWrapper>

            {/* 모달창 */}
            {isModal &&
                (<S.ModalWrapper>
                    {modalPage === 1 ? 
                    (<S.ModalBox>
                        <S.ModalTxt>출석을 시작하시겠습니까?</S.ModalTxt>
                        <S.BtnWrapper>
                            <S.CancleBtn onClick={(e) => setIsModal(false)}>취소</S.CancleBtn>
                            <S.CheckdBtn onClick={startAttendance}>확인</S.CheckdBtn>
                        </S.BtnWrapper>
                    </S.ModalBox>)
                    : 
                    (<S.ModalBox>
                        <S.AttendanceNum>345</S.AttendanceNum>
                        <S.AttendanceTimer><Timer/></S.AttendanceTimer>
                        <S.DoneBtnWrapper>
                            <S.DoneBtn onClick={endAttendance}>종료</S.DoneBtn>
                        </S.DoneBtnWrapper>
                    </S.ModalBox>)}
                </S.ModalWrapper>)
            }
        </S.MainWrapper>
    )
}

export default Attendance;