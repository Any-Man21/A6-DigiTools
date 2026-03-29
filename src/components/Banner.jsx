import React from "react";

const Banner = () => {
  return (
    <div>
      <div class="relative w-full bg-[#fdfcff] overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 md:py-24">
          <div class="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
            <div class="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div class="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-[#f0eaff] border border-[#e0d6ff]">
                <div class="w-2.5 h-2.5 rounded-full bg-[#6b30ea] border-2 border-white ring-1 ring-[#6b30ea]"></div>
                <span class="text-xs font-semibold text-[#6b30ea] tracking-tight">
                  New: AI-Powered Tools Available
                </span>
              </div>

              <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] leading-[1.1] tracking-[-0.03em] mb-6 max-w-xl">
                Supercharge Your Digital Workflow
              </h1>

              <p class="text-base sm:text-lg text-[#6b7280] leading-relaxed mb-10 max-w-lg">
                Access premium AI tools, design assets, templates, and
                productivity software—all in one place. Start creating faster
                today.
              </p>

              <div class="flex flex-col sm:flex-row gap-4 items-center">
                <button class="btn btn-primary rounded-full px-8 py-3 h-auto text-base font-semibold capitalize border-none bg-[#6b30ea] hover:bg-[#5a24d1] text-white">
                  Explore Products
                </button>

                <button class="btn btn-outline rounded-full px-8 py-3 h-auto text-base font-semibold capitalize border-[#6b30ea] text-[#6b30ea] hover:bg-[#f0eaff] hover:border-[#6b30ea] hover:text-[#5a24d1]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Watch Demo
                </button>
              </div>
            </div>

            <div class="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div class="relative w-full max-w-125 lg:max-w-none aspect-10/9">
                <img
                  src="/src/assets/banner.png"
                  alt="Hand interacting with AI data hologram"
                  class="absolute inset-0 w-full h-full object-cover rounded-3xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
