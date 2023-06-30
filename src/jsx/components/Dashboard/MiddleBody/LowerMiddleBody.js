import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Dropdown } from "react-bootstrap";

const LowerMiddleBody = () => {
  return (
    <>
      <div className="card">
        <div className="card-header border-0 pb-0">
          <div>
            <h4 className="mb-2 fs-20 font-w700">Bar Spendings</h4>
            <span className="fs-12">
              Lorem ipsum dolor sit amet, consectetur
            </span>
          </div>

          <Dropdown className="dropdown">
            <Dropdown.Toggle as="div" className="btn-link i-false">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  stroke="#575757"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                  stroke="#575757"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                  stroke="#575757"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
              <Dropdown.Item className="dropdown-item">Delete</Dropdown.Item>
              <Dropdown.Item className="dropdown-item">Edit</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="card-body">
          <div className="progress default-progress">
            <div
              className="progress-bar bg-gradient1 progress-animated"
              style={{ width: "45%", height: "20px" }}
            >
              <span className="sr-only">45% Complete</span>
            </div>
          </div>
          <div className="d-flex align-items-end mt-2 pb-3 justify-content-between">
            <span>Investment</span>
            <span className="fs-16 font-w600 text-light">
              <span className="text-black pe-2">$1415</span>/$2000
            </span>
          </div>
          <div className="progress default-progress mt-4">
            <div
              className="progress-bar bg-gradient2 progress-animated"
              style={{ width: "70%", height: "20px" }}
            >
              <span className="sr-only">70% Complete</span>
            </div>
          </div>
          <div className="d-flex align-items-end mt-2 pb-3 justify-content-between">
            <span>Restaurant</span>
            <span className="fs-16 font-w600 text-light">
              <span className="text-black pe-2">$1567</span>/$5000
            </span>
          </div>
          <div className="progress default-progress mt-4">
            <div
              className="progress-bar bg-gradient4 progress-animated"
              style={{ width: "35%", height: "20px" }}
            >
              <span className="sr-only">35% Complete</span>
            </div>
          </div>
          <div className="d-flex align-items-end mt-2 pb-3 justify-content-between">
            <span>Installment</span>
            <span className="fs-16 font-w600 text-light">
              <span className="text-black pe-2">$487</span>/$10000
            </span>
          </div>
          <div className="progress default-progress mt-4">
            <div
              className="progress-bar bg-gradient3 progress-animated"
              style={{ width: "95%", height: "20px" }}
            >
              <span className="sr-only">95% Complete</span>
            </div>
          </div>
          <div className="d-flex align-items-end mt-2 justify-content-between">
            <span>Property</span>
            <span className="fs-16 font-w600 text-light">
              <span className="text-black pe-2">$3890</span>/$4000
            </span>
          </div>
        </div>
        <div className="card-footer border-0 pt-0">
          <Link to={"#"} className="btn btn-outline-primary d-block btn-lg">
            View More
          </Link>
        </div>
      </div>
    </>
  );
};

export default LowerMiddleBody;
