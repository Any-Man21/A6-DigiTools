import React from "react";

const TabsToChangeColor = ({ setActiveTab, carts }) => {
  return (
    <div>
      <div className="tabs tabs-box justify-center bg-transparent py-20">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full text-purple-500 font-bold text-xl w-40"
          onClick={() => setActiveTab("product")}
          aria-label="Models"
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full text-purple-500 font-bold text-xl w-40"
          aria-label={`Cart (${carts?.length || 0})`} // Safe navigation
          onClick={() => setActiveTab("cart")}
        />
      </div>
    </div>
  );
};

export default TabsToChangeColor;
