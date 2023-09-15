import styled from "styled-components";

export default function JoinComponent () {
    return(
        <MemberContent>
            <MemberBox>
                <MemberLeftBox>
                    <MemberName>문해빈</MemberName>
                    <MemberSchedule>와이어 프레임 작성 회의</MemberSchedule>
                    <MemberDate>9/3 6pm</MemberDate>
                </MemberLeftBox>
                <MemberBtnBox>
                    <MemberAcceptBtn>수락</MemberAcceptBtn>
                    <MemberDenyBtn>거절</MemberDenyBtn>
                </MemberBtnBox>
            </MemberBox>
        </MemberContent>
    )
}


const MemberContent = styled.div`

`;

const MemberBox = styled.div`
    width: 100%;
    height: 7vh;
    background-color: #282828;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const MemberLeftBox = styled.div`
    display: flex;
    flex-direction: row;
    
    align-items: center;
    text-align:center;
    justify-content: center;

    margin-left: 3vw;
    color: #fff;
`;

const MemberName = styled.div`
    font-size: 17px;
    white-space: nowrap;
`;

const MemberSchedule = styled.div`
    font-size: 11px;
    margin: 0 2vw;
`;

const MemberDate = styled.div`
    font-size: 11px;
    margin: 0 2vw;
    color: #51F8C4;
    
`

const MemberBtnBox = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    text-align:center;
    justify-content: center;

    margin-right: 3vw;
    height: 100%;
`;

const MemberAcceptBtn = styled.div`
    height: calc(7vh * 0.6);
    line-height: calc(7vh * 0.6);;
    width: 15vw;
    background-color: #51F8C4;
    color: #171717;
    margin: 0 1vw;
    border-radius: 7px;
    font-size: 11px;
`;

const MemberDenyBtn = styled.div`
    height: calc(7vh * 0.6);;
    line-height: calc(7vh * 0.6);;
    width: 15vw;
    background-color: #FF4444;
    color: #171717;
    margin: 0 1vw;
    border-radius: 7px;
    font-size: 11px;
`;
