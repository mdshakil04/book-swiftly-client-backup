/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import logo from "../../../assets/Images/logo/logo.png";
import { TbBrandBooking } from "react-icons/tb";
import useCart from "../../../hooks/useCart";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/mainServices">Services</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/signUp">Sign Up</Link>
      </li>
    </>
  );
  return (
    <div className="navbar  container border-b-2 bg-[#EAFBF7] ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="group menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box  text-black font-semibold"
          >
            {navLinks}
          </ul>
        </div>
        <div className=" flex items-center">
          <img className="md:w-16 w-12 rounded-full" src={logo} alt="" />
          <a className="btn btn-ghost text-xl">
            <Link to="/">Book Swiftly</Link>
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 group relative w-max">
          {navLinks}
          <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/dashboard/cart">
          <button className="btn btn-outline btn-primary lg:mr-4">
            My Bookings
          </button>
        </Link>
        {user ? (
          <>
            <div className=" avatar">
              <div className="md:w-16 w-12 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
            <details className=" flex items-center gap-2 dropdown flex-none">
              <summary className=" btn">
                <span className=" font-bold md:text-lg ">
                  {user?.displayName}
                </span>
              </summary>
              <div className="  relative z-10 ">
                <ul className="  menu menu-horizontal px-1  absolute">
                  <li className="">
                    <button
                      onClick={handleLogOut}
                      className="btn btn-warning  text-white"
                    >
                      LogOut
                    </button>
                  </li>
                </ul>
              </div>
            </details>
          </>
        ) : (
          <>
            <li className=" btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
              <Link to="/login">Login Now</Link>
            </li>
          </>
        )}
      </div>
    </div>
  );
};
{
  /* bg-[#009EE7] */
}
export default Navbar;
