/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const SingleGuide = ({guide}) => {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const {name, image, experience, languages, availability, Price,contact ,expertise} = guide;
    const handleAddToPay = guide => {
      console.log(guide)
    }
    return (
        <div className="card lg:card-side mt-2 border-r-2 border-t-2 transform transition duration-500 hover:scale-105 ">
        <figure className=" lg:w-2/6 lg:h-full ">
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-3xl">Guide Profile</h2>
          <h2 className="text-3xl">Name: {name}</h2>
          <p>
            <span className=" underline font-bold">Experience: </span>{experience}
          </p>
          <p>
            <span className=" underline font-bold">Languages: </span>{languages}
          </p>
          <p>
            <span className=" underline font-bold">Expertise: </span>{expertise}
          </p>
          <p>
            <span className=" underline font-bold">Availability: </span> {availability}
          </p>
          <p>
            <span className=" underline font-bold">Contact: </span>{contact}
          </p>
          <p><span className=' underline font-bold'>Price :</span> $<span className=' text-red-600'>{Price}</span> </p>
          <button onClick={() => handleAddToPay(guide)} className=" btn lg:w-1/6 btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">Explore Tours</button>
        </div>
      </div>
    );
};

export default SingleGuide;