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
          {" "}
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
      <div>
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
  );
};
export default Page;
