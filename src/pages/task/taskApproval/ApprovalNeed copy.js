// import NavCSS from '../taskCSS/Content.module.css';
// import '../taskCSS/MakeApproval.css';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import Ek from './Ek';
// import { callGetSearchInfoAPI } from '../../../apis/ApprovalAPICalls';
// function ApprovalNeed() {

//   /** EKEditor 환경설정 */
//   const editorConfiguration = {
//     toolbar: ['bold', 'italic'],
//   }

//   const dispatch = useDispatch();

//   const [fileNames, setFileNames] = useState([]);
//   const [noteValue, setNoteValue] = useState("");
//   const [noteEditor, setNoteEditor] = useState('');

//   const onClickFileHandler = () => {
//     document.querySelector('input[type=file]').click()
//   }

//   const fileUploadHandler = (e) => {
//     const files = e.target.files;
//     const fileNameArray = [];

//     for (let i = 0; i < files.length; i++) {
//       fileNameArray.push(files[i].name);
//     }
//     setFileNames(fileNameArray);
//   }

//   const clearFilesHandler = () => {
//     document.querySelector('input[type=file]').value = null;
//     setFileNames([]);
//   }
//   const closeModalHandler = () => {
//     // console.log(noteValue);
//     document.querySelector('input[type=file]').value = null;
//     setFileNames([]);
//     setNoteValue('');
//     document.querySelector('#title').value = null;
//     console.log(noteEditor);
//     if (noteEditor) {
//       noteEditor.setData('');
//     }

//   }

//   const searchInfoHandler = (e) => {
//     const nameOrPosition = document.querySelector('#searchValue1').value; //이름 or 직급
//     const inputValue = e.target.value;
//     // const searchValue2 = document.querySelector('input[name="checkApprover"]:checked + label').textContent; //결재 or 참조

//     // console.log(searchValue2);
//     if (inputValue.length >= 2) { // 2글자 이상 입력 시 api호출.

//       dispatch(callGetSearchInfoAPI({ nameOrPosition, inputValue }));
//     }

//   }

//   const onClickApproversHandler = (e) => {
//     console.log(e.target.value);

//   }

//   return (
//     <>
//       <div></div>
//       <div>
//         <div className={NavCSS.wrap}>
//           <div></div>
//           <div className={NavCSS.wrapper} >
//             <div className={NavCSS.ct}>
//               <div className={NavCSS.container}>

//                 <div>
//                   <div className={`${NavCSS["d-flex-space"]} ${NavCSS["bread-title"]}`}>
//                     <div className={`${NavCSS["title"]}`}>
//                       <span className={`${NavCSS["breadcrumb"]}`}>결재 /</span>
//                       <h2 className={`${NavCSS["h3"]}`}>결재 할 것(1)</h2>
//                     </div>
//                   </div>

//                   <div></div>
//                   <div className={`${NavCSS["d-flex-space"]}`}>
//                     <div className={`${NavCSS["d-flex-space"]}`}>
//                       <select className={`${["form-select"]} ${["form-select-sm"]}`} aria-label=".form-select-sm example">
//                         <option defaultValue>전체</option>
//                         <option value="1">One</option>
//                         <option value="2">Two</option>
//                         <option value="3">Three</option>
//                       </select>
//                     </div>
//                     <div className={`${["display-flex"]}`}>
//                       <button className={`${["btn"]} ${["btn-primary"]}`} style={{ alignSelf: "self-start" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
//                         결재 작성하기
//                       </button>
//                       {/* <!-- Modal --> */}
//                       <div className="modal fade modal-dialog-scrollable " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//                         <div className="modal-dialog modal-xl " >
//                           <div className="modal-content">
//                             <div className="modal-header">
//                               <h1 className="modal-title fs-5" id="staticBackdropLabel">결재 상신</h1>
//                               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModalHandler}></button>
//                             </div>
//                             <div className="modal-body">
//                               <div width="80%" radius={10} className="sc-lbVpMG ieOMJV">
//                                 <div className="sc-gScZFl cyBdCS">
//                                   <div className="modal-body-content">
//                                     <div className="form-group">
//                                       <div className="position-relative">
//                                         <p className="micro">제목</p>
//                                         <input
//                                           type="text"
//                                           className="form-control bg-white"
//                                           title=""
//                                           placeholder="제목을 입력해주세요"
//                                           name="title"
//                                           maxLength={100}
//                                           defaultValue=""
//                                           id="title"
//                                         />
//                                       </div>
//                                     </div>
//                                     {/* 서머노트 자리 */}
//                                     <div className="form-group">
//                                       <span style={{ color: 'black' }}>
//                                         <Ek setNoteValue={setNoteValue} setNoteEditor={setNoteEditor} />

