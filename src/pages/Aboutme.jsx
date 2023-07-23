import React, { useEffect } from "react";
import Profile from "../assets/Profile_image.jpg";
export default function Aboutme() {
  useEffect(() => {
    document.title = "About me";
  }, []);

  return (
    <div className="h-screen pt-16 max-md:pt-2 bg-white p-8">
      <div className="container mx-auto">
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
            <div className="tracking-wide lg:text-7xl font-bold  md:text-5xl max-sm:text-4xl text-orange max-sm:pt-4">
              Thiti Sae-lee
            </div>
            <p className="mt-3 lg:ml-3 mx-1 md:text-xl lg:w-9/12">
              I am studying as an undergraduate in student in the
              Computer-science program at King Mongkut's University of
              Technology Thonburi (KMUTT). I have completed several projects
              such as web applications, mobile applications. I used to work on
              both frontend and backend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
