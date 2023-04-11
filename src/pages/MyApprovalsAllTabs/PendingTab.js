import React from "react";
import './Tabs.css'
import { Navigate } from 'react-router-dom';
import { Container } from "react-bootstrap";

const PendingTab = () => {
    const [goToPendingItemDetails, setGoToPendingItemDetails] = React.useState(false);

    if(goToPendingItemDetails){
        return <Navigate to= "/PendingItemDetails" />;
      }
    

  return (
    <Container className="">
      <form action="#">
    <table>
  <tr className="pending-table">
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
    <td><button onClick={() => {setGoToPendingItemDetails(true);}} class="button">{""}View</button></td>
  </tr>
  <tr>
    <td>3478455</td>
    <td>Rangana Herath</td>
    <td>Colombo</td>
    <td>Kandy</td>
    <td>2023-02-22 16:30:34</td>
    
    <td><button onClick={() => {setGoToPendingItemDetails(true);}} class="button">{""}View</button></td>
  </tr>
  <tr>
    <td>3423455</td>
    <td>Nuwan Kulasekara</td>
    <td>kurunegala</td>
    <td>Kandy</td>
    <td>2023-02-22 16:30:34</td>
    
    <td><button onClick={() => {setGoToPendingItemDetails(true);}} class="button">{""}View</button></td>
  </tr>
</table>
        </form>
    </Container>
  );
};
export default PendingTab;