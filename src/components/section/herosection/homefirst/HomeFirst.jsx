import React from "react";

const HomeFirst = () => {
  return (
    <div
      style={{
        width: "50vh%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "50px",
        boxSizing: "border-box",
      }}
    >
      {/* ADEL Heading */}
      <h1
        style={{
          fontFamily: "'Montserrat', 'Montserrat ExtraBold', sans-serif",
          fontWeight: 800,
          fontSize: "5rem",
          color: "#fff",
          margin: 0,
          alignSelf: "flex-start",
          textAlign: "left",
          position: "relative",
          bottom: "4rem",
          left: "10rem",
        }}
      >
        ADEL
      </h1>
      {/* Subtitle */}
      <p
        style={{
          fontFamily: "'Montserrat', 'Montserrat ExtraBold', sans-serif",
          fontWeight: 800,
          fontSize: "1.35rem",
          textAlign: "center",
          margin: "32px 0 0 0",
          maxWidth: "800px",
          position: "absolute",
          left: "10rem",
          top: "24rem",
        }}
      >
        (AI - Digital Examination Ledger)
      </p>
      <p
        style={{
          fontFamily: "'Montserrat', 'Montserrat ExtraBold', sans-serif",
          fontWeight: 800,
          fontSize: "1.05rem",
          textAlign: "justify",
          margin: "32px 0 0 0",
          maxWidth: "800px",
          position: "absolute",
          left: "10rem",
          top: "27rem",
        }}
      >
        Building the future of assessment with artificial intelligence – ADEL
        streamlines, safeguards, and automates digital exam processes for modern
        education. Experience enhanced security, paperless administration, and
        actionable analytics — empowering educators and students alike to
        achieve more.
      </p>
    </div>
  );
};

export default HomeFirst;
