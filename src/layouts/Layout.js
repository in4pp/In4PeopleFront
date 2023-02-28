import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import LayoutCSS from "../components/common/Navbar.module.css";
import Content from "../components/common/Content";
function Layout() {

    return (
        <>
            <div style={{ display: 'block' }} className={LayoutCSS.mSgFN}>
                <Navbar />

                <Sidebar />



                <Content />
                {/* <Outlet /> */}
            </div>
        </>
    )
}

export default Layout;