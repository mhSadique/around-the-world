import React, { createContext, useState } from 'react';
import firebaseInit from '../Firebase/firebase.init';
firebaseInit();

const UserData = createContext();

const UserInfoContext = ({children}) => {
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const userInfo = {user, setUser, loggedIn, setLoggedIn, loading, setLoading};


    return (
        <UserData.Provider value={userInfo}>
            {children}
        </UserData.Provider>
    );
};

export default UserInfoContext;
export {UserData};