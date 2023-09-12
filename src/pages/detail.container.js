import { useEffect, useState } from "react";
import * as S from './detail.styles.js';
import close from "../assets/close.png";
import { useNavigate } from "react-router-dom";

function Detail (){
    const navigate = useNavigate();
    return(
        <S.MainWrapper>
            <S.CloseBtn onClick={(e) => navigate("/")}><S.CloseImg src={close}/></S.CloseBtn>
            <S.ContentWrapper>
                <S.ScheduleTable>
                    <S.ScheduleTr>
                        <S.ScheduleFirstTd><S.Circle></S.Circle></S.ScheduleFirstTd>
                        <S.ScheduleTd><S.TitleTxt>와이어 프레임 작성 회의</S.TitleTxt></S.ScheduleTd>
                    </S.ScheduleTr>
                    <S.ScheduleTr>
                        <S.ScheduleFirstTd><S.Circle></S.Circle></S.ScheduleFirstTd>
                        <S.ScheduleTd><S.DateTxt>9월 3일 월요일</S.DateTxt></S.ScheduleTd>
                    </S.ScheduleTr>
                    <S.ScheduleTr>
                        <td><S.Circle></S.Circle></td>
                        <S.ScheduleTd><S.ContentTxt>유저 플로우 기반으로 와이어프레임 작성하겠습니다. 테블릿 PC 지참해주세요.</S.ContentTxt></S.ScheduleTd>
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