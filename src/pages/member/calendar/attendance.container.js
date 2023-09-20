import * as S from './attendance.style.js';
import { useNavigate} from "react-router-dom";
import moment from "moment";
import 'react-datepicker/dist/react-datepicker.css';
import './customDatePicker.css';

import axios from "axios";
import checkSquare from '../../../assets/checkSquare.png';
import close from "../../../assets/close.png";




function Attendance (){
    const navigate = useNavigate();

    return(
        <S.MainWrapper>
            <S.CloseBtn><S.CloseImg src={close} onClick={(e) => navigate("/Membercalendar")}/></S.CloseBtn>
            <S.CheckIcon src={checkSquare}></S.CheckIcon>
            <S.TitleTxt>와이어 프레임 작성 회의</S.TitleTxt>
            <S.AttendanceNum/>
            <S.AttendanceBtn> 출석하기</S.AttendanceBtn>
        </S.MainWrapper>
    ) 
}

export default Attendance;