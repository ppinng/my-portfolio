import React, { useState } from "react";
import Logo from "../assets/Web_Logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className=" max-w-full max-sm:px-7 px-60px py-2 mx-auto shadow-xl bg-whitebg ">
      <div className="flex justify-between items-center ">
        <div className="flex justify-between items-center ">
          <Link to="/">
            <img src={Logo} alt="logo" width={70} height={100} />
          </Link>
          <div className="font-quicksand text-2xl font-bold pt-3 pl-2">
            Thiti.
          </div>
        </div>
        <div className="pt-12px hidden sm:flex">
          <ul className="hidden sm:flex gap-2 ">
            <li className="mr-8">
              <Link
                to="/"
                className="font-quicksand text-2xl hover:border-b-4 hover:border-blue-300"
              >
                Home
              </Link>
            </li>
            <li className="mr-8">
              <Link
                to="/aboutme"
                className="font-quicksand text-2xl hover:border-b-4 hover:border-blue-300"
              >
                About me
              </Link>
            </li>
            <li className="mr-8">
              <Link
                to="/my-projects"
                className="font-quicksand text-2xl hover:border-b-4 hover:border-blue-400"
              >
                My Projects
              </Link>
            </li>
            <li className="mr-8">
              <Link
                to="/contact"
                className="font-quicksand text-2xl hover:border-b-4 hover:border-blue-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pt-3">
          <FaBars size={25} />
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed right-0 top-0 w-48 sm:hidden h-screen bg-white p-10 ease-in-out duration-500 shadow-lg"
            : "fixed right-[-100%] top-0 w-48 sm:hidden h-screen bg-white p-10 ease-in-out duration-500 shadow-lg"
        }
      >
        <div className="flex w-full items-center justify-end ml-3 mb-4">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <ul className="flex flex-col gap-9 mt-10 ">
          <li>
            <Link
              to="/"
              onClick={() => setNav(false)}
              className="font-quicksand text-xl hover:border-b-4 hover:border-red-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/aboutme"
              onClick={() => setNav(false)}
              className="font-quicksand text-xl hover:border-b-4 hover:border-red-300"
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              to="/my-projects"
              onClick={() => setNav(false)}
              className="font-quicksand text-xl hover:border-b-4 hover:border-red-300"
            >
              My Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setNav(false)}
              className="font-quicksand text-xl hover:border-b-4 hover:border-red-300"
            >
              Contact
            </Link>
          </li>
        </ul>
        <img src={Logo} alt="logo" className="h-24 w-24 mt-10" />
      </div>
    </nav>
  );
}
