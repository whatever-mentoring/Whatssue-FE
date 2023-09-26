import { useNavigate, useLocation,useSearchParams} from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css';
import * as S from './joingroup.style.js';

import checkCircle from '../../../assets/checkCircle.png'
import axios from "axios";

function CreateGroup (){
    const baseUrl = "http://115.85.183.74:8090/";
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    const joinRequest = async () => {
        alert("가입 신청이 완료되었습니다.");
        navigate("/member");
        try{
            const response = await axios.post(baseUrl + `api/member/join/request/1`);
            console.log(response);
            // alert("가입 신청이 완료되었습니다.");
        } catch(error){
            console.log(error);
        }
    }
    return(
        <S.MainWrapper>
            <S.TitleWrapper>
                <S.CheckIcon src={checkCircle}></S.CheckIcon>
                <S.TitleTxt>가입 신청</S.TitleTxt>
            </S.TitleWrapper>
            <S.ContentWrapper>
                <S.ContentTxt color={"#FFFFFF"}>해당 계정으로</S.ContentTxt>
                <S.ContentTxt color={"#51F8C4"}>양파시 광산동</S.ContentTxt>
                <S.ContentTxt color={"#FFFFFF"}>모임에 가입 신청하시겠습니까?</S.ContentTxt>
                <S.EmailInput placeholder="ex) whatssue@gmail.com"/>
                <S.CreateBtn onClick={joinRequest}>모임 가입하기</S.CreateBtn>
            </S.ContentWrapper>
        </S.MainWrapper>
    ) 
}

export default CreateGroup;