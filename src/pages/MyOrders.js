import React from 'react';
import MyOrderSingle from '../components/MyOrderSingle';
import '../styles/MyOrders.css';

const MyOrders = () => {
    return (
        <section className="orders">
        <div className="outer-container">
            <div className="inner-container">
                <h2>My orders</h2>
                <div className="order-single-container">
                    <MyOrderSingle />
                    <MyOrderSingle />
                </div>
            </div>
        </div>
    </section>
    );
};

export default MyOrders;