import styled from "styled-components";

export const MainWrapper = styled.div`
    width: 100%;
    height: 100vh;
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
justify-content: space-between;
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

export const ContentInput = styled.input`
    width: 100%;
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