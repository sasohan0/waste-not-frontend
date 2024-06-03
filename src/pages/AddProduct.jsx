import Swal from "sweetalert2";

const AddProducts = () => {
  const token = localStorage.getItem("token");
  const handleSubmit = async (e) => {
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
      title: "Do you want to add the product?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:5000/shoes", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Product Added!", "", "success");
            form.reset();
          });
      } else if (result.isDenied) {
        Swal.fire("Product was not added", "", "info");
      }
    });
  };

  return (
    <div className="">
      <h1 className="text-5xl font-bold text-purple-600 text-center hover:animate-pulse">
        Add a Product
      </h1>

      <div className="my-16">
        <form onSubmit={handleSubmit}>
          <div className="mt-2 flex justify-center items-center">
            <input
              className="bg-purple-100 hover:bg-purple-200 hover:w-full ease-in duration-300 p-4 w-96 border border-black rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
              required
            />
          </div>
          <div className="mt-2 flex justify-center items-center">
            <input
              className="bg-purple-100  hover:bg-purple-200 hover:w-full ease-in duration-300 p-4 w-96 border border-black rounded-lg"
              type="text"
              name="brand"
              placeholder="Brand"
              required
            />
          </div>
          <div className="mt-2 flex justify-center items-center">
            <input
              className="bg-purple-100  hover:bg-purple-200 hover:w-full ease-in duration-300 p-4 w-96 border border-black rounded-lg"
              type="number"
              name="price"
              placeholder="Price"
              required
            />
          </div>
          <div className="mt-2 flex justify-center items-center">
            <input
              className="bg-purple-100 hover:bg-purple-200 hover:w-full ease-in duration-300 p-4 w-96 border border-black rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
              required
            />
          </div>
          <div className="mt-2 flex justify-center items-center">
            <input
              className="bg-purple-100 hover:bg-purple-200 hover:w-full ease-in duration-300 p-4 w-96 border border-black rounded-lg"
              type="text"
              name="image_url"
              placeholder="Image URL"
              required
            />
          </div>
          <div className="mt-2 flex justify-center items-center">
            <input
              className="bg-purple-100 hover:bg-purple-200 hover:w-full ease-in duration-300 p-4 w-96 border border-black rounded-lg"
              type="text"
              name="id"
              placeholder="ID"
              required
            />
          </div>
          <div className="mt-2 flex justify-center items-center ">
            <input
              className="btn mt-4 w-full bg-purple-500 text-white p-4 hover:text-black"
              type="submit"
              value="Add product"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
