/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

const CheckoutFrom = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card
    })
    if (error) {
        console.log("Payment Error", error);
      } else {
        console.log("Payment Method", paymentMethod);
      }
  };
  return (
    <from onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe}
        className="btn  btn-outline btn-info hover:shadow-lg hover:shadow-blue-400 mt-4"
      >
        Pay
      </button>
    </from>
  );
};

export default CheckoutFrom;
