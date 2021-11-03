import React, { useEffect, useState } from 'react';

const ManageOrderSingle = ({ order, setOrders }) => {
    const [orderSingle, setOrderSingle] = useState(order);
    const [orderedPackage, setOrderedPackage] = useState({});

    console.log(orderSingle);

    const approveOrder = () => {


        // update the order status to 'approved'
        fetch(`https://morning-atoll-31754.herokuapp.com/approve-order/${orderSingle._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ orderStatus: 'approved' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    // re-render the component after updating the order status to 'approved'
                    // so that the 'approved' status is shown on UI
                    fetch(`https://morning-atoll-31754.herokuapp.com/order/${order._id}`)
                        .then(res => res.json())
                        .then(data => {
                            setOrderSingle(data);
                        })
                    alert('Order is approved.');
                }

            })
    };

    useEffect(() => {
        // get the corresponding order's info (like user's email, address)
        fetch(`https://morning-atoll-31754.herokuapp.com/order/${order._id}`)
            .then(res => res.json())
            .then(data => {
                setOrderSingle(data);
            })
    }, [order._id])


    useEffect(() => {
        // get the corresponding package
        fetch(`https://morning-atoll-31754.herokuapp.com/ordered-package-by-id/${order.packageId}`)
            .then(res => res.json())
            .then(data => {
                setOrderedPackage(data);
            })
    }, [order.packageId])


    const cancelOrder = () => {
        const proceed = window.confirm('Are you sure you want to cancel the order?');
        if (proceed) {

            // cancel the order by id
            fetch(`https://morning-atoll-31754.herokuapp.com/cancel-order/${orderSingle._id}`, {
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
                        fetch('https://morning-atoll-31754.herokuapp.com/all-orders')
                            .then(res => res.json())
                            .then(data => setOrders(data));
                    }
                })
        }
    };


    return (
        <div className="order-single">
            <p className="status">Order Status -
                <span className={`${orderSingle.orderStatus === 'pending' ? 'pending' : 'approved'}`}>
                    {orderSingle.orderStatus}
                </span>
            </p>
            <h3>{orderedPackage.packageName}</h3>
            <p className="orderer">Ordered by &nbsp;
                <span className="orderer-name">
                    {orderSingle.userName ? orderSingle.userName : 'Annonymous'}
                </span>
            </p>

            <p className="orderer">
                <span className="orderer-name">
                    {orderSingle.userName ? orderSingle.userName : 'Annonymous'}
                </span>'s address :  &nbsp;
                <span className="orderer-name">
                    {orderSingle.userAddress}
                </span>
            </p>


            <p className="orderer-email">
                <span className="orderer-name">
                    {orderSingle.userName ? orderSingle.userName : 'Annonymous'}'
                </span>s email -  &nbsp;
                <span
                    className="orderer-email-address">{orderSingle.userEmail}
                </span>
            </p>
            <div>
                <button onClick={approveOrder}>Approve</button>
                <button onClick={cancelOrder}>Cancel</button>
            </div>
        </div>
    );
};

export default ManageOrderSingle;