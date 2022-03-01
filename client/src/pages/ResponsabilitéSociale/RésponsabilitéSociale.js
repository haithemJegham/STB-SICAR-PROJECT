import React from "react";
import { InfoSection } from "../../components";
import {homeObjThree,homeObjFour } from "./Data";
const ResponsabilitéSociale = () => {
  return (
    <>
      
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default ResponsabilitéSociale;