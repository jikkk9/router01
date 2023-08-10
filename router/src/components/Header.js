import React from 'react'
// import Shop from './components/Shop.js';
// import Shop from './components/Shop.js';
import Shop from './Shop';
import { Link } from 'react-router-dom';




function Header() {
  // .gnb에 a태그에 마우스를 올리면 on 클래스 추가, 내리면 on 클래스 삭제 

  // document.addEventListener();

  return (
    <header className='header inner'>
      <Link className='logo' to="/">
        <img src={`${process.env.PUBLIC_URL}/img/logo.svg`}></img>
      </Link>
      <nav>
        <div className='gnb'>
          <Link to='Shop' className='on' element={<Shop />}>Shop</Link>
          <Link to='BLOG'>BLOG</Link>
          <Link to='OurStory'>OurStory</Link>
        </div>
        <div className='icon'>
          <div className='icon'>
            <a><i className="fa-solid fa-magnifying-glass"></i></a>
            <a><i className="fa-solid fa-cart-shopping"></i></a>
            <a><i className="fa-solid fa-user"></i></a>
          </div>
        </div>
      </nav >
    </header >
  )
}

export default Header