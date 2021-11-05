import React, { useEffect, useState } from 'react';
import '../styles/ManageAllOrders.css';
import ManageOrderSingle from '../components/ManageOrderSingle';
import Spinner from '../components/Spinner';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://morning-atoll-31754.herokuapp.com/all-orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    if (orders.length) {
        return (
            <section className="manage-orders">
                <div className="outer-container">
                    <h2>Manage Orders</h2>
                    <div className="inner-container">
                        {orders.map(order => <ManageOrderSingle setOrders={setOrders} order={order} key={order._id} />)}
                    </div>
                </div>
            </section>
        );
    } else {
        return <Spinner />;
    }
};

export default ManageAllOrders;