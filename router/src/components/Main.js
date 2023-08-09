import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
function Main() {
  //페이지이동기능 useNavigate
  //<button onClick={()=>navigate('/경로')}>이동</button>
  let navigate = useNavigate();
  return (
    <>
      <Link to="/Detail.js" style={{ backgroundColor: 'blue', color: '#fff' }}>Detail</Link>
      <img src="https://placehold.co/600x400"></img>
      <div>
        <button onClick={() => navigate('/Detail')}>이동</button>
        <button onClick={() => navigate('-1')}>뒤로가기</button>
        <button onClick={() => navigate('1')}>앞으로가기</button>
        <Link path="*">404페이지</Link>
      </div>
    </>
  )
}

export default Main