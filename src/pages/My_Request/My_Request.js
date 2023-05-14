import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import './My_Request.css';
import { Navigate } from 'react-router-dom';


export default function My_Request() {
  const [goToRequestDetails, setGoToRequestDetails] = React.useState(false);

  if(goToRequestDetails){
    return <Navigate to= "/My_RequestDeatils" />;
  }

  const myData = [
    { refNo: '3423455', dateTime: '2023-02-22 16:30:34', approval: 'Approve' },
    { refNo: '3423456', dateTime: '2023-02-23 14:20:15', approval: 'Pending' },
    { refNo: '3423457', dateTime: '2023-02-24 11:10:08', approval: 'Rejected' },
  ];
  
 
  return (
    <div className='MyRequest-Container'>
      <div className="MyRequest-Container_row1">
        <div className='WelcomeMyRequest' >
        <h2 className='WelcomeAdmin'>Welcome Admin</h2>
        <p>Pages/ My Requests </p>
      </div></div>


      <div className="MyRequest-Container_row2">
      <Container className='Contain'>
    <div className='title'>My Request</div>
    <form action="#">
    <table>
    <thead>
          <tr>
            <th>Ref.No</th>
            <th>Created Date Time</th>
            <th>Approval</th>
            <th>Full details</th>
          </tr>
    </thead>

     <tbody>
        {myData.map((item) => (
          <tr key={item.id}>
            <td>{item.refNo}</td>
            <td>{item.dateTime}</td>
            <td>{item.approval}</td>
            <td><button  onClick={() => {setGoToRequestDetails(true);}}>View Details</button></td>
          </tr>
        ))}
    </tbody>
   </table>
        </form>
    </Container>
        </div>

      </div>
   
  )
}

const statusCells = document.querySelectorAll('.Approval');

statusCells.forEach((cell) => {
  switch (cell.textContent) {
    case 'Approve':
      cell.classList.add('Approve');
      break;
    case 'Pending':
      cell.classList.add('Pending');
      break;
    case 'Rejected':
      cell.classList.add('Rejected');
      break;
    default:
      break;
  }
});