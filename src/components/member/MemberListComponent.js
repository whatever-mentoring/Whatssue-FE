import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

import close from "../../assets/close.png";

export default function MemberListComponent ({memberList, deleteMember}) {
    const [isModal, setIsModal] = useState(false);
    const totalNum = memberList.checkedCount + memberList.officialAbsentCount + memberList.absentCount;

    return(
        <>
        <MemberContent>
            <MemberBox>
                <MemberLeftBox>
                    <MemberName>{memberList.memberName}</MemberName>
                    <MemberAttendanceWrapper>
                        <MemberAttendanceBox>
                            <MemberCircle></MemberCircle>
                            <MemberNum>{memberList.checkedCount}/{totalNum}</MemberNum>
                        </MemberAttendanceBox>
                        <MemberAttendanceBox>
                            <MemberCircle2></MemberCircle2>
                            <MemberNum>{memberList.officialAbsentCount}/{totalNum}</MemberNum>
                        </MemberAttendanceBox>
                        <MemberAttendanceBox>
                            <MemberCircle3></MemberCircle3>
                            <MemberNum>{memberList.absentCount}/{totalNum}</MemberNum>
                        </MemberAttendanceBox>
                    </MemberAttendanceWrapper>
                </MemberLeftBox>
                <MemberBtnBox>
                    <img width="17px" height="17px" src={close} onClick={() => setIsModal(true)}/>
                </MemberBtnBox>
            </MemberBox>
        </MemberContent>

        {/* 모달창 */}
        {isModal &&
            (<ModalWrapper>
                <ModalBox>
                    <ModalContentWrapper>
                        <ModalTitle>{memberList.memberName}님을 삭제하시겠습니까?</ModalTitle>
                        <ModalReasonTxt>삭제하시면 해당 회원의 데이터를 복구할 수 없습니다.</ModalReasonTxt>
                    </ModalContentWrapper>
                    <BtnWrapper>
                        <CancleBtn onClick={() => setIsModal(false)}>취소</CancleBtn>
                        <CheckdBtn onClick={() => {deleteMember(memberList.memberId); setIsModal(false);}}>삭제</CheckdBtn>
                    </BtnWrapper>
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
    height: 7vh;
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
    text-align:center;
    justify-content: center;

    color: #fff;
`;

const MemberName = styled.div`
    font-size: 17px;
    white-space: nowrap;
    width: 20vw;
`;

const MemberAttendanceWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const MemberAttendanceBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 20vw;
`;

const MemberCircle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background-color: #51F8C4;
`;

const MemberCircle2 = styled(MemberCircle)`
    background-color: #D9D9D9;
`;

const MemberCircle3 = styled(MemberCircle)`
    background-color: #FF4444;
`;

const MemberNum = styled.div`
    color: #fff;
    font-size: 11px;
    margin: 0 2vw;
`;

const MemberBtnBox = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    text-align:center;
    justify-content: center;

    margin: 0 3vw;
    height: 100%;
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
    height: 25vh;
    z-index: 101;

    position: absolute;
    top: 37.5vh;
    left: 5vw;

    display: flex;
    flex-direction: column;
    text-align: center;
    // justify-content: ;
    // align-items: flex-end;
`;

export const ModalContentWrapper = styled.div`
    width: 100%;
    height: 55%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ModalTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #171717;
    padding: 1vh 0;
`;

export const ModalReasonTxt = styled.div`
    font-size: 11px;
    color: #5f5f5f;
    padding: 1vh 0;
`;


export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 45%;
    // margin-top: 2vh;

    text-align: center;
    justify-content: center;
    align-items: center;
`;

export const CancleBtn = styled.div`
    background-color: #e7e7e7;
    height: 6vh;
    width: 100%;
    line-height: 6vh;
    color: #5F5F5F;
    font-size: 15px;
    font-weight: 550;
    border-radius: 7px;
    margin: 0 5vw;
    white-space: nowrap;
`;

export const CheckdBtn = styled.div`
    background-color: #FF4444;
    height: 6vh;
    width: 100%;
    line-height: 6vh;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 550;
    border-radius: 7px;
    margin: 0 5vw;
    white-space: nowrap;
`;