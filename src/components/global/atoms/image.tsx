import React from "react";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageCallBackProps {
  image?: string;
  title?: string;
  className?: string;
}

const placeholderImage =
  "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";

const ImageCallBack: React.FC<ImageCallBackProps> = ({
  image,
  title,
  className,
}) => {
  return (
    <div>
      <Image
        src={image || placeholderImage}
        alt={title || "Product Image"}
        width={200}
        height={200}
        className={cn(
          "w-full h-44 rounded-t-md lg:object-fill md:object-cover object-contain",
          className
        )}
      />
    </div>
  );
};

export default ImageCallBack;
