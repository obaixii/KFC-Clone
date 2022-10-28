import Header from "../Components/Header";
import CategoriesCard from "../Components/CategoriesCard";
import Footer from "../Components/Footer";
import { data } from "../data/data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "../Cards/card";
function Category() {
  // convertToSlug Function
  function convertToSlug(text) {
    return text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
  }
  const {slug} = useParams()
  const p = data.products.filter((product)=>convertToSlug(product.category)===slug)
  console.log(p)
  return (
    <div>
      <Header />
      <CategoriesCard categories={data.categories} />
      <div className="row">
      { p.map((product) => {
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
      <Footer />
    </div>
  );
}

export default Category;
