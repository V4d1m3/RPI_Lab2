import React from "react";
import MakersSearch from "./MakersSearch";
import scammersInfo from "../portalinfo/scammersInfo.js";

const MakersList = () => (
  <div>
    <MakersSearch details={scammersInfo} />
  </div>
);

export default MakersList;
