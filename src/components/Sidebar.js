import React from 'react';

const Sidebar = () => {
    return (
        <aside>
            <div className="sidebar-items-container">
                <div className="sidebar-item-heading">
                    <span className="heading-text">Destination</span>
                    <i className="fas fa-angle-down"></i>
                </div>
                <div className="sidebar-items">
                    <div>
                        <div className="sidebar-item-single">
                            <span className="sidebar-item-text">North America</span>
                            <span className="sidebar-item-number">15</span>
                        </div>
                        <div className="sidebar-item-single">
                            <span className="sidebar-item-text">Europe</span>
                            <span className="sidebar-item-number">11</span>
                        </div>
                        <div className="sidebar-item-single">
                            <span className="sidebar-item-text">Mexico & the Caribbean</span>
                            <span className="sidebar-item-number">4</span>
                        </div>
                        <div className="sidebar-item-single">
                            <span className="sidebar-item-text">Latin America</span>
                            <span className="sidebar-item-number">2</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sidebar-items-container">
                <div className="sidebar-item-heading">
                    <span className="heading-text">Vacation Type</span>
                    <i className="fas fa-angle-down"></i>
                </div>
                <div className="sidebar-items">
                    <div>
                        <div className="sidebar-item-single">
                            <span className="sidebar-item-text">Self-Drive Vacation</span>
                            <span className="sidebar-item-number">2</span>
                        </div>
                        <div className="sidebar-item-single">
                            <span className="sidebar-item-text">City Excursion</span>
                            <span className="sidebar-item-number">3</span>
                        </div>
                        <div className="sidebar-item-single">
                            <span className="sidebar-item-text">All-Inclusive Resorts</span>
                            <span className="sidebar-item-number">4</span>
                        </div>
                        <div className="sidebar-item-single">
                            <span className="sidebar-item-text">Family Friendly</span>
                            <span className="sidebar-item-number">2</span>
                        </div>
                        <div className="sidebar-item-single">
                            <span className="sidebar-item-text">Luxury Vacations</span>
                            <span className="sidebar-item-number">5</span>
                        </div>
                        <div className="sidebar-item-single">
                            <span className="sidebar-item-text">Multi City</span>
                            <span className="sidebar-item-number">1</span>
                        </div>
                        <div className="sidebar-item-single">
                            <span className="sidebar-item-text">Multi City</span>
                            <span className="sidebar-item-number">1</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sidebar-items-container">
                <div className="sidebar-item-heading">
                    <span className="heading-text">Interests</span>
                    <i className="fas fa-angle-down"></i>
                </div>
                <div className="sidebar-items">
                    <div>
                        <div className="sidebar-item-single">
                            <span className="sidebar-item-text">Beach & Coastal</span>
                            <span className="sidebar-item-number">15</span>
                        </div>
                        <div className="sidebar-item-single">
                            <span className="sidebar-item-text">Castles, Manors & Villas</span>
                            <span className="sidebar-item-number">2</span>
                        </div>
                        <div className="sidebar-item-single">
                            <span className="sidebar-item-text">Romance & Honeymoons</span>
                            <span className="sidebar-item-number">5</span>
                        </div>
                        <div className="sidebar-item-single">
                            <span className="sidebar-item-text">Wellness & Relaxation</span>
                            <span className="sidebar-item-number">2</span>
                        </div>
                        <div className="sidebar-item-single">
                            <span className="sidebar-item-text">Adventure</span>
                            <span className="sidebar-item-number">21</span>
                        </div>
                        <div className="sidebar-item-single">
                            <span className="sidebar-item-text">Art & Architecture</span>
                            <span className="sidebar-item-number">1</span>
                        </div>
                        <div className="sidebar-item-single">
                            <span className="sidebar-item-text">Art & Culture</span>
                            <span className="sidebar-item-number">1</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;