function Cards({products}) {
  return (
    <>
    <div className="card" style={{width: "18rem"}}>
      <img src={products.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{products.title}</h5>
        <p className="card-text">{products.description}</p>
        <div className="d-flex justify-content-between">
        <a  className="btn"><strong>Rs.{products.price}</strong></a>
        <a  className="btn btn-danger">Add to Cart</a>
        </div>
      </div>
    </div>
    </>
  );
}

export default Cards;
