import { useEffect, useState } from "react";
import * as S from "./manage.styles";
import axios from "axios";
import Menu from "../../components/nav/Nav"

import JoinComponent from "../../components/member/JoinComponent";
import AbsentComponent from "../../components/member/AbsentComponent";
import MemberListComponent from "../../components/member/MemberListComponent";

import close from "../../assets/blackClose.png"
import status from "../../assets/status.png";

function Member () {
    const baseUrl = "http://115.85.183.74:8090";
    const [category, setCategory] = useState(1);

    const [joinList, setJoinList] = useState([]);
    const [abssentList, setAbssentList] = useState([]);
    const [memberList, setMemberList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if(joinList.length === 0){
                const response = await axios.get(baseUrl + "/api/member/join-list")
                console.log(response);
                if(response.status){
                    setJoinList(response.data);
                }
            }
            if(abssentList.length === 0){
                const response2 = await axios.get(baseUrl + "/api/schedule/absent/list")
                console.log(response2);
                if(response2.status){
                    setAbssentList(response2.data);
                }
            }
            if(memberList.length === 0){
                const response3 = await axios.get(baseUrl + "/api/member/manage")
                console.log(response3);
                if(response3.status){
                    setMemberList(response3.data);
                }
            }
        };
        fetchData();
    }, []);

    const deleteMember = async (e) => {
        const response = await axios.delete(`http://115.85.183.74:8090/api/member/delete/${e}`);
        if(response.status === 200){
            const newMember = await axios.get(baseUrl + "/api/member/manage")
            console.log(newMember);
            if(newMember.status){
                setMemberList(newMember.data);
            }
            alert('삭제 완료되었습니다');
        }
        console.log(response);
    }
    
    return(
        <S.MainWrapper>
            <Menu />
            <S.TitleWrapper>
                <S.TitleTxt>나의 모임</S.TitleTxt>
                <S.GroupWrapper><S.GroupName>양파시 광산동</S.GroupName><S.GroupRole><S.RoleBox><img width="20px" height="20px" src={status}/><S.RoleTxt>참여 상태</S.RoleTxt></S.RoleBox>관리자</S.GroupRole></S.GroupWrapper>
            </S.TitleWrapper>
            <S.AttendanceWrapper>
                <S.AttendanceNav>
                    <S.AttendanceUl style={{'color': '#fff'}}>
                        <S.AttendanceLi onClick={(e) => setCategory(1)}><S.AttendanceBox clicked={category === 1}>가입 요청({joinList.length})</S.AttendanceBox></S.AttendanceLi>
                        <S.AttendanceLi onClick={(e) => setCategory(2)}><S.AttendanceBox clicked={category === 2}>공결({abssentList.length})</S.AttendanceBox></S.AttendanceLi>
                        <S.AttendanceLi onClick={(e) => setCategory(3)}><S.AttendanceBox clicked={category === 3}>멤버 목록</S.AttendanceBox></S.AttendanceLi>
                    </S.AttendanceUl>
                </S.AttendanceNav>
                {category === 1 ? (
                    joinList.length > 0 && (
                        joinList.map((e, i) => (<JoinComponent joinList={e}/>))
                    )
                ) : (
                    category === 2 ? (
                        abssentList.length > 0 && (
                            abssentList.map((e, i) => (<AbsentComponent abssentList={e}/>))
                        )
                    ) : (
                        <>
                            <S.MemberTitle>
                                <S.Txt>이름</S.Txt>
                                <S.Txt>출석</S.Txt>
                                <S.Txt>공결</S.Txt>
                                <S.Txt>결석</S.Txt>
                            </S.MemberTitle>
                            {memberList.length > 0 && (
                                memberList.map((e, i) => <MemberListComponent memberList={e} deleteMember={deleteMember}/>)
                            )}
                        </>
                    )
                )}
            </S.AttendanceWrapper>
            
        </S.MainWrapper>
    )
}

export default Member;