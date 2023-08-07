import React from "react";
import { useEffect } from "react";
import { projects } from "../shared/Projects";
import "boxicons";
import techChips from "../components/techChips";

export default function Myworks() {
  useEffect(() => {
    document.title = "My Projects";
  }, []);

  return (
    <div className="min-h-screen max-sm:pt-28 pt-28 bg-white ">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 sm:gap-14 gap-10 mx-6 mb-10">
          {projects.slice(0, 5).map((el) => {
            return (
              <div
                key={el.id}
                className="overflow-hidden transition-all rounded-2xl group grid grid-rows-2 card max-w-[400px] max-h-[400px] bg-customorange justify-center font-quicksand lg:text-2xl max-sm:text-lg relative"
              >
                <div className="flex flex-col">
                  <div className="rounded-2xl flex justify-center">
                    <img src={el.img} alt={el.title} />
                  </div>
                  <div className="title-container pt-3">
                    {/* Title container with normal flex positioning */}
                    <div className="hover:underline flex justify-center">
                      {el.title}
                    </div>
                    <div className="bottom-0 left-0 pt-3">
                      {techChips({ stacks: el.techstack, isExample: false })}{" "}
                      {/* Change isExample to false */}
                    </div>
                  </div>
                </div>
                <div className="x-container absolute bottom-0 right-0 pb-5 pr-7 flex flex-row">
                  {/* Container specifically for the "X" element */}
                  <box-icon
                    name="chevron-right"
                    type="solid"
                    size="lg"
                    border="circle"
                    animation="fade-right-hover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
