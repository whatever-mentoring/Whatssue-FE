import styled from "styled-components";

export const MainWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #171717;

`;

export const GroupNameTxt = styled.div`
    width: 100%;
    height: 15vh;
    line-height: 18vh;
    color: #51F8C4;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    
`;

export const CalendarWrapper = styled.div`
    width: 90%;
    height: 73vh;
    align-items: center;
    margin: 0 5%;
`;

export const CalendarBox = styled.div`
    margin: 0 5%;
`;

export const DateTxt = styled.div`
    font-weight: bold;
    font-size: 20px;
    color: #fff;
    margin-top: 2rem;
    margin-left: 0.5rem;
`;

export const ScheduleWrapper = styled.div`
    background-color: #282828;
    border-radius: 10px;
    // padding: 0.1em 0.5em 1em 0.5em ;
    padding: 0 5px;
    margin: 1em 0;
`;

export const ScheduleUl = styled.ul`
    padding-left: 10px;
    overflow-y: scroll;
`;

export const ScheduleLi = styled.li`
    display: flex;
    flex-direction: row;
    margin: 1em 0;
`;

export const ScheduleLine = styled.div`
    width: 3px;
    height: 29px;
    background-color: #51F8C4;
    margin-right: 15px;
`;

export const ScheduleTxt = styled.div`
    padding: 0.1em 0;
`;

export const AddBtnWrapper = styled.div`
    width: 100%;
    height: 12vh;
`;

export const AddBtn = styled.div`
    position: absolute;
    margin-left: 83vw;
    width: 12vw;
    height: 12vw;
    line-height: 13.5vw;
    background-color: #51F8C4;
    border-radius: 50px;

    color: #000;
    text-align: center;
    vertical-align: middle;
    
`;