import { NavLink } from "react-router-dom"
import NavCSS from './Navbar.module.css';


function Navbar() {
    return (
        <div className={NavCSS.bwzYVU}>
            <div className={NavCSS.bReTMH}>
                <div className={NavCSS.cAnmmb}>
                    <div className={NavCSS.jqVsbC}><a href="#">
                        <div style={{ width: '128px', height: '50px' }}>
                            <img src="./images/INSA PEOPLE.png" alt="" width={128} height={60} />
                        </div>
                    </a></div>
                    <div className={NavCSS.lkOGXI}><a className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`} href="#">홈</a><a
                        className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`} href="#">조직도</a><a className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`}
                            href="#">구성원</a><a className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`}
                                href="#">결재</a><a className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`}
                                    href="#">근무/휴가</a><a className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`} href="#">분석</a><a
                                        className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`} href="#">조직</a><a className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`}
                                            href="#">전자계약</a><a className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`} href="#">설문</a></div>
                </div>
                <div className={NavCSS.cAnmmb}>
                    <div className={NavCSS.ePumqH}><span className={NavCSS.fcykKi}><button data-active="false"
                        className={`${NavCSS.bfYjzh} ${NavCSS.kyAoKz} ${NavCSS.gmZOLP} ${NavCSS.ieRdlXN}`}><svg
                            height="24px" viewBox="0 0 24 24" width="24px" fill="#555e7f">
                            <path
                                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z">
                            </path>
                        </svg></button></span><span className={NavCSS.fcykKi}><a
                            className={`${NavCSS.bfYjzh} ${NavCSS.kyAoKz}`} href="#">
                            <div className={NavCSS.kGKtTY}>
                                <div width={38} height={38} className={NavCSS.kXwhM}>
                                    <div width={38} height={38} className={NavCSS.kSBOsp}>
                                        <div src="https://api.wantedspace.ai/user/users/59249/serve_image/"
                                            width={38} height={38} className={NavCSS.gTMCwH}>성</div>
                                    </div>
                                </div>
                            </div>
                        </a></span></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

