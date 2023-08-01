import React from "react";
import { useEffect } from "react";
export default function Myworks() {
  useEffect(() => {
    document.title = "My works";
  }, []);
  return (
    <div className="min-h-screen pt-16 max-md:pt-2 bg-white p-8">
      <div className="container mx-auto ">
        
      </div>
    </div>
  );
}
