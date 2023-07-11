import React from "react";
import WebImg from "../assets/Saly-10.png";
import "../App.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-white">
      <div className="sm:grid grid-cols-3">
        <div className="max-lg:hidden"></div>
        <div className="max-md:pl-40 md:pl-11 lg:pl-72 sm:col-span-2 font-quicksand text-7xl max-sm:text-5xl pt-28 max-sm:pl-6 max-sm:pt-20">
          Hi! I’m Thiti
          <br />
          <div className="text-3xl text-greytext max-sm:text-2xl pt-2 pl-1">
            Welcome to my portfolio!
          </div>
          <button className="text-xl rounded-[14px] border-4 border-bluebox px-4 py-4 max-sm:mt-5 sm:mt-34px">
            <Link to="/aboutme">About me</Link>
          </button>
        </div>
        <div className="max-sm:hidden absolute bottom-0 w-fit">
          <img src={WebImg} alt="Web Image" width={680} />
        </div>
        <div className="sm:hidden absolute bottom-0 ">
          <img src={WebImg} alt="Web Image" />
        </div>
      </div>
    </div>
  );
}
