import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer inner'>
      <div className="top">
        <nav>
          <Link to="">CONTACT</Link>
          <Link to="">TERMS OF SERVICES</Link>
          <Link to="">SHIPPING AND RETURNS</Link>
        </nav>
        <div>
          <p>Give an email, get the newsletter</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <div className="bottom">
        <p>2023 Shelly. Terms of use and privacy policy.</p>
        <div className="icon">
          <Link to="">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link to="">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to="">
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link to="">
            <i className="fa-regular fa-star"></i>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Footer