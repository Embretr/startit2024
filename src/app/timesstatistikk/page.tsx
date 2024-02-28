// HomePage.tsx eller App.tsx
import React from "react";
import PeriodeInput from "../_components/inputComponents/periode";
import AnsattInput from "../_components/inputComponents/ansatt";
import AvdelingInput from "../_components/inputComponents/avdeling";
import TimeListeTabell from "../_components/timeListeTabell";

const HomePage = () => {
  return (
    <div>
      <h1 className="ml-10 text-3xl font-medium">Timeliste</h1>
      <div className="mb-10 ml-10 flex">
        <div className="mr-4 mt-1.5">
          <PeriodeInput onChange={() => {}} />
        </div>

        <div className="mr-4">
          <AvdelingInput onChange={() => {}} />
        </div>
        <div className="mr-4">
          <AnsattInput onChange={() => {}} />
        </div>
      </div>

      <TimeListeTabell />
    </div>
  );
};

export default HomePage;
