import React from "react";
import { Link } from "react-router-dom";
import logoLight from "../assets/images/lega-light.png";
import {
  FiShoppingCart,
  FiDribbble,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
} from "../assets/icons/vander";

export default function Footer() {
  return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container relative text-center">
          <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
            <div className="lg:col-span-3 md:text-start text-center">
              <Link to="#" className="text-[22px] focus:outline-none">
                <img
                  src={logoLight}
                  className="mx-auto md:me-auto md:ms-0"
                  alt=""
                />
              </Link>
            </div>

            <div className="lg:col-span-5 text-center mt-6 md:mt-0">
              <p className="mb-0">
                © {new Date().getFullYear()} Komdis. Design & Develop with{" "}
                <i className="mdi mdi-heart text-red-600"></i> by{" "}
                <Link
                  to="https://shreethemes.in/"
                  target="_blank"
                  className="text-reset"
                >
                  Winata
                </Link>
                .
              </p>
            </div>

            <ul className="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0">
              <li className="inline">
                <Link
                  to="http://linkedin.com/company/shreethemes"
                  target="_blank"
                  className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"
                >
                  <FiLinkedin
                    className="size-4 align-middle"
                    title="Linkedin"
                  />
                </Link>
              </li>
              <li className="inline">
                <Link
                  to="https://www.instagram.com/shreethemes/"
                  target="_blank"
                  className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"
                >
                  <FiInstagram
                    className="size-4 align-middle"
                    title="instagram"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
