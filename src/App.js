import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BillCalculator from './pages/BillCalculator';
import TopNavbar from './layout/TopNavbar';

function App() {
  return (
    <>
      <TopNavbar />
      <div className='min-h-screen'>
        <Router>
          <Routes>
            <Route path='/' element={<BillCalculator />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
