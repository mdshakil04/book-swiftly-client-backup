/* eslint-disable no-unused-vars */
import React from "react";
import { TbBrandBooking, TbCalendar, TbHome } from "react-icons/tb";
import { MdOutlineReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className=" flex">
        {/* Dashboard Sidebar */}
        <div className=" w-64 min-h-screen bg-[#EAFBF7]">
            <ul className=" menu p-4">
                <li className="">
                    <NavLink to='/dashboard/userHome'><span className=" text-xl"><TbHome /></span> User Home</NavLink>
                </li>
                <li className="">
                    <NavLink to='/dashboard/reservation'><span className=" text-xl"><TbCalendar /></span> Reservation</NavLink>
                </li>
                <li className="">
                    <NavLink to='/dashboard/review'><span className=" text-xl"><MdOutlineReviews /></span> Review</NavLink>
                </li>
                <li className="">
                    <NavLink to='/dashboard/cart'><span className=" text-xl"><TbBrandBooking /></span> My Bookings</NavLink>
                </li>
            </ul>
        </div>
        {/* Dashboard Content */}
        <div className=" flex-1">
            <Outlet></Outlet>
        </div>
    </div>
  );
};

export default Dashboard;
