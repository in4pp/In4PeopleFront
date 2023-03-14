import { useDispatch, useSelector } from 'react-redux';
import HRApplistCSS from './HRApplist.module.css';
import { useEffect, useState } from 'react';
import {callOrderInfoListAPI} from '../../../apis/PersonnelAPICalls';

function HRApplist() {

    const dispatch = useDispatch();
    const hrApplist = useSelector(state => state.orderInfoReducer); // modules/index.js 안에 선언한 store목록 중에서 orderInfoReducer를 가져오겠다.
    const [currentPage, setCurrentPage] = useState(1);
    console.log('hrApplist', hrApplist);
    // 페이징이 필요한면 useState를 통해서 상태값을 추가 -> currentPage참조
    
    const list = hrApplist.data;
    if(list != undefined){

        console.log('list', list[0].memCode.departmentCode.departmentName);
    }
    useEffect(
        () => {

            dispatch(callOrderInfoListAPI({currentPage : currentPage}));
        },[currentPage]
    );


    return(
        <>
            <div className={`${HRApplistCSS['applistone']}`}>
                <div className={`${HRApplistCSS['titlee']}`}>
                    <h3>인사 발령</h3>
                </div>
                <div className={`${HRApplistCSS['box']}`}>
                    <div className={`${HRApplistCSS['content1']}`}>
                    <h4>발령 구분</h4>
                    <div className={`${HRApplistCSS['content2']}`}>
                        <select className={`${HRApplistCSS['workType']}`}>
                        <option value="1">전체</option>
                        <option value="2">승진</option>
                        <option value="3">부서 이동</option>
                        <option value="4">휴직</option>
                        <option value="5">복직</option>
                        <option value="6">퇴직</option>
                        </select>
                            <div className={`${HRApplistCSS['content2']}`}>
                        <button>검색</button>
                        </div>
                    </div>
                    </div>
                        <h5>인사발령조회</h5>
                        <div className={`${HRApplistCSS["pplist"]}`}>
                            <table className={`${HRApplistCSS["appltable"]}`}>
                                <thead className={`${HRApplistCSS["applthead"]}`}>
                                    <tr className={`${HRApplistCSS["appltr"]}`}>
                                        <th className={`${HRApplistCSS["applth"]}`}>No</th>
                                        <th className={`${HRApplistCSS["applth"]}`}>발령구분</th>
                                        <th className={`${HRApplistCSS["applth"]}`}>발령일자</th>
                                        <th className={`${HRApplistCSS["applth"]}`}>사원번호</th>
                                        <th className={`${HRApplistCSS["applth"]}`}>성명</th>
                                        <th className={`${HRApplistCSS["applth"]}`}>발령내용</th>
                                        <th className={`${HRApplistCSS["applth"]}`}>비고</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { Array.isArray(list) && list.map (
                                        (hrApp, index) => (
                                            <tr className={`${HRApplistCSS["appltr"]}`}>
                                                <td className={`${HRApplistCSS["appltd"]}`}>{hrApp.orderNumber}</td>
                                                <td className={`${HRApplistCSS["appltd"]}`}>{hrApp.orderDetails}</td>
                                                <td className={`${HRApplistCSS["appltd"]}`}>{hrApp.perOrderAppList[0].orderDetails}</td>
                                                <td className={`${HRApplistCSS["appltd"]}`}>{hrApp.memCode.memCode}</td>
                                                <td className={`${HRApplistCSS["appltd"]}`}>{hrApp.memCode.memName}</td>
                                                <td className={`${HRApplistCSS["appltd"]}`}>{hrApp.orderNumber}</td>
                                                <td className={`${HRApplistCSS["appltd"]}`}>{hrApp.orderNumber}</td>
                                            </tr>
                                        )
                                        )}
                                    {/* <tr className={`${HRApplistCSS["appltr"]}`}>
                                        <td className={`${HRApplistCSS["appltd"]}`}>1</td>
                                        <td className={`${HRApplistCSS["appltd"]}`}>승진</td>
                                        <td className={`${HRApplistCSS["appltd"]}`}>220202</td>
                                        <td className={`${HRApplistCSS["appltd"]}`}>200101</td>
                                        <td className={`${HRApplistCSS["appltd"]}`}>가나다</td>
                                        <td className={`${HRApplistCSS["appltd"]}`}>차장-부장</td>
                                        <td className={`${HRApplistCSS["appltd"]}`}></td>
                                    </tr> */}
                                </tbody>  
                            </table>
                        </div>
                </div>
            </div>
        </>
    )
}

export default HRApplist;