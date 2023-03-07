import { NavLink } from "react-router-dom"
import NavCSS from './Navbar.module.css';
import Alarm from "../icon/Alarm";

function Navbar() {
    return (
        <>
            <div className={NavCSS.bwzYVU}>
                <div className={NavCSS.bReTMH}>
                    <div className={NavCSS.cAnmmb}>
                        <div className={NavCSS.jqVsbC}><a >
                            <div style={{ width: '128px', height: '50px' }}>
                                <NavLink to="/"><img src="./images/INSA PEOPLE.png" alt="" width={150} height={70} /></NavLink>
                            </div>
                        </a></div>
                        <div className={NavCSS.lkOGXI}><a className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`} >HOME</a><a
                            className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`} >인사</a><a className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`}
                            >근무/휴가</a><a className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`}
                            >급여</a>
                            <a className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`}
                            >일용직</a><a className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`} ><NavLink to="/task" >업무</NavLink></a><a
                                className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW}`} >게시판
                            </a>
                        </div>
                    </div>
                    <div className={NavCSS.cAnmmb}>
                        <div className={NavCSS.ePumqH}>
                            <span className={NavCSS.fcykKi}>
                                <NavLink to="/login" className={`${NavCSS.kOVHNW}`}>로그인</NavLink>
                                {/* <button data-active="false"
                                    className={`${NavCSS.bfYjzh} ${NavCSS.kyAoKz} ${NavCSS.gmZOLP} ${NavCSS.ieRdlXN}`}>

                                    <Alarm />
                                </button>
                            </span>
                            <span className={NavCSS.fcykKi}>
                                <a className={`${NavCSS.bfYjzh} ${NavCSS.kyAoKz}`} >
                                    <div className={NavCSS.kGKtTY}>
                                        <div width={38} height={38} className={NavCSS.kXwhM}>
                                            <div width={38} height={38} className={NavCSS.kSBOsp}>
                                                <div src="https://api.wantedspace.ai/user/users/59249/serve_image/"
                                                    width={38} height={38} className={NavCSS.gTMCwH}>성</div>
                                            </div>
                                        </div>
                                    </div>
                                </a> */}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar;

