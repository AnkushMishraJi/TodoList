import React, {useState} from 'react'
import {FaInbox, FaRegCalendarAlt, FaRegCalendar} from "react-icons/fa";


const Sidebar = ({selectedTab , setSelectedTab}) => {
    console.log(selectedTab);
    const [activate1, setActivate1] = useState("active");
    const [activate2, setActivate2] = useState("");
    const [activate3, setActivate3] = useState("");
    return (
        <div className="sidebar">
            <div className={activate1} onClick={()=>{
                setSelectedTab("INBOX");
                setActivate1("active");
                setActivate2("");
                setActivate3("");
                }}>
                <FaInbox className="icon"/>
                Inbox
            </div>
            
            <div className={activate2} onClick={()=>{
                setSelectedTab("TODAY");
                setActivate1("");
                setActivate2("active");
                setActivate3("");
                }}>
                <FaRegCalendarAlt className="icon"/>
                Today
            </div>
            <div className={activate3} onClick={()=>{
                setSelectedTab("NEXT_7");
                setActivate1("");
                setActivate2("");
                setActivate3("active");
                }}>
            <FaRegCalendar className="icon"/>
                Next 7 Days
            </div>
        </div>
    )
}

export default Sidebar;
