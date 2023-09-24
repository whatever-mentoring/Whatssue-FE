import { useState, useEffect, useRef } from "react";
import * as S from './login.styles.js';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import logo from "../../assets/logo.png";

function Login (){
    const baseUrl = "http://115.85.183.74:8090/"
    const navigate = useNavigate();

    const [data, setData] = useState({
        "memberNickName": "",
        "memberPw": ""
    });

    const handleLogin = async () => {
        try{
            const response = await axios.post(baseUrl + "api/user/login", data)
            console.log(response);
            if(response.status === 200){
                window.localStorage.setItem("token", response.data);
                navigate("/");
            } 
        } catch(error){
            console.log(error);
            if(error.response.status === 400){
                alert("아이디 또는 비밀번호가 일치하지 않습니다.");
                setData({
                    "memberNickName": "",
                    "memberPw": ""
                });
            }
        }
    }

    return (
        <S.MainWrapper>
            <S.TitleWrapper>
                <S.TitleTxt>쉬워진 모임 관리</S.TitleTxt>
                <S.LogoTxt><img width="70px" height="70px" src={logo}/></S.LogoTxt>
            </S.TitleWrapper>
            <S.ContentWrapper>
                <S.ContentId 
                    placeholder="아이디"
                    value={data.memberNickName}
                    onChange={(e) => setData((prev) => ({...prev, "memberNickName": e.target.value}))}
                    onKeyDown={(e) => {if(e.key === 'Enter'){handleLogin()}}}
                />
                <S.ContentPw 
                    placeholder="비밀번호"
                    value={data.memberPw}
                    onChange={(e) => setData((prev) => ({...prev, "memberPw": e.target.value}))}
                    onKeyDown={(e) => {if(e.key === 'Enter'){handleLogin()}}}
                />
                <S.ContentBtn onClick={handleLogin}>로그인</S.ContentBtn>
                <S.JoinTxt>아직 계정이 없으신가요? <Link to="/join" style={{'color': '#fff'}}>회원가입</Link></S.JoinTxt>
            </S.ContentWrapper>
        </S.MainWrapper>
    )
}

export default Login;