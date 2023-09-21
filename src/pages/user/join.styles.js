import styled from 'styled-components';

export const MainWrapper = styled.div`
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    overflow: auto;
    background-color: #171717;

`;

export const TitleWrapper = styled.div`
    color: #fff;
    font-size: 25px;
    font-weight: bold;
    height: 15vh;
    text-align: center;
    line-height: 18vh;
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
    height: 7vh;
    padding: 0 5%;
    margin-top: 1vh;
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
    height: 7vh;
    margin-top: 1vh;
    display: flex;
    flex-direction: row;
`;

export const IdInput = styled.input`
width: 80%;
height: 7vh;
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

export const IdCheckBtn = styled.div`
    width: 40%;
    height: 7vh;
    line-height: 7vh;
    border-radius: 10px;
    background-color: #282828;
    color: #5F5F5F;
    text-align: center;
    font-size: 15px;

    background-color: ${(props) => 
        props.active ? "#51F8C4" : "#282828"
    };

    color: ${(props) => 
        props.active ? "#171717" : "#5F5F5F"
    };
`;

export const NextBtn = styled.button`
    width: 100%;
    height: 8vh;
    margin-top: 5vh;
    border-radius: 10px;
    border: none;
    font-size: 15px;
    font-weight: bold;

    background-color: ${(props) => 
        props.active ? "#51F8C4" : "#282828"
    };

    color: ${(props) => 
        props.active ? "#171717" : "#5F5F5F"
    };
`;