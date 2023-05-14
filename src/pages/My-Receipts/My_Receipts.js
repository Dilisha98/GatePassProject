import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import { Navigate } from 'react-router-dom';



const My_Receipts = () => {
  const [goToReceiptDetails, setGoToReceiptDetails] = React.useState(false);

  if(goToReceiptDetails){
      return <Navigate to= "/Receipt_Details" />;
    }
  
  return (
    <div className='MyRequest-Container'>
      <div className="MyRequest-Container_row1">
        <div className='WelcomeMyRequest' >
        <h2 className='WelcomeAdmin'>Welcome Admin</h2>
        <p>Pages/My Receipts </p>
      </div></div>

      <div className="MyRequest-Container_row2">
    <Container className='Contain'>
    <div className='title'>My Receipts</div>
    <form action="#">
    <table>
  <tr>
    <th>Ref.No</th>
    <th>Name</th>
    <th>Created Date Time</th>
    <th>Full details</th>

  </tr>
  <tr>
    <td>3423455</td>
    <td>Niamal Suriyanayake</td>
    <td>2023-02-22 16:30:34</td>
    <td><button onClick={() => {setGoToReceiptDetails(true);}} class="button" >{""}View</button></td>
  </tr>
  <tr>
  <td>3423456</td>
    <td>Mahesh</td>
    <td>2023-02-22 16:30:34</td>
    <td><button onClick={() => {setGoToReceiptDetails(true);}} class="button">{""}View</button></td>
  </tr>
  <tr>
    <td>3423457</td>
    <td>Theekshana</td>
    <td>2023-02-22 16:30:34</td>
    <td><button onClick={() => {setGoToReceiptDetails(true);}} class="button">{""}View</button></td>
  </tr>
  

  
</table>
        </form>
    </Container>
    </div>
    </div>


    
  )
};

export default My_Receipts;