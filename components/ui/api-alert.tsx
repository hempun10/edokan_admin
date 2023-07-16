"use client";
import { ApiAlertTypes } from "@/types/type";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { Copy, Server } from "lucide-react";
import { Badge, BadgeProps } from "./badge";
import { Button } from "./button";
import { toast } from "react-hot-toast";

const textMap: Record<ApiAlertTypes["varient"], string> = {
  public: "Public",
  admin: "Admin",
};
const varientMap: Record<ApiAlertTypes["varient"], BadgeProps["variant"]> = {
  public: "secondary",
  admin: "destructive",
};

export const ApiAlert = ({
  title,
  description,
  varient = "public",
}: ApiAlertTypes) => {
  const onCopy = () => {
    navigator.clipboard.writeText(description);
    toast.success("Copied");
  };
  return (
    <Alert>
      <Server className=" h-4 w-4" />
      <AlertTitle className=" flex items-center gap-x-2">
        {title}

        <Badge variant={varientMap[varient]}>{textMap[varient]}</Badge>
      </AlertTitle>
      <AlertDescription className=" mt-4  flex items-center justify-between">
        <code className=" relative rounded bg-muted px-[0.3rem] py-[0.2rem]  font-mono text-sm font-semibold">
          {description}
        </code>
        <Button variant={"outline"} size={"icon"} onClick={onCopy}>
          <Copy className=" h-4 w-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
};
