import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <header className='fh-style justify-between navbar'>
        {/* Logo */}
        <a href="#" className="mr-auto ml-11">
          <p className='font-sans text-hlogo text-white font-sc'>
            IE
          </p>
        </a>
        {/* Redirects */}
        <a className="btc" href="#"><button>Sign Up</button></a>
        <a className="btc" href="#"><button></button>About Us</a>
        <a className="btc mr-8" href="#"><button></button>Safety</a>
      </header>
    </>
  )
}

export default Navbar
