import React, { useState } from "react";
import ApprovedTab from "./MyApprovalsAllTabs/ApprovedTab.js";
import PendingTab from "./MyApprovalsAllTabs/PendingTab.js";
import RejectedTab from "./MyApprovalsAllTabs/RejectedTab.js";
import TabNavItem from "./V2/TabNavItem.js";
import TabContent from "./V2/TabContent.js";


const MyApprovals = () => {
  const [activeTab, setActiveTab] = useState("approvedtab");
 
  return (
    <div className='MyRequest-Container'>
    <div className="myapproval" >
    <div className="MyRequest-Container_row1">
        <div className='WelcomeMyRequest' >
        <h2 className='WelcomeAdmin'>Welcome Admin</h2>
        <p>Pages/ My Approval </p>
      </div></div>
      <div className="MyRequest-Container_row2">
      <div className="myapprovals">
        <div className='subMyapprovals'>
        <div className='title'>My Approval</div>
        </div>
        <ul className="nav">
          <TabNavItem title="Approved" id="approvedtab" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="Pending" id="pendingtab" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="Rejected" id="rejectedtab" activeTab={activeTab} setActiveTab={setActiveTab}/>
        </ul>
 
        <div className="outlet">
          <TabContent id="approvedtab" activeTab={activeTab}>
            <ApprovedTab/>
          </TabContent>
          <TabContent id="pendingtab" activeTab={activeTab}>
            <PendingTab/>
          </TabContent>
          <TabContent id="rejectedtab" activeTab={activeTab}>
            <RejectedTab/>
          </TabContent>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};
 
export default MyApprovals;