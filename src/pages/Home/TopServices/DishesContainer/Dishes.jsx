/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Dishes = ({dishes}) => {
    const { title, image, description, price } = dishes;
  return (
    <div className="card   bg-[#EAFBF7] shadow-xl transform transition duration-500 hover:scale-105 ">
      <figure>
        <img className=" h-[280px]" src={image} alt="Tour-image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <p>
            Price start from : $
            <span className=" text-red-400 font-bold">{price}</span>
          </p>
          <a className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
            <Link to="">Book Now</Link>
          </a>
        </div>
      </div>
    </div>
    );
};

export default Dishes;