import NavCSS from '../taskCSS/Content.module.css';
// import '../taskCSS/MakeApproval.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { callPostTest } from '../../../apis/ApprovalAPICalls';
import ApprovalModal from '../components/ApprovalModal';

function ApprovalNeed() {


const dispatch = useDispatch();

const [form, Setform] = useState({
  approvalMem: {
      memCode: "200"
  },
  docType: "업무",
  isApproved: "W",
  content: "내용",
  approverList: [
      {
          memCode: "100"
      },
      {
          memCode: "100"
      }
  ],
  refereeList: [
      {
          memCode: "300",
      },
      {
          memCode: "400",
      }


  ]
})

const testHandler = () => {
  dispatch(callPostTest(form));
}  
  return (
    <>
      <div></div>
      <div>
        <div className={NavCSS.wrap}>
          <div></div>
          <div className={NavCSS.wrapper} >
            <div className={NavCSS.ct}>
              <div className={NavCSS.container}>
              <button onClick={testHandler}>
                        post test
             </button>
                <div>
                  <div className={`${NavCSS["d-flex-space"]} ${NavCSS["bread-title"]}`}>
                    <div className={`${NavCSS["title"]}`}>
                      <span className={`${NavCSS["breadcrumb"]}`}>결재 /</span>
                      <h2 className={`${NavCSS["h3"]}`}>결재 할 것(1)</h2>
                    </div>
                  </div>

                  <div></div>
                  <div className={`${NavCSS["d-flex-space"]}`}>
                    <div className={`${NavCSS["d-flex-space"]}`}>
                      <select className={`${["form-select"]} ${["form-select-sm"]}`} aria-label=".form-select-sm example">
                        <option defaultValue>전체</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className={`${["display-flex"]}`}>
                      <button className={`${["btn"]} ${["btn-primary"]}`} style={{ alignSelf: "self-start" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        결재 작성하기
                      </button>
                      {/* <!-- Modal --> */}
                      <ApprovalModal />
                      {/* 모달 종료 */}

                    </div>
                  </div>
                </div>
                <div className={`${NavCSS.iLLwYh}`}>
                  <table className={`${[NavCSS.table]} ${["table"]} ${["table-hover"]} ${"mt-3"}`}>
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
                        <th className={`${NavCSS["bGDZRZ"]}`}>종류</th>
                        <th className={`${NavCSS["iztiXy"]}`}>문서번호</th>
                        <th className={`${NavCSS["iztiWO"]}`}>제목</th>
                        <th className={`${NavCSS["bGDZRX"]}`}>작성자</th>
                        <th className={`${NavCSS["bGDZRW"]}`}>첨부파일</th>
                        <th className={`${NavCSS["bGDZRX"]}`}>결재의견</th>
                        <th className={`${NavCSS["iztiWO"]}`}>작성일</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input className={`${["form-check-input"]}`} type="checkbox" value=""
                            id="flexCheckDefault" />
                          <label className={`${["form-check-label"]}`} htmlFor="flexCheckDefault"></label>
                        </td>
                        <td>일반</td>
                        <td>2023-02-07-1564656</td>
                        <td>업무결재3</td>
                        <td>조성일</td>
                        <td>O</td>
                        <td>0개</td>
                        <td>2023.02.07, 화 07:23</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ApprovalNeed;