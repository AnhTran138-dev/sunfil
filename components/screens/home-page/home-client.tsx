"use client";

import React from "react";

import BannerSection from "@/components/screens/home-page/banner-section";
import FeatureSection from "@/components/screens/home-page/feature-section";
import { useSyncParamsToUrl } from "@/hooks/use-sync-params-to-url";
import { useProductParamsStore } from "@/stores/use-params";
import CarouselProductsBanner from "./carousel-products-banner";
import ProductsSection from "./products-section";
import JumbotronSection from "./jumbotron-section";
import Container from "@/components/atomic/container";

const HomeClient = () => {
  useSyncParamsToUrl(useProductParamsStore);

  return (
    <React.Fragment>
      <Container className="flex flex-col">
        <section className="rounded-2xl bg-blue-700 overflow-hidden">
          <BannerSection />
          <CarouselProductsBanner />
        </section>
        <section className="grid grid-cols-10 gap-4 mt-8 ">
          <ProductsSection />
        </section>
        <section>
          <FeatureSection />
        </section>
      </Container>
      <section className="py-10 bg-primary/20 border-dotted border border-primary w-full">
        <Container className="flex justify-between w-full">
          <JumbotronSection />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default HomeClient;
