import { useState, useEffect } from "react";
import * as S from './SecondMaster.styles.js';

function SecondMaster (props) {
    const onSubmitData = (e) => {
        props.setPage((prev) => prev + 1);
    };

    return (
        <S.MainWrapper>
            <S.ContentWrapper>
                <S.TitleTxt>전화번호 <span style={{'color': 'red'}}>*</span></S.TitleTxt>
                <S.BoxWrapper>
                    <S.Input placeholder="ex) 01012345678"/>
                    <S.Btn>인증번호 받기</S.Btn>
                </S.BoxWrapper>
                <S.BoxWrapper>
                    <S.Input placeholder="인증번호"/>
                    <S.Btn>확인</S.Btn>
                </S.BoxWrapper>
            </S.ContentWrapper>
            <S.JoinBtn onClick={onSubmitData}>회원가입</S.JoinBtn>
        </S.MainWrapper>
    )
};

export default SecondMaster;