import { Outlet } from "react-router-dom";
import Side from '../../../components/common/Navbar.module.css';
import { NavLink } from "react-router-dom";


function SalarySidebar() {

    return (
        <>
            <div className={Side.cYDzyY}>
                <div className={Side.iLkxeQ}>
                    <div className={Side.ecYrVX}>
                        <div className={Side.pbheK}>
                            <h1>급여</h1>
                            <ul>
                                <li className={Side.bEaXSR}><NavLink to="salinfo">직원별 급여정보</NavLink></li>
                                <li className={Side.fcngae}><NavLink to="monthlysetting">월급 조회 및 입력</NavLink></li>
                                <li className={Side.fcngae}><NavLink to="incometax">소득 세율 조회</NavLink></li>                  
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

export default SalarySidebar;