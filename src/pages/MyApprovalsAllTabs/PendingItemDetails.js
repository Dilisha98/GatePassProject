import React from "react";
import './Tabs.css'
import { Navigate } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const PendingItemDetails = () => {
  const [goToMyApprovals, setGoToMyApprovals] = React.useState(false);

  if(goToMyApprovals){
    return <Navigate to= "/MyApprovals" />;
  }
  return (
    
    <div>
       <div className='Welcome'>
        <h4>Welcome Admin</h4>
        <h7>Pages/ My Approval/ Item Details</h7>
      </div>
    <Container className='ReciverContain'>
      
   <div className="title-and-button">
        <div className='title'>My Approval</div>
      <button onClick={() => {setGoToMyApprovals(true);}} className="backbtn"> <FontAwesomeIcon icon={faArrowLeft}/> Back</button>
   </div>
    
         <div className='titleItem'>
                <div className='ItemTitle'>Item Details</div>
                <div className='RefNoTitle'>Ref.No :- 3423455</div>
        </div>
          <form>
            <div className='grid-even-columns'>
                <div className='item-grid'>
                          <div>
                              <span class="formtitle">Item Name :- </span>
                              <span class="">Laptop</span>
                          </div>
                          <div>
                              <span class="formtitle">Serial No :- </span>
                              <span class="">34235</span>
                          </div>
                          <div>
                              <span class="formtitle">Returnable :- </span>
                              <span class="">No</span>
                          </div>
                </div>
                <div className='testimonials'>

                <div >
                            <img className='itemleft'   src={require('../../img/laptop.jpg')} alt="imagee" />
                        </div>
                        <div class="slider-image">
                            <img className='item' src={require('../../img/laptop1.jpg')} alt="Robin" />
                        </div>
                        <div class="slider-image">
                              <img className='itemRight'  src={require('../../img/laptop2.jpg')} alt="batgirl" />
                        </div>
                  
                </div>
                <div className=''>
                  <button className='btnview'>View Photo</button>
                </div>
            </div>

           
          </form>
          <div className="approval-buttons-container">
              <button className='Receivedbtn'>Approval</button>
              <button className='Rejectbtn'>Reject</button>
        </div>
    </Container>
  </div>
  );
};
 
export default PendingItemDetails;