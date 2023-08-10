import React, { useState } from 'react';
import AllList from './AllList';

function Shop({ data }) {

  const [dataList, setDataList] = useState(data);

  return (
    <div className='Shop inner'>
      <ul className='left'>
        <li onClick={() => setDataList([...data])}>등록순</li>
        <li onClick={() => setDataList([...data].sort((a, b) => a.price - b.price))}>낮은가격</li>
        <li onClick={() => setDataList([...data].sort((a, b) => b.price - a.price))}>높은가격</li>
        <li onClick={() => setDataList([...data].sort((a, b) => b.discount - a.discount))}>높은할인율</li>
      </ul>
      <div className='right'>
        <AllList data={dataList} />
      </div>
    </div>
  )
}

export default Shop;
