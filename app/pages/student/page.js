"use client";
import React, { useState } from "react";
import { List } from "@/app/utilities/List";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Page = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    // alert("clicked");
    setCount((count) => count + 1);
  };
  return (
    <div>
      <div className="ml-12 mt-4 gap-4 flex justify-between m-4">
        <div className=" mt-5 items-center justify-center rounded-3xl">
          Total Student Count : {count}
        </div>
        <button
          onClick={handleClick}
          className="border rounded-3xl w-40 bg-purple-400 p-3 text-white font-bold"
        >
          Add Student +
        </button>
      </div>
      <div>
        <h1 className="text-3xl font-bold ml-12">Students</h1>
        <input
          type="search"
          name="searchStu"
          id="srcStu"
          className="border-black bg-purple-200 p-3 ml-12 mt-4 w-96 h-9 rounded-lg"
        />

        <Table className="ml-12 mt-4 w-[80%]">
          <TableCaption>List of Students</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">ID</TableHead>
              <TableHead className="w-[250px]">Name</TableHead>
              <TableHead className="w-[250px]">Grade</TableHead>
              <TableHead className="text-right w-[60px]">Contact</TableHead>
              <TableHead className="text-right w-[150px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {List.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell className="font-medium">{item.Name}</TableCell>
                <TableCell>awal</TableCell>
                <TableCell className="text-right">{item.Contact}</TableCell>
                <TableCell className="text-right">{item.Action}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Page;
