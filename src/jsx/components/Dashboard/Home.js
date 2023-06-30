import React, { useContext, useEffect } from "react";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

///Images

//Import Components
import { ThemeContext } from "../../../context/ThemeContext";

import PreviousTransactions from "./Dashboard/PreviousTransactions";

const TopRow = loadable(() => pMinDelay(import("./TopRow/TopRow"), 100));
const MiddleBody = loadable(() =>
  pMinDelay(import("./MiddleBody/MiddleBody"), 100)
);
const LowerBody = loadable(() =>
  pMinDelay(import("./LowerBody/LowerBody"), 100)
);
const Wallet = loadable(() =>
  pMinDelay(import("./LowerBody/WalletComponent"), 100)
);
const LowerMiddleBody = loadable(() =>
  pMinDelay(import("./MiddleBody/LowerMiddleBody"), 100)
);
const LeftBody = loadable(() =>
  pMinDelay(import("./MiddleBody/LeftBody"), 100)
);
const RightBody = loadable(() =>
  pMinDelay(import("./MiddleBody/RightBody"), 100)
);

const Home = () => {
  const { changeBackground } = useContext(ThemeContext);
  useEffect(() => {
    changeBackground({ value: "light", label: "Light" });
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="row">
            <TopRow />
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row">
            <LeftBody />
            <LowerMiddleBody />
            <LowerBody />
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row">
            <MiddleBody />
            <RightBody />
            <div className="col-xl-12">
              <PreviousTransactions />
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row">
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-6 col-xxl-12 col-sm-6">
                  <Wallet />
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
