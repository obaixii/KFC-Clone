import { Link } from "react-router-dom";
function Cards({products}) {
  return (
    <>
    <div className="card h-100" style={{width: "100%"}}>
      <img src={products.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{products.title}</h5>
        <p className="card-text">{products.description}</p>
        <div className="d-flex justify-content-between">
        <Link  className="btn"><strong>Rs.{products.price}</strong></Link>
        <Link  className="btn btn-danger" to="">Add to Cart</Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default Cards;
