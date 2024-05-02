/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const TopServices = () => {
  // const { name, image, description, price } = service;
  return (
    <div className=" my-8">
      <Helmet>
        <title> Book Swiftly | Adventures</title>
      </Helmet>
      <h1 className="text-3xl text-center border-y-4 max-w-xs container py-4 px-4 mx-auto">
        Chose Adventure
      </h1>
      <p className=" text-center mb-4">
        Enjoy Local peoples daily life and foods.
      </p>
      <div className=" lg:flex  gap-4  relative">
        <div className="card lg:w-96  bg-[#EAFBF7] shadow-xl transform transition duration-500 hover:scale-105 ">
          <figure>
            <img
              src="https://i.ibb.co/6byHg9B/shruti-singh-zk1-KY3-GQEZA-unsplash.jpg"
              alt="Tour-image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Discover Local Food</h2>
            <p>
              Explore culinary experiences such as cooking classes, food tours,
              and dining experiences hosted by local chefs or food enthusiasts.
            </p>
            <div className="card-actions justify-end">
              <p>
                Price start from : $
                <span className=" text-red-400 font-bold">150</span>
              </p>
              <a className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
                <Link to="/foods">See Details</Link>
              </a>
            </div>
          </div>
        </div>
        <div className="card lg:w-96  bg-[#EAFBF7] shadow-xl transform transition duration-500 hover:scale-105 ">
          <figure>
            <img
              src="https://i.ibb.co/42Lj0kg/girl-embroidered-dress-is-standing-yard-looking-into-sky.jpg"
              alt="Tour-image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Stay With Villagers</h2>
            <p>
            Immerse yourself in the local culture by staying with villagers in accommodations such as homestays, guesthouses, or eco-lodges.
            </p>
            <div className="card-actions justify-end">
              <p>
                Price start from : $
                <span className=" text-red-400 font-bold">250</span>
              </p>
              <a className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
                <Link to="/stay">See Details</Link>
              </a>
            </div>
          </div>
        </div>
        <div className="card lg:w-96  bg-[#EAFBF7] shadow-xl transform transition duration-500 hover:scale-105 ">
          <figure>
            <img
              src="https://i.ibb.co/Bc82FZw/medium-shot-couple-hiking-together.jpg"
              alt="Tour-image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Enjoy Local Festivals</h2>
            <p>
            Experience the vibrancy of local festivals, cultural events, and celebrations with music performances, traditional dances, and cultural activities.
            </p>
            <div className="card-actions justify-end">
              <p>
                Price start from : $
                <span className=" text-red-400 font-bold">150</span>
              </p>
              <a className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
                <Link to="/festival">See Details</Link>
              </a>
            </div>
          </div>
        </div>
        <div className="card lg:w-96  bg-[#EAFBF7] shadow-xl transform transition duration-500 hover:scale-105 ">
          <figure>
            <img
              src="https://i.ibb.co/X8zktds/rani-george-n-XOgb54-BMB4-unsplash.jpg"
              alt="Tour-image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Learn Local Dishes</h2>
            <p>
            Learn how to prepare local dishes and traditional recipes through cooking classes, culinary workshops, and hands-on experiences with local cooks.
            </p>
            <div className="card-actions justify-end">
              <p>
                Price start from : $
                <span className=" text-red-400 font-bold">50</span>
              </p>
              <a className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
                <Link to="/dishes">See Details</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopServices;
