"use client";

import React from "react";
import { TopBanner } from "./top-banner";
import { Navigation } from "./navigation";
import Overlay from "@/components/atomic/overlay";

const Header = () => {
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);

  return (
    <React.Fragment>
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg">
        <TopBanner />
        <Navigation setHoveredItem={setHoveredItem} hoveredItem={hoveredItem} />
      </header>
      <Overlay overlay={hoveredItem} />
    </React.Fragment>
  );
};

export default Header;
