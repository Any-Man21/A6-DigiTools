import React from "react";

const NavBar = () => {
  return (
    <div className="bg-[#f9fafb] border-b border-gray-100">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex="0"
              role="button"
              className="btn btn-ghost lg:hidden text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-white rounded-box w-52 text-gray-700"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <a className="text-3xl font-bold text-[#7c3aed] tracking-tight cursor-pointer">
            DigiTools
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 font-semibold text-gray-600">
            <li>
              <a className="hover:text-[#7c3aed]">Products</a>
            </li>
            <li>
              <a className="hover:text-[#7c3aed]">Features</a>
            </li>
            <li>
              <a className="hover:text-[#7c3aed]">Pricing</a>
            </li>
            <li>
              <a className="hover:text-[#7c3aed]">Testimonials</a>
            </li>
            <li>
              <a className="hover:text-[#7c3aed]">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-3">
          <button className="btn btn-ghost btn-circle text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>

          <a className="btn btn-ghost text-gray-700 font-semibold hidden md:inline-flex">
            Login
          </a>

          <a className="btn bg-[#7c3aed] hover:bg-[#6d28d9] text-white border-none rounded-full px-8 font-bold">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
