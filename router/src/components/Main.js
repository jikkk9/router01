import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import MainList from './MainList.js';
function Main({ data }) {
  //페이지이동기능 useNavigate
  //<button onClick={()=>navigate('/경로')}>이동</button>
  let navigate = useNavigate();
  return (
    <>
      <section className='Main'>
        <MainList data={data} />
      </section>
    </>
  )
}

export default Main