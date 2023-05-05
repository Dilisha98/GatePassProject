import React from 'react';
import '../Item_Tracker.css';
import { Container } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function ItemTrackerItemDetails() {
  const [goToItemTrackerItemDetails, setGoToItemTrackerItemDetails] = React.useState(false);

if(goToItemTrackerItemDetails){
  return <Navigate to= "/Item_Tracker" />;
}

return (
  <div>
    
    <br/>
    <div className='itemTracker-Container'>
    <div className="itemTracker-Container_row1">
      <div className='WelcomeItemTracker' >
      <p className='WelcomeAdmin'>Welcome Admin</p>
      <p>Pages/ Item Tracker/ Item Details </p>
    </div></div>


    <div className="itemTracker-Container_row2">
      <Container className='ItemContain'>
  
    

    <div className="title-and-button">
      <div className='titleItemTracker'>Item Tracker</div>
      <div className='btnCoulmn'>
      <button onClick={() => {setGoToItemTrackerItemDetails(true);}} className="backbtnItemTracker"> <FontAwesomeIcon icon={faArrowLeft}/> Back</button>

      </div>
     </div>
    
        <div className='Itemtitle'>
          <div className='ItemDetails'>Item Details</div>
          <div className='RefNotitle'>Ref.No :- 342435</div>
        </div>

          <form>
          <div className="grid-container">
  <div className="row1">
  <div className='gridevencolumns'>
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
              <div>
                <span class="formtitle">Due Date :- </span>
                <span class="">03.05.2023</span>
              </div>
            </div>
            <div className='testimonials'>
              <div>
                <img className='itemleft' src={require('../img/laptop1.jpg')} alt="imagee" />
              </div>
              <div class="slider-image">
                <img className='item' src={require('../img/laptop2.jpg')} alt="Robin" />
              </div>
              <div class="slider-image">
                <img className='itemRight' src={require('../img/laptop.jpg')} alt="batgirl" />
              </div>
            </div>
            <div className=''>
            <button className='btnview' type='button' >View Photo</button>

             </div>
          </div>
    
  </div>
  
  <div className="row3">Responsible Person</div>
  <div className="row4">
    
  <div className='gridevenResponsible'>
            <div className='itemgrid'>
              <div>
                <span class="formtitle"><i class="bi bi-dot"></i>Name :- </span>
                <span class="">Ruwan</span>
              </div>
              <div>
                <span class="formtitle">Service No  :- </span>
                <span class="">34235</span>
              </div>
              <div>
                <span class="formtitle">Section :- </span>
                <span class="">It</span>
              </div>
              
            </div>
           
            
          </div>


    
  </div>
</div>
          </form>
          
          


    </Container></div>

    </div>
    
  </div>
  
)
}