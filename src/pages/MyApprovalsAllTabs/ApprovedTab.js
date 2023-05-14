import React from "react";
import './Tabs.css'
import { Navigate } from 'react-router-dom';
import { Container } from "react-bootstrap";

const ApprovedTab = () => {
  const [goToApprovedItemDetails, setGoToApprovedItemDetails] = React.useState(false);

  if(goToApprovedItemDetails){
    return <Navigate to= "/ApprovedItemDetails" />;
  }

  return (
    <Container className="">
      <form action="#">
    <table>
  <tr>
    <th>Ref.No</th>
    <th>Name</th>
    <th>In Location</th>
    <th>Out Location</th>
    <th>Created Date Time</th>
    <th>Full details</th>
  </tr>
  <tr>
    <td>3423455</td>
    <td>Niamal Suriyanayake</td>
    <td>Colombo</td>
    <td>Kandy</td>
    <td>2023-02-22 16:30:34</td>
    <td><button onClick={() => {setGoToApprovedItemDetails(true);}} class="button">{""}View</button></td>
  </tr>
  <tr>
    <td>3423455</td>
    <td>Mahela Jayawaradana</td>
    <td>Colombo</td>
    <td>Kandy</td>
    <td>2023-02-22 16:30:34</td>
    
    <td><button onClick={() => {setGoToApprovedItemDetails(true);}} class="button">{""}View</button></td>
  </tr>
  <tr>
    <td>3423455</td>
    <td>Nuwan Kulasekara</td>
    <td>kurunegala</td>
    <td>Kandy</td>
    <td>2023-02-22 16:30:34</td>
    
    <td><button onClick={() => {setGoToApprovedItemDetails(true);}} class="button">{""}View</button></td>
  </tr>
</table>
        </form>
    </Container>
  );
};
export default ApprovedTab;