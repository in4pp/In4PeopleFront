import HRRegistCSS from './HRRegist.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
// import { decodeJwt } from '../../utils/tokenUtils';

import {
    callMemberDetailAPI } from '../../../apis/PersonnelAPICalls'
// import LoginModal from '../../components/common/LoginModal';

function HRlistDetail() {    
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const memDetail  = useSelector(state => state.personnelReducer);  

    // const [amount, setAmount] = useState(1);
    // const [loginModal, setLoginModal] = useState(false);

    
    useEffect(
        () => {
            dispatch(callMemberDetailAPI({	// 상품 상세 정보 조회
                memCode: params.memCode
            }));            
        }
        ,[]
    );

    // 채팅거는 핸들러
    // const onClickChattingHandler = () => {
    //     navigate(`/personnel/member/${params.memCode}`, { replace: false });
    // };


    // const onClickPurchaseHandler = () => {

    //     // /* 로그인 상태인지 확인 */
    //     // const token = decodeJwt(window.localStorage.getItem("accessToken"));
    //     // console.log('[onClickPurchaseHandler] token : ', token);

    //     // if(token === undefined || token === null) {
    //     //     alert('로그인을 먼저해주세요');
    //     //     setLoginModal(true);
    //     //     return;
    //     // }

    //     // /* 토큰이 만료되었을때 다시 로그인 */
    //     // if (token.exp * 1000 < Date.now()) {
    //     //     setLoginModal(true);
    //     //     return;
    //     // }

    //     // /* 구매 가능 수량 확인 */
    //     // if(amount > product.productStock) {
    //     //     alert('구매 가능 수량을 확인해주세요');
    //     //     return;
    //     // }

    //     navigate(`/purchase?amount=${amount}`, { replace: false });
    // }

    return (
        <div>
            {/* { loginModal ? <LoginModal setLoginModal={ setLoginModal }/> : null} */}
                <div className={`${HRRegistCSS["registone"]}`}>
                    <table className={`${HRRegistCSS['ppinsa']}`}>
                        <tr>
                            <th className={`${HRRegistCSS["ppth"]}`}>사진</th>
                            <td className={`${HRRegistCSS["pptd"]}`}>
                                <img 
                                    // className={ HRRegistCSS.memPicImage } 
                                    src={ memDetail.memPic } 
                                    alt="preview"
                                />
                                {/* <button
                                    className={ HRRegistCSS.///////// }
                                    onClick={ onClickChattingHandler }
                                >
                                    채팅하기
                                </button> */}
                            </td>
                        </tr>
                        <tr>
                            <th className={`${HRRegistCSS["ppth"]}`}>사원 번호</th>    
                            <td className={`${HRRegistCSS["pptd"]}`}>{ memDetail.memCode || '' }</td>
                        </tr>
                        <tr>
                            <th className={`${HRRegistCSS["ppth"]}`}>성명</th>    
                            <td className={`${HRRegistCSS["pptd"]}`}>{ memDetail.memName || '' }</td>
                        </tr>    
                        <tr>
                            <th className={`${HRRegistCSS["ppth"]}`}>휴대폰번호</th>    
                            <td className={`${HRRegistCSS["pptd"]}`}>{ memDetail.phone || '' }</td>
                        </tr>    
                        <tr>
                            <th className={`${HRRegistCSS["ppth"]}`}>이메일</th>    
                            <td className={`${HRRegistCSS["pptd"]}`}>{ memDetail.email || '' }</td>
                        </tr>    
                        <tr>
                            <th className={`${HRRegistCSS["ppth"]}`}>국적</th>    
                            <td className={`${HRRegistCSS["pptd"]}`}>{ memDetail.nationality || '' }</td>
                        </tr>   
                        <tr>
                            <th className={`${HRRegistCSS["ppth"]}`}>성별</th>    
                            <td className={`${HRRegistCSS["pptd"]}`}>{ memDetail.gender || '' }</td>
                        </tr>
                        <tr>
                            <th className={`${HRRegistCSS["ppth"]}`}>직급</th>    
                            <td className={`${HRRegistCSS["pptd"]}`}>{ memDetail.positionCode || '' }</td>
                        </tr>    
                        <tr>
                            <th className={`${HRRegistCSS["ppth"]}`}>부서</th>    
                            <td className={`${HRRegistCSS["pptd"]}`}>{ memDetail.departmentCode || '' }</td>
                        </tr>     
                </table>
            </div>
        </div>
    );
}

export default HRlistDetail;