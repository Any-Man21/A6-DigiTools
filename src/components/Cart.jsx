import React from "react";

const Cart = ({ carts, setCarts }) => {
  const handleRemove = (item) => {
    const updatedCarts = carts.filter((i) => i.id !== item.id);
    setCarts(updatedCarts);
  };

  const handleCheckout = () => {
    setCarts([]);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">Cart Page</h1>
      <p className="text-center mt-20 text-gray-600">
        Your selected items will appear here. Proceed to checkout when you're
        ready.
      </p>
      {carts.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between gap-10 border border-gray-400 bg-gray-200 rounded-3xl p-4 my-10 mx-5 md:mx-40"
        >
          <div className="flex items-center gap-8">
            <div>
              <img
                src={item.icon}
                alt=""
                className="h-25 w-25 object-contain rounded-3xl"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">{item.name}</h2>
            </div>
          </div>
          <div className="text-2xl font-bold text-yellow-500">
            ${item.price}/month
          </div>
          <button
            onClick={() => handleRemove(item)}
            className="btn btn-primary rounded-full border-none hover:bg-[#5a24d1] text-white font-bold capitalize bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}
      <div className=" flex justify-between my-20 bg-black text-white p-5 rounded-xl mx-10">
        <div>Total: </div>
        <div>${carts.reduce((total, item) => total + item.price, 0)}/month</div>
      </div>
      <div>
        <button
          onClick={handleCheckout}
          className="btn btn-primary items-center w-full rounded-full border-none bg-[#6b30ea] hover:bg-[#5a24d1] text-white font-bold capitalize mb-15"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
