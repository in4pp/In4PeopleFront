import HRlistCSS from './HRlist.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {callMemberListAPI} from '../../../apis/PersonnelAPICalls';

function HRlist() {

    const dispatch = useDispatch();
    const hrlist = useSelector(state => state.personnelReducer); // modules/index.js 안에 선언한 store목록 중에서 personnelReducer 가져오겠다.
    const [currentPage, setCurrentPage] = useState(1);
    console.log('hrlist', hrlist);
    // 페이징이 필요한면 useState를 통해서 상태값을 추가 -> currentPage참조

    const list = hrlist.data;
    if(list != undefined){

        console.log('list', list);
    }
    useEffect(
        () => {

            dispatch(callMemberListAPI({currentPage : currentPage}));
        },[currentPage]
    );

    return(
        <>
            <div className={`${HRlistCSS["HRlistone"]}`}>
                <div className={`${HRlistCSS["titlee"]}`}>
                    <h3>사원 명부</h3>
                </div>
                <div className={`${HRlistCSS["box"]}`}>
                    <div className={`${HRlistCSS["content1"]}`}>
                        <h4>검색어</h4>
                        <div className={`${HRlistCSS["content2"]}`}>
                            <select className={`${HRlistCSS["workType"]}`}>
                                <option value="1">성명</option>
                                <option value="2">사원번호</option>
                                <option value="3">부서</option>
                            </select>
                            <div className={`${HRlistCSS["content2"]}`}>
                                <input type="text" />
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
                                { Array.isArray(list) && list.map (
                                        (hrApp, index) => (
                                            <tr key={index}
                                            className={`${HRlistCSS["appltr"]}`}>
                                                <td className={`${HRlistCSS["appltd"]}`}>{hrApp.memCode}</td>
                                                <td className={`${HRlistCSS["appltd"]}`}>{hrApp.memName}</td>
                                                <td className={`${HRlistCSS["appltd"]}`}>{hrApp.department.departmentName}</td>
                                                <td className={`${HRlistCSS["appltd"]}`}>{hrApp.position.positionName}</td>
                                                <td className={`${HRlistCSS["appltd"]}`}>{hrApp.phone}</td>
                                                <td className={`${HRlistCSS["appltd"]}`}>{hrApp.email}</td>
                                                <td className={`${HRlistCSS["appltd"]}`}>{hrApp.address}</td>
                                            </tr>
                                        ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HRlist;