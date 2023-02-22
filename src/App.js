import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IncomeTax from './pages/IncomeTax';



function App() {

  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={ <IncomeTax /> }>
         
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
