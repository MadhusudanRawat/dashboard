"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";

export default function SignupPage() {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null); // Error state


  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.loading("Loading...")
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    if (!result) {
      toast.dismiss()
      setError("There is some server issue"); // Show error
      return;
    }
    if (res.ok && result.success) {
      toast.dismiss()
      // setError(result.message); // Show error
      router.push("/");
    } else {
      toast.dismiss()
      setError(result.message); // Show error
    }

  };


  return (
    <div className="max-w-md w-full mt-10 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Create an account
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Enter your details below to create your account
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              value={formData.firstname}
              onChange={handleInputChange}  // Capture input change
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Durden"
              type="text"
              value={formData.lastname}
              onChange={handleInputChange}  // Capture input change
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={formData.email}
            onChange={handleInputChange}  // Capture input change
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            id="phoneNumber"
            placeholder="123456789"
            type="number"
            value={formData.phoneNumber}
            onChange={handleInputChange}  // Capture input change
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={formData.password}
            onChange={handleInputChange}  // Capture input change
          />
        </LabelInputContainer>
        {error && (
          <div className="flex justify-center p-2">
            <p className="text-red-500 text-1xl font-semibold">
              {error}
            </p>
          </div>
        )}
        <Button variant="gradient" size="lg" type="submit">
          Sign up &rarr;
        </Button>

      </form>
      <p className="flex justify-center">You already have an account? {" "}<a href="/" className="font-bold hover:text-blue-500 duration-200"> Login</a></p>
    </div>
  );
}


const LabelInputContainer = ({ children, className }: any) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
