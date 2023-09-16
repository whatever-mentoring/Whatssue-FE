import { useState } from "react";
import * as S from "./manage.styles";

import JoinComponent from "../../components/member/JoinComponent";
import AbsentComponent from "../../components/member/AbsentComponent";
import MemberListComponent from "../../components/member/MemberListComponent";

import status from "../../assets/status.png";

function Member () {
    const [category, setCategory] = useState(1);
    
    return(
        <S.MainWrapper>
            <S.TitleWrapper>
                <S.TitleTxt>나의 모임</S.TitleTxt>
                <S.GroupWrapper><S.GroupName>양파시 광산동</S.GroupName><S.GroupRole><S.RoleBox><img width="20px" height="20px" src={status}/><S.RoleTxt>참여 상태</S.RoleTxt></S.RoleBox>관리자</S.GroupRole></S.GroupWrapper>
            </S.TitleWrapper>
            <S.AttendanceWrapper>
                <S.AttendanceNav>
                    <S.AttendanceUl style={{'color': '#fff'}}>
                        <S.AttendanceLi onClick={(e) => setCategory(1)}><S.AttendanceBox clicked={category === 1}>가입 요청(5)</S.AttendanceBox></S.AttendanceLi>
                        <S.AttendanceLi onClick={(e) => setCategory(2)}><S.AttendanceBox clicked={category === 2}>공결(1)</S.AttendanceBox></S.AttendanceLi>
                        <S.AttendanceLi onClick={(e) => setCategory(3)}><S.AttendanceBox clicked={category === 3}>멤버 목록</S.AttendanceBox></S.AttendanceLi>
                    </S.AttendanceUl>
                </S.AttendanceNav>
                {category === 1 ? (
                    <JoinComponent/>
                ) : (
                    category === 2 ? (
                        <AbsentComponent/>
                    ) : (
                        <>
                            <S.MemberTitle>
                                <S.Txt>이름</S.Txt>
                                <S.Txt>출석</S.Txt>
                                <S.Txt>공결</S.Txt>
                                <S.Txt>결석</S.Txt>
                            </S.MemberTitle>
                            <MemberListComponent/>
                        </>
                    )
                )}
            </S.AttendanceWrapper>
        </S.MainWrapper>
    )
}

export default Member;