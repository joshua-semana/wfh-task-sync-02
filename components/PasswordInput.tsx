"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useState } from "react";

interface Props {
  id: string;
  minimumCount?: number;
  toggle?: boolean;
}

const PasswordInput = ({ id, minimumCount, toggle }: Props) => {
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [passwordState, setPasswordState] = useState(false);

  const togglePasswordState = () => {
    setPasswordState(!passwordState);
    setPasswordInputType(passwordState ? "password" : "text");
  };

  return (
    <div className="flex gap-2">
      <Input
        type={passwordInputType}
        id={id}
        placeholder={minimumCount != null ? `minimum of ${minimumCount} characters` : ""}
      />
      {toggle !== null && toggle && (
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
      )}
    </div>
  );
};

export default PasswordInput;
