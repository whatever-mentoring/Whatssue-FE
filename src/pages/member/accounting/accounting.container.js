import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./accounting.styles";
import axios from "axios";
import Menu from "../../../components/nav/MemberNav";
import AccountingComponent from "../../../components/accounting/AccountingComponent";
import ChargedComponent from "../../../components/accounting/ChargedComponent";
import ChargedDetailComponent from "../../../components/accounting/ChargedDetailComponent";

import status from "../../../assets/status.png";
import register from "../../../assets/register.png";

function Accounting () {
    const navigate = useNavigate();
    const location = useLocation();

    const baseUrl = "http://115.85.183.74:8090";
    const [category, setCategory] = useState(1);
    const [isDetail, setIsDetail] = useState(false);

    useEffect(() => {
        console.log(location.state)
        if(location.state == 2){
            setCategory(2);
        }
    }, [])
    return(
        <S.MainWrapper>
            <Menu />
            <S.TitleWrapper>
                <S.TitleTxt>나의 모임</S.TitleTxt>
                <S.GroupWrapper><S.GroupName>양파시 광산동</S.GroupName><S.GroupRole><S.RoleBox><img width="20px" height="20px" src={status}/><S.RoleTxt>참여 상태</S.RoleTxt></S.RoleBox>멤버</S.GroupRole></S.GroupWrapper>
            </S.TitleWrapper>
            <S.AttendanceWrapper>
                <S.AttendanceNav>
                    <S.AttendanceUl style={{'color': '#fff'}}>
                        <S.AttendanceLi onClick={(e) => setCategory(1)}><S.AttendanceBox clicked={category === 1}>입출금 내역</S.AttendanceBox></S.AttendanceLi>
                        <S.AttendanceLi onClick={(e) => setCategory(2)}><S.AttendanceBox clicked={category === 2}>청구 목록</S.AttendanceBox></S.AttendanceLi>
                    </S.AttendanceUl>
                </S.AttendanceNav>
                {category === 1 ? (
                    <>
                    <S.ContentWrapper>
                        <S.MoneyWrapper>
                            <S.MoneyTitle>양파시 광산동의 머니</S.MoneyTitle>
                            <S.MoneyTxt>200,000원</S.MoneyTxt>
                        </S.MoneyWrapper>
                        <S.MoneyHistoryWrapper>
                            <S.MoneyHistoryTitle>입/출금 내역</S.MoneyHistoryTitle>
                            <S.MoneyHistoryContent>
                                <AccountingComponent/>
                                
                            </S.MoneyHistoryContent>
                        </S.MoneyHistoryWrapper>
                    </S.ContentWrapper>
                    </>
                ) : (
                    isDetail ? (
                        <S.ContentWrapper>
                            <S.ChargedDetailWrapper>
                                <S.ChargedDetailTitle>신규 회비</S.ChargedDetailTitle>
                                <S.ChargedDetailCategory>
                                    <S.ChargedDetailName>이름</S.ChargedDetailName>
                                    <S.ChargedDetailMoney>회비</S.ChargedDetailMoney>
                                    <S.ChargedDetailChecked>납부여부</S.ChargedDetailChecked>
                                </S.ChargedDetailCategory>
                                <S.ChargedContentWrapper>
                                    <ChargedDetailComponent/>
                                    <ChargedDetailComponent/>
                                    <ChargedDetailComponent/>
                                </S.ChargedContentWrapper>
                            </S.ChargedDetailWrapper>
                        </S.ContentWrapper>
                    ) : (
                    <>
                    <S.ContentWrapper>
                        <ChargedComponent/>
                        <ChargedComponent/>
                    </S.ContentWrapper>
                    </>
                    )
                )}
            </S.AttendanceWrapper>
            
        </S.MainWrapper>
    )
}

export default Accounting;