/* eslint-disable no-unused-vars */
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutFrom from "./CheckoutFrom";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_stipe_pk);
const Payment = () => {
  return (
    <div className="">
      <h1 className="text-3xl text-center border-y-4 max-w-xs container py-4 mb-12 mx-auto">
        Payment
      </h1>
      <div>
        <Elements stripe={stripePromise}>
            <CheckoutFrom></CheckoutFrom>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
