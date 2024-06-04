import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);

  console.log(userInfo);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="avatar">
          <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              alt=" NO IMG NO IMG NO IMG NO IMG NO IMG "
              src={user?.photoURL || "/public/placeholder.jpg"}
            />
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold">
            {userInfo?.name}
            {user?.emailVerified ? `✅` : `❌`}
          </h1>

          <p className="py-6 text-2xl text-slate-800">{userInfo?.email}</p>
          <p className="text-blue-700 font-bold">
            {user.uid ? user.uid : "ID not found"}
          </p>
          <Link
            to={`/dashboard/profile/edit/${userInfo?._id}`}
            className="btn btn-neutral btn-md"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
