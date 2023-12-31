import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <div
    className={cn("mx-auto w-full max-w-sceen-x1 px-2.5 md:px-20", className)}
  >
    {children}
  </div>
);
