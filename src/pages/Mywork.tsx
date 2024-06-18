import { useEffect } from "react";
import { projects } from "../shared/Projects";
import TechChips from "../components/Techchips";
import ReactGA from "react-ga4";
import {Helmet} from "react-helmet";

export default function Myworks() {
  useEffect(() => {
    document.title = "My Projects";
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "My Projects",
    });
  }, []);
  const workSchema  = {
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
        "name": "My Projects",
        "item": "https://www.ppinng.me/my-projects"
      }
    ],

  };
  return (
    <div className="min-h-screen max-sm:pt-28 pt-28 bg-white ">
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Projects | Explore Thiti's Work | ppinng</title>
        <meta name="description"
              content="Browse through the impressive projects created by Thiti on ppinng.me. Get inspired by innovative designs, developments, and solutions. Dive into a showcase of creativity and expertise."/>
        <script type="application/ld+json">
          {JSON.stringify(workSchema)}
        </script>
      </Helmet>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 sm:gap-14 gap-10 mx-6 mb-10">
          {projects.map((el) => {
            return (
              <div
                key={el.id}
                className="overflow-hidden transition-all rounded-2xl group grid grid-rows-2 card max-w-[400px] max-h-[400px] border-customorange border-4 justify-center font-quicksand lg:text-2xl max-sm:text-lg relative"
              >
                <div className="flex flex-col">
                  <div className="rounded-2xl flex justify-center">
                    <img
                      className="h-[200px] w-auto"
                      src={el.img}
                      alt={el.title}
                    />
                  </div>
                  <div className="title-container pt-3">
                    {/* Title container with normal flex positioning */}
                    <div className="hover:underline flex justify-center">
                      {el.title}
                    </div>
                    <div className="bottom-0 left-0 pt-3">
                      {TechChips({ tools: el.techstack })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
