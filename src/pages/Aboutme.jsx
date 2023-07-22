import React from "react";
import Profile from "../assets/Profile_image.jpg";
export default function Aboutme() {
  return (
    <div className="w-screen h-full container mx-auto pt-20 max-md:pt-12">
      {/* <div className="md:grid grid-cols-3">
        <div className="col-span-1 flex flex-col items-center">
          <img src={Logo} alt="logo" width={300} height={400} />
        </div>
        <div className="col-span-2 flex flex-col">
          <div className="font-quicksand text-7xl font-bold text-center max-md:text-3xl">
            Thiti Sae-lee
          </div>
          <div className="font-quicksand text-3xl text-greytext font-bold text-center max-md:text-2xl">
            Hi my name is thiti
          </div>
        </div>
      </div> */}

      <div className="md:flex flex-row">
        <div className="md:shrink-0 flex justify-center">
          <img
            src={Profile}
            alt="Profile picture"
            className="rounded-2xl object-cover  lg:ml-1 md:ml-8 max-md:w-56"
            height={250}
            width={290}
          />
        </div>
        <div className="lg:ml-36 p-8 md:pl-10 font-quicksand">
          <div className="tracking-wide lg:text-7xl font-bold  md:text-5xl max-sm:text-4xl text-orange">
            Thiti Sae-lee
          </div>
          <p className="mt-6 lg:ml-3 mx-1 md:text-xl lg:w-9/12">
            Bali and Lombok are neighbouring islands; both are part of the
            Indonesian archipelago. It is easy to appreciate each island as an
            attractive tourist destination – majestic scenery; rich culture;
            white sands and warm, azure waters draw visitors like magnets every
            year. Snorkelling and diving around the nearby Gili Islands is
            magnificent, with marine fish, starfish, turtles and coral reef
            present in abundance.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between font-quicksand">
        <div className="lg:text-6xl">Education</div>
        <div>
          2016 - 2018
          <div>Test</div>
        </div>
        <div>
          2019 - Present
          <div>Test</div>
        </div>
      </div>
    </div>
  );
}
