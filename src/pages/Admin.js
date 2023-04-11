import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import './Admin.css';
import Button from 'react-bootstrap/Button';


export default function Admin() {
  return (
      <>
      <Container className='Contain'>
      <form action="#">
                <div class="user-details">
                    <div class="input-div">
                        <div>
                            <span class="details">Location</span>
                            <input type="text" name="" class="input" placeholder="Enter Location Here"/> 
                        </div>
                    </div>
                    <div class="input-div">
                        <div>
                            <span class="details">CSV file Upload </span>
                            <input type="text" name="" class="input" placeholder="Upload Csv Here" />

                       </div>     

                    </div>  

                 </div>

            </form>
            <Container className='btnContain'>
                <button className='btnsubmit'>Submit</button>
                </Container>
               <table>
  <tr>
    <th>#</th>
    <th>Location</th> 
    <th>Action</th>
  </tr>
  <tr>
    <td>01</td>
    <td>Colombo</td>
    <td>
    <Button variant="success">Edit</Button>{' '}
    <Button variant="danger">Delete</Button>{' '}
    </td>

  </tr>
  <tr>
    <td>02</td>
    <td>Kurunegala</td>
    <td>
    <Button variant="success">Edit</Button>{' '}
    <Button variant="danger">Delete</Button>{' '}
    </td>
    </tr>

</table>
        </Container>

      </>   

  )
}