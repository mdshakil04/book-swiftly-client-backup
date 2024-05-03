/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCart from "../../../../hooks/useCart";
import Swal from "sweetalert2";

const Festival = ({ festival }) => {
  const { name, image, description, price, _id, category  } = festival;
  const {user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [,refetch] = useCart();

  const handleBook = () => {
    if (user && user.email) {
      // send cart to the database
      const localFestivals = {
        dishesId: _id,
        email: user.email,
        name,
        image,
        price,
        category,
      };
      axiosSecure.post("/carts", localFestivals).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: `${name}, added to Your Booking List`,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          // Refetch cart to update the cart item count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login first!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Log in!",
      }).then((result) => {
        if (result.isConfirmed) {
          // Sent to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card   bg-[#EAFBF7] shadow-xl transform transition duration-500 hover:scale-105 ">
      <figure>
        <img className=" h-[280px]" src={image} alt="Tour-image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <p>
            Price start from : $
            <span className=" text-red-400 font-bold">{price}</span>
          </p>
          <button onClick={handleBook} className="btn btn-outline btn-info hover:shadow-lg hover:shadow-blue-400">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Festival;
