import React from 'react'
import {FaInbox, FaRegCalendarAlt, FaRegCalendar} from "react-icons/fa";

const Sidebar = ({selectedTab , setSelectedTab}) => {
    
    console.log(selectedTab);
    return (
        <div className="sidebar">
            <div className={""} onClick={()=>setSelectedTab("INBOX")}>
                <FaInbox className="icon"/>
                Inbox
            </div>
            
            <div className={""} onClick={()=>setSelectedTab("TODAY")}>
                <FaRegCalendarAlt className="icon"/>
                Today
            </div>
            <div className={""} onClick={()=>setSelectedTab("NEXT_7")}>
            <FaRegCalendar className="icon"/>
                Next 7 Days
            </div>
        </div>
    )
}

export default Sidebar;
