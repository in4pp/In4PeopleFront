import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import IncomeTax from "./pages/salary/IncomeTax";
import SalarySidebar from "./sidebars/SalarySidebar";
import SalaryInfo from "./pages/salary/SalaryInformation";
import TaskSidebar from "./pages/task/TaskSidebar";
import ApprovalSubmit from "./pages/task/taskApproval/ApprovalSubmit";
import Main from "./pages/main/Main";
import ApprovalBookmark from "./pages/task/taskApproval/ApprovalBookmark";
import ApprovalNeed from "./pages/task/taskApproval/ApprovalNeed";
import ApprovalCompleted from "./pages/task/taskApproval/ApprovalCompleted";
import ApprovalRefered from "./pages/task/taskApproval/ApprovalRefered";
import WorkManageSidebar from "./pages/workManagement/WorkManageSidebar";
import PersonnelSidebar from "./pages/personnel/PersonnelSidebar";
import DailyWorkerSidebar from "./pages/dailyWorker/DailyWorkerSidebar";
import Login from "./pages/login/Login";
import HRRegist from "./pages/personnel/HR/HRRegist";
import Orgchart from "./pages/personnel/HR/Orgchart";
import HRAuth from './pages/personnel/HR/HRAuth';
import HRlist from './pages/personnel/HR/HRlist';
import HRApplist from './pages/personnel/HR/HRApplist';
import HRApplication from './pages/personnel/HR/HRApplication';
import DWorkerInsert from './pages/dailyWorker/DWorker/DWorkerInsert';
import DWorkerSelect from "./pages/dailyWorker/DWorker/DWorkerSelect";
import DWorkerUpdate from "./pages/dailyWorker/DWorker/DWorkerUpdate";
import WorkSetting from "./pages/workManagement/Schedule/WorkSetting";
import SchedulManage from "./pages/workManagement/Schedule/ScheduleManage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="task" element={<TaskSidebar />}>
            <Route index element={<ApprovalSubmit />} />
            <Route path="bookMark" element={<ApprovalBookmark />} />
            <Route path="submit" element={<ApprovalSubmit />} />
            <Route path="needed" element={<ApprovalNeed />} />
            <Route path="completed" element={<ApprovalCompleted />} />
            <Route path="refered" element={<ApprovalRefered />} />
          </Route>

          <Route path="/salary" element={<SalarySidebar />}>
            <Route index element={<SalaryInfo />} />
          </Route>
          <Route path="/incomeTax" element={<SalarySidebar />}>
            <Route index element={<IncomeTax />} />
          </Route>
          <Route path="/workmanage" element={<WorkManageSidebar />}>
            <Route index element={<ApprovalSubmit />} />
            <Route path="setting" element={<WorkSetting />} />
            <Route path="scheduleApprove" element={<SchedulManage />}></Route>
          </Route>

          <Route path="/personnel" element={<PersonnelSidebar />}>
            <Route index element={<HRRegist />}></Route>
            <Route path="memberRegist" element={<HRRegist />} />
            <Route path="list" element={<HRlist />} />
            <Route path="auth" element={<HRAuth />} />
            <Route path="orderInfo" element={<HRApplist />} />
            <Route path="application" element={<HRApplication />} />
            <Route path="orgchart" element={<Orgchart />} />
          </Route>

          <Route path="/dailyWorker" element={<DailyWorkerSidebar />}>
          <Route index element={<DWorkerInsert />} />
            <Route path="insert" element={<DWorkerInsert />} />
            <Route path="update" element={<DWorkerUpdate />} />
            <Route path="workers" element={<DWorkerSelect />} />



          </Route>

        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
