import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserData } from '../Contexts/UserInfoContext';

const PrivateRoute = ({children, ...rest}) => {
    const {loggedIn, loading} = useContext(UserData);

    if (loading) {
        const style = { textAlign: 'center', padding: '200px 0', fontSize: '40px' };
        return <div style={style}>Loading...</div>;
    }

    return (
        <Route
            {...rest}
            render={({location}) => 
            loggedIn ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {from : location}
                    }}
                />
            )
        }
        />
    );
};

export default PrivateRoute;