import { HStack } from "@/components/atomic/hstack";
import { Typography } from "@/components/atomic/typography";
import { VStack } from "@/components/atomic/vstack";
import React from "react";

interface CardFeatureProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const CardFeature: React.FC<CardFeatureProps> = ({ icon, title, subtitle }) => {
  return (
    <HStack className="flex-row items-center gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      {icon}
      <VStack align="start" justify="start" gap="gap-1">
        <Typography fontWeight="medium" as={"h6"} variant="description">
          {title}
        </Typography>
        <Typography
          fontWeight="normal"
          as={"p"}
          variant="caption"
          className="text-start"
          color="muted"
        >
          {subtitle}
        </Typography>
      </VStack>
    </HStack>
  );
};

export default CardFeature;
