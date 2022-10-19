import Card from "../Cards/card";
function Main({ products }) {
  return (
    <>
      <main>
        <div className="top-selling">
          <div className="row">
            <h2 className="top-sell-txt">Top selling</h2>
            {products.map((product) => {
              return (
                <div className="col-md-3 mb-4" key={product.id}>
                  <Card products={product} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
export default Main;
