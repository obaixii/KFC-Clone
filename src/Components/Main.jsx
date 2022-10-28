import { Link } from "react-router-dom";
import {data} from "../data/data"
import Card from "../Cards/card";
function Main({ products }) {
  // const p = data.products.filter((product) => (product.category));
  
  function convertToSlug(text) {
    return  text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  }
  return (
      <main>
        <div className="top-selling">
          <div className="row">
            <h2 className="top-sell-txt">Top selling</h2>
            { products.map((product) => {
              let slug = convertToSlug(product.title)
              return (
                <div className="col-sm-6 col-md-6 col-lg-3 mb-4" key={product.id}>
                  <Link to={`/product/${slug}`}>
                  <Card products={product} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </main>
  );
}
export default Main;
