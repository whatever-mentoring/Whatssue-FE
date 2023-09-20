import styled from "styled-components";

export const MainWrapper = styled.div`
    width: 100%;
    // height: 100vh;
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

export const ContentWrapper = styled.div`
    height: 75vh;
    width: 90%;
    margin: 0 5%;
    padding: 5vh 0;
`;

export const ContentDateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-itesm: center;
    justify-content: center;
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

export const TodayBtn = styled.div`
    color: #fff;
    font-size: 15px;
    background-color: #282828;
    border-radius: 30px;
    padding: 0.3em 0;
    width: 18vw;
    margin: 0 36vw;
    white-space: nowrap;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: center;
`;

export const ScheduleBox = styled.div`
    margin: 1vh 0;
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

export const ScheduleImg = styled.img`
    margin-top: 2px;
`;

export const ScheduleTxt = styled.div`
    padding: 0.1em 0;
    margin-left: 0.5em;
`;

export const AttendanceWrapper = styled.div`
    height: 35vh;
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
    width: 50%;
    margin: 0 25%;
    padding: 0.5em 0;

    border-bottom: ${(props) => 
        props.clicked ? `2px solid #51F8C4` : `none`
    };

    color: ${(props) => 
        props.clicked ? `#51F8C4` : `#fff`
    };
`;

export const AttendanceNameWrapper = styled.div`
    // height: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    text-align: center;
    // align-items: center;
    justify-content: center;
`;

export const AttendanceMemberNum= styled.div`
    width: 100%;
    height: 8vh;
    line-height: 8vh;

    color: #51F8C4;
    font-size: 15px;

`;

export const AttendanceRestart= styled.div`
    width: 100%;
    height: 8vh;
    line-height: 8vh;
    
    background-color: #51F8C4;
    border-radius: 10px;
    color: #171717;
    font-weight: bold;
    font-size: 15px;
`;

export const AttendanceName = styled.div`
    color: #fff;
    width: 18vw;
    margin: 0.5em 0;
    text-align: center;
`;

// 모달창
export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalBox = styled.div`
    background-color: #fff;
    border-radius: 10px;
    width: 80vw;
    height: 25vh;
    z-index: 101;

    position: absolute;
    top: 35vh;
    left: 10vw;

    // display: flex;
    // flex-direction: column;
    // text-align: center;
    // justify-content: center;
    // align-items: center;
`;

export const ModalInnerBox = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ModalTxt = styled.div`
    font-size: 5vw;
    font-weight: bold;
    color: #171717;
    width: 100%;
    height: 15vh;
    line-height: 15vh;
    text-align: center;
`;

export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 10vh;
    // margin-top: 4vh;

    text-align: center;
    justify-content: center;
    align-items: flex-start;
`;

export const DoneBtnWrapper = styled.div`
    display: flex;
    width: 100%;
    margin: 1vh 0;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

export const CancleBtn = styled.div`
    background-color: #e7e7e7;
    color: #5F5F5F;
    font-size: 15px;
    font-weight: bold;
    border-radius: 7px;
    padding: 2vh 11vw; 
    white-space: nowrap;
    margin: 0 5vw;
`;

export const CheckdBtn = styled.div`
    background-color: #51F8C4;
    color: #171717;
    font-size: 15px;
    font-weight: bold;
    border-radius: 7px;
    padding: 2vh 11vw; 
    white-space: nowrap;
    margin: 0 5vw;
`;

export const AttendanceNum = styled.div`
    font-size: 40px;
    font-weight: bold;
    color: #171717;
`;

export const AttendanceTimer = styled.div`
    font-size: 20px;
    color: #5f5f5f;
`;

export const DoneBtn = styled.div`
    width: 90%;
    height: 50px;
    line-height: 50px;
    border-radius: 7px;
    background-color: #e7e7e7;
    color: #FF4444;
`;