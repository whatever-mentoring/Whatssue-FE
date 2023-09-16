import { useEffect, useState } from "react";
import * as S from './detail.styles.js';
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import close from "../../assets/close.png";
import clock from "../../assets/clock.png";
import pencil from "../../assets/pencil.png";

function Detail (){
    const navigate = useNavigate();
    const location = useLocation();

    const [data, setData] = useState({});
    const [isModify, setIsModify] = useState(false);

    // 상세 정보 받아오기
    useEffect(() => {
        const fetchData = async () => {
            console.log(location.state);
            const response = await axios.get(`http://115.85.183.74:8090/api/schedule/${parseInt(location.state)}`)
            console.log(response);
            setData(response.data);
        }
        fetchData();
    }, []);

    // 상세 정보 수정
    const modifyData = async (e) => {
        const requestData = {
            "scheduleTitle": data.scheduleTitle,
            "scheduleContent": data.scheduleContent,
            "scheduleDate": data.scheduleDate,
            "scheduleTime": `${data.scheduleTime.split(":")[0]}:${data.scheduleTime.split(":")[1]}`
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
            const formattedHour = parseInt(hour) >= 12 ? parseInt(hour) - 12 : parseInt(hour);
            const period = parseInt(hour) >= 12 ? "PM" : "AM";

            return `${formattedHour < 10 ? `0${formattedHour}` : formattedHour}:${minute} ${period}`;
        }
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
                        <S.ScheduleTd><S.DateTxt>{formatDate(data.scheduleDate)}</S.DateTxt><S.TimeTxt>{formatTime(data.scheduleTime)}</S.TimeTxt></S.ScheduleTd>
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
                    <S.ModifyBtn onClick={modifyData}>수정 완료</S.ModifyBtn>
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