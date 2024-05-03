/* eslint-disable no-unused-vars */
import React from "react";
import { TbBrandBooking, TbCalendar, TbHome, TbMenu, TbMenu2 } from "react-icons/tb";
import { MdOutlineReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineTour } from "react-icons/md";
import { MdEmojiTransportation } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className=" flex">
        {/* Dashboard Sidebar */}
        <div className=" w-64 min-h-screen bg-[#EAFBF7]">
            <ul className=" menu p-4">
                <li className="">
                    <NavLink to='/dashboard/reservation'><span className=" text-xl"><TbCalendar /></span> Reservation</NavLink>
                </li>
                <li className="">
                    <NavLink to='/dashboard/review'><span className=" text-xl"><MdOutlineReviews /></span> Review</NavLink>
                </li>
                <li className="">
                    <NavLink to='/dashboard/cart'><span className=" text-xl"><TbBrandBooking /></span> My Bookings</NavLink>
                </li>
                <div className="divider"></div> 
                <li className="">
                    <NavLink to='/'><span className=" text-xl"><TbHome /></span>Home</NavLink>
                </li>
                <li className="">
                    <NavLink to='/service'><span className=" text-xl"><TbMenu2 /></span>Adventures</NavLink>
                </li>
                <li className="">
                    <NavLink to='/tourGides'><span className=" text-xl"><MdOutlineTour /></span>Tour Guide</NavLink>
                </li>
                <li className="">
                    <NavLink to='/transports'><span className=" text-xl"><MdEmojiTransportation /></span>Transportation</NavLink>
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
