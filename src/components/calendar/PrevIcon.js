import prevIcon from "../../assets/prevIcon.png";

export default function PreviousIcon ({handleDate}) {
    return(
        <><img id="p" onClick={handleDate} width="15px" height="15px" src={prevIcon}/></>
    );
}