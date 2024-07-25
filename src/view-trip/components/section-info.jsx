import { Button } from "@/components/ui/button";
import React from "react";
import { IoIosSend } from "react-icons/io";

function SectionInfo({ trip }) {
  console.log({ trip });
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1721&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className=" h-[350px] w-full object-cover rounded-xl"
      />
      <div className="flex items-center justify-between">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.favouriteDestination}
          </h2>
          <div className=" sm:flex sm:gap-5">
            <h2 className="p-1 px-3 m-1 sm:m-0 bg-orange-100 rounded-full text-green-500 text-sm md:text-lg">
              📆 {trip.userSelection.totalDays} day
            </h2>
            <h2 className="p-1 px-3 m-1 sm:m-0 bg-orange-100 rounded-full text-green-500 text-sm md:text-lg">
              💸 {trip.userSelection.budget} Budget
            </h2>
            <h2 className="p-1 px-3 m-1 sm:m-0 bg-orange-100 rounded-full text-green-500 text-sm md:text-lg">
              🚵‍♀️ {trip.userSelection.travellers} Travellers
            </h2>
          </div>
        </div>
        <Button>
          <IoIosSend />
        </Button>
      </div>
    </div>
  );
}

export default SectionInfo;
