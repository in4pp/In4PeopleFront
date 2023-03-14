import NavCSS from '../taskCSS/Content.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { decodeJwt } from '../../../utils/tokenUtils';
import { useEffect, useState, useRef } from 'react';
import ApprovalRow from './ApprovalRow';

import { callGetApprovalAPI } from '../../../apis/ApprovalAPICalls';

function ApprovalSubmit() {

    // const [isCalendar, setIsCalendar] = useState(false);
    const [form, setForm] = useState({
        startDate: '',
        endDate: ''
    });
    const startDate = useRef();
    const endDate = useRef();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = decodeJwt(window.localStorage.getItem("accessToken"));

    const approvalList = useSelector(state => state.approvalReducer);

    const onChangeCalendarHandler = (e) => {

        if(endDate.current.value !== '' && endDate.current.value < startDate.current.value) {
            alert('종료일이 더 작을 수 없습니다.')
        } else {
            setForm({
                ...form,
                [e.target.name]: e.target.value,
            });
        }

    };

    const onClickSearchHandler = () => {
        
    }

    useEffect(
        () => {
            console.log('token', token.sub);
            if (token !== null) {
                dispatch(callGetApprovalAPI({
                    memCode: token.sub
                }));
            }
        }
        , []
    );

    return (
        <>
            <div></div>
            <div>
                <div className={NavCSS.wrap}>
                    <div></div>
                    <div className={NavCSS.wrapper} >
                        <div className={NavCSS.ct}>
                            <div className={NavCSS.container}>

                                <div>
                                    <div className={`${NavCSS["d-flex-space"]} ${NavCSS["bread-title"]}`}>
                                        <div className={`${NavCSS["title"]}`}>
                                            <span className={`${NavCSS["breadcrumb"]}`}>결재 /</span>
                                            <h2 className={`${NavCSS["h3"]}`}>내가 올린 결재(4)</h2>
                                        </div>
                                    </div>
                                    <div></div>
                                    <div className={`${NavCSS["commute-manage"]}`}>
                                        <div className={`${NavCSS["sc-djTcra"]} ${NavCSS["laubHy"]}`}>
                                            <div className={`${NavCSS["form-group"]}`}>
                                                <span className={`${NavCSS["control-label"]}`}>시작일</span>
                                                <div className={`${NavCSS["position-relative"]}`}>
                                                    <input value={form.startDate}ref={startDate} type="date" name="startDate" className={`${NavCSS["sc-fWHiwC"]} ${NavCSS["jtuvXR"]} ${NavCSS["form-control"]} ${NavCSS["input-datepicker"]}`} placeholder="시작일" onChange={onChangeCalendarHandler} />
                                                </div>
                                            </div>
                                            <h1>-</h1>
                                            <div className={`${NavCSS["form-group"]}`}>
                                                <span className={`${NavCSS["control-label"]}`}>종료일</span>
                                                <div className={`${NavCSS["position-relative"]}`}>
                                                    <input value={form.endDate} ref={endDate} type="date" name="endDate" className={`${NavCSS["sc-fWHiwC"]} ${NavCSS["jtuvXR"]} ${NavCSS["form-control"]} ${NavCSS["input-datepicker"]}`} placeholder="시작일" onChange={onChangeCalendarHandler} />
                                                </div>
                                            </div>
                                            <button className="btn btn-primary mt-3" onClick={ onClickSearchHandler } >조회</button>
                                        </div>
                                    </div>
                                    <div className={`${NavCSS["d-flex-space"]}`}>
                                        {/* <div className={`${NavCSS["d-flex-space"]}`}>
                                            <select className={`${["form-select"]} ${["form-select-sm"]}`} aria-label=".form-select-sm example">
                                                <option defaultValue>전체</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div> */}
                                        <div className={`${["display-flex"]}`}>
                                            <button className={`${["btn"]} ${["btn-primary"]}`} style={{ alignSelf: "self-start" }}>결재 작성하기</button>
                                        </div>
                                    </div>
                                    <div className={`${NavCSS.iLLwYh}`}>
                                        <table className={`${[NavCSS.table]} ${["table-hover"]} ${["table"]} ${"mt-3"}`}>
                                            <caption></caption>
                                            <thead className={`${NavCSS.dXdqfk}`}>
                                                <tr>
                                                    <th className={`${NavCSS.bGDZWn}`}>
                                                        <div className={`${NavCSS.formCheck}`}>
                                                            <input className={`${NavCSS.formCheckInput}`} type="checkbox" value=""
                                                                id="flexCheckDefault" />
                                                            <label className={`${NavCSS.formCheckLabel}`} htmlFor="flexCheckDefault">
                                                            </label>
                                                        </div>
                                                    </th>

                                                    <th className={`${NavCSS["bGDZWl"]}`}>북마크</th>
                                                    <th className={`${NavCSS["bGDZRZ"]}`}>종류</th>
                                                    <th className={`${NavCSS["iztiXy"]}`}>문서번호</th>
                                                    <th className={`${NavCSS["iztiWO"]}`}>제목</th>
                                                    <th className={`${NavCSS["bGDZRX"]}`}>상태</th>
                                                    <th className={`${NavCSS["bGDZRW"]}`}>첨부파일</th>
                                                    <th className={`${NavCSS["bGDZRX"]}`}>결재의견</th>
                                                    <th className={`${NavCSS["iztiWO"]}`}>작성일</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    approvalList.length > 0 && approvalList.map((approval) => (<ApprovalRow key={approval.docCode} approval={approval} memCode={token.sub} />))
                                                }
                                            </tbody>
                                        </table>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApprovalSubmit;