import React from "react";
import { Navigate } from 'react-router-dom'
import './Tabs.css'

const RejectedTab = () => {
    const [goToRejectedItemDetails, setGoToRejectedItemDetails] = React.useState(false);

  if(goToRejectedItemDetails){
    return <Navigate to= "/RejectedItemDetails" />;
  }
  return (
    <div className="RejectedTab">
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
                <td>111111</td>
                <td>Deshan Chamil</td>
                <td>2021.03.14  15.02.15</td>
                <td><button onClick={() => {setGoToRejectedItemDetails(true);}} class="btn btn-danger">{""}View</button></td>
            
            </tr>
            <tr>
                <td>2222222</td>
                <td>Menuka Perera</td>
                <td>2022.04.24  08.10.55</td>
                <td><button onClick={() => {setGoToRejectedItemDetails(true);}} class="btn btn-danger">{""}View</button></td>
            </tr>
            <tr>
                <td>5555555</td>
                <td>Yehan Kanishka</td>
                <td>2023.08.24  20.20.05</td>
                <td><button onClick={() => {setGoToRejectedItemDetails(true);}} class="btn btn-danger">{""}View</button></td>
            </tr>
            <tr>
                <td>6666666</td>
                <td>Kasun Lakmal</td>
                <td>2020.08.24  20.20.05</td>
                <td><button onClick={() => {setGoToRejectedItemDetails(true);}} class="btn btn-danger">{""}View</button></td>
            </tr>
        </tbody>
    </table>
    </div>
  );
};
export default RejectedTab;