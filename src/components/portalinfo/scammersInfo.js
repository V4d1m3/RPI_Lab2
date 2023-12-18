import fa from "../../img/scammers/abignale/fa.jpg";
import fa1 from "../../img/scammers/abignale/fa1.jpg";
import fa2 from "../../img/scammers/abignale/fa2.jpg";
import fa3 from "../../img/scammers/abignale/fa3.jpg";

import ms from "../../img/scammers/mavrody/ms.jpg";
import ms1 from "../../img/scammers/mavrody/ms1.jpg";
import ms2 from "../../img/scammers/mavrody/ms2.jpg";
import ms3 from "../../img/scammers/mavrody/ms3.jpg";

import fua from "../../img/scammers/furguson/fua.jpg";
import fua1 from "../../img/scammers/furguson/fua1.jpg";
import fua2 from "../../img/scammers/furguson/fua2.jpg";
import fua3 from "../../img/scammers/furguson/fua3.jpg";

import lv from "../../img/scammers/lustig/lv.jpg";
import lv1 from "../../img/scammers/lustig/lv1.jpg";
import lv2 from "../../img/scammers/lustig/lv2.jpg";
import lv3 from "../../img/scammers/lustig/lv3.jpg";

const scammersInfo = [
  {
    id: 1,
    imgPath: fa,
    name: "Фрэнк Абигнейл",
    name_en: "Frank Abignale",
    dateOfBirth: 1948,
    dateOfDeath: "Not dead",
    someText:
      "Один из самых известных фальшомонетчиков в мире, его история легла в основу сценария фильма Поймай меня если сможешь",
    photos: [fa1, fa2, fa3],
    links: ["https://www.youtube.com/embed/vsMydMDi3rI"],
    coordinates: {
      longitude: 27.59492781890053,
      latitude: 53.912542245793226,
    },
    url: "/abignale",
  },
  {
    id: 2,
    imgPath: ms,
    name: "Сергей Мавроди",
    name_en: "Sergey Mavrody",
    dateOfBirth: 1955,
    dateOfDeath: 2018,
    someText: "Создатель всеми звестной пирамиды МММ",
    photos: [ms1, ms2, ms3],
    links: ["https://www.youtube.com/embed/z42XT8KwXgU"],
    coordinates: {
      longitude: 27.59492781890053,
      latitude: 53.912542245793226,
    },
    url: "/mavrody",
  },
  {
    id: 3,
    imgPath: fua,
    name: "Артур Фергюсон",
    name_en: "Arthur Furguson",
    dateOfBirth: 1890,
    dateOfDeath: 1938,
    someText:
      "«Продал» Белый дом. Попытался продать Статую Свободы",
    photos: [fua1, fua2, fua3],
    links: ["https://www.youtube.com/embed/Xj9tV30V26k?t=1924"],
    //links: ["https://www.youtube.com/embed/z42XT8KwXgU"],
    coordinates: {
      longitude: 27.59492781890053,
      latitude: 53.912542245793226,
    },
    url: "/furguson",
  },
  {
    id: 4,
    imgPath: lv,
    name: "Виктор Люстиг",
    name_en: "Victor Lustig",
    dateOfBirth: 1890,
    dateOfDeath: 1947,
    someText:
      "Мошенник и аферист. Мировую известность приобрёл как «человек, продавший Эйфелеву башню. Дважды»",
    photos: [lv1, lv2, lv3],
    links: ["https://www.youtube.com/embed/xSftC7sv_j8"],
    coordinates: {
      longitude: 27.59492781890053,
      latitude: 53.912542245793226,
    },
    url: "/lustig",
  },
];

export default scammersInfo;