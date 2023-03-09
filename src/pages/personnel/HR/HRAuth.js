import HRAuthCSS from './HRAuth.module.css'

function HRAuth() {

    return(
        <>
            <div className={`${HRAuthCSS["authone"]}`}>
                <div className={`${HRAuthCSS["titlee"]}`}>
                    <h3>인사 권한 설정</h3>
                </div>
                    <div className={`${HRAuthCSS["box"]}`}>
                        <div className={`${HRAuthCSS["content1"]}`}>
                            <h4>사원코드</h4>
                            <div className={`${HRAuthCSS["content2"]}`}>
                                <div className={`${HRAuthCSS["content2"]}`}>
                                    <input type="text" />
                                </div>
                                <div className={`${HRAuthCSS["HRAuthbutton"]}`}>
                                    <button>검색</button>
                                </div>
                                <div className={`${HRAuthCSS["content2"]}`}>
                                    <input type="text" disabled />
                                </div>
                            </div>
                        </div>
                        <h5>메뉴권한설정 목록</h5>
                        <div className={`${HRAuthCSS["pplist"]}`}>
                            <table className={`${HRAuthCSS["appltable"]}`}>
                                <thead className={`${HRAuthCSS["applthead"]}`}>
                                    <tr className={`${HRAuthCSS["appltr"]}`}>
                                        <th className={`${HRAuthCSS["applth"]}`}>부서명</th>
                                        <th className={`${HRAuthCSS["applth"]}`}>부서코드</th>
                                        <th className={`${HRAuthCSS["applth"]}`}>관리자</th>
                                        <th className={`${HRAuthCSS["applth"]}`}>읽기</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={`${HRAuthCSS["appltr"]}`}>
                                        <td className={`${HRAuthCSS["appltd"]}`}>게임프로그래밍</td>
                                        <td className={`${HRAuthCSS["appltd"]}`}>P001</td>
                                        <td className={`${HRAuthCSS["appltd"]}`}><input type="checkbox" /></td>
                                        <td className={`${HRAuthCSS["appltd"]}`}><input type="checkbox" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
    )
}

export default HRAuth;