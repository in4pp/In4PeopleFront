import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import ApprovalSidebar from './pages/task/ApprovalSidebar';
import TaskSubmit from './pages/task/TaskSubmit'
import Main from './pages/main/Main';
import TaskBookmark from './pages/task/TaskBookmark';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="task" element={<ApprovalSidebar />} >
            <Route index element={<TaskSubmit />} />
            <Route path="bookMark" element={<TaskBookmark />} />
            <Route path="approval" element={<TaskSubmit />} />
          </Route>
        </Route>
    </Routes>
    </BrowserRouter >
  );
}

export default App;
