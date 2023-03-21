import DWorkerStyle from './DWorkerInsert.module.css';
import {useEffect, useRef, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { dwInsertAPI} from '../../../apis/DailyWorkerAPICalls';
import DaumAddress from "../../personnel/HR/PopupPostCode";

function DWorkerInsert(){

    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState();
    const imageInput = useRef();
    const dworker = useSelector(state => state.dailyWorkerReducer); // modules/index.js 안에 선언한 store목록 중에서 dailyWorkerReducer 가져오겠다.
    console.log('dworker', dworker);

    const [form, setForm] = useState({
        workerName: '',
        workerRegNumber: '',
        workerPhone: '',
        workerAddress:'',
        workerEmail: '',
        startDate: '',
        endDate: '',
        bank:'',
        accountNumber:''

    });
    // bank, accountNumber
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
        const workerAddress = document.getElementById("daumAdd").value

        setForm({
            ...form, // 스프레드문법
            [e.target.name]: e.target.value,
            workerAddress : workerAddress
        });
    };

    const onClickMemberRegistHandler = () => {

        console.log('[HRRegist] onClickMemberRegistHandler');

        // const employeeSalarySetting = [];
        // const bank = document.getElementById("bank").value;
        // const accountNumber = document.getElementById("accountNumber").value;



        const formData = new FormData();

        formData.append("workerName", form.workerName);
        formData.append("workerRegNumber", form.workerRegNumber);
        formData.append("workerPhone", form.workerPhone);
        formData.append("workerAddress", form.workerAddress);
        formData.append("workerEmail", form.workerEmail);
        formData.append("startDate", form.startDate);
        formData.append("endDate", form.endDate);
        // formData.append("employeeSalarySetting", employeeSalarySetting);
        formData.append("bank", form.bank);
        formData.append("accountNumber", form.accountNumber);


        if(image){
            formData.append("workerPic", image);

            console.log(image);
        }

        dispatch(dwInsertAPI({

            form: formData

        }));

        // for (var pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]);
        //   }

        alert('멤버 등록이 완료되었습니다.');
        window.location.reload();
    }

    return(
     <div>
        <div className={`${DWorkerStyle["registone"]}`}>
        <div className={`${DWorkerStyle['titlee']}`}>
            <h3>일용직사원 등록</h3>
            </div>
                <div className={`${DWorkerStyle['box']}`}>
                    <div className={`${DWorkerStyle['commonInfo']}`}>

                            <table className={`${DWorkerStyle['ppinsa']}`}>
                                <tr>
                                    <th className={`${DWorkerStyle["ppth"]}`}>사진</th>
                                    <td className={`${DWorkerStyle["pptd"]}`}>
                                        { imageUrl && <img
                                            className={ DWorkerStyle.memPicImage }
                                            src={ imageUrl }
                                            alt="preview"
                                        />}
                                        <input
                                            type="file"
                                            name='workerPic'
                                            accept='image/*'
                                            onChange={ onChangeImageUpload }
                                            ref={ imageInput }
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <th className={`${DWorkerStyle["ppth"]}`}>성명</th>
                                    <td className={`${DWorkerStyle["pptd"]}`}>
                                        <input type="text" name="workerName" onChange={ onChangeHandler }/>
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${DWorkerStyle["ppth"]}`}>주민등록번호</th>
                                    <td className={`${DWorkerStyle["pptd"]}`}>
                                        <input type="text" placeholder="000000-0000000" name="workerRegNumber" onChange={ onChangeHandler }/>
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${DWorkerStyle["ppth"]}`}>휴대폰번호</th>
                                    <td className={`${DWorkerStyle["pptd"]}`}>
                                        <input type="text" placeholder="000-0000-0000" name="workerPhone" onChange={ onChangeHandler }/>
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${DWorkerStyle["ppth"]}`}>이메일</th>
                                    <td className={`${DWorkerStyle["pptd"]}`}>
                                        <input type="text" name="workerEmail" onChange={ onChangeHandler }/>
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${DWorkerStyle["ppth"]}`}>주소</th>
                                    <td className={`${DWorkerStyle["pptd"]}`}>
                                        <input
                                            name="workerAddress"
                                            id='daumAdd'
                                            type='text'
                                            readOnly={true}
                                            placeholder="주소 ->"
                                            onChange={ onChangeHandler }
                                        />
                                        <DaumAddress className="addBtn" />
                                    </td>
                                </tr>
                            </table>

                            <table className={`${DWorkerStyle["ppwork"]}`}>
                                <tr>
                                    <th className={`${DWorkerStyle["ppth"]}`}>근무시작일</th>
                                    <td className={`${DWorkerStyle["pptd"]}`}>
                                    <input type="date" name="startDate" onChange={ onChangeHandler }/>
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${DWorkerStyle["ppth"]}`}>근무종료일</th>
                                    <td className={`${DWorkerStyle["pptd"]}`}>
                                    <input type="date" name="endDate"onChange={ onChangeHandler } />
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${DWorkerStyle["ppth"]}`}>은행명</th>
                                    <td className={`${DWorkerStyle["pptd"]}`}>
                                        <input type="text" id="bank" placeholder="" name="bank" onChange={ onChangeHandler }/>
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${DWorkerStyle["ppth"]}`}>계좌번호</th>
                                    <td className={`${DWorkerStyle["pptd"]}`}>
                                        <input type="text" id="accountNumber" name="accountNumber" onChange={ onChangeHandler }/>
                                    </td>
                                </tr>

                            </table>

                    </div>
                <div className={`${DWorkerStyle['ppbutton']}`}>
                    <button onClick={ onClickMemberRegistHandler }>저장</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default DWorkerInsert;