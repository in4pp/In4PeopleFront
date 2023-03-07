import HRRegistCSS from './HRRegist.module.css'
import { Nav } from 'react-bootstrap'
import React, { useState } from 'react';


function Tabpersonnel() {

    let [tab, setTab] = useState(0);
    
    return(

        <div className={`${HRRegistCSS['pptap']}`}>
            <Nav className="mt-5" variant="tabs" defaultActiveKey="0">
                <Nav.Item>
                    <Nav.Link eventKey="0" onClick={() => setTab(0)}>인사정보</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="1" onClick={() => setTab(1)}>경력정보</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                    <Nav.Link eventKey="2" onClick={() => setTab(2)}>발령정보</Nav.Link>
                </Nav.Item> */}
            </Nav>

            <TabContent tab={tab}/>
        </div>
    )
}

  function TabContent(props) {

    if (props.tab === 0) {
    return <div>
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
                                        <input type="text" placeholder="6자리를 입력해주세요" />
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>성명</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                        <input type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>주민등록번호</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                        <input type="text" placeholder="000000-0000000" />
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>휴대폰번호</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                        <input type="text" placeholder="000-0000-0000" />
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>이메일</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                        <input type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>국적</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                        <input type="text" value="내국인" />
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>성별</th>
                                    <td className={`${HRRegistCSS["pptd"]}`} colSpan="2">
                                        <input type='radio' name='gender' value='female' />남
                                        <input type='radio' name='gender' value='male' />여
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>결혼유무</th>
                                    <td className={`${HRRegistCSS["pptd"]}`} colSpan="2">
                                        <input type='radio' name='marry' value='single' />미혼
                                        <input type='radio' name='marry' value='married' />기혼
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>주소API?</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                        <input type="text" />
                                    </td>
                                </tr>
                            </table>

                            <table className={`${HRRegistCSS["ppwork"]}`}>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>재직구분</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                    <select name="ppwork">
                                        <option value="tenure">재직</option>
                                        <option value="leave">휴직</option>
                                        <option value="retirement">퇴직</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>입사일자</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                    <input type="date" name="join" />
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>퇴직일자</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                    <input type="date" name="retire" />
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>직급</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                        <select name="pos">
                                            <option value=""></option>
                                            <option value="employee">사원</option>
                                            <option value="seniority">선임</option>
                                            <option value="top">수석</option>
                                            <option value="leader">팀장</option>
                                            <option value="director">이사</option>
                                            <option value="CEO">사장</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th className={`${HRRegistCSS["ppth"]}`}>부서</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
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
                    <button type="submit">저장</button>
                </div>
            </div>
        </div>
    } else if (props.tab === 1) {
        return <div>
        <div className={`${HRRegistCSS['titlee']}`}>
            <h3>경력 정보 등록</h3>
            </div>
                <div className={`${HRRegistCSS['box']}`}>
                    <div className={`${HRRegistCSS['commonInfo']}`}>
                        <form>
                            <table className={`${HRRegistCSS['ppinsaWork']}`}>
                                <tr className={`${HRRegistCSS["pptr"]}`}>
                                    <th className={`${HRRegistCSS["ppth"]}`}>회사명</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                        <input type="text" />
                                    </td>
                                </tr>
                                <tr className={`${HRRegistCSS["pptr"]}`}>
                                    <th className={`${HRRegistCSS["ppth"]}`}>입사일자</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                        <input type="date" name="joinWork" />
                                    </td>
                                </tr>
                                <tr className={`${HRRegistCSS["pptr"]}`}>
                                    <th className={`${HRRegistCSS["ppth"]}`}>퇴직일자</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                        <input type="date" name="retireWork" />
                                    </td>
                                </tr>
                                <tr className={`${HRRegistCSS["pptr"]}`}>
                                    <th className={`${HRRegistCSS["ppth"]}`}>직급</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                        <input type="text" />
                                    </td>
                                </tr>
                                <tr className={`${HRRegistCSS["pptr"]}`}>
                                    <th className={`${HRRegistCSS["ppth"]}`}>근무부서</th>
                                    <td className={`${HRRegistCSS["pptd"]}`}>
                                        <input type="text" />
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                    <div className={`${HRRegistCSS['pppbutton']}`}>
                    <button type="submit">저장</button>
                </div>
                </div>
        </div>
    }
    // } else if(props.tab === 2){
    //     return <div>Tab 3 내용입니다.</div>
    //     }
    }


export default Tabpersonnel;
