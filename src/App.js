import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComp from './components/NavbarComp';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/Admin" element={<AdminWithNavbar />} />

      </Routes>
    </Router>
  );
}



function AdminWithNavbar() {
  const currentPath = window.location.pathname;
  if (currentPath === '/Admin') {
    return (
      <>
        <NavbarComp />
        <Admin/> 
      </>
    );
  }
  return null;
}
export default App;