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
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useState } from "react";

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
            <div className="flex gap-2">
              <Input type={passwordInputType} id="password" placeholder="minimum of 8 characters" />
              <Button
                onClick={togglePasswordState}
                type="button"
                variant={"outline"}
                size={"icon"}
                className="flex-none">
                {passwordState ? (
                  <EyeClosedIcon className="size-4" />
                ) : (
                  <EyeOpenIcon className="size-4" />
                )}
              </Button>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="ConfirmPassword">Confirm Password</Label>
            <div className="flex gap-2">
              <Input
                type={confirmPasswordInputType}
                id="password"
                placeholder="re-enter your password"
              />
              <Button
                onClick={toggleConfirmPasswordState}
                type="button"
                variant={"outline"}
                size={"icon"}
                className="flex-none">
                {confirmPasswordState ? (
                  <EyeClosedIcon className="size-4" />
                ) : (
                  <EyeOpenIcon className="size-4" />
                )}
              </Button>
            </div>
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
