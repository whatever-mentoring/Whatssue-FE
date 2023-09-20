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
export const TextWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    text-align:left;
    margin-top:34px;
`;

export const ReasonTxt = styled.div`
    color: #FFFFFF;
    border-radius: 10px;
    font-size: 15px;
    margin-bottom:14px;
`;

export const ReasonInput = styled.textarea`
    width: 90%;
    height: 176px;
    color: #FFFFFF;
    border-radius: 10px;
    border: 1px solid #FFF;
    background: #171717;
    text-align:left;
    font-size: 15px;
    padding : 5vw 5vw 5vw 5vw; 
    font-weight: 500;
    font-family: 'Noto Sans KR', sans-serif;

    &:focus{
        outline:none;
    }
`;

export const AbsentBtn = styled.button`
    width: 100%;
    height: 50px;
    color: #171717;
    font-size: 15px;
    font-weight: bold;
    background-color: #51F8C4;
    border: 1px solid #51F8C4;
    border-radius: 10px;
    margin: 19px 0 15px 0;
`;