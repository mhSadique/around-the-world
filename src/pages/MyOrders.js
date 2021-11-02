import React, { useEffect, useState, useContext } from 'react';
import MyOrderSingle from '../components/MyOrderSingle';
import '../styles/MyOrders.css';
import { UserData } from '../Contexts/UserInfoContext';

const MyOrders = () => {
    const { user } = useContext(UserData);
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/order-by-email/${user.email}`)
            .then(response => response.json())
            .then(data => setMyOrders(data))
    }, [user.email]);


    return (
        <section className="orders">
            <div className="outer-container">
                <div className="inner-container">
                    <h2>My orders</h2>
                    <div className="order-single-container">
                        {myOrders.map(order => <MyOrderSingle order={order} key={order._id} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyOrders;