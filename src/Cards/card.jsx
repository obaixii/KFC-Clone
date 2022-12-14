import { Link } from "react-router-dom";
import "../CSS/card.css"
function Cards({products}) {
  return (
                        <div className="myCard">
                        <div className="myCardInner">
                            <div className="card-img-top">
                                <img src={products.image} alt="..."/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{products.title}</h5>
                                <p className="card-text">{products.description}</p>
                                    <div className="cards-button">
                                        <div className="card-price">
                                            <h5>Rs.{products.price}</h5>
                                        </div>
                                        <div className="card-add-to-button">
                                            <Link to="#" className="btn-plus"><i class="bi bi-plus-lg"></i></Link>
                                            <Link to="#" className="my-btn btn btn-danger">Add to Cart</Link>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
  );
}

export default Cards;
