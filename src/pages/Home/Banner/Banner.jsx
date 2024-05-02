/* eslint-disable no-unused-vars */
import React from "react";
import { Parallax } from "react-parallax";
import bannerImg from "../../../assets/Images/banner.jpg";

const Banner = () => {
  return (
    <div>
      <Parallax className="  pl-24 " bgImage={bannerImg}>
        <div className="hero-content lg:my-36 md:-ml-64 -ml-32 text-center rounded-3xl">
          <div className="  bg-[#EAFBF7] lg:p-12 shadow-lg  rounded-3xl">
            <h1 className=" lg:text-3xl md:text-2xl text-xl p-4 font-bold ">
              Unlock Unforgettable Experiences,<br></br> Discover Local Wonders,
              <br></br> Create Lifelong Memories
            </h1>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Banner;
