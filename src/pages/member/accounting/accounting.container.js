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
    const [bookList, setBookList] = useState([]);
    const [claimList, setClaimLiset] = useState([]);

    const fetchData = async () => {
        try{
            axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem("token")}`;
            const response = await axios.get(baseUrl + "/api/account/book/list");
            console.log(response);
            if(response.status === 200){
                setBookList(response.data);
            }
            
            const response2 = await axios.get(baseUrl + "/api/account/claim/list");
            console.log(response2);
            if(response2.status === 200){
                setClaimLiset(response2.data);
            }
        } catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        console.log(location.state)
        if(location.state == 2){
            setCategory(2);
        }
        fetchData();
    }, []);

    const fetchDetail = async () => {
        return;
    };

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
                        <S.AttendanceLi onClick={(e) => setCategory(2)}><S.AttendanceBox clicked={category === 2}>청구된 목록</S.AttendanceBox></S.AttendanceLi>
                    </S.AttendanceUl>
                </S.AttendanceNav>
                {category === 1 ? (
                    <>
                    <S.ContentWrapper>
                        <S.MoneyWrapper>
                            <S.MoneyTitle>양파시 광산동의 머니</S.MoneyTitle>
                            <S.MoneyTxt>{bookList.length > 0 && bookList[0].totalPaidAmount?.split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</S.MoneyTxt>
                        </S.MoneyWrapper>
                        <S.MoneyHistoryWrapper>
                            <S.MoneyHistoryTitle>입/출금 내역</S.MoneyHistoryTitle>
                            <S.MoneyHistoryContent>
                                {bookList.length > 0 && bookList.map((e) => (<AccountingComponent key={e.moneyBookId} data={e}/>))}
                            </S.MoneyHistoryContent>
                        </S.MoneyHistoryWrapper>
                    </S.ContentWrapper>

                    {/* <S.AddBtnWrapper>
                        <S.AddBtn onClick={() => navigate("/accounting/register")}>
                            <img width='20px' height='20px' src={register} alt="register"/>
                        </S.AddBtn>
                    </S.AddBtnWrapper> */}
                    </>
                ) : (
                    <>
                        <S.ContentWrapper>
                        <ChargedComponent fetchDetail={fetchDetail} setIsDetail={setIsDetail}/>
                        </S.ContentWrapper>
                    </>
                )}
            </S.AttendanceWrapper>
            
        </S.MainWrapper>
    )
}

export default Accounting;