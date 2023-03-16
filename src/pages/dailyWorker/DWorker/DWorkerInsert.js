import DWorkerStyle from './DWorkerInsert.module.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { dworkerInfoAPI} from '../../../apis/DailyWorkerAPICalls';

function DWorkerInsert(){

    const dispatch = useDispatch();
    const dworker = useSelector(state => state.dailyWorkerReducer); // modules/index.js 안에 선언한 store목록 중에서 dailyWorkerReducer 가져오겠다.
    console.log('dworker', dworker);

    if (dworker !== undefined) {
        console.log("dworker", dworker);
    }

    // useEffect(
    //     () => {
    //
    //         dispatch(dworkerInfoAPI(workerName));
    //     }, []
    // );

    return(
     <div>
        <div className={`${DWorkerStyle["registone"]}`}>
        <div className={`${DWorkerStyle['titlee']}`}>
            <h3>일용직사원 정보 등록</h3>
            </div>
                <div className={`${DWorkerStyle['box']}`}>
                    <div className={`${DWorkerStyle['commonInfo']}`}>
                        <form>
                            <table className={`${DWorkerStyle['ppinsa']}`}>
                                <tr>
                                    <th className={`${DWorkerStyle["ppth"]}`}>사진</th>
                                    <td className={`${DWorkerStyle["pptd"]}`}><input type="file" id="image" accept="image/*" /></td>
                                    {/* 이미지 미리보기 */}
                                    {/* <td><img alt="메인사진" src={mainImg} /></td> */}
                                </tr>

                                <tr>
                                    <th className={`${DWorkerStyle["ppth"]}`}>성명</th>
                                    <td className={`${DWorkerStyle["pptd"]}`}>
                                        <input type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${DWorkerStyle["ppth"]}`}>주민등록번호</th>
                                    <td className={`${DWorkerStyle["pptd"]}`}>
                                        <input type="text" placeholder="000000-0000000" />
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${DWorkerStyle["ppth"]}`}>휴대폰번호</th>
                                    <td className={`${DWorkerStyle["pptd"]}`}>
                                        <input type="text" placeholder="000-0000-0000" />
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${DWorkerStyle["ppth"]}`}>이메일</th>
                                    <td className={`${DWorkerStyle["pptd"]}`}>
                                        <input type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${DWorkerStyle["ppth"]}`}>주소API?</th>
                                    <td className={`${DWorkerStyle["pptd"]}`}>
                                        <input type="text" />
                                    </td>
                                </tr>
                            </table>

                            <table className={`${DWorkerStyle["ppwork"]}`}>
                             
                                <tr>
                                    <th className={`${DWorkerStyle["ppth"]}`}>입사일자</th>
                                    <td className={`${DWorkerStyle["pptd"]}`}>
                                    <input type="date" name="join" />
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${DWorkerStyle["ppth"]}`}>퇴직일자</th>
                                    <td className={`${DWorkerStyle["pptd"]}`}>
                                    <input type="date" name="retire" />
                                    </td>
                                </tr>
                       
                                <tr>
                                    <th className={`${DWorkerStyle["ppth"]}`}>부서</th>
                                    <td className={`${DWorkerStyle["pptd"]}`}>
                                        <select name="dep">
                                        <option value=""></option>
                                        <option value="programming">게임프로그래밍</option>
                                        <option value="design">기업/게임디자인</option>
                                        <option value="gameBusiness">게임사업</option>
                                        <option value="overseasBusiness">해외사업</option>
                                        <option value="ITEngineer">IT엔지니어</option>
                                        <optgroup label="경영지원">
                                            <option value="HR">인사</option>
                                            <option value="Accounting">회계</option>
                                        </optgroup>
                                        </select>
                                    </td>
                                </tr>
                           
                            </table>
                        </form>
                    </div>
                <div className={`${DWorkerStyle['ppbutton']}`}>
                    <button type="submit">저장</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default DWorkerInsert;