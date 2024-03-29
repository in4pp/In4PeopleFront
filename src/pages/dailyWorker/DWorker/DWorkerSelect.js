import {useDispatch, useSelector} from 'react-redux';
import DWorkerSelectCSS from './DWorkerSelect.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';
import {dworkerInfoAllAPI, dworkerInfoAPI, dworkerSearchAPI} from '../../../apis/DailyWorkerAPICalls';
import HRlistCSS from "../../personnel/HR/HRlist.module.css";

function DWorkerlist() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const dworkerlist = useSelector(state => state.dailyWorkerReducer); // modules/index.js 안에 선언한 store목록 중에서 dailyWorkerReducer 가져오겠다.
    const [search, setSearch] = useState('');


    if (dworkerlist !== undefined) {
        console.log("dworkerlistUndefined", dworkerlist);
    }
    useEffect(
        () => {
            dispatch(dworkerInfoAllAPI());
        }, []
    );


    const onSearchChangeHandler = (e) => {
        setSearch(e.target.value);
    }

    const onEnterkeyHandler = (e) => {
        if (e.key == 'Enter') {
            console.log('Enter key', search);

            dispatch(dworkerSearchAPI({
                workerName: search
            }));
        }
    }
    const onClickTableTr = (workerCode) => {
        navigate(`/dailyWorker/detail/${workerCode}`, { replace: false });
    }

        return (
            <>
                <div className={`${DWorkerSelectCSS["HRlistone"]}`}>
                    <div className={`${DWorkerSelectCSS["titlee"]}`}>
                        <h3>일용직사원 조회</h3>
                    </div>
                    <div className={`${DWorkerSelectCSS["box"]}`}>
                        <div className={`${DWorkerSelectCSS["content1"]}`}>
                            <h4>검색어</h4>
                            <div className={`${DWorkerSelectCSS["content2"]}`} type="text"  onChange={ onSearchChangeHandler } value={ search }>
                                <div className={`${DWorkerSelectCSS["workType"]}`}>
                                    <option value="1">성명 -> </option>
                                    {/*<option value="2">사원번호</option>*/}
                                </div>

                                <div className={`${DWorkerSelectCSS["content2"]}` }  >

                                    <input
                                        type="text"
                                        placeholder="입력 후 엔터 누르세요"
                                        value={ search }
                                        onKeyUp={ onEnterkeyHandler }
                                        onChange={ onSearchChangeHandler }
                                    />
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
                                    <th className={`${DWorkerSelectCSS["applth"]}`}>근무시작일</th>
                                    <th className={`${DWorkerSelectCSS["applth"]}`}>근무종료일</th>
                                </tr>
                                </thead>
                                <tbody>
                                {Array.isArray(dworkerlist) && dworkerlist.map (
                                    (dworkerlist, index) => (
                                        <tr
                                            key={dworkerlist.workerCode}
                                            onClick={ () => onClickTableTr(dworkerlist.workerCode) }
                                            className={`${DWorkerSelectCSS["appltr"]}`}>

                                    {/*dworkerlist && dworkerlist.map(*/}
                                    {/*(dwinfo, index) => (*/}
                                    {/*    <tr key={dwinfo.workerCode} className={`${DWorkerSelectCSS["appltr"]}`}>*/}
                                            <td className={`${DWorkerSelectCSS["appltd"]}`}>{dworkerlist.workerCode}</td>
                                            <td className={`${DWorkerSelectCSS["appltd"]}`}>{dworkerlist.workerName}</td>
                                            <td className={`${DWorkerSelectCSS["appltd"]}`}>{dworkerlist.workerRegNumber}</td>
                                            <td className={`${DWorkerSelectCSS["appltd"]}`}>{dworkerlist.workerPhone}</td>
                                            <td className={`${DWorkerSelectCSS["appltd"]}`}>{dworkerlist.workerAddress}</td>
                                            <td className={`${DWorkerSelectCSS["appltd"]}`}>{dworkerlist.bank}</td>
                                            <td className={`${DWorkerSelectCSS["appltd"]}`}>{dworkerlist.accountNumber}</td>
                                            <td className={`${DWorkerSelectCSS["appltd"]}`}>{dworkerlist.startDate}</td>
                                            <td className={`${DWorkerSelectCSS["appltd"]}`}>{dworkerlist.endDate}</td>
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

