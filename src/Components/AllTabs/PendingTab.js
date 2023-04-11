import React from "react";
import './Tabs.css'
import { Navigate } from 'react-router-dom';


const PendingTab = () => {
    const [goToPendingItemDetails, setGoToPendingItemDetails] = React.useState(false);

    if(goToPendingItemDetails){
        return <Navigate to= "/PendingItemDetails" />;
      }
    

  return (
    <div className="PendingTab">
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
                <td>56987452</td>
                <td>Pathum Nissanka</td>
                <td>2021.03.14  15.02.15</td>
                <td><button onClick={() => {setGoToPendingItemDetails(true);}} class="ApprovalView">{""}View</button></td> 
            
            </tr>
            <tr>
                <td>12548936</td>
                <td>Charith Asalanka</td>
                <td>2022.04.24  08.10.55</td>
                <td><button onClick={() => {setGoToPendingItemDetails(true);}} class="ApprovalView">{""}View</button></td> 
            </tr>
            <tr>
                <td>745841236</td>
                <td>Kumar Sangakkara</td>
                <td>2023.08.24  20.20.05</td>
                <td><button onClick={() => {setGoToPendingItemDetails(true);}} class="ApprovalView">{""}View</button></td>  
            </tr>
            <tr>
                <td>562412578</td>
                <td>Kasun Lakmal</td>
                <td>2020.08.24  20.20.05</td>
                <td><button onClick={() => {setGoToPendingItemDetails(true);}} class="ApprovalView">{""}View</button></td>  
            </tr>
        </tbody>
    </table>
    </div>
  );
};
export default PendingTab;