import { useState, useEffect } from "react";
import * as S from "./register.styles";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import close from "../../assets/close.png";
import clock from "../../assets/clock.png";
import pencil from "../../assets/pencil.png";

function Register (){
    const navigate = useNavigate();
    const location = useLocation();

    // YYYY년 MM월 DD일 => YYYY-MM-DD
    function formatDate(inputDate) {
        const year = inputDate.substring(0, 4);
        const month = inputDate.substring(6, 8);
        const day = inputDate.substring(10, 12);
      
        const formattedDate = `${year}-${month}-${day}`;
      
        return formattedDate;
    };

    const [requestData, setRequestData] = useState({
        "scheduleTitle": "",
        "scheduleContent": "",
        "scheduleDate": formatDate(location.state),
        "scheduleTime": "10:00"
    })


    const handleRegister = async () => {
        console.log(requestData);
        const response = await axios.post(
            `http://115.85.183.74:8090/api/schedule`,
            requestData,
            {"Content-Type": "application/json"}
        )
        console.log(response);
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
                                value={requestData.scheduleTitle} 
                                onChange={(e) => setRequestData((prev) => ({...prev, "scheduleTitle": e.target.value}))}
                            />
                        </S.ScheduleTd>
                    </S.ScheduleTr>
                    <S.ScheduleTr>
                        <S.ScheduleFirstTd><img src={clock}/></S.ScheduleFirstTd>
                        <S.ScheduleTd><S.DateTxt>{location.state}</S.DateTxt><S.TimeTxt>시간 선택</S.TimeTxt></S.ScheduleTd>
                    </S.ScheduleTr>
                    <S.ScheduleTr>
                        <td><img src={pencil}/></td>
                        <S.ScheduleTd>
                            <S.ContentInput 
                                placeholder="설명" 
                                value={requestData.scheduleContent}
                                onChange={(e) => setRequestData((prev) => ({...prev, "scheduleContent": e.target.value}))}
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