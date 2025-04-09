import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-black py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">NBO HOLDING</h2>
            <p className="text-black max-w-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus, atque?
            </p>
          </div>

          <div className="mb-8 md:mb-0 flex flex-col items-center">
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-lg hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
              >
                Home
              </Link>
              <Link 
                to="/" 
                className="text-lg hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
              >
                About
              </Link>
              <Link 
                to="/" 
                className="text-lg hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
              >
                Services
              </Link>
              <Link 
                to="/" 
                className="text-lg hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Contact</h3>
            <div className="flex flex-col space-y-2">
              <p className="text-lg">info@nboholding.com</p>
              <p className="text-lg">+90 123 456 78 90</p>
              <p className="text-lg">Istanbul, Turkey</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-6 text-center">
          <p>© {new Date().getFullYear()} NBO Holding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;