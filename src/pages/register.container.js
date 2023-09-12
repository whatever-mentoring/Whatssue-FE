import { useState, useEffect } from "react";
import * as S from "./register.styles";
import { useNavigate, useLocation } from "react-router-dom";

import close from "../assets/close.png";

function Register (){
    const navigate = useNavigate();
    const location = useLocation();

    return(
        <S.MainWrapper>
            <S.CloseBtn onClick={(e) => navigate("/")}><S.CloseImg src={close}/></S.CloseBtn>
            <S.ContentWrapper>
                <S.ScheduleTable>
                    <S.ScheduleTr>
                        <S.ScheduleFirstTd><S.Circle></S.Circle></S.ScheduleFirstTd>
                        <S.ScheduleTd><S.TitleInput placeholder="제목"/></S.ScheduleTd>
                    </S.ScheduleTr>
                    <S.ScheduleTr>
                        <S.ScheduleFirstTd><S.Circle></S.Circle></S.ScheduleFirstTd>
                        <S.ScheduleTd><S.DateTxt>{location.state}</S.DateTxt></S.ScheduleTd>
                    </S.ScheduleTr>
                    <S.ScheduleTr>
                        <td><S.Circle></S.Circle></td>
                        <S.ScheduleTd><S.ContentInput placeholder="설명"/></S.ScheduleTd>
                    </S.ScheduleTr>
                </S.ScheduleTable>
            </S.ContentWrapper>
            <S.BtnWrapper>
                <S.ModifyBtn>등록하기</S.ModifyBtn>
            </S.BtnWrapper>
        </S.MainWrapper>
    );
}

export default Register;