import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const GoogleLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const googleLoginBtn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result?.user?.email,
        name: result?.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <button onClick={googleLoginBtn} className="btn">
      Continue with Google
      <img
        width="48"
        height="48"
        src="https://img.icons8.com/color/48/google-logo.png"
        alt="google-logo"
      />
    </button>
  );
};

export default GoogleLogin;
