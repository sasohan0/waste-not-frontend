import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, title, brand, price, description, image_url } = product;
  return (
    <div className="card w-96 h-auto bg-base-100 shadow-xl">
      <figure className="bg-base-200  ">
        <img
          className=" hover:scale-150 ease-in duration-500"
          src={image_url}
          alt="products"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-slate-500">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">${price}</h3>
        <p className="w-full h-20">
          {description?.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn bg-slate-700 text-white hover:text-black">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
