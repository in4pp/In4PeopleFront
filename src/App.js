import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import ApprovalSidebar from "./sidebars/ApprovalSidebar";
import TaskSubmit from "./pages/task/TaskSubmit";
import WorkManageSidebar from "./pages/workManagement/WorkManageSidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/taskApproval" element={<ApprovalSidebar />}>
            <Route index element={<TaskSubmit />} />
          </Route>
          <Route path="/workManage" element={<WorkManageSidebar />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
