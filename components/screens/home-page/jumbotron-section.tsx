import { HStack } from "@/components/atomic/hstack";
import { IconButton } from "@/components/atomic/icon-text-button";
import { Typography } from "@/components/atomic/typography";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const JumbotronSection = () => {
  const t = useTranslations("JumbotronSection");

  return (
    <React.Fragment>
      <HStack align="center">
        <Image
          src="/icons/policy/iconlocation.svg"
          alt="Jumbotron Image"
          width={40}
          height={40}
        />
        <Typography as={"h5"}>{t("title")}</Typography>
      </HStack>
      <IconButton
        iconRight={<ArrowRight className="size-4 text-primary" />}
        variant="outline"
        className="rounded-full bg-background"
      >
        <span className="text-primary">{t("see_now")}</span>
      </IconButton>
    </React.Fragment>
  );
};

export default JumbotronSection;
