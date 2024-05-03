/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React, { useContext } from 'react';
// import { AuthContext } from './../../../../providers/AuthProvider';

import Swal from "sweetalert2";
import useAuth from "../../../../firebase/hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../firebase/hooks/useAxiosSecure";

const SingleGuide = ({guide}) => {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const {name, image, experience, languages, availability, Price,contact ,expertise, _id} = guide;
    const {user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const handleAddToPay = guide => {
        if(user && user.email){
          // send cart to the database
          const tourGuide = {
            guideId: _id,
            email: user.email,
            name,
            image,
            Price
          }
          axiosSecure.post('/carts', tourGuide)
          .then( res => {
            console.log(res.data)
            if(res.data.insertedId){
              Swal.fire({
                title: `${name}, added to Your Booking List`,
                icon: "success",
                showConfirmButton: false,
                timer: 2000
              });
            }
          })
        }
        else{
          Swal.fire({
            title: "You are not logged in",
            text: "Please login first!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log in!"
          }).then((result) => {
            if (result.isConfirmed) {
            // Sent to the login page
            navigate('/login', {state: {from: location}})
            }
          });
        }
    }
    return (
        <div className="card lg:card-side mt-2 border-r-2 border-t-2 transform transition duration-500 hover:scale-105 ">
        <figure className=" lg:w-2/6 lg:h-full ">
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body ">
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