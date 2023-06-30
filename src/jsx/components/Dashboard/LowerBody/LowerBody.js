import React from "react";

import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ChartBarApex from "../Dashboard/ChartBarApex";

const LowBody = () => {
  return (
    <>
      {" "}
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header d-sm-flex d-block border-0 pb-0">
            <div className="pe-3 me-auto mb-sm-0 mb-3">
              <h4 className="fs-20 text-black mb-1 font-w700">
                Transaction Overview
              </h4>
              <span className="fs-12">
                Lorem ipsum dolor sit amet, consectetur
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <Link to={"#"} className="btn btn-outline-primary me-3">
                <i className="las la-download text-primary scale5 me-3"></i>
                Download Report
              </Link>
              <Dropdown className="dropdown">
                <Dropdown.Toggle as="div" className="btn-link i-false">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect x="0" y="0" width="24" height="24"></rect>
                      <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                      <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                      <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                    </g>
                  </svg>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                  <Dropdown.Item className="dropdown-item">
                    Delete
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item">Edit</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="card-body">
            <div id="chartBar" className="chartBar">
              <ChartBarApex />
            </div>
            <div className="d-flex justify-content-between flex-wrap">
              <div className="d-flex">
                <label
                  className="form-check-label font-w600 fs-16"
                  htmlFor="flexSwitchCheckChecked1"
                >
                  Number
                </label>
                <div className="form-check form-switch toggle-switch">
                  <input
                    className="form-check-input custome"
                    type="checkbox"
                    id="flexSwitchCheckChecked1"
                    defaultChecked
                  />
                </div>
                <label
                  className="form-check-label font-w600 fs-16"
                  hmtlFor="flexSwitchCheckChecked2"
                >
                  Analytics
                </label>
                <div className="form-check form-switch toggle-switch">
                  <input
                    className="form-check-input custome"
                    type="checkbox"
                    defaultChecked
                    id="flexSwitchCheckChecked2"
                  />
                </div>
              </div>
              <div>
                <span className="fs-16 font-w600">
                  <svg
                    className="me-2"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.639771"
                      width="18.9471"
                      height="19"
                      rx="9.47357"
                      fill="#09BD3C"
                    />
                  </svg>
                  Income
                </span>
                <span className="fs-16 font-w600">
                  <svg
                    className="mx-2"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.344925"
                      width="18.9471"
                      height="19"
                      rx="9.47357"
                      fill="#FD5353"
                    />
                  </svg>
                  Expense
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LowBody;
