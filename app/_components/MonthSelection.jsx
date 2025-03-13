"use client";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import { addMonths } from "date-fns";
import moment from "moment";
import { Calendar } from "@/components/ui/calendar";

const MonthSelection = ({ selectedMonth }) => {
  const [month, setMonth] = useState(addMonths(new Date(), 0));

  const handleMonthChange = (value) => {
    if (!value || moment(value).isSame(month, "month")) return; //  Prevent unnecessary updates
    setMonth(value);
    selectedMonth(value);
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="flex gap-2  items-center text-slate-500"
          >
            <CalendarDays className="h-5 w-5" />
            {moment(month).format("MMM yyyy")}
          </Button>
        </PopoverTrigger>

        <PopoverContent>
          <Calendar
            mode="single"
            selected={month}
            onMonthChange={handleMonthChange}
            className="rounded-md border"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MonthSelection;
