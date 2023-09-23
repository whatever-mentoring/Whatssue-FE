import styled from "styled-components";

export const MainWrapper = styled.div`
    width: 100%;
    overflow: auto;
    background-color: #171717;

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

export const ContentWrapper = styled.div`
    height: 78vh;
    width: 90%;
    margin: 0 5%;
`;

export const RegisterWrapper = styled.div`
    width: 100%;
    height: 25%;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const RegisterTitle = styled.div`
    text-align: center;
    font-size: 25px;
    font-weight: 550;
    color: #fff;
    margin-top: 2vh;
`

export const Circle = styled.div`
width: 10px;
    height: 10px;
    border-radius: 50px;
    background-color: #51F8C4;
    `;
    
    export const ScheduleTable = styled.table`
    color: #fff;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 1.5em;
    
    `;
    
    export const ScheduleTr = styled.tr`
    padding: 1em 0;
    
`;

export const ScheduleFirstTd = styled.td`
    height: 100%;
    padding-right: 1em;
`;

export const ScheduleTd = styled.td`
    display: flex;
    width: 100%;
    // justify-content: space-between;
    align-items: center;
`;

export const TitleInput = styled.input`
    width: 100%;
    padding: 10px;
    color: #fff;
    background-color: #171717;
    font-size: 20px;
    font-weight: bold;

    &:focus{
        outline: none;
    }

    &:placeholder{
        color: #5F5F5F;
    }
`;

export const TitleLenTxt = styled.div`
font-size: 12px;
color: #51F8C4;
`;

export const DateTxt = styled.div`
    font-size: 18px;
    font-weight: bold;

`;

export const TimeTxt = styled.div`
    font-size: 18px;
    font-weight: bold;
    width: 100%;

`;

export const AccountingLabel = styled.label`
    margin-right: 5vw;
`;

export const AccountingInput = styled.input`
    font-size: 15px;
    color: #fff;
    appearance: none;
    border: max(2px, 0.1em) solid gray;
    border-radius: 50%;
    width: 1.25em;
    height: 1.25em;
    transition: border 0.1s ease-in-out;

    &:focus{
        border: 0.4em solid #51F8C4;
        // outline-offset: max(2px, 0.1em);
}
`;

export const AccountingSpan = styled.span`
    margin: 0 0 1vh 1vw;
`;

export const TimeSelect = styled.select`
    background-color: #171717;
    border: 1px solid #171717;
    color: #fff;
    font-size: 17px;
    text-align: center;

    &:focus{
        outline: none;
    }
`;

export const TimeInput = styled.input`
    background-color: #282828;
`;

export const ContentInput = styled.input`
    width: 50%;
    padding: 10px;
    color: #fff;
    background-color: #171717;
    font-size: 15px;
    

    &:focus{
        outline: none;
    }

    &:placeholder{
        color: #5F5F5F;
    }
`

export const ContentWon = styled.div`
    font-size: 15px;
    margin-left: 2vw;
`;

export const BtnWrapper = styled.div`
    height: 12vh;
`;

export const ModifyBtn = styled.div`
    width: 90%;
    // height: 30%;
    // line-height: 50px;
    padding: 5% 0;
    margin: 0 5%;
    background-color: #51F8C4;
    border-radius: 10px;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 15px;
`;

export const DeleteBtn = styled.div`
    width: 90%;
    padding: 5% 0;
    margin: 0 5%;
    background-color: #282828;
    color: #FF4444;
    border-radius: 10px;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
`;