//                                       </span>
//                                     </div>
//                                     <div className="form-group">
//                                       <p className="h6">파일첨부</p>
//                                       <div className="position-relative">
//                                         <div className="d-flex-space">
//                                           <p style={{ fontStyle: "italic", fontSize: 12 }}>
//                                             파일은 하나당 최대 10MByte 까지 업로드 가능합니다. 여러개를
//                                             첨부하려면 [Shift키] 또는 [Ctrl키]를 누르고 선택해주세요
//                                           </p>
//                                           <span className="text-primary cursor-pointer ml-3" onClick={clearFilesHandler} >
//                                             파일 지우기
//                                           </span>
//                                         </div>
//                                         <div>
//                                           <div tabIndex={0} className="file-drop-zone" onClick={onClickFileHandler}>
//                                             <input multiple type="file" autoComplete="off" tabIndex={-1}
//                                               style={{ display: "none" }}
//                                               onChange={fileUploadHandler} />
//                                             <p>파일을 드래그 앤 드롭하거나 여기를 클릭해주세요.</p>
//                                           </div>
//                                         </div>
//                                         <div className="mt-1" >
//                                           {fileNames.length > 0 && fileNames.map((fileName) => (

//                                             <div key={fileName}>{fileName}</div>
//                                           ))}
//                                         </div>
//                                       </div>
//                                     </div>
//                                     {/* <div className="form-group">
//                                       <p className="h6">관련문서</p>
//                                       <div className="position-relative">
//                                         <div className="text-primary cursor-pointer mt-1">
//                                           + 관련문서 첨부하기
//                                         </div>
//                                       </div>
//                                     </div> */}
//                                     <div className="">
//                                       <div>
//                                         <div>
//                                           <div width="100%" className="sc-fXqpFg iBqTtj">
//                                             <div className="apv-wrapper">
//                                               <table className="table table-fixed my-3">
//                                                 <caption className="sr-only" />
//                                                 <thead>
//                                                   <tr>
//                                                     <th className="sc-dwnOUR hMOodW">순서</th>
//                                                     <th className="sc-dwnOUR hMOodW">결재자</th>
//                                                   </tr>
//                                                 </thead>
//                                                 <thead>
//                                                   {/* <tr>
//                                                     <td colSpan={3} className="sc-ZqFbI cWjmER" style={{ paddingBottom: 30 }}>
//                                                       결재자가 없습니다.
//                                                     </td>
//                                                   </tr> */}
//                                                   <tr className="sc-UpCWa kiPXzL no-select">
//                                                     <td className="sc-jIILKH gIRdvs">
//                                                       <div>1</div>
//                                                     </td>

//                                                     <td className="sc-jIILKH gIRdvs">
//                                                       <div className="sc-gGvHcT gmJlZF">
//                                                         <div className="sc-ckEbSK hTJZdZ">
//                                                           <div className="sc-GhhNo cMWDrM">해란</div>
//                                                         </div>
//                                                       </div>
//                                                     </td>
//                                                   </tr>

//                                                   <tr className="sc-UpCWa kiPXzL no-select">
//                                                     <td className="sc-jIILKH gIRdvs">
//                                                       <div>1</div>
//                                                     </td>
//                                                     <td className="sc-jIILKH gIRdvs">
//                                                       <div className="sc-gGvHcT gmJlZF">
//                                                         <div className="sc-GhhNo cMWDrM">해란</div>
//                                                       </div>
//                                                     </td>
//                                                   </tr>
//                                                 </thead>
//                                                 <tbody className="appTbody">

