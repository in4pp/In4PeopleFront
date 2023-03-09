import HRlistCSS from './HRlist.module.css'

function HRlist() {

    return(
        <>
            <div className={`${HRlistCSS["HRlistone"]}`}>
                <div className={`${HRlistCSS["titlee"]}`}>
                    <h3>사원 명부</h3>
                </div>
                <div className={`${HRlistCSS["box"]}`}>
                    <div className={`${HRlistCSS["content1"]}`}>
                        <h4>검색어</h4>
                        <div className={`${HRlistCSS["content2"]}`}>
                            <select className={`${HRlistCSS["workType"]}`}>
                                <option value="1">성명</option>
                                <option value="2">사원번호</option>
                                <option value="3">부서</option>
                            </select>
                            <div className={`${HRlistCSS["content2"]}`}>
                                <input type="text" />
                            </div>
                            <div className={`${HRlistCSS["applbutton"]}`}>
                                <button>검색</button>
                            </div>
                            <div className={`${HRlistCSS["content2"]}`}>
                                <input type="checkbox" />퇴직자포함
                            </div>
                        </div>
                    </div>
                    <h5>사원조회</h5>
                    <div className={`${HRlistCSS["pplist"]}`}>
                        <table className={`${HRlistCSS["appltable"]}`}>
                            <thead className={`${HRlistCSS["applthead"]}`}>
                                <tr className={`${HRlistCSS["appltr"]}`}>
                                    <th className={`${HRlistCSS["applth"]}`}>사원번호</th>
                                    <th className={`${HRlistCSS["applth"]}`}>성명</th>
                                    <th className={`${HRlistCSS["applth"]}`}>직책</th>

                                    <th className={`${HRlistCSS["applth"]}`}>부서</th>
                                    <th className={`${HRlistCSS["applth"]}`}>휴대폰</th>
                                    <th className={`${HRlistCSS["applth"]}`}>이메일</th>
                                    <th className={`${HRlistCSS["applth"]}`}>주소</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={`${HRlistCSS["appltr"]}`}>
                                    <td className={`${HRlistCSS["appltd"]}`}>220101</td>
                                    <td className={`${HRlistCSS["appltd"]}`}>가나다</td>
                                    <td className={`${HRlistCSS["appltd"]}`}>사원</td>
                                    <td className={`${HRlistCSS["appltd"]}`}>인사팀</td>
                                    <td className={`${HRlistCSS["appltd"]}`}>010-0000-0000</td>
                                    <td className={`${HRlistCSS["appltd"]}`}>jkl@hjkl</td>
                                    <td className={`${HRlistCSS["appltd"]}`}>서울</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HRlist;