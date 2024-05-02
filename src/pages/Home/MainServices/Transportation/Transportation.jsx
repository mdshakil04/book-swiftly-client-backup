/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SingleTransport from "./SingleTransport";
const Transportation = () => {
  const [transport , setTransport] = useState([]);
  useEffect(()=>{
    fetch('mainServices.json')
     .then(res => res.json())
     .then(data => {
      const transports = data.filter(item => item.category === 'transport')
      setTransport(transports)})
  },[])
  return (
    <div className=" my-8">
      <h1 className="text-3xl text-center border-y-4 max-w-xs container py-4 mx-auto">
        Our Transport Services
      </h1>
      <p className=" text-center mb-4">
        Reliable, Comfortable, and Convenient Travel Solutions for Your
        Adventure!
      </p>
      <div className=" relative md:grid lg:grid-cols-4 md:grid-cols-2 gap-8">
      {
            transport.map(transport => <SingleTransport 
            key={transport.key}
            transport= {transport}
            ></SingleTransport>)
          }
      </div>
    </div>
  );
};

export default Transportation;
