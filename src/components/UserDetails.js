import React, { useContext, useRef, useState } from 'react';
import { UserData } from '../Contexts/UserInfoContext';

const UserDetails = ({ packageDetails }) => {
    const { user } = useContext(UserData);
    const [name, setName] = useState(user.displayName);
    const [email, setEmail] = useState(user.email);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const  spanStyle = {fontSize: '13px', textTransform: 'lowercase'};


    return (
        <div className="user-details">
            <h4>Book Your Trip</h4>
            <form>
                <br />
                {name ?
                    <>
                        <label htmlFor="user-name">Name: </label> <br />
                <input type="text" id="user-name" onChange={handleNameChange} value={name} /> 
                    </>
                    :
                    <>
                        <label htmlFor="user-name">Name: <span style={spanStyle}>Your name was not provided by firebase. So, put it below.</span></label> <br />
                <input type="text" id="user-name" onChange={handleNameChange} value={""} /> 
                    </>
                }
                {email ?
                    <>
                        <label htmlFor="user-email">Email: </label> <br />
                        <input type="email" id="user-email" onChange={handleEmailChange} value={email} /> <br />
                    </>
                    :
                    <>
                        <label htmlFor="user-email">Email: <span style={spanStyle}>Your email was not provided by firebase. So, put it below.</span> </label> <br />
                        <input type="email" id="user-email" onChange={handleEmailChange} value={''} /> <br />
                    </>
                }

                <label htmlFor="user-address">Your Address </label> <br />
                <input type="text" id="user-address" placeholder="Put your home address here" /> <br />
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
};

export default UserDetails;