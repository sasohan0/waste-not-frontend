import { useLoaderData } from "react-router-dom";
import Accordian from "../Home/Accordian";
import Banner from "../Home/Banner";
import Products from "../Home/Products";

const Home = () => {
  const products = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Products products={products}></Products>
      <Accordian></Accordian>
    </div>
  );
};

export default Home;
