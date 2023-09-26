import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import close from "../../assets/blackClose.png";

export default function AbsentComponent ({fetchData, abssentList}) {
    const baseUrl = "http://115.85.183.74:8090/";
    const [isModal, setIsModal] = useState(false);

    const acceptAbsent = async (e) => {
        setIsModal(false);
        try{
            axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem("token")}`;
            const response = await axios.post(baseUrl + `api/schedule/absent-accept/${abssentList.applyOfficialAbsentId}`)
            console.log(response);
            if(response.status === 200){
                alert("수락되었습니다.");
                fetchData();
            }
        }catch(error){

        }
    };

    const denyAbsent = async (e) => {
        setIsModal(false);
        try{
            axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem("token")}`;
            const response = await axios.post(baseUrl + `api/schedule/absent-refuse/${abssentList.applyOfficialAbsentId}`)
            console.log(response);
            if(response.status === 200){
                alert("거절되었습니다.");
                fetchData();
            }
        } catch(error){

        }
    };

    return(
        <>
        <MemberContent key={abssentList.applyOfficialAbsentId} onClick={(e) => setIsModal(true)}>
            <MemberBox>
                <MemberLeftBox>
                    <MemberName>{abssentList.memberName}</MemberName>
                    <MemberSchedule>{abssentList.scheduleTitle}</MemberSchedule>
                    <MemberDate>{abssentList.absentDate.split("-")[1]}월 {abssentList.absentDate.split("-")[2]}일</MemberDate>
                </MemberLeftBox>
            </MemberBox>
        </MemberContent>
        
        {/* 모달창 */}
        {isModal &&
            (<ModalWrapper>
                <ModalBox>
                    <ModalEmptyWrapper></ModalEmptyWrapper>
                    <ModalContentWrapper>
                        <ModalTxt><ModalLine></ModalLine><ModalTitle>{abssentList.scheduleTitle}</ModalTitle></ModalTxt>
                        <ModalReasonTxt>공결 신청 사유</ModalReasonTxt>
                        <ModalReasonContent>{abssentList.absentReason}</ModalReasonContent>
                    </ModalContentWrapper>
                    <BtnWrapper>
                        <CancleBtn onClick={denyAbsent}>거절</CancleBtn>
                        <CheckdBtn onClick={acceptAbsent}>수락</CheckdBtn>
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

    padding: 0 5vw;
    color: #fff;
    width: 100%;
`;

const MemberName = styled.div`
    font-size: 17px;
    white-space: nowrap;
    width: 30%;
`;

const MemberSchedule = styled.div`
    font-size: 11px;
    white-space: nowrap;
    width: 30%;
    text-align: center;
`;

const MemberDate = styled.div`
    font-size: 11px;
    color: #51F8C4;
    white-space: nowrap;
    width: 40%;
    text-align: right;
`

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
    justify-content: center;
    align-items: flex-end;
`;

export const ModalEmptyWrapper = styled.div`
    width: 100%;
    height: 7%;
`;

export const ModalContentWrapper = styled.div`
    width: 100%;
    height: 53%;

`;

export const ModalCloseBtn = styled.div`
    position: relative;
`;

export const ModalCloseImg = styled.img`
    position: absolute;
    // bottom: 3vh;
    top: 3vh;
    left: 35vw;
`;

export const ModalTxt = styled.div`
    height: 50%;
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
    height: 18%;
`;

export const ModalReasonContent = styled.div`
    font-size: 13px;
    color: #000;
    height: 32%;
`;


export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40%;
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
    color: #FF4444;
    font-size: 15px;
    font-weight: bold;
    border-radius: 7px;
    margin: 0 5vw;
`;

export const CheckdBtn = styled.div`
    background-color: #51F8C4;
    height: 6vh;
    width: 100%;
    line-height: 6vh;
    color: #171717;
    font-size: 15px;
    font-weight: bold;
    border-radius: 7px;
    margin: 0 5vw;
`;
