import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import menu from "../../assets/menu.png";
import close from "../../assets/close.png";

export default function Nav (){
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return(
        <NavWrapper> 
            <MenuImg onClick={(e) => setIsOpen(true)} src={menu} width="20px" height="20px"/>

            {
                isOpen && (
                    <ModalWrapper>
                        <ModalBox>
                            <ImgWrapper><CloseImg onClick={(e) => setIsOpen(false)} src={close} width="20px" height="20px"/></ImgWrapper>
                            <ListWrapper>
                                <ListUl>
                                    <ListLi onClick={() => {navigate("/Membermain"); setIsOpen(false);}}>홈</ListLi>
                                    <ListLi onClick={() => {navigate("/Membercalendar"); setIsOpen(false);}}>캘린더</ListLi>
                                    <ListLi onClick={() => {navigate("/"); setIsOpen(false);}}>회계</ListLi>
                                </ListUl>
                            </ListWrapper>
                        </ModalBox>
                    </ModalWrapper>
                )
            }
        </NavWrapper>
    );
}

const NavWrapper = styled.div`
    width: 100%;
    height: 0%;
    background-color: #171717;
`;

const MenuImg = styled.img`
    position: absolute;
    top: 5vh;
    right: 5vw;
`;

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);

    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalBox = styled.div`
    background-color: #282828;
    width: 50%;
    height: 100vh;
    z-index: 101;

    position: absolute;
    left: 50%;
`

const ImgWrapper = styled.div`
    width: 50vw;

    display: flex;
    justify-content: end;
    margin: calc(7.5vh - 10px) 0;
    padding-right: 10vw;
`;

const CloseImg = styled.img`
    margin-right: 5vw;
`;

const ListWrapper = styled.div`
    height: 85vh;

`;

const ListUl = styled.ul`
    color: #fff;
    padding: 5vh 6vw;
`;

const ListLi = styled.li`
    list-style: none;
    color: #FFF;
    font-family: Noto Sans;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    height: 6vh;
`;