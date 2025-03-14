"use client";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);
import AddStudent from "../AddStudent/page";
import { List } from "@/app/utilities/List";
import { useState } from "react";

import { Search, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

const pagination = true;
const paginationPageSize = 10;
const paginationPageSizeSelector = [4, 8, 12, 16, 24];
const Page = () => {
  const CustomButton = (props) => {
    return (
      <AlertDialog>
        <AlertDialogTrigger>
          <Button className="bg-red-500 text-white">
            <Trash />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              record and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteRecord()}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };
  const [rowData, setRowData] = useState([
    {
      No: "1",
      Name: "Amir",
      Contact: 84964651,
      Address: "Maisuma",
      "Fee Paid": false,
    },
    {
      No: "2",
      Name: "ishrat",
      Contact: 5647891,
      Address: "lal  bazar",
      "Fee Paid": true,
    },
    {
      No: "3",
      Name: "sabeena",
      Contact: 45696461,
      Address: "hyderpora",
      "Fee Paid": false,
    },
    {
      No: "4",
      Name: "neimar",
      Contact: 6991545521,
      Address: "indranagar",
      "Fee Paid": true,
    },
    {
      No: "5",
      Name: "Fozia",
      Contact: 12365431232,
      Address: "SanatNagar",
      "Fee Paid": true,
    },
  ]);

  const [colDefs, setColDefs] = useState([
    { field: "No" },
    { field: "Name", filter: true },
    { field: "Contact" },
    { field: "Address" },
    { field: "Fee Paid" },
    { field: "Action", cellRenderer: CustomButton },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const deleteRecord = () => {
    toast("Record deleted succesfully ");
  };
  return (
    <div>
      <AddStudent />
      <div className="ml-0">
        <h1 className="text-3xl font-bold ml-12">Students</h1>
        <div className="SearchButton my-2 ml-14 flex p-2 gap-2 shadow-sm mb-4 max-w-sm rounded-lg ">
          <Search />
          <input
            type="search"
            name="searchStu"
            id="srcStu"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none w-full"
            placeholder="Search..."
          />
        </div>

        <div className=" mt-9 " style={{ height: 300, width: 1200 }}>
        <div className="h-[400px] w-full max-w-[100vw] mx-12">
          <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            quickFilterText={searchTerm}
            pagination={pagination}
            paginationPageSize={paginationPageSize}
            paginationPageSizeSelector={paginationPageSizeSelector}
          />
        </div>
      </div>
      </div>
    </div>
  );
};
export default Page;
