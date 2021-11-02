import React from 'react';
import '../styles/ManageAllOrders.css';
import ManageOrderSingle from '../components/ManageOrderSingle';

const ManageAllOrders = () => {
    return (
        <section className="manage-orders">
        <div className="outer-container">
            <h2>Manage Orders</h2>
            <div className="inner-container">
                <ManageOrderSingle />
                <div className="order-single">
                    <p className="status">Order Status - <span className="pending">Pending</span></p>
                    <h3>5-Star Hilton Cancun, an All-Inclusive Resort</h3>
                    <p className="orderer">Ordered by <span className="orderer-name">Sadique</span></p>


                    <p className="orderer-email">
                        <span className="orderer-name">Sadique</span>'s email - <span
                            className="orderer-email-address">Sadique's email</span>
                    </p>
                    <div>
                        <button>Approve</button>
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ManageAllOrders;