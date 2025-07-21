import { cn } from "@/lib/utils";
import React from "react";

interface TextDropShadowProps {
  label?: React.ReactNode;
  className?: string;
  color?: string;
}

const TextDropShadow = ({
  label,
  className,
  color = "1250EF",
}: TextDropShadowProps) => {
  return (
    <p
      className={cn("sm:text-3xl", className)}
      style={{
        filter: `
              drop-shadow(2px 0px 0px #${color})
              drop-shadow(-2px 0px 0px #${color})
              drop-shadow(0px 2px 0px #${color})
              drop-shadow(0px -2px 0px #${color})
              drop-shadow(1px 1px 0px #${color})
              drop-shadow(-1px -1px 0px #${color})
              drop-shadow(1px -1px 0px #${color})
              drop-shadow(-1px 1px 0px #${color})
            `,
      }}
    >
      {label}
    </p>
  );
};

export default TextDropShadow;
