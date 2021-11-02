import React, { useContext, useRef, useState } from 'react';
import { UserData } from '../Contexts/UserInfoContext';

const UserDetails = ({ packageDetails }) => {
    const orderForm = useRef();
    const { user } = useContext(UserData);
    const [name, setName] = useState(user.displayName);
    const [email, setEmail] = useState(user.email);
    const [address, setAddress] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const spanStyle = { fontSize: '13px', textTransform: 'lowercase' };

    const handleBooking = (e) => {
        const orderDetails = {
            userName: name,
            userEmail: email,
            userAddress: address,
            packageId: packageDetails._id,
            orderStatus: 'pending'
        };
        
        // fetch('http://localhost:5000/save-order-details', {

            fetch('https://shielded-ridge-55542.herokuapp.com/save-order-details', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            setName('');
            setEmail('');
            setAddress('');
            alert(data);
        })
        e.preventDefault();
    };


    return (
        <div className="user-details">
            <h4>Book Your Trip</h4>
            <form onSubmit={handleBooking} ref={orderForm} >
                <br />
                {name ?
                    <>
                        <label htmlFor="user-name">Name: </label> <br />
                        <input type="text" id="user-name" placeholder="Your name" onChange={handleNameChange} value={name} />
                    </>
                    :
                    <>
                        <label htmlFor="user-name">Name: <span style={spanStyle}>Your name was not provided by firebase. So, put it below.</span></label> <br />
                        <input type="text" id="user-name" onChange={handleNameChange} value={""} placeholder="Your name"  />
                    </>
                }
                {email ?
                    <>
                        <label htmlFor="user-email">Email: </label> <br />
                        <input type="email" id="user-email" onChange={handleEmailChange} value={email}  placeholder="Your Email"  /> <br />
                    </>
                    :
                    <>
                        <label htmlFor="user-email">Email: <span style={spanStyle}>Your email was not provided by firebase. So, put it below.</span> </label> <br />
                        <input type="email" id="user-email" onChange={handleEmailChange} value={''} placeholder="Your Email"  /> <br />
                    </>
                }

                <label htmlFor="user-address">Your Address </label> <br />
                <input type="text" id="user-address" placeholder="Your home address" value={address} onChange={handleAddressChange}/> <br />

                <button type="submit">Book Now</button>
            </form>
        </div>
    );
};

export default UserDetails;