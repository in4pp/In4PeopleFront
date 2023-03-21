import HRcerAppCSS from './HRcerApp.module.css'

function HRcerApp() {

    return(
        <>
            <div className={`${HRcerAppCSS['applone']}`}>
                <div className={`${HRcerAppCSS['titlee']}`}>
                    <h3>증명서 신청</h3>
                </div>
                <div className={`${HRcerAppCSS['box']}`}>
                    <div className={`${HRcerAppCSS['content1']}`}>
                        <h5>증명 구분</h5>
                    <div className={`${HRcerAppCSS['content2']}`}>
                        <select className={`${HRcerAppCSS['workType']}`}>
                        <option value="1">재직</option>
                        <option value="2">퇴직</option>
                        <option value="3">경직</option>
                        </select>
                    </div>
                </div>
                    <div className={`${HRcerAppCSS['content1']}`}>
                        <h5>사유</h5>
                        <div className={`${HRcerAppCSS['content2']}`}>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={`${HRcerAppCSS['applbutton']}`}>
                        <button>신청</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HRcerApp;