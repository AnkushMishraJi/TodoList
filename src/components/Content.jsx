import React from 'react';
import Task from './Task';
import Sidebar from './Sidebar';
import '../App.scss';
import { useState } from 'react';

const Content = () => {
    const [selectedTab, setSelectedTab] = useState("INBOX");
    return (
        <section className="content">
            <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
            <Task selectedTab={selectedTab}/>
        </section>
    )
}

export default Content
