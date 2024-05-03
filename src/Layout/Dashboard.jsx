/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import {
  TbBrandBooking,
  TbCalendar,
  TbHome,
  TbMenu,
  TbMenu2,
} from "react-icons/tb";
import { MdOutlineReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineTour } from "react-icons/md";
import { MdEmojiTransportation } from "react-icons/md";
import useCart from "../hooks/useCart";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
  const [cart] = useCart();
  const { user } = useContext(AuthContext);
  return (
    <div className=" flex lg:gap-24">
      {/* Dashboard Sidebar */}
      <div className=" lg:w-64 min-h-screen bg-[#EAFBF7]">
        <ul className=" menu p-4">
          {user ? (
            <div>
              <h1 className="text-3xl text-center border-y-4 max-w-xs container py-4 mx-auto">
                {user.displayName}'s<br/>Dashboard
              </h1>
            </div>
          ) : null}
          <li className="">
            <NavLink to="/dashboard/reservation">
              <span className=" text-xl">
                <TbCalendar />
              </span>{" "}
              Reservation
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/dashboard/review">
              <span className=" text-xl">
                <MdOutlineReviews />
              </span>{" "}
              Review
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/dashboard/cart">
              <span className=" text-xl">
                <TbBrandBooking />
              </span>{" "}
              My Bookings( {cart.length} )
            </NavLink>
          </li>
          <div className="divider"></div>
          <li className="">
            <NavLink to="/">
              <span className=" text-xl">
                <TbHome />
              </span>
              Home
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/service">
              <span className=" text-xl">
                <TbMenu2 />
              </span>
              Adventures
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/tourGides">
              <span className=" text-xl">
                <MdOutlineTour />
              </span>
              Tour Guide
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/transports">
              <span className=" text-xl">
                <MdEmojiTransportation />
              </span>
              Transportation
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard Content */}
      <div className=" flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
