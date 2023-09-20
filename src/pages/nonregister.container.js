import { useNavigate} from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css';
import * as S from './nonregister.style.js';

import warningCircle from '../assets/warningCircle.png'




function Nonregister (){
    const navigate = useNavigate();

    return(
        <S.MainWrapper>
            <S.CheckIcon src={warningCircle}></S.CheckIcon>
            <S.TitleTxt>아직 모임에 가입되어있지 않습니다!</S.TitleTxt>
            <S.ContentTxt>직접 모임을 만들거나</S.ContentTxt>
            <S.ContentTxt>모임 관리자에게 초대링크를 받아 가입을 완료해주세요</S.ContentTxt>
            <S.CreateBtn>모임 만들기</S.CreateBtn>
        </S.MainWrapper>
    ) 
}

export default Nonregister;