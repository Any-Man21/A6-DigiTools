import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 text-center md:text-left">
            <h2 className="text-3xl font-black mb-6 tracking-tight">
              DigiTools
            </h2>
            <p className="text-gray-400 text-base max-w-xs mx-auto md:mx-0 leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product Links */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-6">Product</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-[#6b30ea] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#6b30ea] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#6b30ea] transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#6b30ea] transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-[#6b30ea] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#6b30ea] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#6b30ea] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#6b30ea] transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-6">Social Links</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#6b30ea] transition-all group  text-black text-3xl font-bold"
              >
                in
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#6b30ea] transition-all group text-black text-3xl font-bold"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#6b30ea] transition-all group  text-black text-3xl font-bold"
              >
                X
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2026 Digitools. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
