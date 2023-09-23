import styled from "styled-components"

export default function ChargedComponent ({ setIsDetail }) {
    return(
        <ChargedWrapper onClick={() => setIsDetail(true)}>
            <ChargedTitle>신규 회비</ChargedTitle>
            <ChargedDate>2023.09.20</ChargedDate>
            <ChargedMoney>50,000원</ChargedMoney>
        </ChargedWrapper>
    )
}


export const ChargedWrapper = styled.div`
    height: 8vh;
    background-color: #282828;
    border-radius: 10px;
    padding: 0 5vw;
    margin: 2vh 0;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ChargedTitle = styled.div`
    font-size: 17px;
    font-weight: 550;
    color: #fff;
    width: 40%;
`;

export const ChargedDate = styled.div`
font-size: 13px;
color: #fff;
width: 30%;
`;

export const ChargedMoney = styled.div`
font-size: 20px;
font-weight: 550;
color: #fff;
width: 30%;
text-align: right;
`;
