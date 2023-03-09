import HRApplicationCSS from './HRApplication.module.css'

function HRApplication() {

    return(
        <>
            <div className={`${HRApplicationCSS['applone']}`}>
                <div className={`${HRApplicationCSS['titlee']}`}>
                    <h3>인사 발령 신청</h3>
                </div>
                <div className={`${HRApplicationCSS['box']}`}>
                    <div className={`${HRApplicationCSS['content1']}`}>
                        <h5>발령 구분</h5>
                    <div className={`${HRApplicationCSS['content2']}`}>
                        <select className={`${HRApplicationCSS['workType']}`}>
                        <option value="1">부서 이동</option>
                        <option value="2">휴직</option>
                        <option value="3">복직</option>
                        <option value="4">퇴직</option>
                        </select>
                    </div>
                </div>
                    <div className={`${HRApplicationCSS['content1']}`}>
                        <h5>휴직신청일</h5>
                    <div className={`${HRApplicationCSS['content2']}`}>
                        <input type="date" />
                    </div>
                </div>
                    <div className={`${HRApplicationCSS['content1']}`}>
                        <h5>복직신청일</h5>
                    <div className={`${HRApplicationCSS['content2']}`}>
                        <input type="date" />
                    </div>
                </div>
                    <div className={`${HRApplicationCSS['content1']}`}>
                    <h5>사유</h5>
                    <div className={`${HRApplicationCSS['content2']}`}>
                        <input type="text" />
                    </div>
                </div>
                    <div className={`${HRApplicationCSS['applbutton']}`}>
                        <button>신청</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HRApplication;