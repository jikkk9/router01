import React from 'react'
import { Link } from 'react-router-dom';
import ListCard from './ListCard.js';


function MainList({ data }) {
  let dataList = data.filter((item) => item.category == "new");
  return (
    <section className='MainList'>
      <ul>
        {dataList.map((item) => (
          <li className='list' key={item._id}>
            <ListCard item={item}></ListCard>
          </li>
        ))}

      </ul>
    </section >
  )
}

export default MainList