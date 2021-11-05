import React, {useState, useEffect} from 'react';

const MyOrderSingle = ({order, setMyOrders, user}) => {
    const [orderSingle, setOrderSingle] = useState({});

    useEffect(() => {
        if (order.packageId) {
            fetch(`https://morning-atoll-31754.herokuapp.com/ordered-package-by-id/${order.packageId}`)
            .then(res => res.json())
            .then(data => {
                setOrderSingle(data);
            })
        }
    }, [order.packageId]);

    const cancelOrder = () => {
        const proceed = window.confirm('Are you sure you want to cancel the order?');
        if (proceed) {
            
            // cancel the order by email
            fetch(`https://morning-atoll-31754.herokuapp.com/cancel-order-by-email/${user.email}`, {
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
                        fetch(`https://morning-atoll-31754.herokuapp.com/order-by-email/${user.email}`)
                            .then(res => res.json())
                            .then(data => setMyOrders(data));
                    }
                })
        }
    };
    
    return (
        <div className="order-single">
            <p>{orderSingle.packageName}</p>
            <button onClick={cancelOrder}>Cancel your order</button>
        </div>
    );
};

export default MyOrderSingle;