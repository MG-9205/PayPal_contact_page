import { useState } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  // State to control the visibility of menu icon and close icon
  const [icon, iconController] = useState({
    close: "hidden",
    menu: " ",
  });
  // State to control the translation of the menu
  const [translate, Settranslate] = useState("translate-x-[-100%]");
  // Function to toggle menu icon and close icon and translate the menu
  const iconChanger = () => {
    if (icon.close == "hidden") {
      iconController({
        close: "",
        menu: "hidden",
      });
      Settranslate("translate-x-[0]");
    } else {
      iconController({
        close: "hidden",
        menu: "",
      });
      Settranslate("translate-x-[-100%]");
    }
  };
  return (
    <>
      {/* Navbar */}
      <header className="fixed flex w-[100%] top-0 justify-between px-4 pt-3 md:px-10 h-[70px] bg-white z-20 ">
        <div className="flex gap-12 justify-center items-center">
          <div className="md:w-12 md:h-12 w-8 h-8 overflow-hidden">
            <img src={logo} alt="" className="w-full h-auto" />
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-10 text-Theme_color-blue font-semibold text-[1.1rem] ">
              <li>
                <NavLink to="/">Personal</NavLink>
              </li>
              <li>
                <NavLink to="/">Business</NavLink>
              </li>
              <li>
                <NavLink to="/"> Developer</NavLink>
              </li>
              <li>
                <NavLink to="/"> Help</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <button className="text-Theme_color-blue border-Theme_color-blue border-[2px] w-[85px] rounded-[25px] py-[3px]">
            Log in
          </button>
          <button className="text-white bg-Theme_color-blue border-Theme_color-blue border-[2px] w-[85px] rounded-[25px] py-[3px]">
            Sign up
          </button>
          <div>
            {/* Menu Icon (visible on smaller screens) */}
            <FontAwesomeIcon
              icon={faBars}
              className={`${icon.menu} md:hidden h-6`}
              onClick={iconChanger}
            />
            <FontAwesomeIcon
              icon={faXmark}
              className={`${icon.close} md:hidden h-6`}
              onClick={iconChanger}
            />
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={`absolute top-[70px] w-[100vw] h-[100vh] bg-white pt-8 transition-all duration-[2s] ${translate} z-20`}
      >
        <ul className="flex flex-col gap-6  w-[100%] items-center text-Theme_color-blue font-semibold text-[1.2rem] ">
          <li>
            <NavLink to="/">Personal</NavLink>
          </li>
          <li>
            <NavLink to="/">Business</NavLink>
          </li>
          <li>
            <NavLink to="/"> Developer</NavLink>
          </li>
          <li>
            <NavLink to="/"> Help</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
