import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
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
            {user.displayName ? user.displayName : "Anonymous User"}
            {user.emailVerified ? `✅` : `❌`}
          </h1>

          <p className="py-6 text-2xl text-purple-800">{user?.email}</p>
          <p className="text-blue-700 font-bold">
            {user.uid ? user.uid : "ID not found"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
