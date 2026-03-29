import React from "react";

const Pricing = () => {
  return (
    <div>
      <section class="bg-[#fdfcff] py-20 px-4 md:px-10">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-extrabold text-[#111827] mb-4">
              Simple, Transparent Pricing
            </h2>
            <p class="text-[#6b7280] text-lg">
              Choose the plan that fits your needs. Upgrade or downgrade
              anytime.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
            <div class="card w-full max-w-sm bg-white border border-gray-100 rounded-3xl p-8 shadow-sm h-full">
              <div class="mb-8">
                <h3 class="text-2xl font-bold text-[#111827]">Starter</h3>
                <p class="text-[#6b7280] text-sm mt-1">
                  Perfect for getting started
                </p>
              </div>
              <div class="flex items-end gap-1 mb-8">
                <span class="text-5xl font-extrabold text-[#111827]">$0</span>
                <span class="text-[#6b7280] font-medium pb-1">/Month</span>
              </div>
              <ul class="space-y-4 mb-10 grow">
                <li class="flex items-center gap-3 text-[#6b7280]">
                  <img
                    src="/assets/check-icon.svg"
                    class="w-5 h-5"
                    alt="check"
                  />{" "}
                  Access to 10 free tools
                </li>
                <li class="flex items-center gap-3 text-[#6b7280]">
                  <img
                    src="/assets/check-icon.svg"
                    class="w-5 h-5"
                    alt="check"
                  />{" "}
                  Basic templates
                </li>
                <li class="flex items-center gap-3 text-[#6b7280]">
                  <img
                    src="/assets/check-icon.svg"
                    class="w-5 h-5"
                    alt="check"
                  />{" "}
                  Community support
                </li>
                <li class="flex items-center gap-3 text-[#6b7280]">
                  <img
                    src="/assets/check-icon.svg"
                    class="w-5 h-5"
                    alt="check"
                  />{" "}
                  1 project per month
                </li>
              </ul>
              <button class="btn w-full rounded-full bg-[#6b30ea] hover:bg-[#5a24d1] text-white border-none capitalize font-bold">
                Get Started Free
              </button>
            </div>

            <div class="relative card w-full max-w-sm bg-[#6b30ea] rounded-3xl p-8 shadow-2xl h-full lg:scale-105">
              <div class="absolute -top-4 left-1/2 -translate-x-1/2 badge bg-[#fef3c7] text-[#92400e] border-none px-4 py-3 font-bold text-xs whitespace-nowrap">
                Most Popular
              </div>
              <div class="mb-8">
                <h3 class="text-2xl font-bold text-white">Pro</h3>
                <p class="text-purple-100 text-sm mt-1">
                  Best for professionals
                </p>
              </div>
              <div class="flex items-end gap-1 mb-8">
                <span class="text-5xl font-extrabold text-white">$29</span>
                <span class="text-purple-100 font-medium pb-1">/Month</span>
              </div>
              <ul class="space-y-4 mb-10 flex-grow">
                <li class="flex items-center gap-3 text-white">
                  <span class="text-white">✔</span> Access to all premium tools
                </li>
                <li class="flex items-center gap-3 text-white">
                  <span class="text-white">✔</span> Unlimited templates
                </li>
                <li class="flex items-center gap-3 text-white">
                  <span class="text-white">✔</span> Priority support
                </li>
                <li class="flex items-center gap-3 text-white">
                  <span class="text-white">✔</span> Unlimited projects
                </li>
                <li class="flex items-center gap-3 text-white">
                  <span class="text-white">✔</span> Cloud sync
                </li>
              </ul>
              <button class="btn w-full rounded-full bg-white hover:bg-gray-100 text-[#6b30ea] border-none capitalize font-bold">
                Start Pro Trial
              </button>
            </div>

            <div class="card w-full max-w-sm bg-white border border-gray-100 rounded-3xl p-8 shadow-sm h-full">
              <div class="mb-8">
                <h3 class="text-2xl font-bold text-[#111827]">Enterprise</h3>
                <p class="text-[#6b7280] text-sm mt-1">
                  For teams and businesses
                </p>
              </div>
              <div class="flex items-end gap-1 mb-8">
                <span class="text-5xl font-extrabold text-[#111827]">$99</span>
                <span class="text-[#6b7280] font-medium pb-1">/Month</span>
              </div>
              <ul class="space-y-4 mb-10 flex-grow">
                <li class="flex items-center gap-3 text-[#6b7280]">
                  <img
                    src="/assets/check-icon.svg"
                    class="w-5 h-5"
                    alt="check"
                  />{" "}
                  Everything in Pro
                </li>
                <li class="flex items-center gap-3 text-[#6b7280]">
                  <img
                    src="/assets/check-icon.svg"
                    class="w-5 h-5"
                    alt="check"
                  />{" "}
                  Team collaboration
                </li>
                <li class="flex items-center gap-3 text-[#6b7280]">
                  <img
                    src="/assets/check-icon.svg"
                    class="w-5 h-5"
                    alt="check"
                  />{" "}
                  Custom integrations
                </li>
                <li class="flex items-center gap-3 text-[#6b7280]">
                  <img
                    src="/assets/check-icon.svg"
                    class="w-5 h-5"
                    alt="check"
                  />{" "}
                  SLA guarantee
                </li>
              </ul>
              <button class="btn w-full rounded-full bg-[#6b30ea] hover:bg-[#5a24d1] text-white border-none capitalize font-bold">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
