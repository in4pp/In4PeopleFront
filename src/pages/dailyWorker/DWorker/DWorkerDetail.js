import DWorkerStyle from './DWorkerDetail.module.css';
import {useEffect, useRef, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {dwInsertAPI, dworkerDetailAPI} from '../../../apis/DailyWorkerAPICalls';
import DaumAddress from "../../personnel/HR/PopupPostCode";
import {callMemberDetailAPI} from "../../../apis/PersonnelAPICalls";
import {useNavigate, useParams} from "react-router-dom";
import HRRegistCSS from "../../personnel/HR/HRRegist.module.css";

function DWorkerDetail() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const dworkerDetail = useSelector(state => state.dailyWorkerReducer);

    useEffect(
        () => {
            dispatch(dworkerDetailAPI({
                workerCode: params.workerCode
            }));
        }
        , []
    );

    // const onChangeImageUpload = (e) => {
    //
    //     const image = e.target.files[0];
    //     console.log('image ====================', image);
    //     setImage(image);
    // };
    //
    // const onChangeHandler = (e) => {
    //     const workerAddress = document.getElementById("daumAdd").value
    //
    //     setForm({
    //         ...form, // 스프레드문법
    //         [e.target.name]: e.target.value,
    //     });
    // };
    //
    // const onClickModifyModeHandler = () => {
    //     setModifyMode(true);
    //     setForm({
    //         reviewCode: workerDetail.reviewCode,
    //         reviewTitle: workerDetail.reviewTitle,
    //         reviewContent: workerDetail.reviewContent
    //     });
    // }
    //
    // const onClickReviewUpdateHandler = () => {
    //
    //     dispatch(callReviewUpdateAPI({	// 리뷰 정보 업데이트
    //         form: form
    //     }));
    //
    //     navigate(`/review/${reviewDetail.productCode}`, { replace: true});
    //     window.location.reload();
    // }


    return (
        <div>
            <div className={`${DWorkerStyle["registone"]}`}>
                <div className={`${DWorkerStyle['titlee']}`}>
                    <h3>일용직사원 정보</h3>
                </div>
                <div className={`${DWorkerStyle['box']}`}>

                    <table className={`${DWorkerStyle['ppinsa']}`}>
                        <tr>
                            <th className={`${DWorkerStyle["ppth"]}`}>사진</th>
                            <td className={`${DWorkerStyle["pptd"]}`}>
                                <img
                                    // className={ HRRegistCSS.memPicImage }
                                    src={dworkerDetail.pictureUrl}
                                    alt="preview"
                                />

                            </td>
                        </tr>
                        <tr>
                            <th className={`${DWorkerStyle["ppth"]}`}>성명</th>
                            <td className={`${DWorkerStyle["pptd"]}`}>{dworkerDetail.workerName || ''}
                            </td>
                        </tr>
                        <tr>
                            <th className={`${DWorkerStyle["ppth"]}`}>휴대폰번호</th>
                            <td className={`${DWorkerStyle["pptd"]}`}>{dworkerDetail.workerPhone || ''}
                            </td>
                        </tr>
                        <tr>
                            <th className={`${DWorkerStyle["ppth"]}`}>이메일</th>
                            <td className={`${DWorkerStyle["pptd"]}`}>{dworkerDetail.workerEmail || ''}
                            </td>
                        </tr>
                        <tr>
                            <th className={`${DWorkerStyle["ppth"]}`}>주소</th>
                            <td className={`${DWorkerStyle["pptd"]}`}>{dworkerDetail.workerAddress || ''}
                            </td>
                        </tr>
                    </table>

                    <table className={`${DWorkerStyle["ppwork"]}`}>
                        <tr>
                            <th className={`${DWorkerStyle["ppth"]}`}>근무시작일</th>
                            <td className={`${DWorkerStyle["pptd"]}`}>{dworkerDetail.startDate || ''}
                            </td>
                        </tr>
                        <tr>
                            <th className={`${DWorkerStyle["ppth"]}`}>근무종료일</th>
                            <td className={`${DWorkerStyle["pptd"]}`}>{dworkerDetail.endDate || ''}
                            </td>
                        </tr>
                        <tr>
                            <th className={`${DWorkerStyle["ppth"]}`}>은행명</th>
                            <td className={`${DWorkerStyle["pptd"]}`}>{dworkerDetail.bank || ''}
                            </td>
                        </tr>
                        <tr>
                            <th className={`${DWorkerStyle["ppth"]}`}>계좌번호</th>
                            <td className={`${DWorkerStyle["pptd"]}`}>{dworkerDetail.accountNumber || ''}
                            </td>
                        </tr>

                    </table>

                </div>
                {/*<div className={`${DWorkerStyle['ppbutton']}`}>*/}
                {/*    <button onClick={onClickMemberRegistHandler}>수정</button>*/}
                {/*</div>*/}
            </div>

            {/*{ reviewDetail &&*/}
            {/*    <div className={ DWorkerStyle.buttonDivCss }>*/}
            {/*        <button*/}
            {/*            className={ DWorkerStyle.backBtn }*/}
            {/*            onClick={ () => navigate(-1) }*/}
            {/*        >*/}
            {/*            돌아가기*/}
            {/*        </button>*/}

            {/*        {*/}
            {/*        //     token &&*/}
            {/*        // (token.sub === reviewDetail.member?.memberId)*/}
            {/*        //     ?*/}
            {/*            <div>{!modifyMode &&*/}
            {/*                <button*/}
            {/*                    className={ DWorkerStyle.backBtn }*/}
            {/*                    onClick={ onClickModifyModeHandler }*/}
            {/*                >*/}
            {/*                    수정모드*/}
            {/*                </button>*/}
            {/*            }*/}
            {/*                {modifyMode &&*/}
            {/*                    <button*/}
            {/*                        className={ DWorkerStyle.backBtn }*/}
            {/*                        onClick={ onClickReviewUpdateHandler }*/}
            {/*                    >*/}
            {/*                        리뷰 수정 저장하기*/}
            {/*                    </button>*/}
            {/*                }*/}
            {/*            </div>*/}
            {/*            : null*/}
            {/*        }*/}

            {/*    </div>*/}
            {/*}*/}




        </div>
    );

}

export default DWorkerDetail;