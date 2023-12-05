import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../assets/user.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import "animate.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [themeToggle, setThemeToggle] = useState(false);

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

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
          to="/gallery"
          className={({ isActive }) =>
            isActive
              ? "text-special text-sm md:text-lg font-bold underline"
              : "text-sm md:text-lg"
          }
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-special text-sm md:text-lg font-bold underline"
              : "text-sm md:text-lg"
          }
        >
          About
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-special text-sm md:text-lg font-bold underline"
                  : "text-sm md:text-lg"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-special text-sm md:text-lg font-bold underline"
                  : "text-sm md:text-lg"
              }
            >
              Profile
            </NavLink>
          </li>
        </>
      )}
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
        <a
          className="text-special normal-case text-lg md:text-3xl font-bold"
          data-aos="zoom-in-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-out-sine"
          data-aos-duration="1000"
        >
          EventMania
        </a>
      </div>
      <div
        className="navbar-center hidden lg:flex"
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-easing="ease-in-out-sine"
        data-aos-duration="1000"
      >
        <ul className="menu menu-horizontal space-x-5 text-sec-text text-sm font-medium">
          {links}
        </ul>
      </div>
      <div
        className="navbar-end space-x-2 md:space-x-3"
        data-aos="zoom-in-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-out-sine"
        data-aos-duration="1000"
      >
        {user && user?.photoURL ? (
          <img
            className="text-[10px] w-8 md:w-10 rounded-full"
            src={user.photoURL}
            alt="user-img"
          />
        ) : (
          <img
            className="text-[10px] w-8 md:w-10 rounded-full"
            src={userDefaultPic}
            alt="user-img"
          />
        )}
        {user ? (
          <Link
            onClick={handleLogOut}
            className="bg-special text-white text-sm font-medium md:text-lg md:font-semibold px-3 md:px-5 py-1 rounded"
          >
            Logout
          </Link>
        ) : (
          <Link
            to="/login"
            className="bg-special text-white text-sm font-medium md:text-lg md:font-semibold px-3 md:px-5 py-1 rounded"
          >
            Login
          </Link>
        )}
        {themeToggle ? (
          <button
          className="bg-special text-white px-1.5 py-1.5 md:px-2.5 md:py-2.5 rounded-full"
            onClick={() => {
              setThemeToggle(!themeToggle);
            }}
            data-set-theme=""
            data-act-class="ACTIVECLASS"
          >
            <BsSun className=""></BsSun>
          </button>
        ) : (
          <button
          className="bg-special text-white px-1.5 py-1.5 md:px-2.5 md:py-2.5 rounded-full"
            onClick={() => {
              setThemeToggle(!themeToggle);
            }}
            data-set-theme="dark"
            data-act-class="ACTIVECLASS"
          >
            <BsMoon className=""></BsMoon>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