//                                                 </tbody>
//                                               </table>
//                                             </div>
//                                             <div className="cr-wrapper" style={{ paddingTop: 0 }}>
//                                               <div>참조</div>
//                                               <div className="sc-hlLBRy zApTA">
//                                                 <span className="sc-jNJNQp bzwmyz mr-3">직원: 성일님</span>
//                                                 <span className="sc-jNJNQp bzwmyz mr-3">직원: 혜은</span>
//                                                 <span className="sc-jNJNQp bzwmyz mr-3">직원: 민재</span>
//                                               </div>
//                                             </div>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       <div className="mt-3">
//                                         <select className="form-select mr-3" style={{ height: '35px', width: '100px', display: 'inline-block' }} id="searchValue1">
//                                           <option value="이름">이름</option>
//                                           <option value="직급">직급</option>
//                                         </select>
//                                         <div className="form-check  mr-3" style={{ display: 'inline-block' }}>
//                                           <input className="form-check-input" type="radio" name="checkApprover" id="approverId" defaultChecked />
//                                           <label className="" htmlFor="approverId" value="결재자">
//                                             결재자
//                                           </label>
//                                         </div>
//                                         <div className="form-check" style={{ display: 'inline-block' }}>
//                                           <input className="form-check-input" type="radio" name="checkApprover" id="refereeId" />
//                                           <label className="form-check-label" htmlFor="refereeId" value="참조">
//                                             참조
//                                           </label>
//                                         </div>
//                                         <input type="text" style={{ width: '200px', display: 'block' }} onChange={searchInfoHandler} />
//                                       </div>
//                                       <div className="mt-2"><span className="approvers" onClick={onClickApproversHandler}>번호1</span></div>
//                                       <div className="mt-2"><span className="approvers" onClick={onClickApproversHandler}>번호2</span></div>
//                                       <div className="mt-2"><span className="approvers" onClick={onClickApproversHandler}>번호3</span></div>
//                                       <div className="mt-2"><span className="approvers" onClick={onClickApproversHandler}>번호4</span></div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="modal-footer">
//                               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModalHandler}>취소</button>
//                               <button type="button" className="btn btn-primary">상신</button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       {/* 모달 종료료 */}

//                     </div>
//                   </div>
//                 </div>
//                 <div className={`${NavCSS.iLLwYh}`}>
//                   <table className={`${[NavCSS.table]} ${["table"]} ${["table-hover"]} ${"mt-3"}`}>
//                     <caption></caption>
//                     <thead className={`${NavCSS.dXdqfk}`}>
//                       <tr>
//                         <th className={`${NavCSS.bGDZWn}`}>
//                           <div className={`${NavCSS.formCheck}`}>
//                             <input className={`${NavCSS.formCheckInput}`} type="checkbox" value=""
//                               id="flexCheckDefault" />
//                             <label className={`${NavCSS.formCheckLabel}`} htmlFor="flexCheckDefault">
//                             </label>
//                           </div>
//                         </th>
//                         <th className={`${NavCSS["bGDZRZ"]}`}>종류</th>
//                         <th className={`${NavCSS["iztiXy"]}`}>문서번호</th>
//                         <th className={`${NavCSS["iztiWO"]}`}>제목</th>
//                         <th className={`${NavCSS["bGDZRX"]}`}>작성자</th>
//                         <th className={`${NavCSS["bGDZRW"]}`}>첨부파일</th>
//                         <th className={`${NavCSS["bGDZRX"]}`}>결재의견</th>
//                         <th className={`${NavCSS["iztiWO"]}`}>작성일</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <td>
//                           <input className={`${["form-check-input"]}`} type="checkbox" value=""
//                             id="flexCheckDefault" />
//                           <label className={`${["form-check-label"]}`} htmlFor="flexCheckDefault"></label>
//                         </td>
//                         <td>일반</td>
//                         <td>2023-02-07-1564656</td>
//                         <td>업무결재3</td>
//                         <td>조성일</td>
//                         <td>O</td>
//                         <td>0개</td>
//                         <td>2023.02.07, 화 07:23</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>

//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default ApprovalNeed;