import React from 'react';
import MainPart from './MainPart';
import Sidebar from './Sidebar';
import '../styles/SidebarAndMainPart.css';

const SidebarAndMainPart = () => {
    return (
        <section className="main-part">
            <div className="outer-container">
                <div className="inner-container">
                    <Sidebar />
                    <MainPart />
                </div>
            </div>
        </section>
    );
};

export default SidebarAndMainPart;