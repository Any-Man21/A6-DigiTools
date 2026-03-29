import React from "react";

const ThreeSteps = () => {
  return (
    <div>
      <section class="w-full bg-[#f9fafb] py-20 px-4 md:px-10 lg:px-20 mt-20">
        <div class="max-w-7xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-extrabold text-[#111827] leading-tight tracking-[-0.03em] mb-4">
            Get Started In 3 Steps
          </h2>
          <p class="text-base sm:text-lg text-[#6b7280] leading-relaxed mb-16 max-w-xl mx-auto">
            Start using premium digital tools in minutes, not hours.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <div class="relative card w-full max-w-sm bg-white border border-gray-100 rounded-3xl p-10 shadow-lg text-center flex flex-col items-center">
              <div class="absolute -top-3 -right-3 badge badge-primary p-4 rounded-full font-bold text-xs h-9 w-9 border-2 border-white">
                01
              </div>
              <div class="flex items-center justify-center bg-[#f0eaff] w-20 h-20 rounded-3xl border border-gray-100 mb-8 p-5 text-4xl text-[#6b30ea]">
                👤
              </div>
              <h3 class="text-2xl font-bold text-[#111827] mb-4">
                Create Account
              </h3>
              <p class="text-sm text-[#6b7280] leading-relaxed grow">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>

            <div class="relative card w-full max-w-sm bg-white border border-gray-100 rounded-3xl p-10 shadow-lg text-center flex flex-col items-center">
              <div class="absolute -top-3 -right-3 badge badge-primary p-4 rounded-full font-bold text-xs h-9 w-9 border-2 border-white">
                02
              </div>
              <div class="flex items-center justify-center bg-[#f0eaff] w-20 h-20 rounded-3xl border border-gray-100 mb-8 p-5 text-4xl text-[#6b30ea]">
                📦
              </div>
              <h3 class="text-2xl font-bold text-[#111827] mb-4">
                Choose Products
              </h3>
              <p class="text-sm text-[#6b7280] leading-relaxed grow">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>

            <div class="relative card w-full max-w-sm bg-white border border-gray-100 rounded-3xl p-10 shadow-lg text-center flex flex-col items-center">
              <div class="absolute -top-3 -right-3 badge badge-primary p-4 rounded-full font-bold text-xs h-9 w-9 border-2 border-white">
                03
              </div>
              <div class="flex items-center justify-center bg-[#f0eaff] w-20 h-20 rounded-3xl border border-gray-100 mb-8 p-5 text-4xl text-[#6b30ea]">
                🚀
              </div>
              <h3 class="text-2xl font-bold text-[#111827] mb-4">
                Start Creating
              </h3>
              <p class="text-sm text-[#6b7280] leading-relaxed grow">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThreeSteps;
