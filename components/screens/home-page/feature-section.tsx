import CardFeature from "@/components/molecules/card/card-feature";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const FeatureSection = () => {
  const t = useTranslations("Button");

  const featureList: Feature[] = [
    {
      icon: (
        <Image
          className="object-center"
          src="/icons/policy/iconmoney.svg"
          alt="iconmoney"
          width={40}
          height={40}
        />
      ),
      title: t("free_shipping"),
      subtitle: t("subTitle_free_shipping"),
    },
    {
      icon: (
        <Image
          className="object-center"
          src="/icons/policy/iconsupport.svg"
          alt="iconsupport"
          width={40}
          height={40}
        />
      ),
      title: t("support"),
      subtitle: t("subTitle_support"),
    },
    {
      icon: (
        <Image
          className="object-center"
          src="/icons/policy/icondelivery.svg"
          alt="icondelivery"
          width={40}
          height={40}
        />
      ),
      title: t("fast_delivery"),
      subtitle: t("subTitle_fast_delivery"),
    },
    {
      icon: (
        <Image
          className="object-center"
          src="/icons/policy/iconpackage.svg"
          alt="iconpackage"
          width={40}
          height={40}
        />
      ),
      title: t("return_policy"),
      subtitle: t("subTitle_return_policy"),
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
      {featureList.map((feature, index) => (
        <CardFeature
          key={index}
          icon={feature.icon}
          title={feature.title}
          subtitle={feature.subtitle}
        />
      ))}
    </div>
  );
};

export default FeatureSection;
