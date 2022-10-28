import { Link } from "react-router-dom";

function CategoriesCard({ categories }) {

  //  convertToSlug Function
   function convertToSlug(text) {
    return text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
  };



  return (
    <div className="row mb-4">
      <h2>Browse Categories</h2>
      {categories.map((category) => {
        let slug = convertToSlug(category.title)
        return (
          <div className="col-md-2" key={category.id}>
            <Link to={`/category/${slug}`}><img src={category.image} className="img-thumbnail" alt="..." /></Link>
          </div>
        );
      })}
    </div>
  );
}

export default CategoriesCard;
