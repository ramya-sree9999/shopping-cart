import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import './App.css';


const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/shopping" className="nav-link">Shopping</Link>
        <Link to="/cart" className="nav-link">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;