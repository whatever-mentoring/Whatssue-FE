import styled from "styled-components";

export default function JoinComponent () {
    return(
        <MemberContent>
            <MemberBox>
                <MemberLeftBox>
                    <MemberName>문해빈</MemberName>
                    <MemberDate>2023.08.30</MemberDate>
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

    margin: 0 3vw;
    color: #fff;
`;

const MemberName = styled.div`
    font-size: 17px;
`;

const MemberDate = styled.div`
    font-size: 11px;
    margin: 0 2vw;
`;

const MemberBtnBox = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    text-align:center;
    justify-content: center;

    margin: 0 3vw;
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
