import HRRegistCSS from './HRRegist.module.css'
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { callMemberRegistAPI } from '../../../apis/PersonnelAPICalls';

    function HRRegist() {

        const dispatch = useDispatch();
        const navigate = useNavigate();

        const [form, setForm] = useState({
            memCode: '',
            memName: '',
            regiNumber: '',
            phone:'',
            email: '',
            nationality: '내국인',
            gender: 'M',
            isMarried: '0',
            address: '',
            isWorking: '1',
            positionCode : '',
            departmentCode : ''
        });

        
    
        const onChangeHandler = (e) => {
            setForm({
                ...form, // 스프레드문법 
                [e.target.name]: e.target.value
            });

            console.log(form);
        };

        const onClickMemberRegistHandler = () => {        

            dispatch(callMemberRegistAPI({
                form: form
            }));
        
            alert('멤버 등록이 완료되었습니다.');
    
            window.location.reload();
        }


    return (
        <>
            <div className={`${HRRegistCSS["registone"]}`}>
                <div className={`${HRRegistCSS['titlee']}`}>
                    <h3>인사 정보 등록</h3>
                    </div>
                        <div className={`${HRRegistCSS['box']}`}>
                            <div className={`${HRRegistCSS['commonInfo']}`}>
                                <form>
                                    <table className={`${HRRegistCSS['ppinsa']}`}>
                                        <tr>
                                            <th className={`${HRRegistCSS["ppth"]}`}>사진</th>
                                            <td className={`${HRRegistCSS["pptd"]}`}><input type="file" id="image" accept="image/*" /></td>
                                            {/* 이미지 미리보기 */}
                                            {/* <td><img alt="메인사진" src={mainImg} /></td> */}
                                        </tr>
                                        <tr>
                                            <th className={`${HRRegistCSS["ppth"]}`}>사원번호</th>
                                            <td className={`${HRRegistCSS["pptd"]}`}>
                                                <input type="text" placeholder="6자리를 입력해주세요" name='memCode' onChange={ onChangeHandler } />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className={`${HRRegistCSS["ppth"]}`}>성명</th>
                                            <td className={`${HRRegistCSS["pptd"]}`}>
                                                <input type="text" name='memName' onChange={ onChangeHandler } />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className={`${HRRegistCSS["ppth"]}`}>주민등록번호</th>
                                            <td className={`${HRRegistCSS["pptd"]}`}>
                                                <input type="text" placeholder="000000-0000000" name='regiNumber' onChange={ onChangeHandler } />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className={`${HRRegistCSS["ppth"]}`}>휴대폰번호</th>
                                            <td className={`${HRRegistCSS["pptd"]}`}>
                                                <input type="text" placeholder="000-0000-0000" name='phone' onChange={ onChangeHandler }/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className={`${HRRegistCSS["ppth"]}`}>이메일</th>
                                            <td className={`${HRRegistCSS["pptd"]}`}>
                                                <input type="text" name='email' onChange={ onChangeHandler } />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className={`${HRRegistCSS["ppth"]}`}>국적</th>
                                            <td className={`${HRRegistCSS["pptd"]}`}>
                                                <input type="text" name='nationality' placeholder="내국인" onChange={ onChangeHandler } />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className={`${HRRegistCSS["ppth"]}`}>성별</th>
                                            <td className={`${HRRegistCSS["pptd"]}`} colSpan="2">
                                                <input type='radio' name='gender' value='M' defaultChecked onChange={ onChangeHandler } />남
                                                <input type='radio' name='gender' value='F' onChange={ onChangeHandler } />여
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className={`${HRRegistCSS["ppth"]}`}>결혼유무</th>
                                            <td className={`${HRRegistCSS["pptd"]}`} colSpan="2">
                                                <input type='radio' name='isMarried' value='0' defaultChecked onChange={ onChangeHandler } />미혼
                                                <input type='radio' name='isMarried' value='1' onChange={ onChangeHandler } />기혼
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className={`${HRRegistCSS["ppth"]}`}>주소API?</th>
                                            <td className={`${HRRegistCSS["pptd"]}`}>
                                                <input type="text" name='address' onChange={ onChangeHandler } />
                                            </td>
                                        </tr>
                                    </table>

                                    <table className={`${HRRegistCSS["ppwork"]}`}>
                                        <tr>
                                            <th className={`${HRRegistCSS["ppth"]}`}>재직구분</th>
                                            <td className={`${HRRegistCSS["pptd"]}`}>
                                            <select name="isWorking" onChange={onChangeHandler}>
                                                <option value="1">재직</option>
                                                <option value="2">휴직</option>
                                                <option value="0">퇴직</option>
                                            </select>
                                            </td>
                                        </tr>
                                        
                                        <tr>
                                            <th className={`${HRRegistCSS["ppth"]}`}>직급</th>
                                            <td className={`${HRRegistCSS["pptd"]}`}>
                                                <select name="positionCode"  onChange={onChangeHandler} >
                                                    {/* <option value="" placeholder='직급 선택' disabled>직급 선택</option> */}
                                                    <option value="pos_06">사원</option>
                                                    <option value="pos_05">선임</option>
                                                    <option value="pos_04">수석</option>
                                                    <option value="pos_03">팀장</option>
                                                    <option value="pos_02">이사</option>
                                                    <option value="pos_01">사장</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className={`${HRRegistCSS["ppth"]}`}>부서</th>
                                            <td className={`${HRRegistCSS["pptd"]}`}>
                                                <select name="departmentCode"  onChange={onChangeHandler} >
                                                {/* <option value="" disabled>부서 선택</option> */}
                                                <option value="dep_01">게임프로그래밍</option>
                                                <option value="dep_02">기업/게임디자인</option>
                                                <option value="dep_03">게임사업</option>
                                                <option value="dep_04">해외사업</option>
                                                <option value="dep_05">IT엔지니어</option>
                                                <optgroup label="경영지원">
                                                    <option value="dep_06">인사</option>
                                                    <option value="dep_07">회계</option>
                                                </optgroup>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className={`${HRRegistCSS["ppth"]}`}>연차생성기준</th>
                                            <td className={`${HRRegistCSS["pptd"]}`} colSpan={2}>
                                                <input type='radio' name='Annual' value='month' defaultChecked/>연차기준월
                                                <input type='radio' name='Annual' value='day' disabled/>입사일
                                            </td>
                                        </tr>
                                    </table>
                                </form>
                            </div>
                        <div className={`${HRRegistCSS['ppbutton']}`}>
                            <button 
                                onClick={ onClickMemberRegistHandler }
                            >저장</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

export default HRRegist;