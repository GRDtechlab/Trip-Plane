import React from "react";
import { useLocation } from "react-router-dom";
import SectionInfo from "../components/section-info";
import Hotels from "../components/Hotels";
import PlacesToVisit from "../components/PlacesToVisit";
import HeaderSeperatorImg from "@/components/custom/Header-Seperator-Img";

function ViewTrip() {
  const location = useLocation();
  const userTripData = location.state;
  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      {/* {info Section} */}
      <SectionInfo trip={userTripData} />
      <HeaderSeperatorImg />
      {/* {Hotel Section} */}
      <Hotels trip={userTripData} />
      <HeaderSeperatorImg />
      {/* {Places to Visit} */}
      <PlacesToVisit trip={userTripData} />
    </div>
  );
}

export default ViewTrip;
