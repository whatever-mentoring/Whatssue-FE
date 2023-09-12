import styled from "styled-components";

export const MainWrapper = styled.div`
    width: 100%;
    height: 100vh;
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
`;

export const ContentWrapper = styled.div`
    height: 75vh;
    width: 90%;
    margin: 0 5%;
    padding: 5vh 0;
`;

export const ContentDateWrapper = styled.div`
    text-align: center;
`;
    
export const ContentDateTxt = styled.div`
    color: #fff;
    font-size: 13px;
    `;
    
export const DateBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin: 2vh 0;
`;

export const PrevDay = styled.div`
    color: #fff;
`;

export const NowDateTxt = styled.div`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`;

export const Nextday = styled.div`
    color: #fff;
`;

export const ScheduleBox = styled.div`
    margin: 5vh 0;
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