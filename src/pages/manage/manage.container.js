import { useEffect, useState } from "react";
import * as S from "./manage.styles";
import axios from "axios";

import JoinComponent from "../../components/member/JoinComponent";
import AbsentComponent from "../../components/member/AbsentComponent";
import MemberListComponent from "../../components/member/MemberListComponent";

import close from "../../assets/blackClose.png"
import status from "../../assets/status.png";

function Member () {
    const baseUrl = "http://115.85.183.74:8090";
    const [category, setCategory] = useState(1);
    const [abssentList, setAbssentList] = useState([]);
    const [isModal, setIsModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(baseUrl + "/api/schedule/absent/list")
            console.log(response);
            if(response.status){
                setAbssentList(response.data);
            }
        };
        fetchData();
    }, []);
    
    return(
        <S.MainWrapper>
            <S.TitleWrapper>
                <S.TitleTxt>나의 모임</S.TitleTxt>
                <S.GroupWrapper><S.GroupName>양파시 광산동</S.GroupName><S.GroupRole><S.RoleBox><img width="20px" height="20px" src={status}/><S.RoleTxt>참여 상태</S.RoleTxt></S.RoleBox>관리자</S.GroupRole></S.GroupWrapper>
            </S.TitleWrapper>
            <S.AttendanceWrapper>
                <S.AttendanceNav>
                    <S.AttendanceUl style={{'color': '#fff'}}>
                        <S.AttendanceLi onClick={(e) => setCategory(1)}><S.AttendanceBox clicked={category === 1}>가입 요청(5)</S.AttendanceBox></S.AttendanceLi>
                        <S.AttendanceLi onClick={(e) => setCategory(2)}><S.AttendanceBox clicked={category === 2}>공결({abssentList.length})</S.AttendanceBox></S.AttendanceLi>
                        <S.AttendanceLi onClick={(e) => setCategory(3)}><S.AttendanceBox clicked={category === 3}>멤버 목록</S.AttendanceBox></S.AttendanceLi>
                    </S.AttendanceUl>
                </S.AttendanceNav>
                {category === 1 ? (
                    <JoinComponent/>
                ) : (
                    category === 2 ? (
                        <AbsentComponent setIsModal={setIsModal}/>
                    ) : (
                        <>
                            <S.MemberTitle>
                                <S.Txt>이름</S.Txt>
                                <S.Txt>출석</S.Txt>
                                <S.Txt>공결</S.Txt>
                                <S.Txt>결석</S.Txt>
                            </S.MemberTitle>
                            <MemberListComponent/>
                        </>
                    )
                )}
            </S.AttendanceWrapper>

            {/* 모달창 */}
            {isModal &&
                (<S.ModalWrapper>
                    <S.ModalBox>
                        <S.ModalCloseBtn><S.ModalCloseImg onClick={(e) => setIsModal(false)} src={close} width="18px" height="18px"/></S.ModalCloseBtn>
                        <S.ModalTxt><S.ModalLine></S.ModalLine><S.ModalTitle>와이어 프레임 작성 회의</S.ModalTitle></S.ModalTxt>
                        <S.ModalReasonTxt>공결 신청 사유</S.ModalReasonTxt>
                        <S.ModalReasonContent>긴히 쓸 일이 있어어용~ 제성합니당~</S.ModalReasonContent>
                    </S.ModalBox>
                </S.ModalWrapper>)
            }
        </S.MainWrapper>
    )
}

export default Member;