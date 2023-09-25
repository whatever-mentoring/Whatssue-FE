import styled from "styled-components"

export default function ChargedComponent ({ data, fetchDetail, setIsDetail }) {
    return(
        <ChargedWrapper onClick={() => {setIsDetail(true); fetchDetail();}}>
            <ChargedTitle>{data.claimName}</ChargedTitle>
            <ChargedDate>{data.claimDate.split("-")[0]}.{data.claimDate.split("-")[1]}.{data.claimDate.split("-")[2]}</ChargedDate>
            <ChargedMoney>{data.claimAmount.split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</ChargedMoney>
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
    width: 50%;
`;

export const ChargedDate = styled.div`
font-size: 13px;
color: #fff;
width: 20%;
`;

export const ChargedMoney = styled.div`
font-size: 20px;
font-weight: 550;
color: #fff;
width: 30%;
text-align: right;
`;
