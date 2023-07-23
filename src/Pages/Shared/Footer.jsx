import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <div className="px-6 mx-auto py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold">College Booking</h3>
            <p className="mt-2">
              Book your dream college today and start your journey towards a
              successful career.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Contact Us</h4>
            <p>Email: contact@collegebooking.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-black hover:text-gray-600"
                title="Facebook"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-600"
                title="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-600"
                title="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-600"
                title="LinkedIn"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-600" />
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} College Booking. All rights
          reserved. |{" "}
          <Link to="/privacy" className="text-blue-400 hover:underline">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link to="/terms" className="text-blue-400 hover:underline">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
