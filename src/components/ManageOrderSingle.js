import React from 'react';

const ManageOrderSingle = () => {
    return (
        <div className="order-single">
            <p className="status">Order Status - <span className="approved">Approved</span></p>
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
    );
};

export default ManageOrderSingle;