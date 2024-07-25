import { Button } from "@/components/ui/button";
import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function PlaceCardItem({ place }) {
  return (
    //   Here Link tag is used to open google map of clicked div tag to new window.
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        place.placeName +
        "," +
        place.address
      }
      target="_blank">
      <div className=" p-3 mt-2 flex gap-5 hover:scale-105 transition-all cursor-pointer hover:shadow-md">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-[130px] h-[130px] rounded-xl"
        />
        <div>
          <h2 className="font-bold text-lg">{place.placeName}</h2>
          <p className="text-sm text-gray-500">{place.details}</p>
          <h2 className="mt-2 flex items-center gap-2 text-sm">
            <span className="text-xl">🚕</span>
            <span>{place.travelTime}</span>
          </h2>
          {/* <Button size="sm">
          <FaMapLocationDot />
        </Button> */}
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;
