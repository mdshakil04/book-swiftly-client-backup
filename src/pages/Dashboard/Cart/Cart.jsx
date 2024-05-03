import useCart from "../../../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <div className=" my-12 grid grid-cols-1 lg:flex justify-evenly  p-2 bg-[#EAFBF7] rounded-xl">
        <h2 className="md:text-4xl">Total Items: {cart.length} </h2>
        <h2 className="md:text-4xl">Total Price: ${totalPrice} </h2>
        <button className=" btn btn-outline btn-warning font-bold">
          Pay Now
        </button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Service ID</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map(item => <tr key={item._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {item._id}
                      <br />
                    </td>
                    <td>${item.price}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
