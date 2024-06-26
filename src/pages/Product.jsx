import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Product = ({ product }) => {
  const { _id, title, brand, price, description, image_url, email } = product;
  const { user } = useAuth();
  const currentUserEmail = user?.email;
  return (
    <div className="card w-96 h-auto bg-base-100 shadow-xl">
      <span>
        Added By <div className="badge badge-neutral">{email}</div>
      </span>
      <figure className="bg-base-200  ">
        <img
          className=" hover:scale-105 ease-in duration-500 w-96 h-96 object-contain"
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
            <Link to={`/products/${_id}`}>See details</Link>
          </button>
          {email === currentUserEmail && (
            <button className="btn bg-slate-700 text-white hover:text-black">
              <Link to={`../../dashboard/my-products/edit/${_id}`}>Edit</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
