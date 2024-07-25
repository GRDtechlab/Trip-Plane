import React from "react";
import { Link } from "react-router-dom";

function Hotels({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recomendation</h2>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4">
        {trip.tripData.hotels.map((trip, index) => (
          //   Here Link tag is used to open google map of clicked div tag to new window.
          <Link
            key={index}
            to={
              "https://www.google.com/maps/search/?api=1&query=" +
              trip.name +
              "," +
              trip.address
            }
            target="_blank">
            <div className="shadow-sm sm:shadow-none hover:scale-105 transition-all cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1443927024987-129b3c966f5e?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-xl"
              />
              <div className="my-3">
                <h2 className="font-medium">{trip.name}</h2>
                <h2 className="text-xs text-gray-500"> 📍 {trip.address}</h2>
                <h2 className="text-sm font-medium text-orange-800">
                  💸 {trip.price}
                </h2>
                <h2 className="text-sm font-mono text-orange-700">
                  ⭐ {trip.ratings}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
