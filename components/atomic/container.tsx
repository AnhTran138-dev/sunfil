import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <section
      className={cn(
        "flex mx-auto max-w-8xl w-full px-4 md:px-10 sm:px-20",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Container;
