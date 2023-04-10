import React from "react";
import './Tabs.css'
import { Navigate } from 'react-router-dom';

const RejectedItemDetails = () => {
  const [goToMyApprovals, setGoToMyApprovals] = React.useState(false);

  if(goToMyApprovals){
    return <Navigate to= "/MyApprovals" />;
  }
  return (
    
    <div className="myapproval">
      <div className='Welcome'>
        <h4>Welcome Kithmal !!</h4>
        <h7>Pages/My Approvals/Rejected Item Details</h7>
      </div>
      <div className="myapprovals">
        <div className="headbutton">
          <div className='subMyapprovals'>
            <h2>My Approvals</h2>
          </div>
          <button onClick={() => {setGoToMyApprovals(true);}} class="btnBack btn-danger">{""}Back</button>
          </div>
          <div className="row">
          <div className="itemdetails">
            <h5>Item Details</h5>
          </div>
          <div className="Ref">
            <h5>Ref.No: 333333333333</h5>
          </div>


          <div className="rawData1">
          <div className="row">
            <div className="rawDataItemSerial">
              <ol style={{ listStyleType: 'disc' }}>
                <li><strong>Item Name&nbsp; :-&nbsp;&nbsp;&nbsp;Laptop</strong></li>
              </ol>
              <ol style={{ listStyleType: 'none' }}>
                <li></li>
              </ol>
              <ol style={{ listStyleType: 'disc' }}>
                <li><strong>Serial No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;&nbsp;232345</strong></li>
              </ol>
            </div>
            <div className="rawDataReturnable">
              <ol style={{ listStyleType: 'disc' }}>
                <li><strong>Returnable&nbsp; :-&nbsp;&nbsp;&nbsp;No</strong></li>
              </ol>
            </div>
            <div className="rawDataImage">
              <div className="imageframe">
              </div>
            </div>
            <div className="rawDataButton">
            <td><button onClick={() => {setGoToMyApprovals(true);}} class="btnViewPhotos btn-danger">View Photos</button></td>
            </div>
          </div>
        </div>


          <div className="rawData">
          <div className="row">
            <div className="rawDataItemSerial">
              <ol style={{ listStyleType: 'disc' }}>
              <li><strong>Item Name&nbsp; :-&nbsp;&nbsp;Chair</strong></li>
              </ol>
              <ol style={{ listStyleType: 'none' }}>
                <li></li>
              </ol>
              <ol style={{ listStyleType: 'disc' }}>
              <li><strong>Serial No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;&nbsp;884569</strong></li>
              </ol>
            </div>
            <div className="rawDataReturnable">
              <ol style={{ listStyleType: 'disc' }}>
                <li><strong>Returnable&nbsp; :-&nbsp;&nbsp;&nbsp;No</strong></li>
              </ol>
            </div>
            <div className="rawDataImage">
              <div className="imageframe">
              </div>
            </div>
            <div className="rawDataButton">
            <td><button onClick={() => {setGoToMyApprovals(true);}} class="btnViewPhotos btn-danger">View Photos</button></td>
            </div>
          </div>
        </div>

        
        <div className="rawData">
          <div className="row">
            <div className="rawDataItemSerial">
              <ol style={{ listStyleType: 'disc' }}>
              <li><strong>Item Name&nbsp; :-&nbsp;&nbsp;&nbsp;Table</strong></li>
              </ol>
              <ol style={{ listStyleType: 'none' }}>
                <li></li>
              </ol>
              <ol style={{ listStyleType: 'disc' }}>
              <li><strong>Serial No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;&nbsp;161655</strong></li>
              </ol>
            </div>
            <div className="rawDataReturnable">
              <ol style={{ listStyleType: 'disc' }}>
                <li><strong>Returnable&nbsp; :-&nbsp;&nbsp;&nbsp;No</strong></li>
              </ol>
            </div>
            <div className="rawDataImage">
              <div className="imageframe">
              </div>
            </div>
            <div className="rawDataButton">
            <td><button onClick={() => {setGoToMyApprovals(true);}} class="btnViewPhotos btn-danger">View Photos</button></td>
            </div>
          </div>
        </div> 
        </div>

        <div className="BtnApproveReject">
          <button class="btnApprove btn-success mx-2">Approve</button><button class="btnReject btn-danger">Reject</button> 
        </div>
      </div>
    </div>
  );
};
 
export default RejectedItemDetails;