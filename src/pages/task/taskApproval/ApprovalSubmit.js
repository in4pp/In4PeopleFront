import NavCSS from '../taskCSS/Content.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { decodeJwt } from '../../../utils/tokenUtils';
import { useEffect, useState, useRef } from 'react';
import PlainStar from '../../../components/icon/PlainStar';
import BlueStar from '../../../components/icon/BlueStar';
import Pagination from '../components/Pagination';
import ApprovalModal from '../components/ApprovalModal';
import {
    callGetApprovalAPI, callGetSearchApprovalAPI,
    callPostBookmarkAPI, callDeleteBookmarkAPI
} from '../../../apis/ApprovalAPICalls';

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
    const auth = token.auth;

    const approvals = useSelector(state => state.approvalReducer);
    const approvalList = approvals.data || approvals; // 페이징처리의 경우 approvals.data / 검색의경우 바로 approvals로 값이 들어옴. 
    const pageInfo = approvals.pageInfo; // 페이징의 경우에만 pageInfo를 값으로 사용.

    const [isBookmark, setIsBookmark] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    const onChangeCalendarHandler = (e) => {

        if (endDate.current.value !== '' && endDate.current.value < startDate.current.value) {
            alert('종료일이 더 작을 수 없습니다.')
        } else {
            setForm({
                ...form,
                [e.target.name]: e.target.value,
            });
        }
    };

    const onClickSearchHandler = () => {
        if (startDate.current.value !== '' && endDate.current.value !== '') {
            dispatch(callGetSearchApprovalAPI({
                memCode: token.sub,
                startDate: startDate.current.value,
                endDate: endDate.current.value
            }));
        } else {
            alert('검색 날짜를 선택해주세요.');
        }

    }

    const onClickBookmarkHandler = (docCode, bookmark) => {
        // const docCode = e.target.parentElement.id;
        // console.log(docCode);

        const form = {
            "memCode": token.sub,
            "docCode": docCode
        }

        bookmark == null ? dispatch(callPostBookmarkAPI({ form: form })).then(() => {setIsBookmark(!isBookmark)}) 
        : dispatch(callDeleteBookmarkAPI({ form: form })).then(() => {setIsBookmark(!isBookmark)});
        // setTimeout(() => {
        //     setIsBookmark(!isBookmark);
        // }, 50); //화면을 다시 그려주기 위한 state값 변경..
    }





    useEffect(
        () => {
            console.log('token', token.sub);
            console.log('auth', auth);
            console.log();
            // console.log(token.auth.include('ROLE_INSA1'));
            if (token !== null) {
                dispatch(callGetApprovalAPI({
                    memCode: token.sub,
                    currentPage: currentPage
                }));
            }
        }
        , [isBookmark, currentPage]
    );

    return  (
        <>
        {!auth.includes('ROLE_PROGRAM1') ? <> {console.log("권한이없어요")} <div style={{paddingLeft:500}}>권한이 없어유 </div> </>
          : <>
          {console.log("권한이 있어유")}
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
                                                    <input value={form.startDate} ref={startDate} type="date" name="startDate" className={`${NavCSS["sc-fWHiwC"]} ${NavCSS["jtuvXR"]} ${NavCSS["form-control"]} ${NavCSS["input-datepicker"]}`} placeholder="시작일" onChange={onChangeCalendarHandler} />
                                                </div>
                                            </div>
                                            <h1>-</h1>
                                            <div className={`${NavCSS["form-group"]}`}>
                                                <span className={`${NavCSS["control-label"]}`}>종료일</span>
                                                <div className={`${NavCSS["position-relative"]}`}>
                                                    <input value={form.endDate} ref={endDate} type="date" name="endDate" className={`${NavCSS["sc-fWHiwC"]} ${NavCSS["jtuvXR"]} ${NavCSS["form-control"]} ${NavCSS["input-datepicker"]}`} placeholder="시작일" onChange={onChangeCalendarHandler} />
                                                </div>
                                            </div>
                                            <button className="btn btn-primary mt-3" onClick={onClickSearchHandler} >조회</button>
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
                                        <div></div>
                                        <div className={`${NavCSS["d-flex-space"]}`}>
                                            <div className={`${["display-flex"]}`}>
                                                <button className={`${["btn"]} ${["btn-primary"]}`} style={{ alignSelf: "self-start" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                    결재 작성하기
                                                </button>
                                                <ApprovalModal />
                                            </div>
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
                                                    Array.isArray(approvalList) && approvalList.map((a) => (
                                                        <tr key={a.docCode}>
                                                            <td>
                                                                <input className={`${["form-check-input"]}`} type="checkbox" value=""
                                                                    id="flexCheckDefault" />
                                                                <label className={`${["form-check-label"]}`} htmlFor="flexCheckDefault"></label>
                                                            </td>
                                                            <td><button onClick={() => onClickBookmarkHandler(a.docCode, a.bookmark)}>{(a.bookmark == null ? <PlainStar /> : <BlueStar />)}</button></td>
                                                            <td>{a.docType}</td>
                                                            <td>{a.docCode}</td>
                                                            <td>{a.title}</td>
                                                            <td><span className={`${NavCSS["badge"]} ${NavCSS["badge-green"]}`}>{a.isApproved == 'W' ? '진행중' : a.isApproved == 'Y' ? '승인' : '반려'}</span></td>
                                                            <td>{a.docAttachmentList.length}</td>
                                                            <td>0개</td>
                                                            <td>{a.reportDate.substring(0, 16).replace('T', ' ')}</td>
                                                        </tr>
                                                    ))


                                                    // approvalList.length > 0 && approvalList.map((approval) => (<ApprovalRow key={approval.docCode} 
                                                    //     approval={approval} isBookmark={isBookmark} setIsBookmark={setIsBookmark} memCode={token.sub} />))
                                                }
                                            </tbody>
                                        </table>
                                        {Array.isArray(approvals.data) && <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pageInfo={pageInfo} />}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
}
        </>
    )
}

export default ApprovalSubmit;