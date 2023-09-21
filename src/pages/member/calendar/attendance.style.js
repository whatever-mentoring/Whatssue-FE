import styled from "styled-components";


export const MainWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #171717;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CloseBtn = styled.div`
    color: #fff;
    height: 10vh;
    width: 100%;
`;

export const CloseImg = styled.img`
    position: absolute;
    top: 6.5vh;
    right: 5%;
    width: 1rem;
    height: 1rem;
`;

export const CheckIcon = styled.img`
    height: 42px;
    margin-top :134px;
`;

export const TitleTxt = styled.div`
    color:#FFFFFF;
    font-size: 20px;
    font-weight:550;
    margin-top:19px;
`
export const AttendanceNum = styled.input`
    width: 55%;
    height: 50px;
    color: #51F8C4;
    border-radius: 10px;
    border: 1px solid #51F8C4;
    background: #171717;
    border-radius: 10px;
    text-align:center;
    margin-top: 24px;
    font-size: 35px;
    font-weight: 500;
`;

export const AttendanceBtn = styled.button`
    width: 56%;
    height: 50px;
    color: #171717;
    font-size: 15px;
    font-weight: bold;
    background-color: #51F8C4;
    border: 1px solid #51F8C4;
    border-radius: 10px;
    margin: 19px 0 15px 0;
`;