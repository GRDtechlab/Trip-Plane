import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="mt-0 relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-gray-50 before:bg-[url('https://images.unsplash.com/photo-1611502692278-8790788af174?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="flex flex-col items-center mx-5 md:mx-56 my-20 gap-9 z-10 relative">
        <h1 className="font-extrabold text-[30px] md:text-[55px] text-center sm:mt-16">
          <span className="text-[#E8311E] ">
            Uncover your next journey with AI
          </span>
          , tailored just for you
        </h1>
        <p className=" md:text-xl text-gray-500 text-center">
          Your dedicated travel planner and curator, crafting personalized
          itineraries to suit your interests and budget
        </p>
        <Link to={"/create-trip"}>
          <Button>Get Started, Free!</Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
