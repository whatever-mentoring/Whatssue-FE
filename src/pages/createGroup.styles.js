import styled from "styled-components";


export const MainWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #171717;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const IconWrapper = styled.div`
    padding-top: 20vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CheckIcon = styled.img`
    height: 42px;
`;

export const TitleTxt = styled.div`
    color:#FFFFFF;
    font-size: 25px;
    font-weight: 550;
    margin-top: 2vh;
`
export const ContentTxt = styled.div`
    color:${(props) => props.color};
    font-size: 13px;
`

export const EmailInput = styled.input`
    width: 86%;
    height: 50px;
    padding-left:15px;
    margin-top: 20px;
    border-radius: 10px;
    color: #51F8C4;
    border: 1px solid #51F8C4;
    background-color: #171717;

    &:placeholder {
        color: #5F5F5F;
      }

    &:focus{
        outline:none;
    }
`;
export const CreateBtn = styled.button`
    width: 90%;
    height: 50px;
    color: #171717;
    font-size: 15px;
    font-weight: 550;
    background-color: #51F8C4;
    border: none;
    border-radius: 10px;
    margin-top:20px;
`;