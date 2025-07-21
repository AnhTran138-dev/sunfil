import { cn } from "@/lib/utils";
import React from "react";

interface OverlayProps {
  overlay: string | null;
}

const Overlay: React.FC<OverlayProps> = ({ overlay }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 bg-black/10 backdrop-blur-sm transition-opacity duration-300 w-full h-full",
        overlay ? "opacity-80" : "opacity-0 pointer-events-none"
      )}
      style={{ zIndex: 20 }}
    />
  );
};

export default Overlay;
