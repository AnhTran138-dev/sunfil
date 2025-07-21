import React from "react";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageCallBackProps {
  image?: string;
  title?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const placeholderImage =
  "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";

const ImageCallBack: React.FC<ImageCallBackProps> = ({
  image,
  title,
  className,
  size = "md",
}) => {
  return (
    <div>
      <Image
        src={image || placeholderImage}
        alt={title || "Product Image"}
        width={50}
        height={50}
        className={cn(
          "w-full rounded-t-md object-contain",
          size === "sm" ? "h-32" : size === "lg" ? "h-56" : "h-44",
          className
        )}
      />
    </div>
  );
};

export default ImageCallBack;
