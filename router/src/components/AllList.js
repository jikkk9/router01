import React, { useEffect, useState } from 'react' // useEffect 추가



function AllList({ data }) {

  const [dataList, setDataList] = useState([data]);
  useEffect(() => {
    setDataList(data);  // data prop이 변경될 때마다 dataList 상태 업데이트
  }, [data]);

  return (
    <>
      <section className=''>
        <ul className='AllLIst'>
          {dataList.map((item) => (
            <li className='list' key={item._id}>
              <h3>ID : {item._id}</h3>
              <b>
                <img src={`${process.env.PUBLIC_URL}/img/${item.img} `}></img>
              </b>

              <h2>{item.title}</h2>
              <div>
                <p>{item.discount}%</p>
                <p>
                  {item.price}원
                </p>
              </div>


            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default AllList