import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";

export default function JoinComponent (props) {
    const baseUrl = "http://115.85.183.74:8090"

    const acceptJoin = async (e) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem("token")}`;
        const response = await axios.post(baseUrl + `/api/member/join-accept/${props.joinList.clubJoinRequestId}`)
        if(response.status === 200){
            console.log(response);
            props.fetchData();
            alert("수락되었습니다");
        }
    };

    const denyJoin = async (e) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem("token")}`;
        const response = await axios.post(baseUrl + `/api/member/join-refuse/${props.joinList.clubJoinRequestId}`)
        if(response.status === 200){
            console.log(response);
            props.fetchData();
            alert("거절되었습니다");
        }
    }

    return(
        <MemberContent key={props.joinList.clubJoinRequestId}>
            <MemberBox>
                <MemberLeftBox>
                    <MemberName>{props.joinList.userName}</MemberName>
                    <MemberDate>{props.joinList.requestDate}</MemberDate>
                </MemberLeftBox>
                <MemberBtnBox>
                    <MemberAcceptBtn onClick={acceptJoin}>수락</MemberAcceptBtn>
                    <MemberDenyBtn onClick={denyJoin}>거절</MemberDenyBtn>
                </MemberBtnBox>
            </MemberBox>
        </MemberContent>
    )
}


const MemberContent = styled.div`

`;

const MemberBox = styled.div`
    width: 100%;
    height: 8vh;
    background-color: #282828;
    border-radius: 10px;
    margin: 2vh 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const MemberLeftBox = styled.div`
    display: flex;
    flex-direction: row;
    
    align-items: center;
    // text-align:center;
    // justify-content: center;

    margin: 0 3vw;
    color: #fff;
    width: 60%;
`;

const MemberName = styled.div`
    font-size: 17px;
    width: 40%;
`;

const MemberDate = styled.div`
    font-size: 11px;
    // margin: 0 2vw;
    width: 60%;
`;

const MemberBtnBox = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    text-align:center;
    justify-content: center;

    margin: 0 3vw;
    height: 100%;
    width: 40%;
`;

const MemberAcceptBtn = styled.div`
    height: calc(7vh * 0.7);
    line-height: calc(7vh * 0.7);
    width: 17vw;
    background-color: #51F8C4;
    color: #171717;
    margin: 0 1vw;
    border-radius: 7px;
    font-size: 11px;
`;

const MemberDenyBtn = styled.div`
    height: calc(7vh * 0.7);
    line-height: calc(7vh * 0.7);
    width: 17vw;
    background-color: #FF4444;
    color: #171717;
    margin: 0 1vw;
    border-radius: 7px;
    font-size: 11px;
`;
