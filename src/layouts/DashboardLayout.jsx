import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-wrap w-full justify-center items-center md:items-start md:min-h-screen md:grid md:grid-cols-12 ">
      <div className="flex justify-center items-center md:items-start flex-col  md:grid md:col-span-2 bg-slate-300 hover:bg-slate-400 md:min-h-full p-8">
        <ul className="flex justify-center items-center flex-wrap md:grid md:sticky top-0 mt-0 pt-5">
          <li className="border bg-slate-300 hover:bg-slate-200 border-black rounded-lg p-4 text w-full">
            <Link to={"home"}>Dashboard</Link>
          </li>
          <li className="border  bg-slate-300 hover:bg-slate-200 border-black rounded-lg p-4 mt-1 text w-full">
            <Link to={"my-products"}>My Products</Link>
          </li>
          <li className="border  bg-slate-300 hover:bg-slate-200 border-black rounded-lg p-4 mt-1 text w-full">
            <Link to={"add-products"}>Add Product</Link>
          </li>
          <li className="border  bg-slate-300 hover:bg-slate-200 border-black rounded-lg p-4 mt-1 text w-full">
            <Link to={"analytics"}>Analytics</Link>
          </li>
          <li className="border  bg-slate-300 hover:bg-slate-200 border-black rounded-lg p-4 mt-1 text w-full">
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-10 p-20 mb-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
