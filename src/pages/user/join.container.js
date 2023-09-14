import { useState, useEffect } from "react";
import * as S from './join.styles.js';

import FirstMaster from "../../components/master/FirstMaster.container.js";
import SecondMaster from "../../components/master/SecondMaster.container.js";
import ThirdMaster from "../../components/master/ThirdMaster.container.js"

function Join (){
    const [page, setPage] = useState(1);
    const [role, setRole] = useState("");

    // Master 회원가입
    const pageList = [
        {page: 2, name: FirstMaster},
        {page: 3, name: SecondMaster},
        {page: 4, name: ThirdMaster}
    ]
    
    const currentPage = pageList.find((el) => el.page === page);
    useEffect(() => {}, [page]);


    return (
        <S.MainWrapper>
            {
                role === "" ? (
                    <S.RoleWrapper>
                        <S.NumWrapper>{page}</S.NumWrapper>
                        <S.SubTitle>이 모임의 관리자이신가요? 멤버이신가요?</S.SubTitle>
                        <S.ButtonWrapper>
                            <S.MasterBtn type='button' onClick={(e) => {setRole("master"); setPage((prev) => prev + 1);}}>관리자</S.MasterBtn>
                            <S.MemberBtn type='button' onClick={(e) => {setRole("member"); setPage((prev) => prev + 1);}}>회원</S.MemberBtn>
                        </S.ButtonWrapper>
                    </S.RoleWrapper>
                ) : (
                    role === "master" ? (
                        <>
                            <S.RoleWrapper>
                                <S.NumWrapper>{page}</S.NumWrapper>
                            </S.RoleWrapper>
                            {currentPage.page === 4 ? (<currentPage.name setPage={setPage}/>) : (<currentPage.name setPage={setPage}/>)}
                        </>
                    ) : (
                        <S.RoleWrapper>
                            <S.NumWrapper>{page}</S.NumWrapper>
                            <S.ButtonWrapper>
                                <S.MasterBtn type='button' onClick={(e) => setRole("master")}>관리자</S.MasterBtn>
                                <S.MemberBtn type='button' onClick={(e) => setRole("member")}>회원</S.MemberBtn>
                            </S.ButtonWrapper>
                        </S.RoleWrapper>
                    )
                
                )
            }
        </S.MainWrapper>
    )
};

export default Join;