import { Outlet } from "react-router-dom";
import Side from "../../components/common/Navbar.module.css";
import { NavLink } from "react-router-dom";

import SlideTog1 from "./components/SlideTog1";
import SlideTog2 from "./components/SlideTog2";
import SlideTog3 from "./components/SlideTog3";


function PersonnelSidebar() {
  return (
    <>
      <div className={Side.cYDzyY}>
        <div className={Side.iLkxeQ}>
          <div className={Side.ecYrVX}>
            <div className={Side.pbheK}>
              <h1>인사</h1>

              <hr style={{ marginTop: 30, marginBottom: 10 }} />
              <hr style={{ marginTop: 5 }} />

              <ul>
                <li className={Side.fcngae}>
                  <SlideTog1 />
                </li>
                <li className={Side.fcngae}>
                  <SlideTog2 />
                </li>
                <li className={Side.fcngae}>
                  <SlideTog3 />
                </li>
                <li className={Side.fcngae}>
                <NavLink to="orgchart">조직도</NavLink></li>
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

export default PersonnelSidebar;
