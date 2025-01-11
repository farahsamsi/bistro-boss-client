import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import loginImg from "../assets/others/authentication2.png";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(data.name, data.photo)
          .then(() => {
            console.log("User profile info updated");
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Welcome to Bistro Boss !",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <Helmet>
        <title>Sign Up | Bistro Boss</title>
      </Helmet>
      <div className="hero  bg-authBg bg-no-repeat bg-center bg-cover">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 md:w-10/12 shadow-2xl my-10 md:my-24 mx-auto">
          <div className="text-center lg:text-left">
            <Link to="/">
              <button className="btn btn-ghost ">Home</button>
            </Link>
            <img src={loginImg} alt="" />
          </div>

          <div className="">
            <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
              <h1 className="text-2xl lg:text-5xl font-extrabold ">
                Register Now
              </h1>
            </div>

            <div className="card bg-base-100 w-11/12 mx-auto lg:max-w-screen-md shrink-0 shadow-2xl border relative">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered"
                    //   required
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered"
                    required
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    name="photo"
                    {...register("photo")}
                    type="text"
                    placeholder="Enter your display photo URL"
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
                    {...register("password")}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* {error && <p className="text-red-600">{error}</p>} */}
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn bg-primary text-white font-bold"
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <div className="divider"></div>

              <div className="flex flex-col lg:flex-row gap-4 justify-around items-center mb-6">
                <div className="flex flex-col justify-center">
                  <p>Already have an account ?</p>
                  <Link to="/login" className="btn">
                    <button>Login</button>
                  </Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p>Or</p>
                  <button
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
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
