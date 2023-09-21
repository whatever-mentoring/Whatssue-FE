import styled from "styled-components"

import checked from "../../assets/checked.png";

export default function ChargedDetailComponent () {
    return(
        <ChargedWrapper>
            <ChargedTitle>문해빈</ChargedTitle>
            <ChargedDate>50,000원</ChargedDate>
            <ChargedMoney><img width="20px" height="20px" src={checked}/></ChargedMoney>
        </ChargedWrapper>
    )
}


export const ChargedWrapper = styled.div`
    height: 7vh;
    background-color: #282828;
    border-radius: 10px;
    margin: 2vh 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
`;

export const ChargedTitle = styled.div`
    font-size: 17px;
    font-weight: 550;
    color: #fff;
    width: 30%;
`;

export const ChargedDate = styled.div`
font-size: 13px;
color: #fff;
width: 40%;
`;

export const ChargedMoney = styled.div`
font-size: 20px;
font-weight: 550;
color: #fff;
width: 30%;
`;
