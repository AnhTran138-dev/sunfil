"use client";

import { HStack } from "@/components/atomic/hstack";
import TextDropShadow from "@/components/atomic/text-drop-shadow";
import { VStack } from "@/components/atomic/vstack";
import { useTranslations } from "next-intl";
import { Epilogue } from "next/font/google";
import React from "react";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "700"], // hoặc weight bạn muốn
});

const BannerSection = () => {
  const t = useTranslations("Banner");
  return (
    <div
      className="relative overflow-hidden bg-center bg-no-repeat bg-cover w-full max-w-8xl h-[300px] sm:h-[400px] md:h-[500px] mx-auto z-0"
      style={{
        backgroundImage: "url('/images/banner/Sunburst-Background-blue.jpg')",
      }}
    >
      <div
        className="absolute top-[80px] left-[40%] translate-x-[20%] w-[45%] max-w-[650px] h-[250px] sm:h-[350px] md:h-[400px] bg-center bg-no-repeat bg-contain z-10"
        style={{ backgroundImage: "url('/images/banner/devices.svg')" }}
      />
      <div
        className="absolute top-0 left-[45%] w-full max-w-4xl h-[300px] sm:h-[450px] md:h-[500px] bg-center bg-cover z-1 "
        style={{ backgroundImage: "url('/images/banner/splash-water.svg')" }}
      />
      <div className="absolute top-3 sm:top-5 left-0 bg-gradient-to-br from-white to-yellow-200 rounded-r-full px-6 py-0.5 sm:px-12 sm:py-2 font-bold  shadow-lg max-w-max">
        <span className="text-xs sm:text-lg text-rose-950 uppercase">
          {t("new_hot")}
        </span>
      </div>

      <VStack
        className={`${epilogue.className} absolute top-[60px] sm:top-[150px] left-[55%] translate-x-[-50%] text-center text-white z-30`}
      >
        <TextDropShadow
          label={t("download_app")}
          className="text-white font-bold uppercase"
        />
        <HStack>
          <TextDropShadow
            label={t("earn_points")}
            className="text-yellow-300 font-medium"
          />
          <TextDropShadow
            label={t("sunfil")}
            className="text-yellow-300 font-bold uppercase"
          />
        </HStack>

        <TextDropShadow
          label={`*100K = 10 ${t("points")}`}
          className="text-yellow-300 italic font-medium"
        />
      </VStack>
    </div>
  );
};

export default BannerSection;
