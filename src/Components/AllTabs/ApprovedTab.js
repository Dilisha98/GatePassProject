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
    <th>Created Date Time</th>
    <th>Approval</th>
    <th>Full details</th>
  </tr>
  <tr>
    <td>3423455</td>
    <td>2023-02-22 16:30:34</td>
    <td class="Approval">Approve</td>
    <td><button class="button">View</button></td>
  </tr>
  <tr>
    <td>3423455</td>
    <td>2023-02-22 16:30:34</td>
    <td class="Approval">Pending</td>
    <td><button class="button">View</button></td>
  </tr>
  <tr>
    <td>3423455</td>
    <td>2023-02-22 16:30:34</td>
    <td class="Approval">Rejected</td>
    <td><button class="button">View</button></td>
  </tr>
</table>
        </form>
    </Container>
  );
};
export default ApprovedTab;