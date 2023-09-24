import styled from "styled-components";

export const MainWrapper = styled.div`
    width: 100%;
    overflow: auto;
    background-color: #171717;
`;

export const SettingWrapper = styled.div`
    width: 90%;
    margin: 0 5%;
`;

export const GroupWrapper = styled.div`
    width: 100%;
    height: 25vh;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const GroupTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    margin: 2vh 0;
`;

export const GroupContent = styled.div`

`;

export const GroupBox = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;

    width: 100%;
    height: 3vh;
    font-size: 13px;
    margin: 1vh 0;
`;

export const GroupName = styled.div`
    color: #51F8C4;
    width: 30%;
`;

export const GroupContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 70%;
`;

export const GroupTxt = styled.div`
    color: #fff;
`;

export const GroupInput = styled.input`
    background-color: #171717;
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    padding: 0.5vh 1vw;

    &:focus{
        outline: none;
    }
`;

export const GroupModifyIcon = styled.img`

`;

export const InviteLinkWrapper = styled.div`
    width: 100%;
    height: 75vh;
`;

export const LinkTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`;

export const LinkBox = styled.div`
    margin: 2vh 0;
    width: 100%;
    height: 7vh;
    border: 1px solid #51F8C4;
    border-radius: 10px;

    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

export const LinkExistBox = styled(LinkBox)`
    justify-content: space-between;
`;

export const LinkTxt = styled.div`
    color: #51F8C4;
    font-weight: 550;
    font-size: 15px;
`;

export const LinkLeftBox = styled.div`
    display: flex;
    flex-direction: row;
`;

export const LinkPlusIcon = styled.img`
`;

// 모달창
export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalBox = styled.div`
    background-color: #fff;
    border-radius: 10px;
    width: 90vw;
    height: 25vh;
    z-index: 101;

    position: absolute;
    top: 37.5vh;
    left: 5vw;

    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

export const ModalTxt = styled.div`
    margin-top: 2vh;
    font-size: 20px;
    font-weight: bold;
    color: #171717;
`;

export const ModalExplain = styled.div`
    font-size: 11px;
    color: #5f5f5f;
    margin: 1vh 0;
`;

export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40%;
    // margin-top: 2vh;

    text-align: center;
    justify-content: center;
    align-items: center;
`;

export const CancleBtn = styled.div`
    background-color: #e7e7e7;
    // height: 40%;
    color: #5F5F5F;
    font-size: 15px;
    font-weight: bold;
    border-radius: 7px;
    padding: 4% 13%; 
    margin: 0 5vw;
`;

export const CheckdBtn = styled.div`
    background-color: #51F8C4;
    // height: 40%;
    color: #171717;
    font-size: 15px;
    font-weight: bold;
    border-radius: 7px;
    padding: 4% 13%; 
    margin: 0 5vw;
`;


// 모달창

export const ModalLinkWrapper = styled(ModalBox)`
    height: 20vh;
    position: absolute;
    top: 40vh;
    left: 5vw;
`;

export const ModalContentWrapper = styled.div`
    width: 90%;
    height: 60%;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
`;

export const ModalInput = styled.input`
    width: 98%;
    height: 4vh;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    color: #282828;
    margin: 1vh 0;

    &:focus{
        outline: none;
    }
`;

export const ModalLine = styled.div`
    width: 3px;
    height: 29px;
    background-color: #51F8C4;
`;

export const ModalTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #171717;
    margin: 1vh 2vw;
`;

export const ModalReasonTxt = styled.div`
    font-size: 11px;
    color: #5f5f5f;
    height: 18%;
`;

export const ModalReasonContent = styled.div`
    font-size: 13px;
    color: #000;
    height: 32%;
`;
