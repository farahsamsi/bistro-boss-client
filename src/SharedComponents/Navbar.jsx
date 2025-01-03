import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sign Out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logout()
          .then(() => {
            Swal.fire({
              title: "Signed Out!",
              text: "You have been signed out.",
              icon: "success",
            });
            console.log("log out successful");
          })
          .catch((err) => console.log(err.message));
      }
    });
  };
  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order Food</NavLink>
      </li>

      {user ? (
        <>
          <li>
            <button onClick={handleLogout} className="btn btn-ghost">
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar max-w-7xl bg-black  lg:text-white bg-opacity-30 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-white">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 items-center">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn text-black">{user?.displayName}</button>
      </div>
    </div>
  );
};

export default Navbar;
