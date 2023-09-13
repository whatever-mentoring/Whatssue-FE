import { useEffect, useState } from "react";
import * as S from './detail.styles.js';
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import close from "../assets/close.png";
import clock from "../assets/clock.png";
import pencil from "../assets/pencil.png";

function Detail (){
    const navigate = useNavigate();
    const location = useLocation();

    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            console.log(location.state);
            const response = await axios.get(`http://115.85.183.74:8090/api/schedule/${parseInt(location.state)}`)
            console.log(response);
            setData(response.data);
        }
        fetchData();
    }, []);

    function formatDate(inputDate) {
        if(inputDate){
            const parts = inputDate.split('-');
            return `${parts[0]}년 ${parts[1]}월 ${parts[2]}일`;
        }
    }

    return(
        <S.MainWrapper>
            <S.CloseBtn onClick={(e) => navigate("/calendar")}><S.CloseImg src={close}/></S.CloseBtn>
            <S.ContentWrapper>
                <S.ScheduleTable>
                    <S.ScheduleTr>
                        <S.ScheduleFirstTd><S.Circle></S.Circle></S.ScheduleFirstTd>
                        <S.ScheduleTd><S.TitleTxt>{data.scheduleTitle}</S.TitleTxt></S.ScheduleTd>
                    </S.ScheduleTr>
                    <S.ScheduleTr>
                        <S.ScheduleFirstTd><img src={clock}/></S.ScheduleFirstTd>
                        <S.ScheduleTd><S.DateTxt>{formatDate(data.scheduleDate)} {data.scheduleTime}</S.DateTxt></S.ScheduleTd>
                    </S.ScheduleTr>
                    <S.ScheduleTr>
                        <td><img src={pencil}/></td>
                        <S.ScheduleTd><S.ContentTxt>{data.scheduleContent}</S.ContentTxt></S.ScheduleTd>
                    </S.ScheduleTr>
                </S.ScheduleTable>
            </S.ContentWrapper>
            <S.BtnWrapper>
                <S.ModifyBtn>수정하기</S.ModifyBtn>
                <S.DeleteBtn>삭제하기</S.DeleteBtn>
            </S.BtnWrapper>
        </S.MainWrapper>
    )
}

export default Detail;