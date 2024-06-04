import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Analytics = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("token");
  const currentUserEmail = user?.email;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) =>
        setProducts(
          data.filter((product) => product.email === currentUserEmail)
        )
      );
  }, [user, currentUserEmail]);
  return (
    <div>
      <span className="text-gray-600 text-2xl ">Total Products Added By </span>
      <span className="text-primary text-2xl">
        {user?.name}
        {user?.email}:
      </span>

      <div className="text-6xl text-center mx-auto text-red-700 m-6 p-6">
        {products.length} <small>products</small>
      </div>
      <div className="w-full flex justify-center items-center flex-col">
        <div className="text-green-700 text-3xl mb-6">YOUR RATING</div>
        <div
          className="hover:scale-125 ease-in duration-75 radial-progress bg-green-700 text-primary-content border-4 border-green-500"
          style={{ "--value": products.length * 10 }}
          role="progressbar"
        >
          {products.length * 10}%{" "}
        </div>
      </div>
      {products.length === 0 ? (
        <div className="text-center flex justify-center items-center flex-col mx-auto">
          <h1 className="text-3xl font-bold text-center m-12">
            No Products Found
          </h1>
          <Link className="btn btn-primary" to={"../add-products"}>
            {" "}
            Add Products
          </Link>
        </div>
      ) : (
        <div>0%</div>
      )}
    </div>
  );
};

export default Analytics;
