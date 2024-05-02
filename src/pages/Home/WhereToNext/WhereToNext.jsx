import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const WhereToNext = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {user ? (
        <div className="  lg:z-10 lg:absolute w-fit lg:-mt-28">
          <div className="  md:flex flex-col md:justify-evenly p-4 rounded-xl">
            <h2 className=" lg:text-5xl text-2xl lg:text-white font-bold">Where To Next, {user?.displayName}?</h2>
            <p className=" lg:text-white lg:text-2xl">Find exclusive Genius rewards in every corner of the world!</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WhereToNext;
