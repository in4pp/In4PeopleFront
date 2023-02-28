import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import IncomeTax from './pages/IncomeTax';
import SalaryInfo from './pages/SalaryInformation'
// import Layout from './layouts/Layout';




function App() {

  return (

    <BrowserRouter>
      <Routes>


        <Route path="/" element={ <SalaryInfo /> }>
          {/* <Route index element={<IncomeTax />} /> */}
         
        </Route>
        

        {/* <Route path="/" element={ <Layout /> } />  */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
