import { HStack } from "@/components/global/atoms/hstack";
import { IconButton } from "@/components/global/atoms/icon-text-button";
import { Typography } from "@/components/global/atoms/typography";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const JumbotronSection = () => {
  const t = useTranslations("JumbotronSection");

  return (
    <HStack>
      <HStack align="start">
        <Image
          src="iconlocation.svg"
          alt="Jumbotron Image"
          width={40}
          height={40}
        />
        <Typography as={"h5"}>{t("title")}</Typography>
      </HStack>
      <IconButton
        iconRight={<ArrowRight className="size-4 text-primary" />}
        variant="outline"
        className="rounded-full bg-primary/20"
      >
        <span className="text-primary">{t("see_now")}</span>
      </IconButton>
    </HStack>
  );
};

export default JumbotronSection;
