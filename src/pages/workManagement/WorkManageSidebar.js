import { Outlet } from "react-router-dom";
import Side from "../../components/common/Navbar.module.css";

import SlideToggle1 from "./components/SlideToggle1";
import SlideToggle2 from "./components/SlideToggle2";
import SlideToggle3 from "./components/SlideToggle3";

function WorkManageSidebar() {
  return (
    <>
      <div className={Side.cYDzyY}>
        <div className={Side.iLkxeQ}>
          <div className={Side.ecYrVX}>
            <div className={Side.pbheK}>
              <h1>근무/휴가</h1>

              <hr style={{ marginTop: 30, marginBottom: 10 }} />
              <hr style={{ marginTop: 5 }} />

              <ul>
                <li className={Side.fcngae} style={{ marginBottom: 30 }}>
                  <SlideToggle1 />
                </li>
                <li className={Side.fcngae} style={{ marginBottom: 30 }}>
                  <SlideToggle2 />
                </li>
                <li className={Side.fcngae}>
                  <SlideToggle3 />
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

export default WorkManageSidebar;
