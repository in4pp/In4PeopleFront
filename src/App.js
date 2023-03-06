import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import IncomeTax from './pages/salary/IncomeTax';
import SalarySidebar from './sidebars/SalarySidebar';
import SalaryInfo from './pages/salary/SalaryInformation';
import TaskSidebar from './pages/task/TaskSidebar';
import ApprovalSubmit from './pages/task/taskApproval/ApprovalSubmit'
import Main from './pages/main/Main';
import ApprovalBookmark from './pages/task/taskApproval/ApprovalBookmark';
import ApprovalNeed from './pages/task/taskApproval/ApprovalNeed';
import ApprovalCompleted from './pages/task/taskApproval/ApprovalCompleted';
import ApprovalRefered from './pages/task/taskApproval/ApprovalRefered';
import SettlementGeneration from './pages/task/taskApproval/SettlementGeneration';
function App() {
  
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Main />} /> */}
          <Route index element={<SettlementGeneration />} />
          <Route path="task" element={<TaskSidebar />} >
            <Route index element={<ApprovalSubmit />} />
            <Route path="bookMark" element={<ApprovalBookmark />} />
            <Route path="submit" element={<ApprovalSubmit />} />
            <Route path="needed" element={<ApprovalNeed />} />
            <Route path="completed" element={<ApprovalCompleted />} />
            <Route path="refered" element={<ApprovalRefered />} />
          </Route>

          <Route path="/salary" element={<SalarySidebar />}>
            <Route index element={<SalaryInfo />}/>
          </Route>

          <Route path="/incomeTax" element={<SalarySidebar />}>
            <Route index element={<IncomeTax />}/>
          </Route>


        </Route>
    </Routes>
    </BrowserRouter >
  );
}

export default App;
