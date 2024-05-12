/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SingleGuide from "./SingleGuide";

const TourGide = () => {
  const [guide , setGuide] = useState([]);
  useEffect(()=>{
    fetch('http://https://book-swiftly-server.vercel.app/mainServices')
     .then(res => res.json())
     .then(data => {
      const tourGuide = data.filter(item =>item.category === 'guide')
      setGuide(tourGuide)})
  },[])
  return (
    <div className=" my-8 ">
      <h1 className="text-3xl text-center border-y-4 max-w-xs container py-4 mx-auto">
        Embark on Adventure
      </h1>
      <p className=" text-center mb-4">
        Celebrate Culture, Discover Wonders, with Our Team of Expert Guides!
      </p>
      <div className=" relative flex flex-col justify-center items-center p-4 gap-4">
          {
            guide.map(guide => <SingleGuide
            key={guide.key} guide={guide}
            ></SingleGuide>)
          }
      </div>
    </div>
  );
};

export default TourGide;
