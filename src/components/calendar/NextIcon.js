import nextIcon from "../../assets/nextIcon.png";

export default function NextIcon ({handleDate}) {
    return(
        <><img id="n" onClick={handleDate} width="20px" height="20px" src={nextIcon}/></>
    );
}