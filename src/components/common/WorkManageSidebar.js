import { Outlet } from "react-router-dom";
import Side from "./Navbar.module.css";
function Sidebar() {
  return (
    <div className={Side.cYDzyY}>
      <div className={Side.iLkxeQ}>
        <div className={Side.ecYrVX}>
          <div className={Side.pbheK}>
            <h1>근무/휴가</h1>
            <ul>
              <li className={Side.bEaXSR}>근무계획(스케줄)</li>
              <li className={Side.fcngae}>근태관리</li>
              <li className={Side.fcngae}>휴가관리</li>
            </ul>
          </div>
          <div className={Side.pbheK}>
            <div className={Side.ebDIkT}>
              <span className={Side["material-icons"]}>arrow_back</span>
            </div>
            <ul />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
