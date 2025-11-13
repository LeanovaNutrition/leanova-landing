"use client";

import { Toaster as Sonner, toast } from "sonner";
import { cn } from "@/lib/utils";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ className, ...props }: ToasterProps) => {
  return (
    <Sonner
      className={cn(className)}
      toastOptions={{
        className: "bg-black text-white",
      }}
      position="top-center"
      richColors
      {...props}
    />
  );
};

export { Toaster, toast };
