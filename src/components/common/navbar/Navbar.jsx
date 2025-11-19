import React from "react";
import { RiLoginBoxFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // Add this for spacing
        boxSizing: "border-box",
        background: "transparent",
        borderBottom: "none",
      }}
    >
      {/* adel-wordmark.svg inline SVG */}
      <span style={{ display: "flex", alignItems: "center", height: "72px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 120"
          width="300"
          height="100"
          role="img"
          aria-label="ADEL logo - wordmark"
          style={{ display: "block" }}
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stopColor="#4F46E5" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
            <style>
              {`
                .t {
                  font: 700 64px/1 "Inter", "Helvetica Neue", Arial, sans-serif;
                  letter-spacing:2px;
                  fill: url(#g1);
                }
              `}
            </style>
          </defs>
          <rect width="100%" height="100%" fill="transparent" />
          <text x="24" y="82" className="t">
            ADEL
          </text>
          <rect
            x="200"
            y="20"
            width="12"
            height="80"
            transform="rotate(22 206 60)"
            rx="3"
            fill="url(#g1)"
            opacity="0.95"
          />
        </svg>
      </span>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          height: "72px",
          paddingRight: "1rem",
        }}
      >
        <RiLoginBoxFill
          size={36}
          color="url(#g1)"
          style={{ fill: "url(#g1)" }}
        />
      </span>
    </header>
  );
};

export default Navbar;
