import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    Swal.fire({
      title: "Do you really want to logout?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        logout();
        Swal.fire("Logged Out!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Still Logged in");
      }
    });
  };

  return (
    <div
      className="navbar  text-black md:text-white"
      style={{
        backgroundImage: "url(banner.png)",
      }}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/blogs"}>Blogs</Link>
            </li>
            <li>
              <Link to={"/carousel"}>Examples</Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/register"}>Register</Link>
                </li>
              </>
            )}
            {user && (
              <li>
                <Link to={"/dashboard/home/"}>Dashboard</Link>
              </li>
            )}
            {user && (
              <li>
                <button
                  onClick={handleLogout}
                  className="btn bg-red-500 text-white"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-xl flex items-center">
          <div className="w-12">
            <img src="/waste_not.png" alt="" />
          </div>{" "}
          Waste Not
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/blogs"}>Blogs</Link>
          </li>
          <li>
            <Link to={"/carousel"}>Examples</Link>
          </li>
          {!user && (
            <>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/register"}>Register</Link>
              </li>
            </>
          )}
          {user && (
            <li>
              <Link to={"/dashboard/home"}>Dashboard</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        {user && (
          <button
            onClick={handleLogout}
            className="btn bg-red-500 text-white hidden lg:block"
          >
            Logout
          </button>
        )}
        <div className="avatar">
          <Link className="w-12 " to={user ? "/dashboard/home" : "/login"}>
            <div className="rounded-full">
              <img
                className="rounded-full  border-slate-500 border-4"
                src={user?.photoURL || "placeholder.jpg"}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
