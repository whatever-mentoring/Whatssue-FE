import * as S from "./createGroup.styles";
import checkCircle from "../assets/checkCircle.png";

function CreateGroup () {
    return(
        <S.MainWrapper>
            <S.IconWrapper>
                <S.CheckIcon src={checkCircle}></S.CheckIcon>
                <S.TitleTxt>모임 생성</S.TitleTxt>
            </S.IconWrapper>
            <S.ContentTxt color={"#FFFFFF"}>해당 계정으로</S.ContentTxt>
            <S.ContentTxt color={"#51F8C4"}>양파시 광산동</S.ContentTxt>
            <S.ContentTxt color={"#FFFFFF"}>모임에 가입 신청하시겠습니까?</S.ContentTxt>
            <S.EmailInput placeholder="ex) whatssue@gmail.com"/>
            <S.CreateBtn >모임 가입하기</S.CreateBtn>
        </S.MainWrapper>
    ) 
}

export default CreateGroup;