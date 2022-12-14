import { Link } from "react-router-dom";
import {data} from "../data/data"
import Card from "../Cards/card";
import {convertToSlug} from "../utilityFunctions/utils"
function Main({ products }) {
  const p = data.products.filter((product) => (product.category));

  return (
      <main>
        <div className="top-selling mb-5 mt-5">
          <div className="row">
            <h2 className="top-sell-txt mb-5">Top selling</h2>
            { p.map((product) => {
              let slug = convertToSlug(product.title)
              return (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6 col-6 mb-4" key={product.id}>
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
