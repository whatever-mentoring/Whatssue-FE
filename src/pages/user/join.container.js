import { useState, useEffect } from "react";
import axios from "axios";
import * as S from './join.styles.js';
import { useNavigate } from "react-router-dom";

function Join (props) {
    const baseUrl = "http://115.85.183.74:8090/";
    const navigate = useNavigate();

    const [idOk, setIdOk] = useState(false);
    const [chkPw, setChkPw] = useState("");
    const [data, setData] = useState({
        memberName: "",
        memberNickName: "",
        memberPw: "",
        memberEmail: "",
        memberPhone: "",
    });

    const checkId = async() => {
        const response = await axios.post(baseUrl + "api/user/sign-up/check-id", {"memberNickName": data.memberNickName})
        console.log(response);
        if(response.data === '사용가능한 id입니다'){
            alert("사용 가능한 아이디입니다.");
            setIdOk(true);
        } else {
            alert("이미 사용 중인 아이디입니다.");
        }
    }

    const handlePage = async (e) => {
        if(!idOk){
            alert("아이디 중복 확인을 진행해주세요.");
            return;
        }
        const response = await axios.post(baseUrl + "api/user/sign-up", data);
        console.log(response);
        if(response.status === 200){
            alert("회원가입이 완료되었습니다.");
            navigate("/login");
        }
        
    };


    return (
        <S.MainWrapper>
            <S.TitleWrapper>회원가입</S.TitleWrapper>
            <S.MainBox>
            <S.ContentWrapper>
                <S.NameWrapper>
                    <S.NameTxt>이름 <span style={{'color': 'red'}}>*</span></S.NameTxt>
                    <S.NameInput 
                        placeholder="이름"
                        value={data.memberName}
                        onChange={(e) => setData((prev) => ({...prev, memberName: e.target.value}))}
                    />
                </S.NameWrapper>
                <S.NameWrapper>
                    <S.NameTxt>아이디 <span style={{'color': 'red'}}>*</span></S.NameTxt>
                    <S.IdContentWrapper>
                        <S.IdInput 
                            placeholder="아이디" 
                            value={data.memberNickName} 
                            onChange={(e) => {setData((prev) => ({...prev, memberNickName: e.target.value})); if(idOk){setIdOk(false);}}}
                        />
                        <S.IdCheckBtn active={data.memberNickName.length > 0} onClick={checkId}>중복 확인</S.IdCheckBtn>
                    </S.IdContentWrapper>
                </S.NameWrapper>
                <S.NameWrapper>
                    <S.NameTxt>비밀번호 <span style={{'color': 'red'}}>*</span></S.NameTxt>
                    <S.NameInput 
                        placeholder="비밀번호"
                        value={data.memberPw}
                        onChange={(e) => setData((prev) => ({...prev, memberPw: e.target.value}))}
                    />
                    <S.NameInput 
                        placeholder="비밀번호 확인"
                        value={chkPw}
                        onChange={(e) => setChkPw(e.target.value)}
                    />
                    {
                        data.memberPw !== chkPw &&(
                            <S.PwErrorMsg>비밀번호가 일치하지 않습니다.</S.PwErrorMsg>
                        )
                    }
                </S.NameWrapper>
                <S.NameWrapper>
                    <S.NameTxt>이메일 <span style={{'color': 'red'}}>*</span></S.NameTxt>
                    <S.NameInput 
                        placeholder="ex) whatssue@gmail.com"
                        value={data.memberEmail}
                        onChange={(e) => setData((prev) => ({...prev, memberEmail: e.target.value}))}
                    />
                </S.NameWrapper>
                <S.NameWrapper>
                    <S.NameTxt>전화번호 <span style={{'color': 'red'}}>*</span></S.NameTxt>
                    <S.NameInput 
                        placeholder="ex) 01012345678"
                        value={data.memberPhone}
                        onChange={(e) => setData((prev) => ({...prev, memberPhone: e.target.value}))}
                    />
                </S.NameWrapper>
            <S.NextBtn active={data.memberName !== "" && data.memberNickName !== "" && data.memberPw !== "" && data.memberEmail !== "" && data.memberPhone !== "" && data.memberPw === chkPw} onClick={handlePage}>회원가입</S.NextBtn>
            </S.ContentWrapper>
            </S.MainBox>
        </S.MainWrapper>
    )
};

export default Join;