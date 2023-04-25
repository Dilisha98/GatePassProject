import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import './Admin.css';
import Button from 'react-bootstrap/Button';
import 'font-awesome/css/font-awesome.min.css';
import ReactFileReader from "react-file-reader";



export default function Admin() {

    const uploadFile = (files) => {
        
        var read = new FileReader();
       
        read.onload = function (e) {
          // perform some operations with read data
          alert(read.result);
        };
        // Invoking the readAsText() method by passing the uploaded file as a parameter
        read.readAsText(files[0]);
      };

  
  return (
      <>
      
      <Container className='Contain'>

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
                        <span class="details">CSV File Upload</span>
                        
                        <ReactFileReader handleFiles = {uploadFile} fileTypes={".csv"}>
                        <input type="text" name="" class="input" placeholder="Upload CSV Here"/>
                        
                        </ReactFileReader>
                   </div>     
                   
                   </div> 
                   <div class="input-div">
                        <div>
                            <span class="details">Item Catogary</span>
                            <input type="text" name="" class="input" placeholder="Enter Catogory here"/> 
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
    <Button type='on-click' variant="success">Edit</Button>{' '}
    <Button type='on click' variant="danger">Delete</Button>{' '}
    </td>
    
  </tr>
  <tr>
    <td>02</td>
    <td>Kurunegala</td>
    <td>
    <Button type='on-click' variant="success">Edit</Button>{' '}
    <Button type='on-click' variant="danger">Delete</Button>{' '}
    </td>
    </tr>
 
</table>
        </Container>
      
      </>   

  )
}
