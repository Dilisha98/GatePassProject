import React, { useState } from "react";
import ApprovedTab from "./MyApprovalsAllTabs/ApprovedTab.js";
import PendingTab from "./MyApprovalsAllTabs/PendingTab.js";
import RejectedTab from "./MyApprovalsAllTabs/RejectedTab.js";
import TabNavItem from "./V2/TabNavItem.js";
import TabContent from "./V2/TabContent.js";


const MyApprovals = () => {
  const [activeTab, setActiveTab] = useState("approvedtab");
 
  return (
    <div className="myapproval" >
      <div className='Welcome' style={{position:"relative", marginBottom:"5px"}}>
        <h4>Welcome Admin</h4>
        <h7>Pages/ New Request</h7>
      </div>
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
  );
};
 
export default MyApprovals;