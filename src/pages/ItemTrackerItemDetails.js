//import './Item_Tracker.css';
import React from 'react';
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
      <div className='hello'>
        <h4>Welcome Sir/Madam !!!</h4>
        <h7>Pages/ Item Tracker/ Item Details </h7>
      </div>
      <br/>

      <Container className='ReciverContain'>
    
      

      <div className="title-and-button">
        <div className='title'>Item Tracker</div>
      <button onClick={() => {setGoToItemTrackerItemDetails(true);}} className="backbtn"> <FontAwesomeIcon icon={faArrowLeft}/> Back</button>
   </div>
      
      

          <div className='titleItem'>
            <div className='ItemTitle'>Item Details</div>
            <div className='RefNoTitle'>Ref.No :- 342435</div>
          </div>

            <form>
              <div className='grid-even-columns'>
                  <div className='item-grid'>
                            <div>
                                <span class="formtitle"><i class="bi bi-dot"></i>Item Name :- </span>
                                <span class="">Chair</span>
                            </div>
                            <div>
                                <span class="formtitle">Serial No :- </span>
                                <span class="">232345</span>
                            </div>
                            <div>
                                <span class="formtitle">Returnable :- </span>
                                <span class="">Yes</span>
                            </div>
                            <div>
                                <span class="formtitle">Due Date :- </span>
                                <span class="">2023.03.25</span>
                            </div>          
                  </div>
                  
                  <div className='testimonials'>
                    <div >
                      <img />
                    </div>
                    <div class="slider-image">
                      <img />
                    </div>
                    <div class="slider-image">
                      <img  />
                    </div>
                    

                  </div>
  
                  <div className=''>
                    <button className='btnview'>View Photo</button>
                  </div>
                  
        
            
                 
                  
              
              
                <div className='item-grid'>
                
                <div>
                
                  
                      <span class="formtitle"><i class="bi bi-dot"></i> Name :- </span>
                      <span class=""> Nimale </span>
                    </div>
                    <div>
                      <span class="formtitle"> Service No :- </span>
                      <span class="">232345</span>
                    </div>
                    <div>
                      <span class="formtitle"> Section :- </span>
                      <span class=""> IT </span>
                    </div>
                </div>
              </div>

              <h4 className='rp'>Responsible Person</h4>
            </form>
            <br/><br/>


      </Container>
    </div>
    
  )
}
