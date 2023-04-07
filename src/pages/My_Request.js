import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import '../My_Request.css';



export default function My_Request() {
  return (
    <Container className='Contain'>
    <div className='title'>My Request</div>
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