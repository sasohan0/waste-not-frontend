import { FaGithub } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const GithubLogin = () => {
  const { githubLogin } = useAuth();

  const handleGithubSignIn = () => {
    githubLogin().then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName,
        };
        fetch("https://waste-not-backend.onrender.com/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data?.token);
          });
      }
    });
  };

  return (
    <button onClick={handleGithubSignIn} className="btn w-full">
      <div className="flex items-center gap-2">
        <FaGithub size={24} />
        <p>Github</p>
      </div>
    </button>
  );
};

export default GithubLogin;
