import React, { useContext, useRef } from 'react';
import '../styles/Login.css';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import firebaseInit from '../Firebase/firebase.init';
import { UserData } from '../Contexts/UserInfoContext';
import { useHistory, useLocation } from 'react-router';
firebaseInit();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const Login = () => {

    const emailRefReg = useRef();
    const passwordRefReg = useRef();

    const emailRefLogin = useRef();
    const passwordRefLogin = useRef();

    const { setLoggedIn, setUser } = useContext(UserData);
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || '/';

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setLoggedIn(true);
                setUser(result.user);
                window.localStorage.setItem('around_the_world_is_user_loggedIn', JSON.stringify({loggedIn: true}));
                history.push(redirectUri);
            })
            .catch(err => {
                console.log(err);
            })
    };


    const handleRegistration = (e) => {
        const email = emailRefReg.current.value;
        const password = passwordRefReg.current.value;
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setLoggedIn(true);
                setUser(result.user);
                window.localStorage.setItem('around_the_world_is_user_loggedIn', JSON.stringify({ loggedIn: true }));
                history.push(redirectUri);
            })
            .catch(err => {
                console.log(err);
            })
        e.preventDefault();
    };

    const handleLoginWithEmail = (e) => {
        const email = emailRefLogin.current.value;
        const password = passwordRefLogin.current.value;
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setLoggedIn(true);
                setUser(result.user);
                window.localStorage.setItem('around_the_world_is_user_loggedIn', JSON.stringify({ loggedIn: true }));
                history.push(redirectUri);
            })
            .catch(err => {
                alert("Such user does not exist! Please login with a valid account.")
            })
        e.preventDefault();
    };



    return (
        <div className="login">
            <div>
                <h1>Register</h1>
                <form onSubmit={handleRegistration}>
                    <input type="email" name="" id="email" placeholder="Email" ref={emailRefReg} />
                    <br />
                    <input type="password" name="" id="pass" placeholder="Password" ref={passwordRefReg} />
                    <br />
                    <button type="submit">Register</button>
                </form>
            </div>
            <div>
                <h1>Login</h1>
                <form onSubmit={handleLoginWithEmail}>
                    <input type="email" name="" id="email" placeholder="Email" ref={emailRefLogin} />
                    <br />
                    <input type="password" name="" id="pass" placeholder="Password" ref={passwordRefLogin} />
                    <br />
                    <button type="submit">Login</button>
                </form>
                    <button onClick={handleGoogleSignIn}>Login with Google</button>
            </div>
        </div>
    );
};

export default Login;