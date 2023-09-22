import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import * as S from "./attendance.styles";
import Menu from "../../components/nav/Nav"
import Timer from "../../components/timer/Timer";

import prev from "../../assets/prevIcon.png";
import next from "../../assets/nextIcon.png";
import back from "../../assets/back.png";
import status from "../../assets/status.png";
import checked from "../../assets/checked.png";
import notChecked from "../../assets/notChecked.png";

function Attendance (){
    const navigate = useNavigate();
    const baseUrl = "http://115.85.183.74:8090";
    const T = 10;

    const [nowDate, setNowDate] = useState(new Date);
    const weekDay = ['일', '월', '화', '수', '목', '금', '토'];

    const [category, setCategory] = useState(1);
    const [modalPage, setModalPage] = useState(1);
    const [attendanceCode, setAttendanceCode] = useState('');
    const [isModal, setIsModal] = useState(false);
    const [scheduleId, setScheduleId] = useState(0);

    const [timerOn, setTimerOn] = useState(false);
    const [time, setTime] = useState(0); // 남은 시간 (단위: 초)

    const [response, setResponse] = useState([]);
    const [nowSchedule, setNowSchedule] = useState({});
    const [attendanceList, setAttendanceList] = useState([]);
    const [officialAbsentList, setOfficialAbsentList] = useState([]);
    const [absentList, setAbsentList] = useState([]);

    const fetchData = async (date) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem("token")}`;
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
        setScheduleId(0);
        fetchData(yesterday);
    }

    const handleNextDate = () => {
        const tommorow = new Date(nowDate.setDate(nowDate.getDate() + 1));
        setNowDate(tommorow);
        setScheduleId(0);
        fetchData(tommorow);
    }

    const backToday = () => {
        const today = new Date();
        setNowDate(today); 
        setScheduleId(0);
        fetchData(today);
    }

    useEffect(() => {
        console.log(scheduleId);
        // 출석 상세 조회
        const fetchAttendanceList = async () => {
            const list = await axios.get(baseUrl + `/api/schedule/${scheduleId}/attendance/result`)
            if(list.status === 200){
                console.log(list);
                setAttendanceList(list.data.filter((e) => e.attendanceType === "출석"));
                setOfficialAbsentList(list.data.filter((e) => e.attendanceType === "공결"));
                setAbsentList(list.data.filter((e) => e.attendanceType === "결석"));
            }
        }
        fetchAttendanceList();
    }, [scheduleId]);

    const startAttendance = async(e) => {
        setModalPage(2);

        if(nowSchedule.checked){
            // 출석 재시작 api
            const atten = await axios.patch(
                baseUrl + `/api/schedule/${scheduleId}/attendance/start`
            )
            if(atten.status === 200){
                console.log(atten.data);
                setAttendanceCode(atten.data);
            }
        }
        else{
            // 출석 시작 api
            const atten2 = await axios.post(
                baseUrl + `/api/schedule/${scheduleId}/attendance/start`
            )
            if(atten2.status === 200){
                console.log(atten2.data);
                setAttendanceCode(atten2.data);
            }
        }
    };

    // 출석 종료
    const endAttendance = async() => {
        setIsModal(false);
        setModalPage(1);
        const res = await axios.delete(baseUrl + `/api/schedule/${scheduleId}/attendance`);
        console.log(res);
        if(res.status === 200){
            fetchData(nowDate);
        }
    };

    return(
        <S.MainWrapper>
            <Menu />
            <S.TitleWrapper>
                <S.TitleTxt>나의 모임</S.TitleTxt>
                <S.GroupWrapper><S.GroupName>양파시 광산동</S.GroupName><S.GroupRole><S.RoleBox><img width="20px" height="20px" src={status}/><S.RoleTxt>참여 상태</S.RoleTxt></S.RoleBox>관리자</S.GroupRole></S.GroupWrapper>
            </S.TitleWrapper>
            <S.ContentWrapper>
                <S.ContentDateWrapper>
                    <S.ContentDateTxt>오늘의 일정</S.ContentDateTxt>
                    <S.DateBox>
                        <S.PrevDay onClick={handlePrevDate}><img width="24px" height="24px" src={prev}/></S.PrevDay>
                        <S.NowDateTxt>{moment(nowDate).format("YYYY.MM.DD ")} {`${ weekDay[moment(nowDate).format("e")]}요일`}</S.NowDateTxt>
                        <S.Nextday onClick={handleNextDate}><img width="24px" height="24px" src={next}/></S.Nextday>
                    </S.DateBox>
                    <S.TodayBtn onClick={backToday}><S.TodayImg src={back}/><div>오늘</div></S.TodayBtn>
                    <S.ScheduleBox>
                        <S.ScheduleWrapper style={{'color': '#fff'}}>
                        <S.ScheduleUl>
                            {response.map((e) => (
                                <S.ScheduleLi key={e.scheduleId} id={e.scheduleId} onClick={() => {
                                    if (!e.checked) {
                                        setIsModal(true);
                                        setScheduleId(e.scheduleId);
                                        setNowSchedule(e);
                                    } else {
                                        setScheduleId(e.scheduleId);
                                        setNowSchedule(e);
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
                        <>
                        <S.AttendanceWrapper>
                        <S.AttendanceNav>
                            <S.AttendanceUl style={{'color': '#fff'}}>
                                <S.AttendanceLi onClick={(e) => setCategory(1)}><S.AttendanceBox clicked={category === 1}>출석</S.AttendanceBox></S.AttendanceLi>
                                <S.AttendanceLi onClick={(e) => setCategory(2)}><S.AttendanceBox clicked={category === 2}>공결</S.AttendanceBox></S.AttendanceLi>
                                <S.AttendanceLi onClick={(e) => setCategory(3)}><S.AttendanceBox clicked={category === 3}>결석</S.AttendanceBox></S.AttendanceLi>
                            </S.AttendanceUl>
                        </S.AttendanceNav>
                        <S.AttendanceNameWrapper>
                            {
                                category === 1 ? (
                                    attendanceList.map((e, i) => (<S.AttendanceName key={i} >{e.memberName}</S.AttendanceName>))
                                ) : (
                                    category === 2 ? (
                                        officialAbsentList.map((e, i) => (<S.AttendanceName key={i}>{e.memberName}</S.AttendanceName>))
                                    ) : (
                                        absentList.map((e, i) => (<S.AttendanceName key={i}>{e.memberName}</S.AttendanceName>))
                                    )
                                )
                            }
                        </S.AttendanceNameWrapper>
                    </S.AttendanceWrapper>
                    {
                        category === 1 ? (
                            <S.AttendanceMemberNum>{attendanceList.length} / {attendanceList.length + officialAbsentList.length + absentList.length}</S.AttendanceMemberNum>
                        ) : (
                            category === 2 ? (
                                <S.AttendanceMemberNum>{officialAbsentList.length} / {attendanceList.length + officialAbsentList.length + absentList.length}</S.AttendanceMemberNum>
                            ) : (
                                <S.AttendanceMemberNum>{absentList.length} / {attendanceList.length + officialAbsentList.length + absentList.length}</S.AttendanceMemberNum>
                            )
                        )
                    }
                    <S.AttendanceRestart onClick={() => setIsModal(true)}>출석 재시작</S.AttendanceRestart>
                    </>
                    )}
                </S.ContentDateWrapper>
            </S.ContentWrapper>

            {/* 모달창 */}
            {isModal &&
                (<S.ModalWrapper>
                    {modalPage === 1 ? 
                    (<S.ModalBox>
                        <S.ModalInnerBox>
                            <S.ModalTxt>출석을 시작하시겠습니까?</S.ModalTxt>
                            <S.BtnWrapper>
                                <S.CancleBtn onClick={(e) => {setIsModal(false); setScheduleId(0);}}>취소</S.CancleBtn>
                                <S.CheckdBtn onClick={startAttendance}>확인</S.CheckdBtn>
                            </S.BtnWrapper>
                        </S.ModalInnerBox>
                    </S.ModalBox>)
                    : 
                    (<S.ModalBox>
                        <S.ModalInnerBox>
                            <S.AttendanceNum>{attendanceCode}</S.AttendanceNum>
                            <S.AttendanceTimer><Timer endAttendance={endAttendance}/></S.AttendanceTimer>
                            <S.DoneBtnWrapper>
                                <S.DoneBtn onClick={endAttendance}>종료</S.DoneBtn>
                            </S.DoneBtnWrapper>
                        </S.ModalInnerBox>
                    </S.ModalBox>)}
                </S.ModalWrapper>)
            }
        </S.MainWrapper>
    )
}

export default Attendance;