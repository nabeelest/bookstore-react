import React from 'react';
import './Navbar.css'; // This line imports the CSS file
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const state = useSelector(state => state.handleCart);

    return (
        <nav className="navbar navbar-expand-lg navbar-light py-1 sticky-top custom-navbar">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/" style={{ paddingTop: '0', paddingBottom: '10' }}>
                    <img 
                        src="./assets/demo.png"
                        alt="logo"
                        style={{width: '120px', height: '120px'}} 
                    />
                </NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Books</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Audio Books</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to="/login" className="btn btn-outline-light m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-light m-2"><i className="fa fa-user-plus mr-1"></i> Sign Up</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-light m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;


  