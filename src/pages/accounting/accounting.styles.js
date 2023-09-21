import styled from "styled-components";

export const MainWrapper = styled.div`
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    overflow: auto;
    position: relative;
    background-color: #171717;

`;

export const TitleWrapper = styled.div`
    height: 15vh;
    width: 90%;
    margin: 0 5%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const TitleTxt = styled.div`
    color: #fff;
    font-size: 13px;
`;

export const GroupWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const GroupName = styled.div`
    color: #51F8C4;
    font-size: 25px;
    font-weight: bold;
`;

export const GroupRole = styled.div`
    font-size: 13px;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const RoleBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin: 0 1em;
    padding: 0.5em;
    background-color: #282828;
    border-radius: 15px;
`;

export const RoleTxt = styled.div`
    white-space: nowrap;
    margin-left: 5px;
`;


export const AttendanceWrapper = styled.div`
    width: 90%;
    margin: 0 5%;
`;

export const AttendanceNav = styled.div`
    width: 100%;
`;

export const AttendanceUl = styled.ul`
    display: flex;
    flex-direction: row;

    padding-inline-start: 0;
    border-bottom: 0.7px solid #282828;
`;

export const AttendanceLi = styled.li`
    list-style: none;
    width: 50%;
`;

export const AttendanceBox = styled.div`
    width: 90%;
    text-align:center;
    margin: 0 5%;
    padding: 0.5em 0;

    border-bottom: ${(props) => 
        props.clicked ? `2px solid #51F8C4` : `none`
    };

    color: ${(props) => 
        props.clicked ? `#51F8C4` : `#fff`
    };
`;

export const ContentWrapper = styled.div`
    width: 100%;
    height: 65vh; 
`;

export const MoneyWrapper = styled.div`
    width: 100%;
    height: 20vh;
    background-color: #282828;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const MoneyTitle = styled.div`
    font-size: 17px;
    color: #d9d9d9;
    width: 90%;
    padding: 2vh 0;
`;

export const MoneyTxt = styled.div`
    width: 100%;
    height: 70%;
    line-height: 8vh;
    text-align: center;
    font-size: 30px;
    font-weight: 550;
    color: #fff;
`;

export const MoneyHistoryWrapper = styled.div`

`;

export const MoneyHistoryTitle = styled.div`
    font-size: 20px;
    font-weight: 550;
    color: #fff;
    padding: 3vh 0;
`;

export const MoneyHistoryContent = styled.div`

`;

/* 입출금 내역 */
export const MoneyBox = styled.div`
    width: 100%;
    height: 7vh;

    display: flex;
    flex-direction: row;
`;

export const MoneyDate = styled.div`
    width: 25%;
    color: #fff;
    font-size: 11px;
`;

export const MoneyName = styled.div`
    width: 50%;
    color: #fff;
    font-size: 15px;
`;

export const MoneyNumBox = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const MoneyNowMoney = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 15px;
    color: #fff;
`;

export const MoneyTotal = styled.div`
    font-size: 11px;
    color: #D9D9D9;
`;

/* 청구 목록 */

export const ChargedWrapper = styled.div`
    // width: 100%;
    height: 8vh;
    background-color: #282828;
    border-radius: 10px;
    padding: 0 5vw;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ChargedTitle = styled.div`
    font-size: 17px;
    font-weight: 550;
    color: #fff;
    width: 40%;
`;

export const ChargedDate = styled.div`
font-size: 13px;
color: #fff;
width: 30%;
`;

export const ChargedMoney = styled.div`
font-size: 20px;
font-weight: 550;
color: #fff;
width: 30%;
text-align: right;
`;

/* 청구 상세 보기 */
export const ChargedDetailWrapper = styled.div`
    width: 100%;
`;

export const ChargedDetailTitle = styled.div`
    color: #fff;
    font-size: 20px;
    text-align: center;
    margin: 2vh 0;
`;

export const ChargedDetailCategory = styled.div`
    display: flex;
    flex-direction: row;
    // padding: 0 5vw;
    color: #fff;
    font-size: 13px;
    text-align: center;
`;

export const ChargedDetailName =styled.div`
    width: 30%;
`;

export const ChargedDetailMoney = styled.div`
    width: 40%;
`;

export const ChargedDetailChecked = styled.div`
    width: 30%;
`;

export const ChargedContentWrapper = styled.div`

`;

/* 등록 버튼 */

export const AddBtnWrapper = styled.div`
    width: 100%;
    height: 10vh;
`;

export const AddBtn = styled.div`
    position: fixed;
    margin-left: 78vw;
    width: 12vw;
    height: 12vw;
    line-height: 13.5vw;
    background-color: #51F8C4;
    border-radius: 50px;
    z-index: 101;

    color: #000;
    text-align: center;
    vertical-align: middle;
`;