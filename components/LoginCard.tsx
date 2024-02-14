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
import PasswordInput from "./PasswordInput";

const LoginCard = () => {
  return (
    <Card>
      <CardHeader className="text-center text-pretty">
        <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight">
          Welcome to Task Sync
        </CardTitle>
        <CardDescription>Enter your credentials below to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form action="" className="grid gap-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="name@lbrdc.com.ph" />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="password">Password</Label>
            <PasswordInput id="password" />
          </div>
          <Button type="submit">Login</Button>
        </form>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-center w-full">
          Forgot your password?{" "}
          <span>
            <Button variant={"link"} size={"sm"} className="px-0 h-4">
              Click here
            </Button>
          </span>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
