import React, { useEffect, useState, useContext } from 'react';
import MyOrderSingle from '../components/MyOrderSingle';
import '../styles/MyOrders.css';
import { UserData } from '../Contexts/UserInfoContext';
import Spinner from '../components/Spinner';

const MyOrders = () => {
    const { user } = useContext(UserData);
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`https://morning-atoll-31754.herokuapp.com/order-by-email/${user.email}`)
            .then(response => response.json())
            .then(data => setMyOrders(data))
    }, [user.email]);

    if (myOrders.length) {
        return (
            <section className="orders">
                <div className="outer-container">
                    <div className="inner-container">
                        <h2>My orders</h2>
                        <div className="order-single-container">
                            {myOrders.length ?
                                myOrders.map(order =>
                                    <MyOrderSingle
                                        order={order}
                                        key={order._id}
                                        setMyOrders={setMyOrders}
                                        user={user}
                                    />) :
                                <p className="no-order-yet">You haven't made any order yet! Book a package soon before they are all booked.</p>}
                        </div>
                    </div>
                </div>
            </section>
        );
    } else {
        return <Spinner />
    }
};

export default MyOrders;