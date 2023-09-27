import prevIcon from "../../assets/prevIcon.png";

export default function PreviousIcon ({handleDate}) {
    return(
        <><img id="p" onClick={handleDate} width="20px" height="20px" src={prevIcon}/></>
    );
}