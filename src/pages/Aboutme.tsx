import { useEffect } from "react";
import Profile from "../assets/Profile_image.jpg";
import ReactGA from "react-ga4";
import {Helmet} from "react-helmet";

export default function Aboutme() {
  useEffect(() => {
    document.title = "About me";
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "About me",
    });
  }, []);
  const aboutmeSchema  = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.ppinng.me/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About me",
        "item": "https://www.ppinng.me/aboutme"
      }
    ],

  };
  return (
    <div className="min-h-screen pt-16 max-md:pt-2 bg-white p-8">
      <Helmet>
        <title>About me | Thiti Sae-lee | ppinng</title>
        <meta name="description"
              content="Get to know Thiti Sae-lee (Ping) and his journey in computer science and software development. Discover Thiti's background, skills, and experiences on ppinng.me."/>
        <script type="application/ld+json">
          {JSON.stringify(aboutmeSchema)}
        </script>
      </Helmet>
      <div className="container mx-auto ">
        <div className="md:flex md:flex-row pt-28">
          <div className="md:shrink-0 flex justify-center">
            <img
                src={Profile}
                alt="Profile picture"
                className="rounded-2xl object-cover  lg:ml-1 md:ml-8 max-md:w-56"
                height={250}
                width={290}
            />
          </div>
          <div className="lg:ml-36 md:pl-10 font-quicksand">
            <h1 className="tracking-wide lg:text-7xl font-bold md:text-5xl max-sm:text-4xl text-orange max-sm:pt-4">
              Thiti Sae-lee (Ping)
            </h1>
            <p className="mt-3 lg:ml-3 text-base mx-1 md:text-xl md:w-12/12 lg:w-3/5">
              I am studying as an undergraduate in the Computer Science program at King Mongkut's University of
              Technology Thonburi (KMUTT). I have completed several projects including web applications and mobile
              applications, and I am experienced in both frontend and backend development.
            </p>
          </div>
        </div>
        <div className="md:grid items-center text-justify align-bottom grid-cols-3 md:space-x-4 pt-5 font-quicksand">
          <div className="text-5xl max-md:text-4xl max-lg:text-4xl  text-orange">
            Education
          </div>
          {/* For Mobile resolutin */}
          <div className="md:text-2xl max-md:text-xl  text-orange lg:pt-4 max-lg:pt-2">
            2017 - 2020
          </div>
          <div className="md:hidden">
            Debsirin School <br/> GPAX: ??
          </div>
          <div className="md:text-2xl max-md:text-xl  text-orange lg:pt-4 max-lg:pt-2">
            2021 - Present
          </div>
          <div className="md:hidden ">
            King Mongkut's University of Technology Thonburi <br /> Bachelor's
            degree, Computer Science <br /> GPAX: 3.14
          </div>
        </div>
        {/* For Desktop resolutin */}
        <div className="md:grid grid-cols-3 md:space-x-4 max-md:hidden font-quicksand">
          <div></div>
          <div className="md:text-lg">
            Debsirin School <br /> GPAX: ??
          </div>
          <div className="md:text-lg">
            King Mongkut's University of Technology Thonburi <br /> Bachelor's
            degree, Computer Science <br /> GPAX: 3.14
          </div>
        </div>
        {/* Techs&Tools */}
        <div className="max-md:mt-4 mt-8 text-5xl max-md:text-4xl max-lg:text-4xl  text-customorange">
          Tech&Tools
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
