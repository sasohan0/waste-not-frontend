import { useEffect, useState } from "react";
import SingleProductCardDashboard from "../components/dashboard/SingleProductCardDashboard";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const UserProducts = () => {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();
  console.log("object", products);
  const currentUserEmail = user?.email;
  console.log("object", currentUserEmail);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) =>
        setProducts(
          data.filter((product) => product.email === currentUserEmail)
        )
      );
  }, [user]);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">All Produts</h1>
      <div className="my-16 flex flex-wrap gap-4">
        {products.map((product) => (
          <SingleProductCardDashboard
            key={product._id}
            product={product}
            onDelete={handleDeleteProduct}
          />
        ))}

        {products.length === 0 && (
          <div className="text-center flex justify-center items-center flex-col mx-auto">
            <h1 className="text-3xl font-bold text-center m-12">
              No Products Found
            </h1>
            <Link className="btn btn-primary" to={"../add-products"}>
              {" "}
              Add Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProducts;
