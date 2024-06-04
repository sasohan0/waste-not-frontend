import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12 ">
      <div className=" col-span-2 bg-slate-950 hover:bg-slate-900 min-h-screen p-8">
        <ul className="sticky top-0 mt-2 pt-5">
          <li className="border bg-slate-300 hover:bg-slate-200 border-black rounded-lg p-4 text w-full">
            <Link to={"home"}>Dashboard</Link>
          </li>
          <li className="border  bg-slate-300 hover:bg-slate-200 border-black rounded-lg p-4 mt-1 text w-full">
            <Link to={"all-products"}>All Products</Link>
          </li>
          <li className="border  bg-slate-300 hover:bg-slate-200 border-black rounded-lg p-4 mt-1 text w-full">
            <Link to={"add-products"}>Add Product</Link>
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
