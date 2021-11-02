import React, {useState, useEffect} from 'react';

const MyOrderSingle = ({order}) => {
    const [orderSingle, setOrderSingle] = useState({});
    // console.log(order.packageId);
    useEffect(() => {
        if (order.packageId) {
            console.log('inside');
            fetch(`http://localhost:5000/ordered-package-by-id/${order.packageId}`)
            .then(res => res.json())
            .then(data => console.log('returned data : ', data))
        }
    }, [order.packageId]);
    
    return (
        <div className="order-single">
            <p> <span>1</span>. Hawaii Hilton Waikoloa Village</p>
            <button>Cancel your order</button>
        </div>
    );
};

export default MyOrderSingle;