import React from "react";
import s from "./MainPerson.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MainPerson = (props) => {
  const name = props.person.name_en.toLowerCase().split(" ").join("_");
  return (
    <div className={s.wrapper}>
      <h1>{"figure_of_the_day"}</h1>
      <img src={props.person.imgPath} alt="" />
      <div className={s.persname}>{name}</div>
      <div className={s.date}>
        ({props.person.dateOfBirth} - {props.person.dateOfDeath})
      </div>

    </div>
  );
};

export default MainPerson;