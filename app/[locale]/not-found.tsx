import { useTranslations } from "next-intl";
import React from "react";

const NotFound = () => {
  const t = useTranslations("NotFoundPage");
  return <div>{t("title")}</div>;
};

export default NotFound;
