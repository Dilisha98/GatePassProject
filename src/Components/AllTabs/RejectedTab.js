import React from "react";
import { Navigate } from 'react-router-dom'
import './Tabs.css';
import { Container } from "react-bootstrap";

const RejectedTab = () => {
    const [goToRejectedItemDetails, setGoToRejectedItemDetails] = React.useState(false);

  if(goToRejectedItemDetails){
    return <Navigate to= "/RejectedItemDetails" />;
  }
  return (
    <Container className="">
      <form action="#">
    <table>
  <tr className="Rejected-table">
    <th>Ref.No</th>
    <th>Name</th>
    <th>In Location</th>
    <th>Out Location</th>
    <th>Created Date Time</th>
    <th>Full details</th>
  </tr>
  <tr>
    <td>9023455</td>
    <td>Mahesh Theekshana</td>
    <td>Colombo</td>
    <td>Galle</td>
    <td>2023-02-22 16:30:34</td>
    <td><button onClick={() => {setGoToRejectedItemDetails(true);}} class="button">{""}View</button></td>
  </tr>
  <tr>
    <td>3478455</td>
    <td>Rangana Herath</td>
    <td>Colombo</td>
    <td>Kandy</td>
    <td>2023-02-22 16:30:34</td>
    
    <td><button onClick={() => {setGoToRejectedItemDetails(true);}} class="button">{""}View</button></td>
  </tr>
  
</table>
        </form>
    </Container>
  );
};
export default RejectedTab;