import { Outlet } from "react-router-dom";
import Side from '../../components/common/Navbar.module.css';
import { NavLink } from "react-router-dom";

function ApprovalSidebar() {
    return (
        <>
            <div className={Side.cYDzyY}>
                <div className={Side.iLkxeQ}>
                    <div className={Side.ecYrVX}>
                        <div className={Side.pbheK}>
                            <h1>결재</h1>
                            <ul>
                                <li className={Side.bEaXSR}><NavLink to="approval">상신함</NavLink></li>
                                <li className={Side.fcngae}>수신함</li>
                                <li className={Side.fcngae}><NavLink to="bookMark">북마크</NavLink></li>
                            </ul>
                        </div>
                        <div className={Side.pbheK}>
                            <div className={Side.ebDIkT}>
                                <span className={Side['material-icons']}>arrow_back</span>
                            </div>
                            <ul />
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default ApprovalSidebar;
