import { Link } from "react-router-dom";

function ListCard({ item }) {
  return (
    <>
      <div className='imgCon'></div>
      <p>{item.title}</p>
      <p>{item.price}</p>
      <p>{item.category}</p>
    </>
  )

}
export default ListCard;