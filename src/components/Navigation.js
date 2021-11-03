/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import '../styles/Navigation.css';
import useCheckUserLoggedInAfterPageRefresh from '../hooks/useCheckUserLoggedInAfterPageRefresh';
import { UserData } from '../Contexts/UserInfoContext';
const auth = getAuth();

const Navigation = () => {
    useCheckUserLoggedInAfterPageRefresh();
    const { user, loggedIn, setLoggedIn, setUser } = useContext(UserData);

    const handleLogout = () => {
        signOut(auth).then(() => {
            setLoggedIn(false);
            setUser({});
            window.localStorage.setItem('around_the_world_is_user_loggedIn', JSON.stringify({loggedIn: false}));

        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <nav className="navigation">
            <div className="outer-container">
                <div className="inner-container">
                    <div className="website-logo">
                        <p>Around The W<i className="fas fa-globe-americas tour-globe"></i>rld</p>
                    </div>

                    <div className="profile">
                        <Link to='/'>Homepage</Link>
                        {loggedIn && <Link to='/my-orders'>My Orders</Link>}
                        {loggedIn && <Link to='/manage-orders'>Manage Orders</Link>}
                        {loggedIn && <Link to='/add-new-spot'>Add New Tourist Spot</Link>}
                        {loggedIn || <Link to='/login'>Login</Link>}
                        {loggedIn && <Link to=''><button onClick={handleLogout} >Logout</button></Link>}
                        {user.displayName && <Link className="user-name" to=''>{user.displayName}</Link>}
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navigation;