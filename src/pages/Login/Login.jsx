/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  // --------------After Log in--------------------------
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // --------------Google sign in--------------
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()
  const handleGoogleSignIn = () =>{
    // console.log("Google Mama is Comming")
    signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      console.log(user)
      Swal.fire({
        title: "Log In Successful!",
        icon: "success",
      });
      // --------Navigation after login----------
      navigate(from, { replace: true });
    })
    .catch(error =>{
      console.log("Error", error.message);
    })
  }
  // -------------Facebook Login--------------------
  const facebookProvider = new FacebookAuthProvider() 
  const handleFacebookSignIn = () =>{
    // console.log("Facebook Mama is Comming")
    signInWithPopup(auth, facebookProvider)
    .then(result => {
      const user = result.user;
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      console.log(user)
      Swal.fire({
        title: "Log In Successful!",
        icon: "success",
      });
      // --------Navigation after login----------
      navigate(from, { replace: true });
    })
    .catch(error =>{
      console.log("Error", error.message);
    })
  }
  // -----------------------------------------
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // -----------------------------------------------
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Log In Successful!",
        icon: "success",
      });
      // --------Navigation after login----------
      navigate(from, { replace: true });
    });
    // ------------------------------------------
  };
  return (
    <>
      <Helmet>
        <title>Book Swiftly | Log In</title>
      </Helmet>
      <div>
        <div className="hero lg:h-[650px]" style={{backgroundImage: 'url(https://i.ibb.co/0DbzCpG/new-login.jpg)'}}>
          <div className="hero-content">
            <div className=" ">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl font-bold">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl font-bold">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6 ">
                  <button className="btn  btn-info hover:shadow-lg hover:shadow-blue-400 text-lg mb-4 text-white font-bold">Log in</button>
                 <div className=" grid md:grid-cols-2 gap-2">
                  <button onClick={handleGoogleSignIn} className="btn btn-success  mt-2 text-lg hover:shadow-lg hover:shadow-green-400"> <FcGoogle />Log in with Google</button>
                  <button onClick={handleFacebookSignIn} className="btn btn-primary  mt-2 text-lg hover:shadow-lg hover:shadow-blue-400"> <FaFacebook />Log in with Facebook</button>
                 </div>
                </div>
              </form>
              <p className=" ml-8 mb-4 text-yellow-400">
                New Here? <Link to="/signUp">Create an Account</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
