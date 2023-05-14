import React from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import './Admin.css';
import Button from 'react-bootstrap/Button';
import Papa from 'papaparse';



export default function Admin() {

  
  const [data, setData] = useState({});

  const handleFileUpload = (e) => {
    const file = e.target.file[0];
    Papa.parse(file, {
      header: true,
      complete : (results) => {
        setData(results.data);
      },
    });
  }




  return (
      <>
      <div className='MyRequest-Container'>
      <div className="MyRequest-Container_row1">
        <div className='WelcomeMyRequest' >
        <h2 className='WelcomeAdmin'>Welcome Admin</h2>
        <p>Pages/Admin </p>
      </div></div>

      <div className="MyRequest-Container_row2">
      <Container className='AdminContain'>
      <div className='title'>Admin</div>
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
    <span class="details">CSV file Upload</span>
    <div class="custom-file-upload">
      <input
        type="file"
        name="csvFile"
        accept=".csv"
        class="input"
        id="file-upload"
        onChange={handleFileUpload}
        placeholder="Upload Csv Here"
      />
      <label for="file-upload">Choose File</label>
    </div>
  </div>
</div> 
                    <div class="input-div">
                        <div>
                            <span class="details">Item Category </span>
                            <input type="text" name="" class="input" placeholder="Enter Item Category Here"/> 
                        </div>
                    </div>

                    <div class="input-div">
                    
                    </div>
                    
                 </div>
                 <button className='btnAdmitsubmit'>Submit</button>
            </form>
            
                
                
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
    <Button className="success">Edit</Button>{' '}
    <Button className="Deletebtn">Delete</Button>{' '}
    </td>

  </tr>
  <tr>
    <td>02</td>
    <td>Kurunegala</td>
    <td>
    <Button className="success">Edit</Button>{' '}
    <Button className="Deletebtn">Delete</Button>{' '}
    </td>
    </tr>

</table>

<table>
  <tr>
    <th>#</th>
    <th>Item Name</th> 
    <th>Action</th>
  </tr>
  <tr>
    <td>01</td>
    <td>Computers</td>
    <td>
    <Button className="success">Edit</Button>{' '}
    <Button className="Deletebtn">Delete</Button>{' '}
    </td>

  </tr>
  <tr>
    <td>02</td>
    <td>Electrical</td>
    <td>
    <Button className="success">Edit</Button>{' '}
    <Button className="Deletebtn">Delete</Button>{' '}
    </td>
    </tr>

</table>
        </Container>
        </div></div>
      </>   

  )
}
