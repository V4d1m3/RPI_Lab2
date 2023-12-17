import React from "react";
import s from "./site.css";
import Navbar from "./components/navbar/Navbar";
import MainPage from "./MainPage";
import PersonalPage from "./components/personalpage/PersonalPage";
import scammersInfo from "./components/portalinfo/scammersInfo";

const getRandomPerson = () => {
  let id = Math.floor(Math.random() * 5) + 1;
  let randomPerson;
  scammersInfo.map((person) => {
    if (person.id === id) randomPerson = person;
  });

  return randomPerson;
};

const Site = () => (
//НАПИСАТЬ ОТОБРАЖЕНИЕ СЛУЧАЙНОГО МОШЕННИКА
);

export default Site;
