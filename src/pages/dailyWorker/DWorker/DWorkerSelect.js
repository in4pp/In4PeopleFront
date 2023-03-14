import { useDispatch, useSelector } from 'react-redux';
import DWorkerSelectCSS from './DWorkerSelect.module.css';
import { useEffect, useState } from 'react';
import {dworkerInfoAllAPI} from '../../../apis/DailyWorkerAPICalls';

function DWorkerlist() {

    const dispatch = useDispatch();
    const dworkerlist = useSelector(state => state.dailyWorkerReducer); // modules/index.js 안에 선언한 store목록 중에서 dailyWorkerReducer 가져오겠다.
    // const [currentPage, setCurrentPage] = useState(1);
    console.log('dworkerlist', dworkerlist);
    // 페이징이 필요한면 useState를 통해서 상태값을 추가 -> currentPage참조
   


   if (dworkerlist !== undefined) {
     console.log("dworkerlist", dworkerlist);
   }
    useEffect(
        () => {

            dispatch(dworkerInfoAllAPI());
        }, []
    );

    return(
        <>
            <div className={`${DWorkerSelectCSS["HRlistone"]}`}>
                <div className={`${DWorkerSelectCSS["titlee"]}`}>
                    <h3>일용직사원 조회</h3>
                </div>
                <div className={`${DWorkerSelectCSS["box"]}`}>
                    <div className={`${DWorkerSelectCSS["content1"]}`}>
                        <h4>검색어</h4>
                        <div className={`${DWorkerSelectCSS["content2"]}`}>
                            <select className={`${DWorkerSelectCSS["workType"]}`}>
                                <option value="1">성명</option>
                                <option value="2">사원번호</option>
                                <option value="3">부서</option>
                            </select>
                            <div className={`${DWorkerSelectCSS["content2"]}`}>
                                <input type="text" />
                            </div>
                            <div className={`${DWorkerSelectCSS["applbutton"]}`}>
                                <button>검색</button>
                            </div>
                            <div className={`${DWorkerSelectCSS["content2"]}`}>
                                <input type="checkbox" />퇴직자포함
                            </div>
                        </div>
                    </div>
                    <h5>사원조회</h5>
                    <div className={`${DWorkerSelectCSS["pplist"]}`}>
                        <table className={`${DWorkerSelectCSS["appltable"]}`}>
                            <thead className={`${DWorkerSelectCSS["applthead"]}`}>
                                <tr className={`${DWorkerSelectCSS["appltr"]}`}>
                                    <th className={`${DWorkerSelectCSS["applth"]}`}>사원번호</th>
                                    <th className={`${DWorkerSelectCSS["applth"]}`}>성명</th>
                                    <th className={`${DWorkerSelectCSS["applth"]}`}>주민번호</th>
                                    <th className={`${DWorkerSelectCSS["applth"]}`}>휴대폰</th>
                                    <th className={`${DWorkerSelectCSS["applth"]}`}>주소</th>
                                    <th className={`${DWorkerSelectCSS["applth"]}`}>은행명</th>
                                    <th className={`${DWorkerSelectCSS["applth"]}`}>계좌번호</th>
                                    <th className={`${DWorkerSelectCSS["applth"]}`}>등록일</th>
                                    <th className={`${DWorkerSelectCSS["applth"]}`}>수정일</th>
                                </tr>
                            </thead>
                                <tbody>
                                    { dworkerlist && dworkerlist.map (
                                        (dwinfo, index) => (
                                            <tr className={`${DWorkerSelectCSS["appltr"]}`}>
                                                <td className={`${DWorkerSelectCSS["appltd"]}`}>{dwinfo.workerCode}</td>
                                                <td className={`${DWorkerSelectCSS["appltd"]}`}>{dwinfo.workerName}</td>
                                                <td className={`${DWorkerSelectCSS["appltd"]}`}>{dwinfo.workerRegNumber}</td>
                                                <td className={`${DWorkerSelectCSS["appltd"]}`}>{dwinfo.workerPhone}</td>
                                                <td className={`${DWorkerSelectCSS["appltd"]}`}>{dwinfo.workerAddress}</td>
                                                <td className={`${DWorkerSelectCSS["appltd"]}`}>{dwinfo.employeeSalarySetting.bank}</td>
                                                <td className={`${DWorkerSelectCSS["appltd"]}`}>{dwinfo.employeeSalarySetting.accountNumber}</td>
                                                <td className={`${DWorkerSelectCSS["appltd"]}`}>{dwinfo.createAt}</td>
                                                <td className={`${DWorkerSelectCSS["appltd"]}`}>{dwinfo.updatedAt}</td>
                                            </tr>
                                        )
                                        )}
                            
                                </tbody>      

                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DWorkerlist;