import { useState, useEffect } from "react";
import * as S from './FirstMaster.styles.js';

function FirstMaster (props) {
    const [name, setName] = useState("");

    const handlePage = async (e) => {
        console.log(props);
        props.setPage((prev) => prev + 1);
    };


    return (
        <S.MainWrapper>
            <S.MainBox>
            <S.ContentWrapper>
                <S.NameWrapper>
                    <S.NameTxt>이름 <span style={{'color': 'red'}}>*</span></S.NameTxt>
                    <S.NameInput 
                        placeholder="이름"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </S.NameWrapper>
                <S.NameWrapper>
                    <S.NameTxt>아이디 <span style={{'color': 'red'}}>*</span></S.NameTxt>
                    <S.IdContentWrapper>
                        <S.IdInput placeholder="아이디"/>
                        <S.IdCheckBtn>중복 확인</S.IdCheckBtn>
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
            </S.ContentWrapper>
            <S.NextBtn active={name.length > 0} onClick={handlePage}>다음</S.NextBtn>
            </S.MainBox>
        </S.MainWrapper>
    )
};

export default FirstMaster;