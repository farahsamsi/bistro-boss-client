import { useContext, useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../Providers/AuthProvider";

import loginImg from "../assets/others/authentication2.png";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import GoogleLogin from "../Components/SocialLogin/GoogleLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire("Welcome Back !");
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Menu | Bistro Boss</title>
      </Helmet>
      <div className="hero bg-authBg bg-no-repeat bg-center bg-cover">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 md:w-10/12 mx-auto shadow-2xl my-10 md:my-24">
          <div className="text-center lg:text-left">
            <Link to="/">
              <button className="btn btn-ghost ">Home</button>
            </Link>
            <img src={loginImg} alt="Login image" />
          </div>
          <div className="">
            <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
              <h1 className="text-2xl lg:text-5xl font-extrabold ">Login</h1>
            </div>

            <div className="card w-11/12 mx-auto lg:max-w-screen-md shrink-0  border">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    //   ref={emailRef}
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label
                    //   onClick={handleForgotPassword}
                    className="label"
                  >
                    <p className="label-text-alt link link-hover">
                      Forgot password?
                    </p>
                  </label>
                </div>

                {/* captcha */}
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    onBlur={handleValidateCaptcha}
                    name="captcha"
                    // ref={captchaRef}
                    type="text"
                    placeholder="Type the captcha above"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    disabled={disabled}
                    type="submit"
                    className="btn bg-primary text-white font-bold"
                  >
                    Login
                  </button>
                </div>
              </form>

              <div className="divider"></div>

              <div className="flex flex-col lg:flex-row gap-4 justify-around items-center mb-6">
                <div className="flex flex-col justify-center">
                  <p>Do not have an account ?</p>
                  <Link to="/signUp" className="btn">
                    <button>Sign Up</button>
                  </Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p>Or</p>
                  <GoogleLogin></GoogleLogin>
                  {/* <button
                    //   onClick={googleLoginBtn}
                    className="btn"
                  >
                    Continue with Google
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/color/48/google-logo.png"
                      alt="google-logo"
                    />
                  </button> */}
                </div>

                {/* <button onClick={handleLogOut} className="btn">Log out</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
