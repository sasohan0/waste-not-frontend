import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();
  const { title, brand, price, description, image_url } = shoe;
  return (
    <div className="flex justify-center items-center mt-8 mb-8">
      <div className="card w-96 h-auto bg-base-100 shadow-xl">
        <figure className="bg-base-200  ">
          <img className=" scale-150 " src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-purple-500">{title}</h2>
          <h3 className="text-xl font-semibold">{brand}</h3>
          <h3 className="text-xl font-semibold">${price}</h3>
          <p className="w-full ">{description}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-purple-700 text-white hover:text-black">
              <Link to={`/`}>Back to Products</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
