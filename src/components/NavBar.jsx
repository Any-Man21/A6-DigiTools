import React from "react";

const NavBar = () => {
  return (
    <div class="bg-[#f9fafb] border-b border-gray-100">
      <div class="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div class="navbar-start">
          <div class="dropdown">
            <div
              tabindex="0"
              role="button"
              class="btn btn-ghost lg:hidden text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-gray-700"
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
          <a class="text-3xl font-bold text-[#7c3aed] tracking-tight cursor-pointer">
            DigiTools
          </a>
        </div>

        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 gap-4 font-semibold text-gray-600">
            <li>
              <a class="hover:text-[#7c3aed]">Products</a>
            </li>
            <li>
              <a class="hover:text-[#7c3aed]">Features</a>
            </li>
            <li>
              <a class="hover:text-[#7c3aed]">Pricing</a>
            </li>
            <li>
              <a class="hover:text-[#7c3aed]">Testimonials</a>
            </li>
            <li>
              <a class="hover:text-[#7c3aed]">FAQ</a>
            </li>
          </ul>
        </div>

        <div class="navbar-end gap-3">
          <button class="btn btn-ghost btn-circle text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>

          <a class="btn btn-ghost text-gray-700 font-semibold hidden md:inline-flex">
            Login
          </a>

          <a class="btn bg-[#7c3aed] hover:bg-[#6d28d9] text-white border-none rounded-full px-8 font-bold">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
