import React, { useState } from "react";

const SlidingTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "Products" },
    { id: 1, label: "Cart (2)" },
  ];

  return (
    <div className="flex justify-center items-center h-40 bg-[#fdfcff]">
      {/* Container */}
      <div className="relative flex items-center bg-white border border-gray-100 rounded-full p-1 shadow-sm h-14">
        {/* The Sliding Purple Pill */}
        <div
          className="absolute h-[calc(100%-8px)] top-1 bottom-1 transition-all duration-300 ease-in-out bg-[#7c3aed] rounded-full shadow-lg shadow-purple-200"
          style={{
            /* Logic: Width is 1/total_tabs. Move by index * 100% */
            width: `${100 / tabs.length}%`,
            transform: `translateX(${activeTab * 100}%)`,
            left: "0",
          }}
        />

        {/* The Actual Tab Buttons */}
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative z-10 flex-1 px-10 h-full font-semibold transition-colors duration-300 text-sm md:text-base whitespace-nowrap
              ${activeTab === tab.id ? "text-white" : "text-gray-500 hover:text-[#7c3aed] hover:cursor-pointer"}
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SlidingTabs;
