import * as React from "react";
import "./Header.css";
import technology from "./technology.png";

export default function Header() {
  return (
    <div className="banner-container">
      <div className="banner">
        <div className="col-text">
          <h5>SUMMER 2022</h5>
          <h1>NEW COLLECTION</h1>
          <h4>
            We know how large objects will act,
            <br />
            but things on a small scale.
          </h4>
          <button className="btn">
            <h3>SHOP NOW</h3>
          </button>
        </div>
        <div className="col-image">
          <div className="inner-image">
            <img className="ladyImage" src={technology} alt="img" />
            <svg
              id="bubble-1"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.59123" cy="8.32606" r="7.62901" fill="#fff" />
            </svg>
            <svg
              id="bubble-2"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.59123" cy="8.32606" r="7.62901" fill="#fff" />
            </svg>
            <svg
              id="bubble-3"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.59123" cy="8.32606" r="7.62901" fill="#fff" />
            </svg>
            <svg
              id="bubble-4"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.59123" cy="8.32606" r="7.62901" fill="#977DF4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
