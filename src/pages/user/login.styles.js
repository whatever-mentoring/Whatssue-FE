import styled from 'styled-components'

export const MainWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #171717;

    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
`

export const TitleWrapper = styled.div`
    text-align: center;
    margin: 50px 0;
`;

export const TitleTxt = styled.div`
    color: #fff;
    font-size: 15px;
    margin: 1.5em;
`;

export const LogoTxt = styled.i`
    color: #51F8C4;
    font-size: 40px;
    font-weight: bold;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin: 100px 0;
`;

export const ContentId = styled.input`
    width: 85%;
    height: 50px;
    color: #fff;
    background-color: #171717;
    border: 1px solid #5F5F5F;
    border-radius: 10px;
    padding: 0 10px;
    margin: 5px 0;
    
    &::-webkit-input-placeholder{
        color: #5F5F5F
    }
    
    &:focus{
        outline-color: #51F8C4;
        color: #51F8C4;
    }

`;

export const ContentPw = styled.input`
    width: 85%;
    height: 50px;
    color: #fff;
    background-color: #171717;
    border: 1px solid #5F5F5F;
    border-radius: 10px;
    padding: 0 10px;
    margin: 5px 0;

    &::-webkit-input-placeholder{
        color: #5F5F5F
    }

    &::-ms-input-placeholder{
        color: #5F5F5F
    }

    &:focus{
        outline-color: #51F8C4;
        color: #51F8C4;
    }
`;

export const ContentBtn = styled.button`
    width: 90%;
    height: 50px;
    color: #171717;
    font-size: 15px;
    font-weight: bold;
    background-color: #51F8C4;
    border: 1px solid #51F8C4;
    border-radius: 10px;
    margin: 10px 0 15px 0;
`;

export const JoinTxt = styled.div`
    font-size: 12px;
    color: #fff;
`;
