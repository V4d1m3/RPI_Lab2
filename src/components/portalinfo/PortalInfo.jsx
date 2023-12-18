import React from "react";
import s from "./PortalInfo.module.css";
import { useTranslation } from "react-i18next";

const PortalInfo = () => {
  const { t } = useTranslation();
  let maintitle_en = "Famous Scammers";
  const name = maintitle_en.toLowerCase().split(" ").join("_");
  let portaltext_en = "Portal Text";
  const text = portaltext_en.toLowerCase().split(" ").join("_");
  return (
    <div className={s.wrapper}>
      <div className={s.name}>{t(name)}</div>
      <div className={s.disc}>{t(text)}</div>
      <div className={s.decs}><h1>{t("description_1")}</h1></div>
    </div>
  );
};

export default PortalInfo;
