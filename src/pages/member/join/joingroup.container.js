import { useNavigate} from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css';
import * as S from './joingroup.style.js';

import checkCircle from '../../../assets/checkCircle.png'

function CreateGroup (){
    const navigate = useNavigate();

    return(
        <S.MainWrapper>
            <S.CheckIcon src={checkCircle}></S.CheckIcon>
            <S.TitleTxt>가입 신청</S.TitleTxt>
            <S.ContentTxt color={"#FFFFFF"}>해당 계정으로</S.ContentTxt>
            <S.ContentTxt color={"#51F8C4"}>양파시 광산동</S.ContentTxt>
            <S.ContentTxt color={"#FFFFFF"}>모임에 가입 신청하시겠습니까?</S.ContentTxt>
            <S.EmailInput placeholder="ex) whatssue@gmail.com"/>
            <S.CreateBtn >모임 가입하기</S.CreateBtn>
        </S.MainWrapper>
    ) 
}

export default CreateGroup;