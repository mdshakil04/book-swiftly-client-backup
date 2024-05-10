/* eslint-disable no-unused-vars */
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
const stripePromise = loadStripe('')
const Payment = () => {
  return (
    <div>
      <h1 className="text-3xl text-center border-y-4 max-w-xs container py-4 mx-auto">
        Payment
      </h1>
      <div>
        <Elements stripe={stripePromise}>

        </Elements>
      </div>
    </div>
  );
};

export default Payment;
