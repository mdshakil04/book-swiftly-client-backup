/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SingleTransport = ({ transport }) => {
    const {name,image, description, badge, capacity,feature,price   } = transport;
  return (
    <div className="card w-96 bg-base-100 shadow-xl transform transition duration-500 hover:scale-105">
      <figure>
        <img className=" rounded-t-2xl h-[250px]" src={image} alt="Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{badge}</div>
        </h2>
        <p>
         {description}
        </p>
        <p>Capacity:{capacity}</p>
        <p>Feature: {feature}</p>
        <p>Price: ${price}</p>
        <button className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SingleTransport;
