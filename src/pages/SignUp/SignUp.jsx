import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile info updated");
          reset;
          Swal.fire({
            title: "User Updated Successfully!",
            icon: "success",
          });
         navigate('/')
        })
        .catch((error) => console(error));
    });
  };
  //   console.log(watch("example"))
  return (
    // -----------This is React Hook From----------
    <>
      <Helmet>
        <title> Book Swiftly | Sign Up</title>
      </Helmet>
      <div>
        <div style={{backgroundImage: 'url(https://i.ibb.co/wSk1c2x/signup.jpg)'}} className="hero  min-h-screen">
       
          <div className=" hero hero-content ">
            <div className="  w-1/2 ">
              <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-xl">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    //   required
                  />
                  {/* ------Name validation---------- */}
                  {errors.name && (
                    <span className=" text-red-500">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-xl">Photo URL</span>
                  </label>
                  <input
                    {...register("photoURL", { required: true })}
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    //   required
                  />
                  {/* ------photoURL validation---------- */}
                  {errors.photoURL && (
                    <span className=" text-red-500">photo URL is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-xl">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    //   required
                  />
                  {/* --------Email validation-------------- */}
                  {errors.email && (
                    <span className=" text-red-500">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-xl">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    //   required
                  />
                  {/* ---------Password validation--------- */}
                  {errors.password?.type === "required" && (
                    <span className=" text-red-500">Password is required</span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className=" text-red-500">
                      Password must be 8 characters
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className=" text-red-500">
                      Password must have 1 uppercase, 1 lowercase, 1 number and
                      1 Special Character
                    </span>
                  )}
                  {/* ---------Password validation--------- */}
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn  btn-primary hover:shadow-lg hover:shadow-blue-400"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
              <p className=" ml-8 mb-4 text-red-700 font-bold">
                Already Register? <Link to="/login">Go to Login</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
