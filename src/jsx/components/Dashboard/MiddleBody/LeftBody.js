import React from "react";

import DonutChart from "../Dashboard/DonutChart";

const LeftBody = () => {
  return (
    <>
      <div className="col-xl-12">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-xl-5 col-xxl-12 col-md-5">
                <h4 className="fs-20 text-black mb-4 font-w700">Spendings</h4>
                <div className="row">
                  <div className="d-flex col-xl-12 col-xxl-6  col-md-12 col-6 mb-4">
                    <svg
                      className="me-3"
                      width="14"
                      height="54"
                      viewBox="0 0 14 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="-6.10352e-05"
                        width="14"
                        height="54"
                        rx="7"
                        fill="#AC39D4"
                      />
                    </svg>
                    <div>
                      <p className="fs-14 mb-2">Investment</p>
                      <span className="fs-16 font-w600 text-light">
                        <span className="text-black me-2 font-w700">
                          $1,567
                        </span>
                        /$5,000
                      </span>
                    </div>
                  </div>
                  <div className="d-flex col-xl-12 col-xxl-6 col-md-12 col-6 mb-4">
                    <svg
                      className="me-3"
                      width="14"
                      height="54"
                      viewBox="0 0 14 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="-6.10352e-05"
                        width="14"
                        height="54"
                        rx="7"
                        fill="#40D4A8"
                      />
                    </svg>
                    <div>
                      <p className="fs-14 mb-2">Installment</p>
                      <span className="fs-16 font-w600 text-light">
                        <span className="text-black me-2 font-w700">
                          $1,567
                        </span>
                        /$5,000
                      </span>
                    </div>
                  </div>
                  <div className="d-flex col-xl-12 col-xxl-6 col-md-12 col-6 mb-4">
                    <svg
                      className="me-3"
                      width="14"
                      height="54"
                      viewBox="0 0 14 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="-6.10352e-05"
                        width="14"
                        height="54"
                        rx="7"
                        fill="#1EB6E7"
                      />
                    </svg>
                    <div>
                      <p className="fs-14 mb-2">Restaurant</p>
                      <span className="fs-16 font-w600 text-light">
                        <span className="text-black me-2 font-w700">
                          $1,567
                        </span>
                        /$5,000
                      </span>
                    </div>
                  </div>
                  <div className="d-flex col-xl-12 col-xxl-6 col-md-12 col-6 mb-4">
                    <svg
                      className="me-3"
                      width="14"
                      height="54"
                      viewBox="0 0 14 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="-6.10352e-05"
                        width="14"
                        height="54"
                        rx="7"
                        fill="#461EE7"
                      />
                    </svg>
                    <div>
                      <p className="fs-14 mb-2">Property</p>
                      <span className="fs-16 font-w600 text-light">
                        <span className="text-black me-2 font-w700">
                          $1,567
                        </span>
                        /$5,000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7  col-xxl-12 col-md-7">
                <div className="row">
                  <div className="col-sm-6 mb-4">
                    <div className="bg-gradient1 rounded text-center p-3">
                      <div className="d-inline-block position-relative donut-chart-sale mb-3">
                        <DonutChart
                          value="60"
                          backgroundColor="rgba(255, 255, 255,1)"
                          backgroundColor2="rgba(255, 255, 255, 0.2)"
                        />
                        <small className="text-white">71%</small>
                      </div>
                      <span className="fs-14 text-white d-block">
                        Investment
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-4">
                    <div className="bg-gradient2 rounded text-center p-3">
                      <div className="d-inline-block position-relative donut-chart-sale mb-3">
                        <DonutChart
                          value="40"
                          backgroundColor="rgba(255, 255, 255,1)"
                          backgroundColor2="rgba(255, 255, 255, 0.2)"
                        />
                        <small className="text-white">30%</small>
                      </div>
                      <span className="fs-14 text-white d-block">
                        Installment
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-sm-0 mb-4">
                    <div className="rounded text-center p-3 bg-gradient3">
                      <div className="d-inline-block position-relative donut-chart-sale mb-3">
                        <DonutChart
                          value="12"
                          backgroundColor="rgba(255, 255, 255,1)"
                          backgroundColor2="rgba(255, 255, 255, 0.2)"
                        />
                        <small className="text-white">5%</small>
                      </div>
                      <span className="fs-14 text-white d-block">
                        Restaurant
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-sm-0 mb-4">
                    <div className="rounded text-center p-3 bg-gradient4">
                      <div className="d-inline-block position-relative donut-chart-sale mb-3">
                        <DonutChart
                          value="90"
                          backgroundColor="rgba(255, 255, 255,1)"
                          backgroundColor2="rgba(255, 255, 255, 0.2)"
                        />
                        <small className="text-white">96%</small>
                      </div>
                      <span className="fs-14 text-white d-block">Property</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftBody;
