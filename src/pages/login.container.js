import { useState, useEffect } from "react";
import * as S from './login.styles.js';
import { Link } from "react-router-dom";

function Login (){
    return (
        <S.MainWrapper>
            <S.TitleWrapper>
                <S.TitleTxt>쉬워진 모임 관리</S.TitleTxt>
                <S.LogoTxt>왓슈?</S.LogoTxt>
            </S.TitleWrapper>
            <S.ContentWrapper>
                <S.ContentId placeholder="아이디"/>
                <S.ContentPw placeholder="비밀번호"/>
                <S.ContentBtn>로그인</S.ContentBtn>
                <S.JoinTxt>아직 계정이 없으신가요? <Link to="/join" style={{'color': '#fff'}}>회원가입</Link></S.JoinTxt>
            </S.ContentWrapper>
        </S.MainWrapper>
    )
}

export default Login;