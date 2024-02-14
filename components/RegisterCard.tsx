"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import PasswordInput from "./PasswordInput";

const RegisterCard = () => {
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [passwordState, setPasswordState] = useState(false);

  const [confirmPasswordInputType, setConfirmPasswordInputType] = useState("password");
  const [confirmPasswordState, setConfirmPasswordState] = useState(false);

  const togglePasswordState = () => {
    setPasswordState(!passwordState);
    setPasswordInputType(passwordState ? "password" : "text");
  };

  const toggleConfirmPasswordState = () => {
    setConfirmPasswordState(!confirmPasswordState);
    setConfirmPasswordInputType(confirmPasswordState ? "password" : "text");
  };

  return (
    <Card>
      <CardHeader className="text-center text-pretty">
        <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight">
          Are you joining?
        </CardTitle>
        <CardDescription>Let&apos;s start with your personal information</CardDescription>
      </CardHeader>
      <CardContent>
        <form action="" className="grid gap-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="FirstName">First Name</Label>
            <Input id="FirstName" placeholder="e.g. Juan" />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="LastName">Last Name</Label>
            <Input id="LastName" placeholder="e.g. Dela Cruz" />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="Email">Email</Label>
            <Input id="Email" placeholder="name@lbrdc.com.ph" />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="Password">Password</Label>
            <PasswordInput id="Password" minimumCount={8} toggle={true} />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="ConfirmPassword">Confirm Password</Label>
            <PasswordInput id="ConfirmPassword" minimumCount={8} toggle={true} />
          </div>
          <Button type="submit">Continue</Button>
        </form>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-center w-full">
          By clicking continue, you agree to our
          <span>
            <Button variant={"link"} size={"sm"} className="px-1 h-4">
              Terms of Service
            </Button>
          </span>
          and
          <span>
            <Button variant={"link"} size={"sm"} className="px-1 h-4">
              Privacy Policy
            </Button>
          </span>
        </p>
      </CardFooter>
    </Card>
  );
};

export default RegisterCard;
