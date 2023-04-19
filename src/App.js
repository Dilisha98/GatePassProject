import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import New_Request from './pages/New_Request';
import Login from './pages/login';
import NavbarComp from './components/NavbarComp';
import My_Request from './pages/My_Request';
//import My_Approval from './pages/My_Approval';
import My_Receipts from './pages/My-Receipts/My_Receipts';
import Dispatch from './pages/Dispatch';
import Item_Tracker from './pages/Item_Tracker';
import Admin from './pages/Admin';


import MyApprovals from "./pages/MyApprovals";
import ApprovedItemDetails from "./pages/MyApprovalsAllTabs/ApprovedItemDetails";
import PendingItemDetails from "./pages/MyApprovalsAllTabs/PendingItemDetails";
import RejectedItemDetails from "./pages/MyApprovalsAllTabs/RejectedItemDetails";
import Receipt_Details from "./pages/My-Receipts/Receipt_Details"

function App() {
  return (
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/New_Request" element={<NewRequestWithNavbar />} />
              <Route path="/My_Request" element={<MyRequestWithNavbar />} />
              <Route path="/MyApprovals" element={<MyApprovalWithNavbar />} />
              <Route path="/My_Receipts" element={<MyReceiptstWithNavbar />} />
              <Route path="/Dispatch" element={<DispatvhWithNavbar />} />
              <Route path="/Item_Tracker" element={<ItemTrackerWithNavbar />} />
              <Route path="/Admin" element={<AdminWithNavbar />} />

              <Route path="/ApprovedItemDetails" element={<ApprovedItemDetailsWithNavbar />}/>
                <Route path="/PendingItemDetails" element={<PendingItemDetailsWithNavbar />}/>
                <Route path="/RejectedItemDetails" element={<RejectedItemDetailsWithNavbar />}/>
                <Route path="/Receipt_Details" element={<Receipt_DetailsWithNavbar />}/>
                             
            </Routes>
          </Router>
        
  );
}

function NewRequestWithNavbar() {
  const currentPath = window.location.pathname;
  if (currentPath === '/New_Request') {
    return (
      <>
        <NavbarComp />
        <New_Request />
        
      </>
    );
  }
  return null;
}
function MyRequestWithNavbar() {
  const currentPath = window.location.pathname;
  if (currentPath === '/My_Request') {
    return (
      <>
        <NavbarComp />
        <My_Request /> 
      </>
    );
  }
  return null;
}
function MyApprovalWithNavbar() {
  const currentPath = window.location.pathname;
  if (currentPath === '/MyApprovals') {
    return (
      <>
        <NavbarComp />
        <MyApprovals/> 
      </>
    );
  }
  return null;
}

function MyReceiptstWithNavbar() {
  const currentPath = window.location.pathname;
  if (currentPath === '/My_Receipts') {
    return (
      <>
        <NavbarComp />
        <My_Receipts/> 
      </>
    );
  }
  return null;
}

function DispatvhWithNavbar() {
  const currentPath = window.location.pathname;
  if (currentPath === '/Dispatch') {
    return (
      <>
        <NavbarComp />
        <Dispatch/> 
      </>
    );
  }
  return null;
}

function ItemTrackerWithNavbar() {
  const currentPath = window.location.pathname;
  if (currentPath === '/Item_Tracker') {
    return (
      <>
        <NavbarComp />
        <Item_Tracker/> 
      </>
    );
  }
  return null;
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


function ApprovedItemDetailsWithNavbar () {
  const currentPath = window.location.pathname;
  if (currentPath === '/ApprovedItemDetails') {
    return (
      <>
        <NavbarComp />
        <ApprovedItemDetails/> 
      </>
    );
  }
  return null;
}

function PendingItemDetailsWithNavbar () {
  const currentPath = window.location.pathname;
  if (currentPath === '/PendingItemDetails') {
    return (
      <>
        <NavbarComp />
        <PendingItemDetails/> 
      </>
    );
  }
  return null;
}


function RejectedItemDetailsWithNavbar () {
  const currentPath = window.location.pathname;
  if (currentPath === '/RejectedItemDetails') {
    return (
      <>
        <NavbarComp />
        <RejectedItemDetails/> 
      </>
    );
  }
  return null;
}

function Receipt_DetailsWithNavbar () {
  const currentPath = window.location.pathname;
  if (currentPath === '/Receipt_Details') {
    return (
      <>
        <NavbarComp />
        <Receipt_Details/> 
      </>
    );
  }
  return null;
}



export default App;

