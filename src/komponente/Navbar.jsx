 
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Pregledaj tabelu</Link>
            <Link to="/dodaj" className="nav-link">Dodaj transakciju</Link>
        </nav>
    );
};

export default Navbar;
