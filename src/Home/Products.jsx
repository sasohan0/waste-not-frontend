import { useState } from "react";
import Product from "../pages/Product";

// eslint-disable-next-line react/prop-types
const Products = ({ products }) => {
  const APIData = products;
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  console.log("in products:", APIData);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <div className="bg-base-100" id="products">
      <h1 className="my-8 text-5xl text-primary font-bold text-center">
        Listed For Sale
      </h1>

      <div style={{ padding: 20 }}>
        <input
          icon="search"
          placeholder="Search..."
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-7 px-6 justify-center items-center ">
        {searchInput.length > 1
          ? filteredResults?.map((product) => (
              <Product key={product.id} product={product} />
            ))
          : APIData?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default Products;
