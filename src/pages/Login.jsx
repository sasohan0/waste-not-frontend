import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/Login-Register/GoogleLogin";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import GithubLogin from "../components/Login-Register/GithubLogin";

const Login = () => {
  const { signIn, user } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSUbmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    await fetch("https://waste-not-backend.onrender.com/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data?.token);
      });
    signIn(email, password);
    //  I previously implemented JWT authenctication while Login. But if the token is once deleted the user cannot log in anymore so I commented it
    // fetch(`https://waste-not-backend.onrender.com/user/${email}`, {
    //   method: "GET",
    //   headers: {
    //     "Content-type": "application/json",
    //     authorization: `Bearer ${token}`,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => email === data.email && signIn(email, password));
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <div className="w-1/2 mx-auto">
      <form onSubmit={handleSUbmit} className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Login to Sell your products</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn bg-red-500 text-white"
                  type="submit"
                  value="Login"
                />
              </div>
              <div>{user?.error?.message}</div>
              <div className="mt-6">
                <GoogleLogin />
              </div>
              <div className="mt-6">
                <GithubLogin />
              </div>
              <div className="mt-6">
                <p>
                  New here?{" "}
                  <Link to="/register" className="text-red-500">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
