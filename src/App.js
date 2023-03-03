import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import IncomeTax from "./pages/salary/IncomeTax";
import SalarySidebar from "./sidebars/SalarySidebar";
import SalaryInfo from "./pages/salary/SalaryInformation";
import TaskSidebar from "./pages/task/TaskSidebar";
import ApprovalSubmit from "./pages/task/taskApproval/ApprovalSubmit";
import Main from "./pages/main/Main";
import ApprovalBookmark from "./pages/task/taskApproval/ApprovalBookmark";
import WorkManageSidebar from "./pages/workManagement/WorkManageSidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="task" element={<TaskSidebar />}>
            <Route index element={<ApprovalSubmit />} />
            <Route path="bookMark" element={<ApprovalBookmark />} />
            <Route path="approval" element={<ApprovalSubmit />} />
          </Route>

          <Route path="/salary" element={<SalarySidebar />}>
            <Route index element={<SalaryInfo />} />
          </Route>

          <Route path="/incomeTax" element={<SalarySidebar />}>
            <Route index element={<IncomeTax />} />
          </Route>
          <Route path="/workManage" element={<WorkManageSidebar />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
