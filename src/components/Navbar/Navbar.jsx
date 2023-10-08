import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import "animate.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user logged out");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Logged Out",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Something is wrong!\nTry again!",
          icon: "error",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-special text-sm md:text-lg font-bold underline"
              : "text-sm md:text-lg"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/4"
          className={({ isActive }) =>
            isActive
              ? "text-special text-sm md:text-lg font-bold underline"
              : "text-sm md:text-lg"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/5"
          className={({ isActive }) =>
            isActive
              ? "text-special text-sm md:text-lg font-bold underline"
              : "text-sm md:text-lg"
          }
        >
          Career
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar mt-5 md:mt-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2 text-sec-text text-sm font-medium"
          >
            {links}
          </ul>
        </div>
        <a className="normal-case text-lg md:text-3xl font-bold">EventMania</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-5 text-sec-text text-sm font-medium">
          {links}
        </ul>
      </div>
      <div className="navbar-end space-x-3">
        {user ? (
          <img
            className="w-8 md:w-10 rounded-full"
            src={user.photoURL}
            alt="user-pro-pic"
          />
        ) : (
          <img
            className="w-8 md:w-10"
            src={userDefaultPic}
            alt="user-pro-pic"
          />
        )}
        {user ? (
          <Link
            onClick={handleLogOut}
            className="bg-special text-white text-sm font-medium md:text-lg md:font-semibold px-5 py-1 rounded"
          >
            Logout
          </Link>
        ) : (
          <Link
            to="/login"
            className="bg-special text-white text-sm font-medium md:text-lg md:font-semibold px-5 py-1 rounded"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
