import Product from "../pages/Product";

// eslint-disable-next-line react/prop-types
const Products = ({ products }) => {
  return (
    <div className="bg-base-100" id="products">
      <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>

      <div className="flex flex-wrap gap-7 px-6 justify-center items-center ">
        {
          // eslint-disable-next-line react/prop-types
          products.map((shoe) => (
            <Product key={shoe.id} shoe={shoe} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;
