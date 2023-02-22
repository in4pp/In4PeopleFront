import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";

function Layout(){

    return(
        <>
            <Navbar />

            <Sidebar />
        </>
    )
}

export default Layout;