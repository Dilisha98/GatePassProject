import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Navigate } from 'react-router-dom';
import './my_receipt.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
//import Popup from '../../components/Popup';
//import { useState } from 'react';


const Receipt_Details = () => {
  const [goToMyReceipts, setGoToMyReceipts] = React.useState(false);
  //const [buttonPopup, setButtonPopup] = useState(false);
  const [showPhotoForm, setShowPhotoForm] = useState(false);

  const handleViewPhoto = () => {
    setShowPhotoForm(true);
  }


  if(goToMyReceipts){
    return <Navigate to= "/My_Receipts" />;
  }
  return (
    <div className='MyRequest-Container'>
      <div className="MyRequest-Container_row1">
        <div className='WelcomeMyRequest' >
        <h2 className='WelcomeAdmin'>Welcome Admin</h2>
        <p>Pages/My Receipts/ Receipt  Details </p>
      </div></div>

      <div className="MyRequest-Container_row2">
    <Container className='ReciverContain'>
    <div className="title-and-button">
        <div className='title'>My Receipt Details</div>
      <button onClick={() => {setGoToMyReceipts(true);}} className="backbtn"> <FontAwesomeIcon icon={faArrowLeft}/> Back</button>
   </div>    <div className='TitleItem'>
                <div className='ItemTitle'>Item Details</div>
                <div className='RefNoTitle'>Ref.No :- 3423455</div>
        </div>
          <form>
            <div className='grid-even-columns'>
                <div className='item-grid'>
                          <div>
                              <span class="formtitle"><i class="bi bi-dot"></i>Item Name :- </span>
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
                              <img className='itemleft'   src={require('../../img/laptop.jpg')} alt="lap1" />
                          </div>  
                          <div  class="slider-image">
                              <img className='item'   src={require('../../img/laptop1.jpg')} alt="lap2" />
                          </div>                   
                          <div class="slider-image" >
                              <img className='itemRight'   src={require('../../img/laptop2.jpg')} alt="lap3" />
                          </div>                                    
                  </div>

                <div className=''>
                  <button className='btnview'>View Photo</button>
                </div>
            </div>

            <div className='grid-even-columns'>
                <div className='item-grid'>
                          <div>
                              <span class="formtitle"><i class="bi bi-dot"></i>Item Name :- </span>
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
                              <img className='itemleft'   src={require('../../img/laptop.jpg')} alt="lap1" />
                          </div>  
                          <div  class="slider-image">
                              <img className='item'   src={require('../../img/laptop1.jpg')} alt="lap2" />
                          </div>                   
                          <div class="slider-image" >
                              <img className='itemRight'   src={require('../../img/laptop2.jpg')} alt="lap3" />
                          </div>                                    
                  </div>
         
                <div className=''>
                <button className='btnview' onClick={handleViewPhoto} >View Photo</button> 
                          
                </div>
                 
            </div>
          </form>
                 {/*--------------------------New Form ----------------------------*/}
        
        {showPhotoForm &&
          <div className='photo-form float-in'>
            <div className='item-grid'>
              <div>
                <span class="formtitle"><i class="bi bi-dot"></i>Item Name :- </span>
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
          </div>
        }
        <button className='Receivedbtn'>Received</button>
    
      
      
    </Container>
  </div>
  </div>
  )
};

export default Receipt_Details;