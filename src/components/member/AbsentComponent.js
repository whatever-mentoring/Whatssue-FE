import { useState } from "react";
import styled from "styled-components";

import close from "../../assets/blackClose.png";

export default function AbsentComponent ({abssentList}) {
    const [isModal, setIsModal] = useState(false);
    return(
        <>
        <MemberContent key={abssentList.applyOfficialAbsentId} onClick={(e) => setIsModal(true)}>
            <MemberBox>
                <MemberLeftBox>
                    <MemberName>{abssentList.memberName}</MemberName>
                    <MemberSchedule>{abssentList.scheduleTitle}</MemberSchedule>
                    <MemberDate>{abssentList.absentDate.split("-")[1]}월 {abssentList.absentDate.split("-")[2]}일</MemberDate>
                </MemberLeftBox>
                <MemberBtnBox>
                    <MemberAcceptBtn>수락</MemberAcceptBtn>
                    <MemberDenyBtn>거절</MemberDenyBtn>
                </MemberBtnBox>
            </MemberBox>
        </MemberContent>
        
            {/* 모달창 */}
            {isModal &&
                (<ModalWrapper>
                    <ModalBox>
                        <ModalCloseBtn><ModalCloseImg onClick={(e) => setIsModal(false)} src={close} width="18px" height="18px"/></ModalCloseBtn>
                        <ModalTxt><ModalLine></ModalLine><ModalTitle>{abssentList.scheduleTitle}</ModalTitle></ModalTxt>
                        <ModalReasonTxt>공결 신청 사유</ModalReasonTxt>
                        <ModalReasonContent>{abssentList.absentReason}</ModalReasonContent>
                    </ModalBox>
                </ModalWrapper>)
            }
        </>
    )
}


const MemberContent = styled.div`
    margin: 2vh 0;
`;

const MemberBox = styled.div`
    width: 100%;
    height: 8vh;
    background-color: #282828;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const MemberLeftBox = styled.div`
    display: flex;
    flex-direction: row;
    
    align-items: center;
    // text-align:center;

    margin-left: 3vw;
    color: #fff;
    width: 60%;
`;

const MemberName = styled.div`
    font-size: 17px;
    white-space: nowrap;
    width: 30%;
`;

const MemberSchedule = styled.div`
    font-size: 11px;
    // margin: 0 2vw;
    white-space: nowrap;
    width: 30%;
`;

const MemberDate = styled.div`
    font-size: 11px;
    // margin: 0 2vw;
    color: #51F8C4;
    white-space: nowrap;
    width: 40%;
    text-align: center;
`

const MemberBtnBox = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    text-align:center;
    justify-content: center;

    margin-right: 3vw;
    height: 100%;
    width: 40%;
`;

const MemberAcceptBtn = styled.div`
height: calc(7vh * 0.7);
line-height: calc(7vh * 0.7);
width: 17vw;
background-color: #51F8C4;
color: #171717;
margin: 0 1vw;
border-radius: 7px;
font-size: 11px;
`;

const MemberDenyBtn = styled.div`
height: calc(7vh * 0.7);
line-height: calc(7vh * 0.7);
width: 17vw;
background-color: #FF4444;
color: #171717;
margin: 0 1vw;
border-radius: 7px;
font-size: 11px;
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
    width: 90vw;
    height: 20vh;
    z-index: 101;

    position: absolute;
    top: 40vh;
    left: 5vw;

    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

export const ModalCloseBtn = styled.div`
    position: relative;
`;

export const ModalCloseImg = styled.img`
    position: absolute;
    // bottom: 3vh;
    left: 35vw;
`;

export const ModalTxt = styled.div`
    height: 40%;
    display: flex;
    flex-direction: row;

    text-align: center;
    align-items: center;
    justify-content: center;
`;

export const ModalLine = styled.div`
    width: 3px;
    height: 29px;
    background-color: #51F8C4;
`;

export const ModalTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #171717;
    margin: 0 2vw;
`;

export const ModalReasonTxt = styled.div`
    font-size: 11px;
    color: #5f5f5f;
    height: 15%;
`;

export const ModalReasonContent = styled.div`
    font-size: 13px;
    color: #000;
    height: 20%;
`;