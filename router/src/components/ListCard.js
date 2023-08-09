import { Link } from "react-router-dom";

function ListCard({ item }) {
  return (
    <>
      <div className='imgCon'>
        <img src={`${process.env.PUBLIC_URL}/img/${item.img} `}></img>
      </div>
      <p>{item.title}</p>
      <p>{item.price}</p>
      <p>{item.category}</p>
    </>
  )

}
export default ListCard;