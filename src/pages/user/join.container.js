import { useState, useEffect } from "react";
import * as S from './join.styles.js';

function Join (props) {
    const [data, setData] = useState({
        name: "",
        id: "",
        password: "",
        email: "",
        phone: "",
    });

    const handlePage = async (e) => {
        console.log(props);
        props.setPage((prev) => prev + 1);
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
                        value={data.name}
                        onChange={(e) => setData((prev) => ({...prev, "name": e.target.value}))}
                    />
                </S.NameWrapper>
                <S.NameWrapper>
                    <S.NameTxt>아이디 <span style={{'color': 'red'}}>*</span></S.NameTxt>
                    <S.IdContentWrapper>
                        <S.IdInput placeholder="아이디" value={data.id} onChange={(e) => setData((prev) => ({...prev, id: e.target.value}))}/>
                        <S.IdCheckBtn active={data.id.length > 0}>중복 확인</S.IdCheckBtn>
                    </S.IdContentWrapper>
                </S.NameWrapper>
                <S.NameWrapper>
                    <S.NameTxt>비밀번호 <span style={{'color': 'red'}}>*</span></S.NameTxt>
                    <S.NameInput placeholder="비밀번호"/>
                    <S.NameInput placeholder="비밀번호 확인"/>
                </S.NameWrapper>
                <S.NameWrapper>
                    <S.NameTxt>이메일 <span style={{'color': 'red'}}>*</span></S.NameTxt>
                    <S.NameInput placeholder="ex) whatssue@gmail.com"/>
                </S.NameWrapper>
                <S.NameWrapper>
                    <S.NameTxt>전화번호 <span style={{'color': 'red'}}>*</span></S.NameTxt>
                    <S.NameInput placeholder="ex) 01012345678"/>
                </S.NameWrapper>
            <S.NextBtn active={data.name.length > 0} onClick={handlePage}>회원가입</S.NextBtn>
            </S.ContentWrapper>
            </S.MainBox>
        </S.MainWrapper>
    )
};

export default Join;