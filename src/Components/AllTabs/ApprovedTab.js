import React from "react";
import './Tabs.css'
import { Navigate } from 'react-router-dom';

const ApprovedTab = () => {
  const [goToApprovedItemDetails, setGoToApprovedItemDetails] = React.useState(false);

  if(goToApprovedItemDetails){
    return <Navigate to= "/ApprovedItemDetails" />;
  }

  return (
    <div className="ApprovedTab">
      <table class="table">
        <thead>
            <tr>
                <th>Ref.No</th>
                <th>Name</th>
                <th>Created Date/Time</th>
                <th>Full Details</th>
            </tr>
        </thead>
    
        <tbody>
            <tr>
                <td>664631344145</td>
                <td>Arunodh Kithmal</td>
                <td>2023.03.14  15.02.15</td>
                <td><button onClick={() => {setGoToApprovedItemDetails(true);}} class="btn btn-danger">{""}View</button></td>
            </tr>
            <tr>
                <td>45687233321</td>
                <td>Dasun Shanaka</td>
                <td>2023.04.24  08.10.55</td>
                <td><button onClick={() => {setGoToApprovedItemDetails(true);}} class="btn btn-danger">{""}View</button></td> 
            </tr>
            <tr>
                <td>97913942348</td>
                <td>Dhanushka Gunathilake</td>
                <td>2022.08.24  20.20.05</td>
                <td><button onClick={() => {setGoToApprovedItemDetails(true);}} class="btn btn-danger">{""}View</button></td>
            </tr>
            <tr>
                <td>785757873</td>
                <td>Lawan Abishek</td>
                <td>2022.08.24  20.20.05</td>
                <td><button onClick={() => {setGoToApprovedItemDetails(true);}} class="btn btn-danger">{""}View</button></td> 
            </tr>
        </tbody>
    </table>
    </div>
  );
};
export default ApprovedTab;