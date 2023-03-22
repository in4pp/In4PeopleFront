import HRRegistCSS from './HRRegist.module.css'
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import DaumAddress from './PopupPostCode';
import { decodeJwt } from '../../../utils/tokenUtils' // 로그인한 정보 불러오기

import { 
    callMemberDetailUpdateAPI, // 본인의 인사정보 상세 불러오기
    callMemberUpdateAPI        // 본인의 인사정보 업데이트하기
} from '../../../apis/PersonnelAPICalls';

function MemberUpdate() {

    const dispatch = useDispatch();
    const memberDetail  = useSelector(state => state.personnelReducer);  
    const token = decodeJwt(window.localStorage.getItem("accessToken"));   
    
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [modifyMode, setModifyMode] = useState(false);
    const imageInput = useRef();
    const navigate = useNavigate();

    const [form, setForm] = useState({});
    
    useEffect(
        () => {    
            console.log('token', token.sub);
            if(token !== null) {
                dispatch(callMemberDetailUpdateAPI({	// 인사 정보
                    memCode: token.sub
                }));            
                console.log('memCode', token.sub);
            }
        }
        ,[]
    );


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
        console.log(e.target.files[0]);
        const image = e.target.files[0];

        setImage(image);
    };

    const onClickImageUpload = () => {
        if(modifyMode){
            imageInput.current.click();
        }
    }
    
    const onClickModifyModeHandler = () => {    // 수정모드
        setModifyMode(true);
        setForm({
            memCode: memberDetail.memCode,
            password: memberDetail.password,
            memName: memberDetail.memName,
            regiNumber: memberDetail.regiNumber,
            phone: memberDetail.phone,
            email: memberDetail.email,
            nationality: memberDetail.nationality,
            gender: memberDetail.gender,
            isMarried: memberDetail.isMarried,
            address: memberDetail.address
        });
    }

    /* form 데이터 세팅 */  
    const onChangeHandler = (e) => {
        const address = document.getElementById("daumAdd").value

        setForm({
            ...form,
            [e.target.name]: e.target.value,
            address : address
        });
    };

    const onClickMemberUpdateHandler = () => {

        console.log('[MemberUpdate] onClickMemberUpdateHandler');

        const formData = new FormData();

        formData.append("memCode", memberDetail.memCode);
        formData.append("password", form.password);
        formData.append("memName", form.memName);
        formData.append("regiNumber", form.regiNumber);
        formData.append("phone", form.phone);
        formData.append("email", form.email);
        formData.append("nationality", form.nationality);
        formData.append("gender", form.gender);
        formData.append("isMarried", form.isMarried);
        formData.append("address", form.address);

        if(image){
            formData.append("memPicture", image); 
        }

        dispatch(callMemberUpdateAPI({	// 멤버 정보 업데이트
            form: formData
        }));         
        console.log(form);
        alert('정보를 수정했습니다.');
        navigate('/personnel/memberUpdate', { replace: true});
        // window.location.reload();
    }
    
    return (
        <>
            <div className={`${HRRegistCSS["registone"]}`}>
                <div className={`${HRRegistCSS['titlee']}`}>
                    <h3>인사 정보 수정</h3>
                </div>
                <div className={`${HRRegistCSS['box']}`} >
                    <div className={`${HRRegistCSS['ppbuttonModify']}`} >
                    {!modifyMode &&
                        <button 
                            onClick={ onClickModifyModeHandler }
                        >수정하기</button>
                    }
                    {modifyMode &&
                        <button 
                            onClick={ onClickMemberUpdateHandler }
                        >저장하기</button>
                    }
                    </div>

                    {memberDetail &&
                    <div className={`${HRRegistCSS['commonInfo']}`}>
                            <table className={`${HRRegistCSS['ppinsa']}`}>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>사진</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                        { imageUrl && <img 
                                            className={ HRRegistCSS.memPicImage } 
                                            src={ (imageUrl == null) ? memberDetail.memPic : imageUrl } 
                                            alt="preview"
                                        />}
                                        <input
                                            style={ { display: 'none' }}                
                                            type="file"
                                            name='memPicture' 
                                            accept='image/*'
                                            onChange={ onChangeImageUpload }
                                            ref={ imageInput }/>
                                        <button 
                                            className={ `${HRRegistCSS['ppbuttonModify']}` }
                                            onClick={ onClickImageUpload }    
                                            style={ !modifyMode ? { backgroundColor: 'whitesmoke'} : null}
                                        >
                                        이미지 업로드
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>사원번호</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                        <input 
                                            type="text" 
                                            placeholder="6자리를 입력해주세요" 
                                            name='memCode' 
                                            onChange={ onChangeHandler } 
                                            value={(!modifyMode ? memberDetail.memCode : form.memCode) || '' }
                                            readOnly={true}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>성명</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                        <input 
                                            type="text" 
                                            name='memName' 
                                            onChange={ onChangeHandler } 
                                            value={(!modifyMode ? memberDetail.memName : form.memName) || '' }
                                            readOnly={ modifyMode ? false : true }/>
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>비밀번호</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                        <input 
                                            type="text" 
                                            name='password' 
                                            onChange={ onChangeHandler } 
                                            value={(!modifyMode ? memberDetail.password : form.password) || '' }
                                            readOnly={ modifyMode ? false : true }/>
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>주민등록번호</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                        <input 
                                            type="text" 
                                            placeholder="000000-0000000" 
                                            name='regiNumber' 
                                            onChange={ onChangeHandler } 
                                            value={(!modifyMode ? memberDetail.regiNumber : form.regiNumber) || '' }
                                            readOnly={true}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>휴대폰번호</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                        <input 
                                            type="text" 
                                            placeholder="000-0000-0000" 
                                            name='phone' 
                                            onChange={ onChangeHandler }
                                            value={(!modifyMode ? memberDetail.phone : form.phone) || '' }
                                            readOnly={ modifyMode ? false : true }/>
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>주소</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                        <input
                                            name="address"
                                            id='daumAdd'
                                            type='text'
                                            placeholder="주소"
                                            onChange={ onChangeHandler }
                                            value={(!modifyMode ? memberDetail.address : form.address) || '' }
                                            readOnly={ modifyMode ? false : true }/>
                                        <DaumAddress className="addBtn" />
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>이메일</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                        <input 
                                            type="text" 
                                            name='email' 
                                            onChange={ onChangeHandler } 
                                            value={(!modifyMode ? memberDetail.email : form.email) || '' }
                                            readOnly={ modifyMode ? false : true }/>
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>국적</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                        <input 
                                            type="text" 
                                            name='nationality' 
                                            placeholder="내국인" 
                                            onChange={ onChangeHandler } 
                                            value={(!modifyMode ? memberDetail.nationality : form.nationality) || '' }
                                            readOnly={ modifyMode ? false : true }/>
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>성별</th>
                                    <td className={`${HRRegistCSS["pptd"]}`} colSpan="2">
                                        <input 
                                            type='radio' 
                                            name='gender' 
                                            onChange={ onChangeHandler } 
                                            checked={ (!modifyMode ? memberDetail.gender : form.gender) === 'M' ? true : false } 
                                            value="M" />남
                                        <input 
                                            type='radio' 
                                            name='gender' 
                                            onChange={ onChangeHandler } 
                                            readOnly={ modifyMode ? false : true } 
                                            checked={ (!modifyMode ? memberDetail.gender : form.gender) === 'F' ? true : false } 
                                            value="F"/>여
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>결혼유무</th>
                                    <td className={`${HRRegistCSS["pptd"]}`} colSpan="2">
                                        <input 
                                            type='radio' 
                                            name='isMarried' 
                                            onChange={ onChangeHandler } 
                                            checked={ (!modifyMode ? memberDetail.isMarried : form.isMarried) === '0' ? true : false } 
                                            value="0"/>미혼
                                        <input 
                                            type='radio' 
                                            name='isMarried' 
                                            onChange={ onChangeHandler } 
                                            checked={ (!modifyMode ? memberDetail.isMarried : form.isMarried) === '1' ? true : false } 
                                            value="1"/>기혼
                                    </td>
                                </tr>
                            </table>
                        </div>
                    // {/* <div className={`${HRRegistCSS['ppbutton']}`}>
                    //     <button 
                    //         onClick={ onClickMemberRegistHandler }
                    //     >저장</button>
                    // </div> */}
                }</div>
            </div>
        </>
    );
}

export default MemberUpdate;