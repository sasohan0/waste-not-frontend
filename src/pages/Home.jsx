import { useLoaderData } from "react-router-dom";
import Accordian from "../Home/Accordian";
import Banner from "../Home/Banner";
import Products from "../Home/Products";
import OurLocation from "../Home/OurLocation";
import SaleCountdown from "../Home/SaleCountdown";
import WhatWeDo from "../Home/WhatWeDo";

const Home = () => {
  const products = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Products products={products}></Products>
      <SaleCountdown></SaleCountdown>
      <OurLocation></OurLocation>
      <WhatWeDo></WhatWeDo>
      <Accordian></Accordian>
    </div>
  );
};

export default Home;
