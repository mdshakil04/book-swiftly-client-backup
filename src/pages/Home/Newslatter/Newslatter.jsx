/* eslint-disable no-unused-vars */
import React from "react";
import newsletterImg from "../../../assets/Images/Festival/newsletter.png";
const Newslatter = () => {
  return (
    <div className=" lg:grid lg:grid-cols-2 lg:bg-[#EAFBF7] my-8 rounded-tl-full rounded-br-full p-8">
      <div className=" text-center flex flex-col justify-center items-center p-8 gap-2">
        <h2 className="md:text-4xl text-3xl  font-bold">
          Join Our Newsletter
        </h2>
        <p className=" font-sans">
          Read and share new perspectives on just about any topic.<br></br>{" "}
          Everyone’s welcome.
        </p>
        <ol className=" ">
          <li className=" font-bold text-red-400">Get More Discount</li>
          <li className=" font-bold text-red-400">G-et Premium Magazines</li>
        </ol>
        <div>
          <input
            className=" py-4 px-12 rounded-lg "
            placeholder="Enter Your Email"
            type="text"
          />
          <input type="submit" value="Send" className="btn btn-outline -ml-16 btn-info hover:shadow-lg hover:shadow-blue-400 " />
        </div>
      </div>
      <div>
        <img src={newsletterImg} alt="img" />
      </div>
    </div>
  );
};

export default Newslatter;
