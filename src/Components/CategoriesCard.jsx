import { Link } from "react-router-dom";

function CategoriesCard({ categories }) {

  //  convertToSlug Function
   function convertToSlug(text) {
    return text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
  };



  return (
    <div className="categoryContent mb-5 mt-5">
      <div className="categoryHeading mb-5">
      <h2 className="catHeadingText">Browse Categories</h2>
      </div>
      <div className="my-row">
      {categories.map((category) => {
        let slug = convertToSlug(category.title)
        return (
          <div className="col-my" key={category.id}>
            <Link to={`/category/${slug}`}><img src={category.image} className="img-thumbnail-my" alt="..." /></Link>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default CategoriesCard;
