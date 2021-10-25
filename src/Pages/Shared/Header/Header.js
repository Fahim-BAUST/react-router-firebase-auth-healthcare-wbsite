import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white ">
                <div className="container-fluid">
                    <NavLink
                        className="navbar-brand fw-bold text-white"
                        to="/home"

                    >
                        CareforYou Clinic
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link text-white"
                                    to="/home"
                                    activeStyle={{
                                        fontWeight: "bolder"
                                    }}
                                >
                                    <i className="fas fa-home"></i>   Home
                                </NavLink>

                            </li>
                            <li className="nav-item">

                                <NavLink
                                    className="nav-link text-white"
                                    to="/services"

                                    activeStyle={{
                                        fontWeight: "bolder"

                                    }}
                                >
                                    <i className="fab fa-servicestack"></i>   Services
                                </NavLink>
                            </li>

                            <li className="nav-item">

                                <NavLink
                                    className="nav-link text-white "
                                    to="/doctors"

                                    activeStyle={{
                                        fontWeight: "bolder"

                                    }}
                                >
                                    <i className="fas fa-user-md"></i>  Doctors
                                </NavLink>
                            </li>
                            <li className="nav-item">

                                <NavLink
                                    className="nav-link text-white"
                                    to="/team"

                                    activeStyle={{
                                        fontWeight: "bolder"
                                    }}
                                >
                                    <i className="fas fa-users"></i> Our Team
                                </NavLink>
                            </li>
                        </ul>
                        <form className="d-flex align-items-center">
                            {user?.displayName && <span className="me-2">Hello {user.displayName}</span>}

                            {user?.displayName ? <button onClick={logOut} className="btn btn-outline-info" type="submit"><i className="fas fa-sign-out-alt"></i> Logout</button> : <NavLink to="/login"><button className="btn btn-outline-info" type="submit"><i className="fas fa-sign-in-alt"></i> Login</button></NavLink>}
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;