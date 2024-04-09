import React from "react";
import img from "../assets/download.png";
import flag from "../assets/flag.webp";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="flex justify-center items-center pb-14">
        <div className="w-[80%] md:w-[96%] flex flex-col gap-5">
          <div className="md:w-[220px] md:h-[100px] w-[200px] h-[100px] overflow-hidden">
            <img src={img} alt="" className="w-full h-auto" />
          </div>
          <div className="flex flex-col md:flex-row  gap-5 justify-between">
            <div>
              <ul className="flex flex-wrap gap-4 text-Theme_color-blue font-bold">
                <li>
                  <Link to="/">Help</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/">Fees</Link>
                </li>
                <li>
                  <Link to="/">Security</Link>
                </li>
                <li>
                  <Link to="/">Apps</Link>
                </li>
                <li>
                  <Link to="/">Shops</Link>
                </li>
                <li>
                  <Link to="/">Enterprise</Link>
                </li>
                <li>
                  <Link to="/">Partners</Link>
                </li>
                <li>
                  <Link to="/">FeedBack</Link>
                </li>
              </ul>
            </div>
            <div className="md:w-10 md:h-10 w-8 h-8 overflow-hidden">
              <img src={flag} alt="" className="w-full h-auto" />
            </div>
          </div>
          <hr />
          <div className="flex flex-col md:flex-row gap-5  justify-between">
            <div>
              <ul className="flex flex-wrap gap-4 text-Theme_color-blue font-bold">
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Newsroom</Link>
                </li>
                <li>
                  <Link to="/">Jobs</Link>
                </li>
                <li>
                  <Link to="/">Invester Relation</Link>
                </li>
                <li>
                  <Link to="/">Value in Action</Link>
                </li>
                <li>
                  <Link to="/">Public Policy</Link>
                </li>
                <li>
                  <Link to="/">Sitemap</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-wrap gap-4 text-Theme_color-blue font-bold">
                <li className="text-gray-400 w-[100%] md:w-auto">
                  &copy;1999-2022
                </li>
                <li>
                  <Link to="/">Accessibility</Link>
                </li>
                <li>
                  <Link to="/">Privacy</Link>
                </li>
                <li>
                  <Link to="/">Cookies</Link>
                </li>
                <li>
                  <Link to="/">Legal</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
