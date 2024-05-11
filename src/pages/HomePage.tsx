import { useEffect } from "react";
import WebImg from "../assets/Saly-10.png";
import ReactGA from "react-ga4";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  useEffect(() => {
      document.title = "Home";
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Home",
    });
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/aboutme");
    ReactGA.event({
      category: "Button",
      action: "Click",
      label: "About me",
    });
  };

  return (
    <div className="min-h-screen sm:grid grid-cols-3 bg-white">
      <div className="max-lg:hidden"></div>
      <div className="max-md:pl-40 md:pl-11 lg:pl-72 sm:col-span-2 font-quicksand text-7xl max-sm:text-5xl pt-44 max-sm:pl-6 max-sm:pt-32">
        <h1>Hi! I’m Thiti (Ping)</h1>
        <p className="text-3xl text-greytext max-sm:text-2xl pt-2">Welcome to ppinng's portfolio!</p>
        <button
            className="cursor-pointer text-xl rounded-[14px] border-4 border-bluebox px-4 py-4 max-sm:mt-5 sm:mt-34px" onClick={handleClick}>
          <p>About me</p>
        </button>
      </div>
      <div className="max-sm:hidden absolute bottom-0 w-fit">
        <img src={WebImg} alt="Web Image" width={680} />
      </div>
      <div className="sm:hidden absolute bottom-0 z-30">
        <img src={WebImg} alt="Web Image" />
      </div>
    </div>
  );
}
