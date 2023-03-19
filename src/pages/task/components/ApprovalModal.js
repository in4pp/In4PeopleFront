import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Ek from '../taskApproval/Ek';
import { callGetSearchInfoAPI } from '../../../apis/ApprovalAPICalls';
import '../taskCSS/MakeApproval.css';
import { useSelector } from 'react-redux';
import { CLEAR_INFO } from '../../../modules/ModalModule';
import Xmark from '../../../components/icon/Xmark';
function ApprovalModal() {


    /** EKEditor 환경설정 */
    const editorConfiguration = {
        toolbar: ['bold', 'italic'],
    }
    const getInfo = useSelector(state => state.modalReducer);
    const dispatch = useDispatch();

    const [approvers, setApprovers] = useState([]);
    const [referees, setReferees] = useState([]);
    const [fileNames, setFileNames] = useState([]);
    const [noteValue, setNoteValue] = useState("");
    const [noteEditor, setNoteEditor] = useState('');

    /** xMark 용 */
    const [mouseOverIndex, setMouseOverIndex] = useState();

    const onClickXmarkHandler = ({index}) => {
        console.log("index", index);
        const tempApprover = approvers;
        tempApprover.splice(index, 1);
        dispatch({ type : CLEAR_INFO });
    }

    const mouseOverHandler = ({index}) => {
        setMouseOverIndex(index);
    };
  
    const mouseOutHandler = () => {
        setMouseOverIndex('');
    }
    

    const onClickFileHandler = () => {
        document.querySelector('input[type=file]').click()
    }

    const fileUploadHandler = (e) => {
        const files = e.target.files;
        const fileNameArray = [];

        for (let i = 0; i < files.length; i++) {
            fileNameArray.push(files[i].name);

        }
        setFileNames(fileNameArray);
    }

    const clearFilesHandler = () => {
        document.querySelector('input[type=file]').value = null;
        setFileNames([]);
    }
    const closeModalHandler = () => {
        document.querySelector('input[type=file]').value = null;
        setFileNames([]);
        setNoteValue('');
        document.querySelector('#title').value = null;
        if (noteEditor) {
            noteEditor.setData('');
        }
        document.querySelector('#searchInput').value = null;
        dispatch({ type : CLEAR_INFO });

        setApprovers([]);
        setReferees([]);
    }

    const searchInfoHandler = (e) => {
        const nameOrPosition = document.querySelector('#searchValue1').value; //이름 or 직급
        const inputValue = e.target.value;
        // const searchValue2 = document.querySelector('input[name="checkApprover"]:checked + label').textContent; //결재 or 참조

        // console.log(searchValue2);
        if (inputValue.length >= 2) { // 2글자 이상 입력 시 api호출.

            dispatch(callGetSearchInfoAPI({ nameOrPosition, inputValue }));
        }

    }

    const onClickApproversHandler = (a) => {
        const approverOrReferee = document.querySelector('input[name="checkApprover"]:checked + label').textContent; //결재자 or 참조
        if (approverOrReferee === "결재자") {

            const approverList = approvers;
            approverList.push(a);

            setApprovers(approverList);
        } else if (approverOrReferee === "참조") {

            const refereeList = referees;
            refereeList.push(a);

            setReferees(refereeList);
        }

        // console.log("approvers", approvers); //잘들어옴.]
        document.querySelector('#searchInput').value = null;

        // dispatch(callGetSearchInfoAPI());
        
        dispatch({ type: CLEAR_INFO});
    }

    return (
        <>
            <div className="modal fade modal-dialog-scrollable " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl " >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">결재 상신</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModalHandler}></button>
                        </div>
                        <div className="modal-body">
                            <div width="80%" radius={10} className="sc-lbVpMG ieOMJV">
                                <div className="sc-gScZFl cyBdCS">
                                    <div className="modal-body-content">
                                        <div className="form-group">
                                            <div className="position-relative">
                                                <p className="micro">제목</p>
                                                <input
                                                    type="text"
                                                    className="form-control bg-white"
                                                    title=""
                                                    placeholder="제목을 입력해주세요"
                                                    name="title"
                                                    maxLength={100}
                                                    defaultValue=""
                                                    id="title"
                                                />
                                            </div>
                                        </div>
                                        {/* 서머노트 자리 */}
                                        <div className="form-group">
                                            <span style={{ color: 'black' }}>
                                                <Ek setNoteValue={setNoteValue} setNoteEditor={setNoteEditor} />

                                            </span>
                                        </div>
                                        <div className="form-group">
                                            {/* {fileNames.length > 0 && fileNames.map((fileName) => (

                                                <div key={fileName}>{fileName}</div>
                                                ))} */}
                                            <p className="h6">파일첨부</p>
                                            <div className="position-relative">
                                                <div className="d-flex-space">
                                                    <p style={{ fontStyle: "italic", fontSize: 12 }}>
                                                        파일은 하나당 최대 10MByte 까지 업로드 가능합니다. 여러개를
                                                        첨부하려면 [Shift키] 또는 [Ctrl키]를 누르고 선택해주세요
                                                    </p>
                                                    <span className="text-primary cursor-pointer ml-3" onClick={clearFilesHandler} >
                                                        파일 지우기
                                                    </span>
                                                </div>
                                                <div>
                                                    <div tabIndex={0} className="file-drop-zone" onClick={onClickFileHandler}>
                                                        <input multiple type="file" autoComplete="off" tabIndex={-1}
                                                            style={{ display: "none" }}
                                                            onChange={fileUploadHandler} />
                                                        <p>파일을 드래그 앤 드롭하거나 여기를 클릭해주세요.</p>
                                                    </div>
                                                </div>
                                                <div className="mt-1" >
                                                    {fileNames.length > 0 && fileNames.map((fileName) => (

                                                        <div key={fileName}>{fileName}</div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="form-group">
                                      <p className="h6">관련문서</p>
                                      <div className="position-relative">
                                        <div className="text-primary cursor-pointer mt-1">
                                          + 관련문서 첨부하기
                                        </div>
                                      </div>
                                    </div> */}
                                        <div className="">
                                            <div>
                                                <div>
                                                    <div width="100%" className="sc-fXqpFg iBqTtj">
                                                        <div className="apv-wrapper">
                                                            <table className="table table-fixed my-3">
                                                                <caption className="sr-only" />
                                                                <thead>
                                                                    <tr>
                                                                        <th className="sc-dwnOUR hMOodW">순서</th>
                                                                        <th className="sc-dwnOUR hMOodW">결재자</th>
                                                                        <th className="sc-dwnOUR hMOodW">직급</th>
                                                                        <th className="sc-dwnOUR hMOodW">부서</th>

                                                                    </tr>
                                                                </thead>
                                                                <thead>
                                                                    {approvers.length === 0 &&
                                                                        <tr>
                                                                            <td colSpan={12} className="sc-ZqFbI cWjmER" style={{ paddingBottom: 30 }}>
                                                                                결재자가 없습니다.
                                                                            </td>
                                                                        </tr> }

                                                                    {approvers.length > 0 && approvers.map((a, index) => (
                                                                        <tr key={index} className="sc-UpCWa kiPXzL no-select"onMouseOver={() =>mouseOverHandler({index})} onMouseOut={mouseOutHandler} >
                                                                            <td className="sc-jIILKH gIRdvs">
                                                                                <div>{index + 1}</div>
                                                                            </td>

                                                                            <td className="sc-jIILKH gIRdvs">
                                                                                <div className="sc-gGvHcT gmJlZF">
                                                                                    <div className="sc-ckEbSK hTJZdZ">
                                                                                        <div className="sc-GhhNo cMWDrM">{a.memName}</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>

                                                                            <td className="sc-jIILKH gIRdvs">
                                                                                <div className="sc-gGvHcT gmJlZF">
                                                                                    <div className="sc-ckEbSK hTJZdZ">
                                                                                        <div className="sc-GhhNo cMWDrM">{a.positionCode.positionName}</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>

                                                                            <td className="sc-jIILKH gIRdvs">
                                                                                <div className="sc-gGvHcT gmJlZF">
                                                                                    <div className="sc-ckEbSK hTJZdZ">
                                                                                        <div className="sc-GhhNo cMWDrM">{a.departmentCode.departmentName}</div>
                                                                                    </div>
                                                                                    { mouseOverIndex === index && <div onClick={() => onClickXmarkHandler({index})}><Xmark size="xl"/>  </div>}
                                                                                </div>
                                                                                
                                                                            </td>
                                                                           
                                                                        </tr>
                                                                    ))}

                                                                </thead>
                                                                <tbody className="appTbody">

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className="cr-wrapper" style={{ paddingTop: 0 }}>
                                                            <div>참조</div>
                                                            <div className="sc-hlLBRy zApTA">
                                                                {referees.length === 0 && 
                                                                <div className="sc-ZqFbI cWjmER"> 참조자가 없습니다.</div>
                                                                } 
                                                                {referees.length > 0 && referees.map((r, index) => (
                                                                    <span className="sc-jNJNQp bzwmyz mr-3" key={index}>{r.positionCode.positionName}: {r.memName}</span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <select className="form-select mr-3" style={{ height: '35px', width: '100px', display: 'inline-block' }} id="searchValue1">
                                                    <option value="이름">이름</option>
                                                    <option value="직급">직급</option>
                                                </select>
                                                <div className="form-check  mr-3" style={{ display: 'inline-block' }}>
                                                    <input className="form-check-input" type="radio" name="checkApprover" id="approverId" defaultChecked />
                                                    <label className="" htmlFor="approverId" value="결재자">
                                                        결재자
                                                    </label>
                                                </div>
                                                <div className="form-check" style={{ display: 'inline-block' }}>
                                                    <input className="form-check-input" type="radio" name="checkApprover" id="refereeId" />
                                                    <label className="form-check-label" htmlFor="refereeId" value="참조">
                                                        참조
                                                    </label>
                                                </div>
                                                <input type="text" id="searchInput" style={{ width: '200px', display: 'block' }} onChange={searchInfoHandler} />
                                            </div>
                                            {getInfo.length > 0 && getInfo.map((a, index) => (
                                                <div className="mt-2" key={index}>
                                                    <span className="getInfo" onClick={() => onClickApproversHandler(a)}>{a.memName} | {a.departmentCode.departmentName} | {a.positionCode.positionName} </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModalHandler}>취소</button>
                            <button type="button" className="btn btn-primary">상신</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApprovalModal;