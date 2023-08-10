import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import MainList from './MainList.js';
import axios from 'axios';

function Main({ data }) {
  //페이지이동기능 useNavigate
  //<button onClick={()=>navigate('/경로')}>이동</button>
  let navigate = useNavigate();
  return (
    <>
      <section className='Main inner'>
        {/* <button onClick={() => {
          axios.get('https://raw.githubusercontent.com/song-jiae/DataList/main/productData.json').then((response) => {
            console.log(response.data);
          })
        }}>데이터 가져오기</button> */}
        <MainList data={data} />
      </section>
    </>
  )
}

export default Main