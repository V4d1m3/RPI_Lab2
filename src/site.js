import React from "react";
import s from "./site.css";
import Navbar from "./components/navbar/Navbar";
import MainPage from "./MainPage";
import List from "./components/makers/MakersList";
import PersonalPage from "./components/personalpage/PersonalPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
  <BrowserRouter>
    <div className={s.wrapper}>
      <Navbar />
      <div>
        <Routes>
          <Route
            path="/*"
            element={<MainPage mainPerson={getRandomPerson()} />}
          />
          <Route path="/list" element={<List />} />
          {scammersInfo.map((person, i) => (
            <Route
              key={i}
              path={person.url}
              element={<PersonalPage info={person} />}
            />
          ))}
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default Site;
