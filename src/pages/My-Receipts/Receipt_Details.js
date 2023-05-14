
import { Container } from 'react-bootstrap'
import './my_receipt.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'react-image-lightbox/style.css';


export default function Receipt_Details() {
  const [showPhotoForm, setShowPhotoForm] = useState(false);

  const handleViewPhoto = () => {
    setShowPhotoForm(true);
  }





  return (
    <div>
      <Container className='ReciverContain'>
        <div className='title'>My Receipts</div>
        <div className='titleItem'>
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
              <div>
                <img className='itemleft' src={require('../../img/laptop21.jpg')} alt="imagee" />
              </div>
              <div class="slider-image">
                <img className='item' src={require('../../img/laptop22.jpg')} alt="Robin" />
              </div>
              <div class="slider-image">
                <img className='itemRight' src={require('../../img/laptop23.jpg')} alt="batgirl" />
              </div>
              
            </div>
            <div className=''>
              <Button className='btnview' variant="primary" onClick={handleViewPhoto}>
                View Photo
              </Button>
            </div>
          </div>
    
        
        </form>


        {/*--------------------------New Form ----------------------------*/}
        
        {showPhotoForm &&
          <div className='photo-form float-in'>
            
            
            <div class="grid-item">
            <img class= "grid-image" src="https://images-eu.ssl-images-amazon.com/images/I/71iADhr90vL._AC_UL600_SR600,400_.jpg"></img>
            </div>
  <div class="grid-item">
    <img class= "grid-image" src="https://images-eu.ssl-images-amazon.com/images/I/71iADhr90vL._AC_UL600_SR600,400_.jpg"></img></div>
  <div class="grid-item">
  <img class= "grid-image" src="https://images-eu.ssl-images-amazon.com/images/I/71iADhr90vL._AC_UL600_SR600,400_.jpg"></img>
  </div>
  <div class="grid-item">
  <img class= "grid-image" src="https://images-eu.ssl-images-amazon.com/images/I/71iADhr90vL._AC_UL600_SR600,400_.jpg"></img></div> 
  <div class="grid-item">
  <img class= "grid-image" src="https://images-eu.ssl-images-amazon.com/images/I/71iADhr90vL._AC_UL600_SR600,400_.jpg"></img></div>    
            </div>  
               
            
        }


        <button className='Receivedbtn'>Received</button>
      </Container>
    </div>
  );
}