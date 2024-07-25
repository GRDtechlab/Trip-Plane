import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  return (
    <div className="mt-5">
      <h2 className="font-bold text-lg">Places To Visit</h2>
      <div>
        {trip.tripData.itinerary.map((itinerary, index) => (
          <div key={index} className="mt-5">
            <h2 className="font-medium text-lg">
              {itinerary.day.toString().toLowerCase().includes("day")
                ? itinerary.day
                : `Day ${itinerary.day}`}
            </h2>
            <p className="text-sm text-gray-500 font-medium">
              {itinerary.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
              {console.log({ itinerary })}
              {itinerary.places.map((place, placeIndex) => (
                <div key={placeIndex}>
                  <h2 className="font-medium text-sm text-orange-700">
                    <span className="text-orange-500 bg-orange-50 p-2 my-5 rounded-lg">
                      Best Visit @:
                    </span>
                    {place.goodTimeToVisit}
                  </h2>
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
            {trip.tripData.itinerary.length - 1 !== index && (
              <hr className="border-2 mt-5 border-orange-50"></hr>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
