import React from 'react';
import './Navbar.css'; 

function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <h2 className="logo">SOBER</h2>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>       
    </div>
  );
}

export default Navbar;