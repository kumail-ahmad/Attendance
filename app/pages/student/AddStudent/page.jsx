"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { LoaderIcon } from "lucide-react";

function AddStudent() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    console.log("FormData:", data);
    setLoading(true);

    // Simulating API request delay
    setTimeout(() => {
      reset();
      setOpen(false);
      setCount((count) => count + 1); 
      setLoading(false);
      toast("Student has been added !!!");
    }, 2000);
  };

  return (
    <div>
      <div className="ml-12 mt-4 gap-4 flex justify-between m-4">
        <div className="mt-5 items-center justify-center rounded-3xl">
          Total Student Count: {count}
        </div>
        <Button
          onClick={() => setOpen(true)}
          className="border rounded-3xl w-40 bg-purple-400 p-5 text-white font-bold"
        >
          Add Student +
        </Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Student</DialogTitle>
              
                <div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                      <div className="mt-3">
                        <label htmlFor="name">Name</label>
                        <Input
                          placeholder="Ex. Amir"
                          {...register("name", { required: true })}
                        />
                      </div>
                      <div className="mt-3">
                        <label htmlFor="address">Address</label>
                        <Input
                          placeholder="Ex. Balhama"
                          {...register("address", { required: true })}
                        />
                      </div>
                      <div className="mt-3">
                        <label htmlFor="contact">Contact Number</label>
                        <Input
                          type="number"
                          placeholder="Ex. 9100000000"
                          {...register("contact", { required: true })}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between gap-3 mt-3">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="bg-violet-500 flex items-center justify-center"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? (
                          <LoaderIcon className="animate-spin" size={20} />
                        ) : (
                          "Save"
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
           
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default AddStudent;
