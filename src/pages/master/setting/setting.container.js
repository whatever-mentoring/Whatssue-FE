import { useState } from "react";
import axios from "axios";
import Menu from "../../../components/nav/Nav"
import * as S from "./setting.styles";

import pencil from "../../../assets/pencil.png";
import link from "../../../assets/link.png";
import linkPlus from "../../../assets/linkPlus.png";

function Setting (){
    const baseUrl = "http://115.85.183.74:8090/";
    const [isModal, setIsModal] = useState(false);

    const [modifyName, setModifyName] = useState(false);
    const [modifyExplain, setModifyExplain] = useState(false);
    const [name, setName] = useState("양파시 광산동");
    const [explain, setExplain] = useState("최고의 동아리");

    const [clubLink, setClubLink] = useState("");

    const handleLink = async() => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem("token")}`;
        const response = await axios.post(baseUrl + "api/admin/link", {
            "linkName": "opinion"
        })

        // const response = await axios.get(baseUrl + "api/admin/link")
        console.log(response);
        if(response.status === 200){
            alert("링크가 생성되었습니다");
            setIsModal(false);
            setClubLink(response.data.linkUrl);
            window.localStorage.setItem("link", response.data.linkUrl);
        }
    };

    return(
        <S.MainWrapper>
            <Menu />
            <S.SettingWrapper>
                <S.GroupWrapper>
                    <S.GroupTitle>모임 정보</S.GroupTitle>
                    <S.GroupContent>
                        <S.GroupBox>
                            <S.GroupName>이름</S.GroupName>
                            <S.GroupContentWrapper>
                                {modifyName ? (
                                    <>
                                    <S.GroupTxt>{name}</S.GroupTxt>
                                    <S.ModalWrapper>
                                        <S.ModalBox>
                                            <S.ModalContentWrapper>
                                                <S.ModalTitle>모임 이름을 변경하시겠습니까?</S.ModalTitle>
                                                <S.ModalInput 
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </S.ModalContentWrapper>
                                            <S.BtnWrapper>
                                                <S.CancleBtn onClick={() => setModifyName(false)}>취소</S.CancleBtn>
                                                <S.CheckdBtn onClick={() => setModifyName(false)}>확인</S.CheckdBtn>
                                            </S.BtnWrapper>
                                        </S.ModalBox>
                                    </S.ModalWrapper>
                                    </>
                                ) : (
                                    <>
                                    <S.GroupTxt>{name}</S.GroupTxt>
                                    
                                    </>
                                )}
                                <S.GroupModifyIcon width="15px" height="15px" src={pencil} onClick={() => setModifyName(!modifyName)}/>
                            </S.GroupContentWrapper>
                        </S.GroupBox>
                        <S.GroupBox>
                            <S.GroupName>한 줄 소개</S.GroupName>
                            <S.GroupContentWrapper>
                                {/* {modifyExplain ? ( */}
                                    <S.GroupTxt>최고의 동아리</S.GroupTxt>
                                {/* ) : (
                                    <S.GroupInput 
                                        value={explain}
                                        onChange={(e) => setExplain(e.target.value)}
                                    />
                                )} */}
                                <S.GroupModifyIcon width="15px" height="15px" src={pencil} onClick={() => setModifyExplain(!modifyExplain)}/>
                            </S.GroupContentWrapper>
                        </S.GroupBox>
                    </S.GroupContent>
                </S.GroupWrapper>
                <S.InviteLinkWrapper>
                    <S.LinkTitle>초대 링크 관리 <img width="17px" height="17px" src={link}/></S.LinkTitle>
                    {window.localStorage.getItem("link") ? (
                        <S.LinkBox onClick={() => setIsModal(true)}><S.LinkTxt>{clubLink}</S.LinkTxt></S.LinkBox>
                    ) : (
                        <S.LinkBox onClick={() => setIsModal(true)}><S.LinkPlusIcon width="30px" height="30px" src={linkPlus}/></S.LinkBox>
                    )}
                    
                </S.InviteLinkWrapper>
            </S.SettingWrapper>

            {/* 모달창 */}
            {isModal && (
                <S.ModalWrapper>
                    <S.ModalLinkWrapper>
                        <S.ModalTxt>링크를 생성하시겠습니까?</S.ModalTxt>
                        <S.ModalExplain>링크를 멤버에게 전달하면 가입 절차가 진행됩니다</S.ModalExplain>
                        <S.BtnWrapper>
                            <S.CancleBtn onClick={(e) => setIsModal(false)}>취소</S.CancleBtn>
                            <S.CheckdBtn onClick={handleLink}>생성</S.CheckdBtn>
                        </S.BtnWrapper>
                    </S.ModalLinkWrapper>
                </S.ModalWrapper>
            )}
        </S.MainWrapper>
    );
}

export default Setting;