/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import useAuth from "../../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCart from "../../../../hooks/useCart";

const SingleTransport = ({ transport }) => {
    const {name,image, description, badge, capacity,feature,price ,_id, category  } = transport;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch]= useCart();
    const handleBook = () => {
        if(user && user.email){
          const tourTransport = {
            transportId : _id,
            email : user.email,
            name,
            image,
            price,
            category
          }
          axiosSecure.post('/carts',tourTransport)
          .then( res => {
            console.log(res.data)
            if(res.data.insertedId){
              Swal.fire({
                title: `${name}, added to Your Booking List`,
                icon: "success",
                showConfirmButton: false,
                timer: 2000
              });
              refetch()
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
        <button onClick={handleBook} className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SingleTransport;
