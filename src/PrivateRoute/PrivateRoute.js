import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {

    let userLoggedIn;
    const userLoggedinStatus = window.localStorage.getItem('around_the_world_is_user_loggedIn');
    const userLoggedinStatusParsed = JSON.parse(userLoggedinStatus);

    if (userLoggedinStatus == null) {
        userLoggedIn = false;
    } else {
        userLoggedIn = userLoggedinStatusParsed.loggedIn;
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
            userLoggedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;