import { Container } from 'react-bootstrap'
import './my_receipt.css';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigate } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css';


function MyModal(props) {
  
  const [photoIndex, setPhotoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
     
  };

  const images = [
    require('../../img/laptop1.jpg'),
    require('../../img/images.jpeg'),
    require('../../img/laptop1.jpg'),
    require('../../img/laptop1.jpg'),
    require('../../img/laptop1.jpg'),
    require('../../img/laptop1.jpg'),
  ];

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='modelcontainer'
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" className='textdesign'>
            <h4> Photos </h4>
            <p>Item name :- Laptop </p>
            <Button className='closemodalbtn' onClick={props.onHide}><i class="fa fa-times" aria-hidden="true"></i></Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalbody'>
        <SlideshowLightbox className="MyRequestmodal_Item_Image_details">
          {images.map((image, index) => (
            <img
              key={index}
              className='model_img'
              src={image}
              alt={`Image ${index + 1}`}
              onClick={() => openLightbox(index)}
            />
            ))}
            </SlideshowLightbox>
        </Modal.Body>
        
      </Modal>

    </>
  );
}



export default function My_Receipts() {

  const [goToMyReceiptst, setGoToMyReceipts] = useState(false);

  const [modalShow, setModalShow] = React.useState(false);

  if (goToMyReceiptst) {
    return <Navigate to="/My_Receipts" />;
  }

  return (
    <div>
      <div className="MyRequest-Container">
      <div className="MyRequest-Container_row1">
          <div className="WelcomeMyRequest">
            <h2 className="WelcomeAdmin">Welcome Admin</h2>
            <p>Pages/ My Receipt/ My Receipts Details </p>
          </div>
        </div>
      

        <div className="MyRequest-Container_row2">
        <Container className='ReciverContain'>
        <div className="title-and-button">
          <div className='title'>My Receipts Details</div> 
          <button onClick={() => {setGoToMyReceipts(true);}} className="backbtn"> <FontAwesomeIcon icon={faArrowLeft}/> Back</button>
          </div>  <div className='titleItem'>
            <div className='ItemTitle'>Item Details</div>
            <div className='RefRNoTitle'>Ref.No :- 3423455</div>
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
                  <img className='itemleft' src={require('../../img/images_(1).jpeg')} alt="imagee" />
                </div>
                <div class="slider-image">
                  <img className='item' src={require('../../img/laptop.jpg')} alt="Robin" />
                </div>
                <div class="slider-image">
                  <img className='itemRight' src={require('../../img/images.jpeg')} alt="batgirl" />
                </div>
              </div>
              <div className=''>
              <Button className='btnview' variant="primary"  onClick={() => setModalShow(true)} >
              View Photo
              </Button>
              <MyModal show={modalShow}
                onHide={() => setModalShow(false)}
              />
      
               </div>
            </div>
          </form>
          <button className='Receivedbtn'>Received</button>
        </Container>
        </div>
        </div>
    </div>
  );
}