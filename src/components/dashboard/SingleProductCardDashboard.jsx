/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const SingleProductCardDashboard = ({ product, onDelete }) => {
  const token = localStorage.getItem("token");

  const { _id, title, brand, price, description, image_url, email } = product;

  const handleDelete = async () => {
    Swal.fire({
      title: "Do you want to delete the product?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://waste-not-backend.onrender.com/products/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then(() => {
            onDelete(_id);
          });
        Swal.fire("Deleted successfully", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Not deleted");
      }
    });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <span>
        Added By: <div className="badge badge-neutral">{email}</div>
      </span>
      <figure>
        <img src={image_url} alt="products" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-indigo-500 text-white">
            <Link to={`/products/${_id}`}>See details</Link>
          </button>
          <button className="btn bg-green-600 text-white">
            <Link to={`edit/${_id}`}>Edit</Link>
          </button>
          <button onClick={handleDelete} className="btn bg-red-500 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardDashboard;
