import HRRegistCSS from './HRRegist.module.css'
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DaumAddress from './PopupPostCode';

import { callMemberRegistAPI } from '../../../apis/PersonnelAPICalls';


    function HRRegist() {

        const dispatch = useDispatch();
        const navigate = useNavigate();
        const [image, setImage] = useState(null);
        const [imageUrl, setImageUrl] = useState();
        const imageInput = useRef();

        // // 팝업창 상태 관리
        // const [isPopupOpen, setIsPopupOpen] = useState(false)
        
        // // 팝업창 열기
        // const openPostCode = () => {
        //     setIsPopupOpen(true)
        // }

        // // 팝업창 닫기
        // const closePostCode = () => {
        //     setIsPopupOpen(false)
        // }


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
            positionCode : 'pos_06',
            departmentCode : 'dep_01'
        });
        
        useEffect(() => {
            
            /* 이미지 업로드시 미리보기 세팅 */
            if(image){
                const fileReader = new FileReader();
                fileReader.onload = (e) => {
                    const { result } = e.target;
                    if( result ){
                        setImageUrl(result);
                    }
                }
                fileReader.readAsDataURL(image);
            }
        },
        [image]);

        const onChangeImageUpload = (e) => {

            const image = e.target.files[0];
            console.log('image ====================', image);
            setImage(image);
        };
        
        const onChangeHandler = (e) => {
            const address = document.getElementById("daumAdd").value

            setForm({
                ...form, // 스프레드문법 
                [e.target.name]: e.target.value,
                address : address
            });
        };


        const onClickMemberRegistHandler = () => {

            console.log('[HRRegist] onClickMemberRegistHandler');


            const formData = new FormData();
    
            formData.append("memCode", form.memCode);
            formData.append("memName", form.memName);
            formData.append("regiNumber", form.regiNumber);
            formData.append("phone", form.phone);
            formData.append("email", form.email);
            formData.append("nationality", form.nationality);
            formData.append("gender", form.gender);
            formData.append("isMarried", form.isMarried);
            formData.append("address", form.address);
            formData.append("isWorking", form.isWorking);
            formData.append("positionCode", form.positionCode);
            formData.append("departmentCode", form.departmentCode);
            
            
            if(image){
                formData.append("memPicture", image);
            
                console.log(image);
            }
            
            dispatch(callMemberRegistAPI({	
                form: formData
            }));        

            console.log(form);
            
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
                                <table className={`${HRRegistCSS['ppinsa']}`}>
                                    <tr>
                                        <th className={`${HRRegistCSS["ppth"]}`}>사진</th>
                                        <td className={`${HRRegistCSS["pptd"]}`}>
                                            { imageUrl && <img 
                                                className={ HRRegistCSS.memPicImage } 
                                                src={ imageUrl } 
                                                alt="preview"
                                            />}
                                            <input                
                                                type="file"
                                                name='memPicture' 
                                                accept='image/*'
                                                onChange={ onChangeImageUpload }
                                                ref={ imageInput }
                                                />
                                        </td>
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
                                        <th className={`${HRRegistCSS["ppth"]}`}>주소</th>
                                        <td className={`${HRRegistCSS["pptd"]}`}>
                                            <input
                                                name="address"
                                                id='daumAdd'
                                                type='text'
                                                readOnly={true}
                                                placeholder="주소"
                                                onChange={ onChangeHandler }
                                            />
                                            <DaumAddress className="addBtn" />
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
