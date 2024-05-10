// import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdFreeCancellation } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  //   const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();
  // Delete cart data
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          // console.log(res)
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Canceled!",
              text: "Your booking has been canceled.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="  p-4 rounded-xl">
        <div className=" my-12 grid grid-cols-1 lg:flex justify-evenly  p-2 border ">
          <h2 className="md:text-4xl">Total Bookings: {cart.length} </h2>
          <h2 className="md:text-4xl">Total Price: ${totalPrice} </h2>
          <Link
            to="/dashboard/payment"
            className="btn lg:w-1/6 btn-outline btn-info hover:shadow-lg hover:shadow-blue-400"
          >
            Pay Now
          </Link>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead className=" bg-[#EAFBF7] rounded-xl">
                <tr>
                  <th>
                    <span className=" font-bold lg:text-xl">Image</span>
                  </th>
                  <th>
                    <span className=" font-bold lg:text-xl">Name</span>
                  </th>
                  <th>
                    <span className=" font-bold lg:text-xl">Category</span>
                  </th>
                  <th>
                    <span className=" font-bold lg:text-xl">Price</span>
                  </th>
                  <th>
                    <span className=" font-bold lg:text-xl">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask rounded-full w-20 h-20 ">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="font-bold lg:text-2xl">{item.name}</div>
                    </td>
                    <td>
                      <span className=" text-lg capitalize">
                        {item.category}
                      </span>
                    </td>
                    <td>
                      <span className=" font-bold text-lg">${item.price}</span>
                    </td>
                    <th>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-error btn-outline"
                      >
                        {" "}
                        <span className=" text-xl ">
                          <MdFreeCancellation />
                        </span>
                        Cancel Booking
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
