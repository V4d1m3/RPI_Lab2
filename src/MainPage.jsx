import React from "react";
import PortalInfo from "./components/portalinfo/PortalInfo";
import MainPerson from "./components/mainperson/MainPerson";
import DevelopersInfo from "./components/devinfo/DevsInfo";
import developersInfo from "./components/devinfo/developersInfo";

const MainPage = (props) => {
  return (
    <div>
      <PortalInfo />
      <MainPerson person={props.mainPerson} />
      <DevelopersInfo info={developersInfo} />
    </div>
  );
};

export default MainPage;