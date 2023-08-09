import React from 'react';
import { Link } from "react-router-dom";

//내비게이션 배열에 넣어서 출력하기
const menuList = ['메뉴1', '메뉴2', '메뉴3', '메뉴4', '메뉴5', '메뉴6'];
function Header() {
  return (
    <div className='header'>
      <ul>
        {menuList.map((menu, index) => (
          <li><a href="#" key={index}>{menu}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default Header