import nextIcon from "../../assets/nextIcon.png";

export default function NextIcon ({handleDate}) {
    return(
        <><img id="n" onClick={handleDate} width="15px" height="15px" src={nextIcon}/></>
    );
}