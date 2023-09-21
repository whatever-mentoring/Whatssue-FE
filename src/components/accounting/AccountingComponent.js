import styled from "styled-components";

import moneyPlus from "../../assets/moneyPlus.png";
import moneyMinus from "../../assets/moneyMinus.png";

export default function AccountingComponent (){
    return(
        <MoneyBox>
            <MoneyDate>23.09.10 (일) </MoneyDate>
            <MoneyName>지민혁</MoneyName>
            <MoneyNumBox>
                <MoneyNowMoney>
                    <img width="10px" height="10px" style={{'margin': '0.5vh 1vw 0.5vh 0'}} src={moneyPlus}/>50,000원
                </MoneyNowMoney>
                <MoneyTotal>200,000원</MoneyTotal>
            </MoneyNumBox>
        </MoneyBox>
    )
}


/* 입출금 내역 */
const MoneyBox = styled.div`
    width: 100%;
    height: 7vh;

    display: flex;
    flex-direction: row;
`;

const MoneyDate = styled.div`
    width: 25%;
    color: #fff;
    font-size: 11px;
`;

const MoneyName = styled.div`
    width: 50%;
    color: #fff;
    font-size: 15px;
`;

const MoneyNumBox = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const MoneyNowMoney = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 15px;
    color: #fff;
`;

const MoneyTotal = styled.div`
    font-size: 11px;
    color: #D9D9D9;
`;