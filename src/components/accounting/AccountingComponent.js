import styled from "styled-components";

import moneyPlus from "../../assets/moneyPlus.png";
import moneyMinus from "../../assets/moneyMinus.png";

export default function AccountingComponent ({data}){
    return(
        <MoneyBox>
            <MoneyDate>{data.createAt[0]}.{data.createAt[1]}.{data.createAt[2]}</MoneyDate>
            <MoneyName>{data.bookTitle}</MoneyName>
            <MoneyNumBox>
                <MoneyNowMoney>
                    {parseInt(data.bookAmount) >= 0 ? (
                        <>
                            <img width="10px" height="10px" style={{'margin': '0.5vh 1vw 0.5vh 0', 'lineHeight': '20px'}} src={moneyPlus}/>{data.bookAmount.split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                        </>
                    ) : (
                        <>
                            <img width="10px" height="3px" style={{'margin': '1vh 1vw 0vh 0', 'lineHeight': '20px'}} src={moneyMinus}/>{data.bookAmount.split(".")[0].split("-")[1].replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                        </>
                    )}
                </MoneyNowMoney>
                {/* <MoneyTotal>{data.totalPaidAmount.split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</MoneyTotal> */}
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
    width: 45%;
    color: #fff;
    font-size: 15px;
`;

const MoneyNumBox = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    white-space: nowrap;
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