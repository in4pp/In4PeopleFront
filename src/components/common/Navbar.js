import { NavLink } from "react-router-dom"
import NavCSS from './Navbar.module.css';
function Navbar() {
    return (
        <div className={NavCSS.bwzYVU}>
            <div className={NavCSS.bReTMH}>
                <div className={NavCSS.cAnmmb}>
                    <div className={NavCSS.jqVsbC}><a >
                        <div style={{ width: '128px', height: '50px' }}>
                            <NavLink to="/"><img src="./images/INSA PEOPLE.png" alt="" width={150} height={70} /></NavLink>
                        </div>
                    </a></div>
                    <div className={NavCSS.lkOGXI}><a className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`} >홈</a><a
                        className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`} >조직도</a><a className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`}
                            >구성원</a><a className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`}
                                ><NavLink to="/taskApproval" >결재</NavLink></a>
                                <a className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`}
                                    >근무/휴가</a><a className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`} >분석</a><a
                                        className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`} >조직
                                        </a>
                                        <a className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`}
                                            >전자계약</a><a className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`} >설문</a></div>
            </div>
            <div className={NavCSS.cAnmmb}>
                <div className={NavCSS.ePumqH}><span className={NavCSS.fcykKi}><button data-active="false"
                    className={`${NavCSS.bfYjzh} ${NavCSS.kyAoKz} ${NavCSS.gmZOLP} ${NavCSS.ieRdlXN}`}>
                </button></span><span className={NavCSS.fcykKi}><a
                    className={`${NavCSS.bfYjzh} ${NavCSS.kyAoKz}`} >
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
        </div >
    )
}

export default Navbar;

