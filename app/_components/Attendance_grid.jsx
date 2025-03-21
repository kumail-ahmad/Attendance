"use client";
import React, { useState, useEffect } from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import moment from "moment";

const Attendance_grid = ({ attendanceList, selectedMonth }) => {
  const [rowData, setRowData] = useState([
    {
      No: "1",
      Name: "Amir",
      Contact: 84964651,
      Address: "Maisuma",
      "Fee Paid": false,
    },
    { No: "2", Name: "ishrat", Contact: 5647891, Address: "lal bazar" },
    {
      No: "3",
      Name: "sabeena",
      Contact: 45696461,
      Address: "hyderpora",
      "Fee Paid": false,
    },
    { No: "4", Name: "neimar", Contact: 6991545521, Address: "indranagar" },
    { No: "5", Name: "Fozia", Contact: 12365431232, Address: "SanatNagar" },
  ]);

  const [colDefs, setColDefs] = useState([
    { field: "No" },
    { field: "Name", filter: true },
  ]);

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  // Ensure selectedMonth is not null
  const safeSelectedMonth = selectedMonth || moment().format("YYYY-MM");

  const year = moment(safeSelectedMonth, "YYYY-MM").year();
  const month = moment(safeSelectedMonth, "YYYY-MM").month();

  const numberOfDays = daysInMonth(year, month);
  const daysArray = Array.from({ length: numberOfDays }, (_, i) => i + 1);

  console.log("Days Array:", daysArray);

  const getUniqueRecord = () => {
    return [...new Map(rowData.map((item) => [item.No, item])).values()];
  };

  useEffect(() => {
    const userList = getUniqueRecord();

    userList.forEach((obj) => {
      daysArray.forEach((date) => {
        obj[date] = false;
      });
    });

    setRowData(userList);

    setColDefs([
      { field: "No" },
      { field: "Name", filter: true },
      ...daysArray.map((date) => ({
        field: date.toString(),
        headerName: `${date}`,
        width: 50,
        editable: true,
        cellRenderer: "agCheckboxCellRenderer",
      })),
    ]);
  }, [attendanceList, selectedMonth]);

  return (
    <div>
      {/* Student grid */}
      <div className="mt-6" style={{ height: 500 }}>
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div>
    </div>
  );
};

export default Attendance_grid;
