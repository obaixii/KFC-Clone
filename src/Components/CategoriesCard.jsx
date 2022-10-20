function CategoriesCard({ categories }) {
  return (
    <div className="row mb-4">
      <h2>Browse Categories</h2>
      {categories.map((category) => {
        return (
          <div className="col-md-2" key={category.id}>
            <img src={category.image} class="img-thumbnail" alt="..." />
          </div>
        );
      })}
    </div>
  );
}

export default CategoriesCard;
