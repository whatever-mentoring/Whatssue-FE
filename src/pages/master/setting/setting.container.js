import { useState } from "react";
import Menu from "../../../components/nav/Nav"
import * as S from "./setting.styles";

import pencil from "../../../assets/pencil.png";
import link from "../../../assets/link.png";
import linkPlus from "../../../assets/linkPlus.png";

function Setting (){
    const [isModal, setIsModal] = useState(false);

    const [modifyName, setModifyName] = useState(false);
    const [modifyExplain, setModifyExplain] = useState(false);
    const [name, setName] = useState("양파시 광산동");
    const [explain, setExplain] = useState("최고의 동아리");

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
                                    <S.GroupTxt>양파시 광산동</S.GroupTxt>
                                ) : (
                                    <S.GroupInput 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                )}
                                <S.GroupModifyIcon width="15px" height="15px" src={pencil} onClick={() => setModifyName(!modifyName)}/>
                            </S.GroupContentWrapper>
                        </S.GroupBox>
                        <S.GroupBox>
                            <S.GroupName>한 줄 소개</S.GroupName>
                            <S.GroupContentWrapper>
                                {modifyExplain ? (
                                    <S.GroupTxt>최고의 동아리</S.GroupTxt>
                                ) : (
                                    <S.GroupInput 
                                        value={explain}
                                        onChange={(e) => setExplain(e.target.value)}
                                    />
                                )}
                                <S.GroupModifyIcon width="15px" height="15px" src={pencil} onClick={() => setModifyExplain(!modifyExplain)}/>
                            </S.GroupContentWrapper>
                        </S.GroupBox>
                    </S.GroupContent>
                </S.GroupWrapper>
                <S.InviteLinkWrapper>
                    <S.LinkTitle>초대 링크 관리 <img width="17px" height="17px" src={link}/></S.LinkTitle>
                    <S.LinkBox onClick={() => setIsModal(true)}><S.LinkPlusIcon width="30px" height="30px"  src={linkPlus}/></S.LinkBox>
                </S.InviteLinkWrapper>
            </S.SettingWrapper>

            {/* 모달창 */}
            {isModal && (
                <S.ModalWrapper>
                    <S.ModalBox>
                        <S.ModalTxt>링크를 생성하시겠습니까?</S.ModalTxt>
                        <S.ModalExplain>링크를 멤버에게 전달하면 가입 절차가 진행됩니다</S.ModalExplain>
                        <S.BtnWrapper>
                            <S.CancleBtn onClick={(e) => setIsModal(false)}>취소</S.CancleBtn>
                            <S.CheckdBtn onClick={(e) => setIsModal(false)}>생성</S.CheckdBtn>
                        </S.BtnWrapper>
                    </S.ModalBox>
                </S.ModalWrapper>
            )}
        </S.MainWrapper>
    );
}

export default Setting;