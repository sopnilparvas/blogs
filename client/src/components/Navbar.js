import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          SummerBlogs
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse justify-content-end' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
            <Link className='nav-link' to='/about'>
              About
            </Link>
            <Link className='nav-link' to='/contact'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
