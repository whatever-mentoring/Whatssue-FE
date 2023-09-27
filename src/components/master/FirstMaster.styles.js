import styled from 'styled-components';

export const MainWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #171717;

`;
    
export const MainBox = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`;

export const ContentWrapper = styled.div`
    // width: 90%;
    margin: 0 5%;
`;

export const NameWrapper = styled.div`
    width: 100%;
    margin-top: 15px;
    // margin: 0 5%;
`;

export const NameTxt = styled.div`
    color: #fff;
    margin: 5px 0;
`;

export const NameInput = styled.input`
    width: 90%;
    height: 50px;
    padding: 0 5%;
    border-radius: 10px;
    color: #ffffff;
    border: 1px solid #5F5F5F;
    background-color: #171717;

    &:focus{
        outline-color: #51F8C4;
        color: #51F8C4;
    }
`;

export const IdContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const IdInput = styled.input`
width: 80%;
height: 50px;
padding: 0 5%;
margin-right: 5%;
border-radius: 10px;
color: #ffffff;
border: 1px solid #5F5F5F;
background-color: #171717;

&:focus{
    outline-color: #51F8C4;
    color: #51F8C4;
}
`;

export const IdCheckBtn = styled.button`
    width: 40%;
    height: 50px;
    border-radius: 10px;
    background-color: #282828;
    color: #5F5F5F;
`;

export const NextBtn = styled.button`
    width: 90%;
    height: 50px;
    margin: 0 5%;
    border-radius: 10px;
    border: none;

    background-color: ${(props) => 
        props.active ? "#51F8C4" : "#282828"
    };

    color: ${(props) => 
        props.active ? "#171717" : "#5F5F5F"
    };
`;