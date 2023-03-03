import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import ApprovalSidebar from './sidebars/ApprovalSidebar';
import TaskSubmit from './pages/task/TaskSubmit'
import IncomeTax from './pages/salary/IncomeTax';
import SalarySidebar from './sidebars/SalarySidebar';
import SalaryInfo from './pages/salary/SalaryInformation';
import SalarySettlement from './pages/salary/SalarySettlement';
import HourlyWageSetting from './pages/salary/HourlyWageSetting';




function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/taskApproval" element={<ApprovalSidebar />}>
            <Route index element={<TaskSubmit />}/>
          </Route>
          
          <Route path="/salary" element={<SalarySidebar />}>
            <Route index element={<SalaryInfo />}/>
          </Route>

          <Route path="/incomeTax" element={<SalarySidebar />}>
            <Route index element={<IncomeTax />}/>
          </Route>

          <Route path="/salSet" element={<SalarySidebar />}>
            <Route index element={<SalarySettlement />}/>
          </Route>

          <Route path="/hourlySet" element={<SalarySidebar />}>
            <Route index element={<HourlyWageSetting />}/>
          </Route>
          

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
