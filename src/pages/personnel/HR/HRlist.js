import HRlistCSS from './HRlist.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {callMemberListAPI, callMemberSearchAPI} from '../../../apis/PersonnelAPICalls';

function HRlist() {

    const navigate = useNavigate();
    // const params = useParams();

    const dispatch = useDispatch();
    const hrmemlist = useSelector(state => state.personnelReducer); // modules/index.js 안에 선언한 store목록 중에서 personnelReducer 가져오겠다.
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");

    // console.log('hrmemlist', hrmemlist);
    // 페이징이 필요한면 useState를 통해서 상태값을 추가 -> currentPage참조

    // 페이징
    const pageInfo = hrmemlist.pageInfo;

    const pageNumber = [];
    if(pageInfo){
        for(let i = 1; i <= pageInfo.pageEnd ; i++){
            pageNumber.push(i);
        }
    }

    
    // const hrlist = hrmemlist.data;
    if(hrmemlist != undefined){

        console.log('hrmemlist', hrmemlist);
    }
    useEffect(
        () => {
            dispatch(callMemberListAPI({
                // memCode: params.memCode,
                currentPage : currentPage
            }));
        },[currentPage]
    );
    
    // 멤버 상세페이지로 이동
    const onClickTableTr = (memCode) => {
        navigate(`/personnel/memDetail/${memCode}`, { replace: false });
    }


    const onSearchChangeHandler = (e) => {
        setSearch(e.target.value);
    }

    // 엔터 쳤을 시 검색 기능 
    const onEnterkeyHandler = (e) => {
        if (e.key == 'Enter') {
            console.log('Enter key', search);

            dispatch(callMemberSearchAPI({
                memName: search
            }));
        }
    }


    return(
        <>
            <div className={`${HRlistCSS["HRlistone"]}`}>
                <div className={`${HRlistCSS["titlee"]}`}>
                    <h3>사원 명부</h3>
                </div>
                <div className={`${HRlistCSS["box"]}`}>
                    <div className={`${HRlistCSS["content1"]}`}>
                        <h4>검색어</h4>
                        <div className={`${HRlistCSS["content2"]}`} type="text"  onChange={ onSearchChangeHandler } value={ search }>
                            <select className={`${HRlistCSS["workType"]}`}>
                                <option value="1">성명</option>
                                {/* <option value="2">사원번호</option>
                                <option value="3">부서</option> */}
                            </select>
                            <div className={`${HRlistCSS["content2"]}`}>
                            <input
                                        type="text"
                                        value={ search }
                                        onKeyUp={ onEnterkeyHandler }
                                        onChange={ onSearchChangeHandler }
                                    />
                            </div>
                            <div className={`${HRlistCSS["applbutton"]}`}>
                                <button>검색</button>
                            </div>
                            <div className={`${HRlistCSS["content2"]}`}>
                                <input type="checkbox" />퇴직자포함
                            </div>
                        </div>
                    </div>
                    <h5>사원조회</h5>
                    <div className={`${HRlistCSS["pplist"]}`}>
                        <table className={`${HRlistCSS["appltable"]}`}>
                            <thead className={`${HRlistCSS["applthead"]}`}>
                                <tr className={`${HRlistCSS["appltr"]}`}>
                                    <th className={`${HRlistCSS["applth"]}`}>사원번호</th>
                                    <th className={`${HRlistCSS["applth"]}`}>성명</th>
                                    <th className={`${HRlistCSS["applth"]}`}>직책</th>

                                    <th className={`${HRlistCSS["applth"]}`}>부서</th>
                                    <th className={`${HRlistCSS["applth"]}`}>휴대폰</th>
                                    <th className={`${HRlistCSS["applth"]}`}>이메일</th>
                                    <th className={`${HRlistCSS["applth"]}`}>주소</th>
                                </tr>
                            </thead>
                            <tbody>
                                { Array.isArray(hrmemlist) && hrmemlist.map (
                                        (hrmemberlist, index) => (
                                            <tr 
                                            key={hrmemberlist.memCode}
                                            onClick={ () => onClickTableTr(hrmemberlist.memCode) }
                                            className={`${HRlistCSS["appltr"]}`}>
                                                <td className={`${HRlistCSS["appltd"]}`}>{hrmemberlist.memCode}</td>
                                                <td className={`${HRlistCSS["appltd"]}`}>{hrmemberlist.memName}</td>
                                                <td className={`${HRlistCSS["appltd"]}`}>{hrmemberlist.department.departmentName}</td>
                                                <td className={`${HRlistCSS["appltd"]}`}>{hrmemberlist.position.positionName}</td>
                                                <td className={`${HRlistCSS["appltd"]}`}>{hrmemberlist.phone}</td>
                                                <td className={`${HRlistCSS["appltd"]}`}>{hrmemberlist.email}</td>
                                                <td className={`${HRlistCSS["appltd"]}`}>{hrmemberlist.address}</td>
                                            </tr>
                                        ))}
                            </tbody>
                        </table>
                        <div style={{ listStyleType: "none", display: "flex", justifyContent: "center" }}>
                            { Array.isArray(hrmemlist) &&
                            <button 
                                onClick={() => setCurrentPage(currentPage - 1)} 
                                disabled={currentPage === 1}
                                className={ HRlistCSS.pagingBtn }
                            >
                                &lt;
                            </button>
                            }
                            {pageNumber.map((num) => (
                            <li key={num} onClick={() => setCurrentPage(num)}>
                                <button
                                    style={ currentPage === num ? {backgroundColor : 'orange' } : null}
                                    className={ HRlistCSS.pagingBtn }
                                >
                                    {num}
                                </button>
                            </li>
                            ))}
                            { Array.isArray(hrmemlist) &&
                            <button 
                                className={ HRlistCSS.pagingBtn }
                                onClick={() => setCurrentPage(currentPage + 1)} 
                                // disabled={currentPage === pageInfo.pageEnd || pageInfo.total == 0}
                            >
                                &gt;
                            </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HRlist;