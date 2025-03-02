"use client";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);
import AddStudent from "../AddStudent/page";
import { List } from "@/app/utilities/List";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
const Page = () => {
  const CustomButton = (props) => {
    return (
      <Button className="bg-red-500 text-white">
        <Trash />
      </Button>
    );
  };
  const [rowData, setRowData] = useState([
    {
      No: "1",
      Name: "Amir",
      Contact: 64950,
      Address: "Baghwanpora",
      Fee_Paid: true,
    },
    {
      No: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
    },
    { No: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  const [colDefs, setColDefs] = useState([
    { field: "No" },
    { field: "Name", filter: true },
    { field: "Contact" },
    { field: "Address" },
    { field: "Fee_Paid" },
    { field: "Action", cellRenderer: CustomButton },
  ]);

  return (
    <div>
      <AddStudent />
      <div>
        <h1 className="text-3xl font-bold ml-12">Students</h1>
        <input
          type="search"
          name="searchStu"
          id="srcStu"
          className="border-black bg-purple-200 p-3 ml-12 mt-4 w-96 h-9 rounded-lg"
        />

        {/* <Table className="ml-12 mt-4 w-[80%]">
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
        </Table> */}
        <div className="ml-20 mt-9" style={{ height: 300, width: 1200 }}>
          <AgGridReact rowData={rowData} columnDefs={colDefs} />
        </div>
      </div>
    </div>
  );
};
export default Page;
