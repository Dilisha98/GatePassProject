import React, { useState } from "react";
import ApprovedTab from "../AllTabs/ApprovedTab.js";
import PendingTab from "../AllTabs/PendingTab.js";
import RejectedTab from "../AllTabs/RejectedTab.js";
import TabNavItem from "../V2/TabNavItem";
import TabContent from "../V2/TabContent";

const MyApprovals = () => {
  const [activeTab, setActiveTab] = useState("approvedtab");
 
  return (
    <div className="myapproval">
      <div className='Welcome'>
        <h4>Welcome Kithmal !!</h4>
        <h7>Pages/My Approval</h7>
      </div>
      <div className="myapprovals">
        <div className='subMyapprovals'>
          <h2>My Approvals</h2>
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