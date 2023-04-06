import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import '../Item_Tracker.css';



export default function Item_Tracker() {
  return (
    <Container className='Contain'>
    <div className='title'>Item Tracker</div>
    <form action="#">
    <table>
  <tr>
    <th>Ref.No</th>
    <th>Name</th>
    <th>Mobile No</th>
    <th>in Location</th>
    <th>Out Location</th>
    <th>Created Date Time</th>
    <th>Full details</th>

  </tr>
  <tr>
    <td>3423455</td>
    <td>Niamal Suriyanayake</td>
    <td>0718240835</td>
    <td>Colombo</td>
    <td>Kandy</td>
    <td>2023-02-22 16:30:34</td>
    <td><button class="button">View</button></td>
  </tr>
  <tr>
  <td>3423456</td>
    <td>Mahesh</td>
    <td>0718240835</td>
    <td>Colombo</td>
    <td>Kandy</td>
    <td>2023-02-22 16:30:34</td>
    <td><button class="button">View</button></td>
  </tr>
  <tr>
    <td>3423457</td>
    <td>Theekshana</td>
    <td>0718240835</td>
    <td>Colombo</td>
    <td>Kandy</td>
    <td>2023-02-22 16:30:34</td>
    <td><button class="button">View</button></td>
  </tr>

  
</table>
        </form>
    </Container>
  )
}
