/* eslint-disable no-unused-vars */
import React from "react";
import img from "../../../assets/Images/Transportation/Transport.jpg";
import { Link } from "react-router-dom";
const MainServices = () => {
  return (
    <div className=" my-8">
      <h1 className="text-3xl text-center border-y-4 max-w-xs container py-4 mx-auto">
        Our Top Services
      </h1>
      <p className=" text-center mb-4">
        Enjoy Local peoples daily life and foods.
      </p>
      <div className=" lg:grid lg:grid-cols-3 gap-4 p-4  relative">
        <div className="card shadow-xl transform transition duration-500 hover:scale-105 ">
          <figure>
            <img src="https://i.ibb.co/pjfqnHH/adventure.jpg" alt="Tour-image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Book An Adventure</h2>
            <p>Embrace the call of the wild with our adrenaline-pumping adventures. From soaring peaks to untamed wilderness, our experiences redefine thrill-seeking. Strap in for heart-pounding escapades that push boundaries and ignite the spirit of exploration. Let's turn your wanderlust into an epic journey of discovery.</p>
            <div className="card-actions ">
              <a className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
                <Link to="/locations">See Details</Link>
              </a>
            </div>
          </div>
        </div>
        <div className="card   shadow-xl transform transition duration-500 hover:scale-105 ">
          <figure>
            <img src="https://i.ibb.co/hYsJy49/gide.jpg" alt="Tour-image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Tour Gide</h2>
            <p>Unlock the essence of every destination with our seasoned tour guides. Let them whisk you away on immersive journeys through history, culture, and hidden gems, crafting unforgettable experiences at every turn. Dive deep into the heart of each locale, where stories come to life and memories are etched in time.</p>
            <div className="card-actions ">
              <a className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
                <Link to="/tourGides">See Details</Link>
              </a>
            </div>
          </div>
        </div>
        <div className="card   shadow-xl transform transition duration-500 hover:scale-105 ">
          <figure>
            <img src={img} alt="Tour-image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Transportation</h2>
            <p>Seamless journeys begin here. Our transportation service offers more than just getting from A to B; it's a gateway to convenience and comfort. With a fleet of modern vehicles and professional drivers, embark on your adventures worry-free. Whether it's a smooth airport transfer or a scenic road trip, we are your trusted travel companion.</p>
            <div className="card-actions ">
              <a className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
                <Link to="/transports">See Details</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainServices;
