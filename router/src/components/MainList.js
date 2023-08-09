import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListCard from './ListCard.js';

function MainList({ data }) {
  const [category, setCategory] = useState("new");
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(data.filter((item) => item.category === category));
  }, [category, data]);

  return (
    <>
      <div className='headLine'>

        <h3 onClick={() => setCategory('top')}>Top상품</h3>
        <h3 onClick={() => setCategory('new')}>New상품</h3>
        <Link to="/">상품보기</Link>
      </div>
      <section className='MainList'>
        <ul className='listCon'>
          {dataList.map((item) => (
            <li className='list' key={item._id}>
              <ListCard item={item}></ListCard>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default MainList;
