import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Photos = (props) => {
  const { t } = useTranslation();
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
 
};

export default Photos;
