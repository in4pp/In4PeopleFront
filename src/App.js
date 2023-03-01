import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import TaskSidebar from './pages/task/TaskSidebar';
import ApprovalSubmit from './pages/task/taskApproval/ApprovalSubmit'
import Main from './pages/main/Main';
import ApprovalBookmark from './pages/task/taskApproval/ApprovalBookmark';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="task" element={<TaskSidebar />} >
            <Route index element={<ApprovalSubmit />} />
            <Route path="bookMark" element={<ApprovalBookmark />} />
            <Route path="approval" element={<ApprovalSubmit />} />
          </Route>
        </Route>
    </Routes>
    </BrowserRouter >
  );
}

export default App;
