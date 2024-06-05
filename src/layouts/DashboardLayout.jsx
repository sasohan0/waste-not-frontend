import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const { user } = useAuth();

  return (
    <div className="grid grid-cols-12 ">
      <div className=" col-span-2 bg-slate-300 hover:bg-slate-400 min-h-screen p-8">
        <div className="badge badge-ghost px-8 felx flex-wrap w-44">
          {user?.email}
        </div>
        <ul className="sticky top-0 mt-2 pt-5">
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
      <div className="col-span-10 p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
