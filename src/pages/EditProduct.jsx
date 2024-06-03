import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditProduct = () => {
  const shoe = useLoaderData();

  const [title, setTitle] = useState(shoe.title);
  const [price, setPrice] = useState(shoe.price);
  const [brand, setBrand] = useState(shoe.brand);
  const [id, setId] = useState(shoe.id);
  const [description, setDescription] = useState(shoe.description);
  const [image_url, setImageURL] = useState(shoe.image_url);

  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { id, title, brand, price, description, image_url };
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/shoes/${shoe._id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then(() => Swal.fire("Saved!", "", "success"));
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved");
      }
    });
  };

  return (
    <div>
      <h1 className="text-5xl text-purple-600 hover:scale-110 ease-in duration-300 font-bold text-center">
        Edit Product
      </h1>

      <div className="my-16">
        <form onSubmit={handleSubmit}>
          <div className="mr-2 flex justify-center items-center">
            <input
              className="bg-purple-100  hover:bg-purple-200   p-4 hover:w-full ease-in duration-300 p-4 w-96 border border border-black rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mr-2 flex justify-center items-center">
            <input
              className="bg-purple-100  hover:bg-purple-200 p-4 hover:w-full ease-in duration-300 p-4 w-96 border border border-black rounded-lg"
              type="text"
              name="brand"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
            />
          </div>
          <div className="mr-2 flex justify-center items-center">
            <input
              className="bg-purple-100  hover:bg-purple-200 p-4 hover:w-full ease-in duration-300 p-4 w-96 border border border-black rounded-lg"
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="mr-2 flex justify-center items-center">
            <input
              className="bg-purple-100  hover:bg-purple-200 p-4 hover:w-full ease-in duration-300 p-4 w-96 border border border-black rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="mr-2 flex justify-center items-center">
            <input
              className="bg-purple-100  hover:bg-purple-200 p-4 hover:w-full ease-in duration-300 p-4 w-96 border border border-black rounded-lg"
              type="text"
              name="image_url"
              placeholder="Image URL"
              value={image_url}
              onChange={(e) => setImageURL(e.target.value)}
              required
            />
          </div>
          <div className="mr-2 flex justify-center items-center">
            <input
              className="bg-purple-100  hover:bg-purple-200 p-4 hover:w-full ease-in duration-300 p-4 w-96 border border border-black rounded-lg"
              type="text"
              name="id"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>

          <div className="modal-action flex justify-center items-center">
            <input
              className="btn hover:text-black ease-in duration-300 w-auto h-auto border bg-purple-500 text-white p-4"
              type="submit"
              value="Edit product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
