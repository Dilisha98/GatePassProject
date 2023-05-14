import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './My_Request.css';
import { Navigate } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';

export default function My_RequestDeatils() {
    const [goToMyRequest, setGoToMyRequest] = useState(false);

   
  
    const userDetails = [
      {
        title: "Service No :-",
        detail: "2343445",
      },
      {
        title: "Section :-",
        detail: "IT",
      },
      {
        title: "Name :-",
        detail: "Nimal Kularathna",
      },
      {
        title: "Group :-",
        detail: "B",
      },
      {
        title: "Designation :-",
        detail: "2343445",
      },
      {
        title: "Contact No :-",
        detail: "071 45 78 906",
      },
      
    ];

   
    const myData = [
        { No: '01',
          item_name: 'Laptop',
          serial_no: '123456',
          returnabale: 'Yes',
          item_category: 'Computer',
          due_date: '22-02-2023',
          description: 'The href attribute is required for an anchor to be keyboard accessible. The href attribute is required for an anchor to be keyboard accessible. Provide a valid. The href attribute is required for an anchor to be keyboard accessible. Provide a valid',
          images: [
            require('../../img/laptop1.jpg'),
            require('../../img/images_(1).jpeg'),
            require('../../img/images.jpeg'),
            require('../../img/LapPhoto.jpeg'),
            require('../../img/laptop.jpg'),
            
            
            
                    ]
        },
        { No: '02',
          item_name: 'Lights',
          serial_no: '123456',
          returnabale: 'Yes',
          item_category: 'Electrical',
          due_date: '22-02-2023',
          description: 'The href attribute is required for an anchor to be keyboard accessible. The href attribute is required for an anchor to be keyboard accessible. Provide a valid. The href attribute is required for an anchor to be keyboard accessible. Provide a valid',
          images: [
            require('../../img/laptop1.jpg'),
            require('../../img/images_(1).jpeg'),
            require('../../img/images.jpeg'),
            require('../../img/LapPhoto.jpeg'),
            require('../../img/laptop1.jpg'),
                    ]
        },
     
     
       
      ];
  
    const Out_In_location = [
        {
            outlocation:"Kurunegala",
            inlocation:" Colombo"
            
          },
      ];
    
    const ReciverDetails = [
      {
        name: "Amal Perera",
        group: "A",
        service_no: "23435",
        conatact_no: "071 45 39 879"
      },
    ]
      

    if (goToMyRequest) {
      return <Navigate to="/My_Request" />;
    }
  
    return (
      <div className="MyRequest-Container">
        <div className="MyRequest-Container_row1">
          <div className="WelcomeMyRequest">
            <h2 className="WelcomeAdmin">Welcome Admin</h2>
            <p>Pages/ My Request/ Request Details </p>
          </div>
        </div>
  
       
      
        <div className="MyRequest-Container_row2">
          <Container className="My_RequestDetailsContain">
            <div className="title-and-button">
              <div className="title">My Request Details</div>
              <button onClick={() => {setGoToMyRequest(true);}} className="backbtn"> <FontAwesomeIcon icon={faArrowLeft}/> Back</button>
            </div>
            <div className="TitleRequestItem">
              <div className="ItemTitle">Ref.No :- 3423455</div>
            </div>
            <form>

                {/*------------------- This is a Sender Details form-------------------*/}
              <div className="MyRequest_grid_even_columns">
                <div className="ItemMyRequestTitle">Sender Details</div>
                <div className="MyRequestuserdetails">
                  {userDetails.map((userDetail, index) => (
                    <div key={index} className="textMyRequest">
                      <FontAwesomeIcon icon={faCircle} className="dot-icon" />
                      <span className="modaldetails">{userDetail.title}</span>
                      <span className="details">
                        <a className="detailsec">{userDetail.detail}</a>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

                
                
                {/*------------------- This is a Item Details form-------------------*/}
            
              <div className="MyRequest_Item_Details_grid_even_columns">
                <div className="ItemMyRequestTitle">
                    Item Details
                </div>
                <div className='MyRequestDetails_Contaion'>
                    
                <table className='table_contain'>
                        <thead>
                            <tr>
                                <th style={{width:'50px'}}>No</th>
                                <th>Items</th>
                                
                            </tr>
                            
                        </thead>

                        <tbody className='MyRequestDetailstbody'>
                            {myData.map((item) => (
                            <tr className='mytr' key={item.id}>
                                <td >
                                    {item.No}
                                </td>
                                <td className='tablebody' style={{textAlign: 'left'}}>
                                    <div className="MyRequest_Itemdetails">
                                        
                    
                                            <div className="textMyRequest">
                                                    <FontAwesomeIcon icon={faCircle} className="dot-icon" />
                                                    <span className="modaldetails">Item Name :-</span>
                                                    <span className="details">
                                                        <a className="detailsec">{item.item_name}</a>
                                                    </span>
                                            </div>
                                            <div className="textMyRequest">
                                                    <FontAwesomeIcon icon={faCircle} className="dot-icon" />
                                                    <span className="modaldetails">Serial No :-</span>
                                                    <span className="details">
                                                        <a className="detailsec">{item.serial_no}</a>
                                                    </span>
                                            </div>
                                            <div className="textMyRequest">
                                                    <FontAwesomeIcon icon={faCircle} className="dot-icon" />
                                                    <span className="modaldetails">Returnable :-</span>
                                                    <span className="details">
                                                        <a className="detailsec">{item.returnabale}</a>
                                                    </span>
                                            </div>
                                            <div className="textMyRequest">
                                                    <FontAwesomeIcon icon={faCircle} className="dot-icon" />
                                                    <span className="modaldetails">Item Category :-</span>
                                                    <span className="details">
                                                        <a className="detailsec">{item.item_category}</a>
                                                    </span>
                                            </div>
                                            <div className="textMyRequest">
                                                    <FontAwesomeIcon icon={faCircle} className="dot-icon" />
                                                    <span className="modaldetails">Due Date :-</span>
                                                    <span className="details">
                                                        <a className="detailsec">{item.due_date}</a>
                                                    </span>
                                            </div>
                                    
                                    </div>
                                    <div className="MyRequest_DescriptionItemdetails">
                                       
                                            <div className="textMyItemDescription_Request">
                                                <dv className="sdetails">
                                                    <FontAwesomeIcon icon={faCircle} className="dot-icon" />
                                                    <span className="modaldetails">Description :-</span>
                                                </dv>
                                            
                                                <div className="rdetails">
                                                    <span className="details">
                                                    <p className="detailsec">{item.description}</p>
                                                    </span>
                                                </div>
                                            </div>
                                           
                                    </div>
                                    <div className="">
                                    <SlideshowLightbox className="MyRequest_Item_Image_details">
                                            {item.images.map((image, index) => (
                                            <img
                                            className="modelimg"
                                                key={index}
                                                src={image}
                                                alt={`Image ${index + 1}`}
                                            />
                                            ))}
                                        </SlideshowLightbox>
                                    
                                    </div>

                                </td>
                            </tr>
                            ))}
                        </tbody>
                </table>
                </div>
              </div>


               {/*------------------- This is a Out Location/ In Location-------------------*/}
              <div className="MyRequest_grid_even_columns">
                <div className="ItemMyRequestTitle">Out/In Location Details</div>
                <div className="MyRequest_location_details">
                {Out_In_location.map((OutInLocation, index) => (
                    <div key={index} className="textMyRequest_location">
                        <div  >
                        <FontAwesomeIcon icon={faCircle} className="dot-icon" />
                      <span className="modaldetails">Out Location : -</span>
                      <span className="details">
                        <a className="detailsec">{OutInLocation.outlocation}</a>
                      </span>
                        </div>
                        <div>
                        <FontAwesomeIcon icon={faCircle} className="dot-icon" />
                      <span className="modaldetails">In Location : -</span>
                      <span className="details">
                        <a className="detailsec">{OutInLocation.inlocation}</a>
                      </span>
                        </div>
                      
                    </div>
                    
                    
                  ))}
                </div>
              </div>



                {/*------------------- This is a Reciver Details-------------------*/}
              <div className="MyRequest_grid_even_columns">
                <div className="ItemMyRequestTitle">Reciver Details</div>
                <div className="MyRequest_reciver_details">
                  {ReciverDetails.map((ReciverDetail, index) => (
                    <div key={index} className="textMyRequest_reciver">
                      <div className='reciver_txt'>
                        <FontAwesomeIcon icon={faCircle} className="dot-icon" />
                        <span className="modaldetails">Name :-</span>
                        <span className="details">
                          <a className="detailsec">{ReciverDetail.name}</a>
                        </span>
                      </div>

                      <div className='reciver_txt'>
                        <FontAwesomeIcon icon={faCircle} className="dot-icon" />
                        <span className="modaldetails">Group :- </span>
                        <span className="details">
                          <a className="detailsec">{ReciverDetail.group}</a>
                        </span>
                      </div>
                      <div className='reciver_txt'>
                        <FontAwesomeIcon icon={faCircle} className="dot-icon" />
                        <span className="modaldetails">Service No :- </span>
                        <span className="details">
                          <a className="detailsec">{ReciverDetail.service_no}</a>
                        </span>
                      </div>
                      <div className='reciver_txt'>
                        <FontAwesomeIcon icon={faCircle} className="dot-icon" />
                        <span className="modaldetails">Conatct No :- </span>
                        <span className="details">
                          <a className="detailsec">{ReciverDetail.conatact_no}</a>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </Container>
        </div>
      </div>
    );
  }

  /* 

  <div className="MyRequest_Itemdetails">
                {Item_Details.map((ItemDetail, index) => (
                    <div key={index} className="textMyRequest">
                      <FontAwesomeIcon icon={faCircle} className="dot-icon" />
                      <span className="modaldetails">{ItemDetail.title}</span>
                      <span className="details">
                        <a className="detailsec">{ItemDetail.detail}</a>
                      </span>
                    </div>
                  ))}
                </div>
                <div className="MyRequest_DescriptionItemdetails">
                {Item_Description_Details.map((ItemDescriptionDetails, index) => (
                    <div key={index} className="textMyItemDescription_Request">
                        <dv className="sdetails">
                            <FontAwesomeIcon icon={faCircle} className="dot-icon" />
                            <span className="modaldetails">{ItemDescriptionDetails.title}</span>
                        </dv>
                      
                        <div className="rdetails">
                            <span className="details">
                            <p className="detailsec">{ItemDescriptionDetails.detail}</p>
                            </span>
                        </div>
                      
                    </div>
                  ))}
                </div> 
                
                <div className="MyRequest_Item_Image_details">
                {Requestimages.map((image, index) => (
                        <img
                        key={index}
                        className='modelimg'
                        src={image}
                        alt="image"
                        
                        />
                    ))}
                </div>
                
                
                
                */