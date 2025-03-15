"use client";
import Attendance_grid from "@/app/_components/Attendance_grid";
import MonthSelection from "@/app/_components/MonthSelection";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const Attendance = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const onSearchHandler = () => {
    console.log("Selected Month:", selectedMonth);
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold"> Attendance </h2>

      {/* Month Option */}
      <div className="flex gap-3 mt-5 items-center p-3 rounded-lg shadow-lg">
        <label>Select Month:</label>
        <MonthSelection selectedMonth={setSelectedMonth} />
        <Button onClick={onSearchHandler}>Search</Button>
      </div>

      <Attendance_grid
        // attendanceList={attendanceList}
        selectedMonth={selectedMonth}
      />
    </div>
  );
};

export default Attendance;
