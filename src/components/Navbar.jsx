import React, { useState } from "react";
import Logo from "../assets/Web_Logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className=" max-w-full max-sm:px-7 px-60px py-2 mx-auto shadow-xl bg-white">
      <div className="flex justify-between items-center ">
        <div className="flex justify-between items-center ">
          <a href="/">
            <img src={Logo} alt="logo" width={70} height={100} />
          </a>
          <div className="font-quicksand text-2xl font-bold pt-3 pl-2">
            Thiti.
          </div>
        </div>
        <div className="pt-12px hidden sm:flex">
          <ul className="hidden sm:flex gap-2">
            <li className="mr-8">
              <a
                href="/"
                className="font-quicksand text-xl hover:border-b-4 hover:border-blue-300"
              >
                Home
              </a>
            </li>
            <li className="mr-8">
              <a
                href="/about"
                className="font-quicksand text-xl hover:border-b-4 hover:border-blue-300"
              >
                About me
              </a>
            </li>
            <li className="mr-8">
              <a
                href="/projects"
                className="font-quicksand text-xl hover:border-b-4 hover:border-blue-400"
              >
                My Projects
              </a>
            </li>
            <li className="mr-8">
              <a
                href="/contact"
                className="font-quicksand text-xl hover:border-b-4 hover:border-blue-400"
              >
                Contact
              </a>
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
            <a
              href="/"
              onClick={() => setNav(false)}
              className="font-quicksand text-xl hover:border-b-4 hover:border-red-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={() => setNav(false)}
              className="font-quicksand text-xl hover:border-b-4 hover:border-red-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={() => setNav(false)}
              className="font-quicksand text-xl hover:border-b-4 hover:border-red-300"
            >
              Contact
            </a>
          </li>
        </ul>
        <img src={Logo} alt="logo" className="h-24 w-24 mt-10" />
      </div>
    </nav>
  );
};

export default Navbar;
