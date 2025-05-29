import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { VStack } from "../atoms/vstack";
import { Typography } from "../atoms/typography";
import { HStack } from "../atoms/hstack";

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
