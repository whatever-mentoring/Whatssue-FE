import { useState, useEffect } from "react";
import * as S from "./chargedRegister.styles";
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment";
import axios from "axios";

import close from "../../../assets/close.png";
import clock from "../../../assets/clock.png";
import whiteMoneyCircle from "../../../assets/whiteMoneyCircle.png";
import moneyCircle from "../../../assets/moneyCircle.png";

function ChargedRegister (){
    const baseUrl = "http://115.85.183.74:8090/";
    const navigate = useNavigate();
    const location = useLocation();

    const day = ['일', '월', '화', '수', '목', '금', '토'];
    const [accountingTitle, setAccountingTitle] = useState("");
    const [price, setPrice] = useState(0);
    const date = new Date();

    const handleCharged = async () => {
        try{
            if(accountingTitle === "" || price === 0){
                alert("필수 정보를 입력하셔야 합니다.");
                return;
            }
            console.log(moment(date).format("YYYY-MM-DD"),`${price.replace(/\D/g, '')}`,accountingTitle);
            axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem("token")}`;
            const response = await axios.post(baseUrl + "api/account/claim", {
                "claimName": accountingTitle,
                "claimAmount": `${price.replace(/\D/g, '')}.0`,
                "claimDate": moment(date).format("YYYY-MM-DD")
            })
            console.log(response);
        } catch(error){
            console.log(error);
        }
    };

    return(
        <S.MainWrapper>
            <S.CloseBtn><S.CloseImg src={close} onClick={(e) => navigate("/accounting", {state: 2})}/></S.CloseBtn>
            <S.ContentWrapper>
                <S.RegisterWrapper>
                    <img src={moneyCircle} width="35px" height="35px"/>
                    <S.RegisterTitle>청구 등록</S.RegisterTitle>
                </S.RegisterWrapper>
                <S.ScheduleTable>
                    <S.ScheduleTr>
                        <S.ScheduleFirstTd><S.Circle></S.Circle></S.ScheduleFirstTd>
                        <S.ScheduleTd>
                            <S.TitleInput 
                                placeholder="내역 이름" 
                                value={accountingTitle} 
                                onChange={(e) => setAccountingTitle(e.target.value)}
                            />
                        </S.ScheduleTd>
                    </S.ScheduleTr>
                    <S.ScheduleTr>
                        <S.ScheduleFirstTd><img src={clock}/></S.ScheduleFirstTd>
                        <S.ScheduleTd>
                            <S.DateTxt>{location.state}</S.DateTxt>
                            <S.TimeTxt>
                                {moment(date).format("YYYY년 M월 D일 ")}{day[moment(date).format("e")]}요일
                            </S.TimeTxt>
                        </S.ScheduleTd>
                    </S.ScheduleTr>
                    <S.ScheduleTr>
                        <td><img width="18px" height="18px" src={whiteMoneyCircle}/></td>
                        <S.ScheduleTd>
                            <S.ContentInput 
                                placeholder="금액" 
                                value={price}
                                onChange={(e) => {
                                    const inputPrice = e.target.value.replace(/\D/g, '');
                                    const formattedPrice = inputPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                                    setPrice(formattedPrice);
                                }}
                            />
                            <S.ContentWon>원</S.ContentWon>
                        </S.ScheduleTd>
                    </S.ScheduleTr>
                </S.ScheduleTable>
            </S.ContentWrapper>
            <S.BtnWrapper>
                <S.ModifyBtn onClick={handleCharged}>등록하기</S.ModifyBtn>
            </S.BtnWrapper>
        </S.MainWrapper>
    );
}

export default ChargedRegister;