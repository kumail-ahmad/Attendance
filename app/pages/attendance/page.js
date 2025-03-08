import MonthSelection from "@/app/_components/MonthSelection";
import { Button } from "@/components/ui/button";
import React from "react";

const Attendance = () => {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold"> Attendance </h2>

      {/* Search Option */}
      <div className="flex gap-3 mt-5 items-center">
        <label>Select Month:</label>
        <MonthSelection />
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default Attendance;
