import { Outlet } from "react-router-dom";
import Side from "../../components/common/Navbar.module.css";

import SlideToggleWorker from "./components/SlideToggleWorker";
import SlideTogglePay from "./components/SlideTogglePay";


function DailyWorkerSidebar() {
  return (
    <>
      <div className={Side.cYDzyY}>
        <div className={Side.iLkxeQ}>
          <div className={Side.ecYrVX}>
            <div className={Side.pbheK}>
              <h1>일용직 관리</h1>

              <hr style={{ marginTop: 30, marginBottom: 10 }} />
              <hr style={{ marginTop: 5 }} />

              <ul>
                <li className={Side.fcngae}>
                  <SlideToggleWorker />
                </li>
                <li className={Side.fcngae}>
                  <SlideTogglePay />
                </li>
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
      <Outlet />
    </>
  );
}

export default DailyWorkerSidebar;
