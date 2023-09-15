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
    width: 33%;
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

export const MemberTitle = styled.div`
    display: flex;
    flex-direction; row;
    margin: 1vh 0;
`;

export const Txt = styled.div`
    width: 20vw;
    font-size: 10px;
    color: #fff;
    text-align: center;
`;