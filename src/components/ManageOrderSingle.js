import React, { useEffect, useState } from 'react';

const ManageOrderSingle = ({ order, setOrders }) => {
    const [orderSingle, setOrderSingle] = useState({});

    const approveOrder = () => {

        // fetch(`http://localhost:5000/approve-order/${orderSingle._id}`, {

        // update the order status
        fetch(`https://shielded-ridge-55542.herokuapp.com/approve-order/${orderSingle._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ orderStatus: 'approved' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    // re-render the component after updating the order status
                    fetch(`https://shielded-ridge-55542.herokuapp.com/order/${order._id}`)
                        .then(res => res.json())
                        .then(data => {
                            setOrderSingle(data);
                        })
                    alert('Order is approved.');
                }

            })
    };

    useEffect(() => {
        // get the corresponding order
        fetch(`https://shielded-ridge-55542.herokuapp.com/order/${order._id}`)
            .then(res => res.json())
            .then(data => {
                setOrderSingle(data);
            })
    }, [order._id])


    const cancelOrder = () => {
        const proceed = window.confirm('Are you sure you want to cancel the order?');
        if (proceed) {

            // cancel the order with id
            fetch(`https://shielded-ridge-55542.herokuapp.com/cancel-order/${orderSingle._id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount === 1) {
                        alert('The order has been cancelled.')

                        // get all the orders after the deletion and put it in parent's state 
                        // to re-render the parent to clear the deleted item from UI 
                        fetch('https://shielded-ridge-55542.herokuapp.com/all-orders')
                            .then(res => res.json())
                            .then(data => setOrders(data));
                    }
                })
        }
    };


    return (
        <div className="order-single">
            <p className="status">Order Status -
                <span className={`${orderSingle.orderStatus === 'pending' ? 'pending' : 'approved'}`}>{orderSingle.orderStatus}</span>
            </p>
            <h3>5-Star Hilton Cancun, an All-Inclusive Resort</h3>
            <p className="orderer">Ordered by <span className="orderer-name">{orderSingle.userName}</span></p>


            <p className="orderer-email">
                <span className="orderer-name">{orderSingle.userName}'</span>s email - <span
                    className="orderer-email-address">{orderSingle.userEmail}</span>
            </p>
            <div>
                <button onClick={approveOrder}>Approve</button>
                <button onClick={cancelOrder}>Cancel</button>
            </div>
        </div>
    );
};

export default ManageOrderSingle;