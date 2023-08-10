import { Link } from "react-router-dom";

function ListCard({ item }) {
  return (
    <>
      <div className='imgCon'>
        <p className="category">{item.category}</p>

        <div>
          <img src={`${process.env.PUBLIC_URL}/img/${item.img} `}></img>

        </div>
        <p className="title">{item.title}</p>
        <div className="imgCon_box">
          <p className="discount">
            {item.discount}%
          </p>
          <p className="price">{item.price}원</p>
        </div>


        <p className="imgLabel">
          장바구니에 담기
        </p>
      </div>
    </>
  )

}
export default ListCard;