import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import LayoutCSS from "../components/common/Navbar.module.css";
function Layout() {
  return (
    <>
      <div style={{ display: "block" }} className={LayoutCSS.mSgFN}>
        <Navbar />

        <Sidebar />

        <div></div>
        <div>
          <div className={LayoutCSS.wrap}>
            <div></div>
            <div className={LayoutCSS.wrapper}>
              <div className={LayoutCSS.ct}>
                <div className={LayoutCSS.container2}>
                  {/* content */}
                  {/* <Outlet /> */}

                  <h1>안녕!</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
