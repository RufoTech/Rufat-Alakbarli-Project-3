import React from 'react'
import { FaChevronDown } from "react-icons/fa";

const Header:React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container">
      <a className="navbar-brand" href="#"><img src="/assets/images/header/header.svg" alt="" /></a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active text-light px-4" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item d-flex align-items-center">
            <a className="nav-link text-light px-4"  href="#" >For New Students</a>
            <FaChevronDown className=' text-light down' />

          </li>
       
          <li className="nav-item">
            <a className="nav-link text-light px-4 contact" aria-disabled="true">Contact Us</a>
          </li>

          <div className="account-div my-1 d-flex align-items-center justify-content-center ">
            <h5 className='text-light my-1 '>Profile</h5>
            <img src="/assets/images/header/account.svg" alt="" className='acan '  />

          </div>

          <div className="menu">
            <img src="/assets/images/header/menu.svg" alt=""  className='menus'/>
          </div>
        </ul>
      
      </div>
    </div>
  </nav>
  )
}

export default Header