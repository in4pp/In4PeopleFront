

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
// import ApprovalSidebar from './sidebars/ApprovalSidebar';
// import TaskSubmit from './pages/task/TaskSubmit'
import IncomeTax from './pages/salary/IncomeTax';
import SalarySidebar from './pages/salary/components/SalarySidebar';
import SalaryInfo from './pages/salary/SalaryInformation';
import SalarySettlement from './pages/salary/SalarySettlement';
import HourlyWageSetting from './pages/salary/HourlyWageSetting';
import WorkInquiry from './pages/salary/WorkInquiry';





function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>


        <Route path="salary" element={<SalarySidebar />}>
          <Route path="salinfo" element={<SalaryInfo />} />
          <Route path="incomeTax" element={<IncomeTax  />} />
          <Route path="salSet" element={<SalarySettlement />} />
          <Route path="hourlySet" element={<HourlyWageSetting />} />
          <Route path="workInquiry" element={<WorkInquiry />} />
        </Route>
          
          
        

        </Route>
          

     

      </Routes>
    </BrowserRouter>

  );
}

export default App;
