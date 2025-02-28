"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
function AddStudent() {
  const [count, setCount] = useState(0);
  const [open, setopen] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("FormData:", data);
  };
//   const handleClick = () => {
//     alert("clicked");
//     setCount((count) => count + 1);
//   };
  return (
    <div>
      <div className="ml-12 mt-4 gap-4 flex justify-between m-4">
        <div className=" mt-5 items-center justify-center rounded-3xl">
          Total Student Count : {count}
        </div>
        <Button
          onClick={() => setopen(true)}
          className="border rounded-3xl w-40 bg-purple-400 p-5 text-white font-bold"
        >
          Add Student +
        </Button>
        <Dialog open={open}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New student ...</DialogTitle>
              <DialogDescription>
                <div>

                
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <div className="mt-3">
                      <label htmlFor="name">Name</label>
                      <Input
                        placeholder="Ex. Amir"
                        {...register("name", { required: true })}
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="name">Address</label>
                      <Input
                        placeholder="Ex. balhama"
                        {...register("address", { required: true })}
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="name">Contact Number</label>
                      <Input
                        placeholder="Ex. 9100000000"
                        {...register("Contact", { required: true })}
                      />
                    </div>{" "}
                  </div>
                  <div className="flex justify-between gap-3 mt-3 ">
                    <Button variant="outline" onClick={() => setopen(false)}>
                      Cancel{" "}
                    </Button>
                    <Button
                      className="bg-violet-500"
                      //   onClick={() => alert("saved")}
                      type="submit  "
                    >
                      Save{" "}
                    </Button>
                  </div>
                </form>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default AddStudent;
