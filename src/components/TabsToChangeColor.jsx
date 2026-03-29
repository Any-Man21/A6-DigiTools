import React from "react";

const TabsToChangeColor = ({ setActiveTab, carts = [] }) => {
  return (
    <div className="tabs tabs-box justify-center bg-transparent py-20">
      <input
        type="radio"
        name="my_tabs_1"
        className="tab rounded-full text-purple-600 font-bold text-xl w-40"
        onClick={() => setActiveTab("product")}
        aria-label="Models"
        defaultChecked
      />
      <input
        type="radio"
        name="my_tabs_1"
        className="tab rounded-full text-purple-600 font-bold text-xl w-40"
        // This is where the magic happens:
        aria-label={`Cart (${carts.length})`}
        onClick={() => setActiveTab("cart")}
      />
    </div>
  );
};

export default TabsToChangeColor;
