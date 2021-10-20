import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

import './Login.css'

const Login = () => {
    const { error, signInUsingGoogle, user, signInUsingEamilAndPass, isLoading
    } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleSignIn = e => {
        e.preventDefault();
        signInUsingEamilAndPass(email, password);

    }

    const location = useLocation();
    const history = useHistory();


    // if (!loc) {
    //     user.displayName ? history.push(location.state?.from) : history.push('/home');

    // }

    return (
        <div className="login container text-center  mx-auto border border-1 mt-5 rounded-3 ">
            <h2 className="mt-3 mb-3 text-start fs-3 ">Please Login</h2>
            <form className="text-start " onSubmit={handleSignIn}>
                <label htmlFor="inputEmail4" style={{ fontSize: "13px" }} className="form-label fw-bold ">Email</label>
                <input type="email" onBlur={handleEmailChange} className="form-control border border-secondary" id="inputEmail4" required />

                <label htmlFor="inputPassword4" style={{ fontSize: "13px" }} className="form-label fw-bold ">Password</label>
                <input type="password" onBlur={handlePasswordChange} className="form-control border border-secondary" id="inputPassword4" required />

                <label htmlFor="inputPassword4" style={{ fontSize: "15px" }} className="form-label fw-bold text-danger ">{error}</label>

                <button type="submit" style={{ backgroundColor: "goldenrod", color: "black" }} className="btn fw-bold col-xl-12 col-12 col-md-12 mt-3">Sign in</button>
            </form>
            <p className="text-start mt-2" style={{ fontSize: "13px" }}>new here?<NavLink className="text-decoration-none" to="/register">Create Account</NavLink></p>
            <div>--------------or-------------</div>
            <button onClick={signInUsingGoogle} className="btn btn-secondary">Google Signin</button>
        </div>
    );
};

export default Login;