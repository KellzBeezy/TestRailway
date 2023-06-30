import React from "react";
import WidgetChart3 from "../Dashboard/WidgetChart3";

const WalletComponent = () => {
  return (
    <>
      <div className="col-xl-12">
        <div className="card overflow-hidden">
          <div className="card-header d-sm-flex d-block border-0 pb-0">
            <div className="mb-sm-0 mb-2">
              <p className="fs-14 mb-1 font-w700">Weekly Wallet Usage</p>
              <span className="mb-0">
                <svg
                  width="12"
                  height="6"
                  viewBox="0 0 12 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9999 6L5.99994 -2.62268e-07L-6.10352e-05 6"
                    fill="#2BC155"
                  />
                </svg>
                <strong className="fs-32 text-black ms-2 me-3 font-w800">
                  43%
                </strong>
                Than last week
              </span>
            </div>
            <span className="fs-12">
              <svg
                className="me-1"
                width="21"
                height="15"
                viewBox="0 0 21 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.999939 13.5C1.91791 12.4157 4.89722 9.22772 6.49994 7.5L12.4999 10.5L19.4999 1.5"
                  stroke="#2BC155"
                  strokeWidth="2"
                />
                <path
                  d="M6.49994 7.5C4.89722 9.22772 1.91791 12.4157 0.999939 13.5H19.4999V1.5L12.4999 10.5L6.49994 7.5Z"
                  fill="url(#paint0_linear2)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear2"
                    x1="10.2499"
                    y1="3"
                    x2="10.9999"
                    y2="13.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#2BC155" stopOpacity="0.73" />
                    <stop offset="1" stopColor="#2BC155" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              4% (30 days)
            </span>
          </div>
          <div className="card-body p-0">
            {/* <canvas id="widgetChart3" height="80"></canvas> */}
            <WidgetChart3 />
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletComponent;
