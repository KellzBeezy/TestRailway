import React from "react";

import { Dropdown } from "react-bootstrap";

import small from "../../../../images/profile/small/pic1.jpg";
import avt1 from "../../../../images/avatar/1.jpg";
import avt2 from "../../../../images/avatar/2.jpg";
import avt3 from "../../../../images/avatar/3.jpg";
import avt4 from "../../../../images/avatar/4.jpg";
import avt5 from "../../../../images/avatar/5.jpg";
import avt6 from "../../../../images/avatar/6.jpg";

import NouiRangeSlider from "../Dashboard/NouiRangeSlider";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

const MiddleBody = () => {
  return (
    <>
      {" "}
      <div className="card">
        <div className="card-header border-0 pb-0">
          <div>
            <h4 className="mb-2 font-w700">Quick Transfer</h4>
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
          <div className="user-bx">
            <img src={small} alt="" />
            <div>
              <h6 className="user-name">Samuel</h6>
              <span className="meta">@sam224</span>
            </div>
            <i className="las la-check-circle check-icon"></i>
          </div>
          <h4 className="mt-3 mb-3">
            Recent Friend
            <Link to={"#"} className="fs-16 float-end text-secondary font-w600">
              See More
            </Link>
          </h4>
          <ul className="user-list">
            <li>
              <img src={avt1} alt="" />
            </li>
            <li>
              <img src={avt2} alt="" />
            </li>
            <li>
              <img src={avt3} alt="" />{" "}
            </li>
            <li>
              <img src={avt4} alt="" />
            </li>
            <li>
              <img src={avt5} alt="" />
            </li>
            <li>
              <img src={avt6} alt="" />
            </li>
          </ul>
          <h4 className="mt-3 mb-0">Insert Amount</h4>
          <div className="format-slider">
            <input
              className="form-control amount-input"
              title="Formatted number"
              id="input-format"
              placeholder="20.000"
            />
            <div id="slider-format">
              <NouiRangeSlider />
            </div>
          </div>
          <div className="text-secondary fs-16 d-flex justify-content-between font-w600 mt-4">
            <span>Your Balance</span>
            <span>$ 456,345.62</span>
          </div>
        </div>
        <div className="card-footer border-0 pt-0">
          <Link
            to={"#"}
            className="btn btn-primary d-block btn-lg text-uppercase"
          >
            Transfer Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default MiddleBody;
