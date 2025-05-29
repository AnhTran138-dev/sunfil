"use client";

import { VStack } from "@/components/global/atoms/vstack";
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
      className="relative overflow-hidden bg-center bg-no-repeat bg-cover w-full max-w-[1440px] h-[300px] sm:h-[400px] md:h-[500px] mx-auto"
      style={{ backgroundImage: "url('/images/Sunburst-Background-blue.jpg')" }}
    >
      <div
        className="absolute top-[80px] left-[40%] translate-x-[20%] w-[45%] max-w-[650px] h-[250px] sm:h-[350px] md:h-[400px] bg-center bg-no-repeat bg-contain z-20"
        style={{ backgroundImage: "url('/devices.svg')" }}
      />
      <div
        className="absolute top-0 left-[45%] w-[60%] max-w-[900px] h-[300px] sm:h-[450px] md:h-[500px] bg-center bg-cover z-10"
        style={{ backgroundImage: "url('/splash-water.svg')" }}
      />
      <div className="absolute top-5 left-0 bg-gradient-to-br from-white to-yellow-200 rounded-r-full px-12 py-2 uppercase font-bold text-lg text-rose-950 shadow-lg max-w-max">
        <span>{t("new_hot")}</span>
      </div>

      <VStack
        className={`${epilogue.className} absolute top-[150px] left-[55%] translate-x-[-50%] text-center text-white z-30`}
      >
        <span
          className="text-5xl text-white font-bold uppercase"
          style={{
            textShadow: `
              4px 0 0 #1250EF,
              -4px 0 0 #1250EF,
              0 4px 0 #1250EF,
              0 -4px 0 #1250EF,
              4px 4px 0 #1250EF,
              -4px -4px 0 #1250EF,
              4px -4px 0 #1250EF,
              -4px 4px 0 #1250EF
            `,
          }}
        >
          {t("download_app")}
        </span>

        <span className="text-yellow-300 text-3xl font-medium">
          {t("earn_points")} <span className="font-bold">{t("sunfil")}</span>
        </span>
        <span className="text-yellow-300 text-3xl italic font-medium">
          *100K = 10 {t("points")}
        </span>
      </VStack>
    </div>
  );
};

export default BannerSection;
