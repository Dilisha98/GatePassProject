import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import '../Item_Tracker.css';

export default function My_Receipts() {
  return (
    <div className='MyRequest-Container'>
      <div className="MyRequest-Container_row1">
        <div className='WelcomeMyRequest' >
        <h2 className='WelcomeAdmin'>Welcome Admin</h2>
        <p>Pages/New Request </p>
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
    <td><button class="button">View</button></td>
  </tr>
  <tr>
  <td>3423456</td>
    <td>Mahesh</td>
    <td>2023-02-22 16:30:34</td>
    <td><button class="button">View</button></td>
  </tr>
  <tr>
    <td>3423457</td>
    <td>Theekshana</td>
    <td>2023-02-22 16:30:34</td>
    <td><button class="button">View</button></td>
  </tr>

  
</table>
        </form>
    </Container>
    </div>
    </div>
  )
}

/* This page's css file and Item_Tracker's css file are same */
