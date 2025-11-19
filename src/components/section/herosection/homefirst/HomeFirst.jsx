"use client";
import React from "react";

// Clean up mobile responsive styles for much more accurate stacking and spacing
const styles = {
  container: {
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: "50px",
    paddingLeft: 0,
    boxSizing: "border-box",
    position: "relative",
    background: "none",
  },
  heading: {
    fontFamily: "'Montserrat', 'Montserrat ExtraBold', sans-serif",
    fontWeight: 900,
    fontSize: "7rem",
    color: "#fff",
    margin: 0,
    alignSelf: "flex-start",
    textAlign: "left",
    position: "relative",
    bottom: "4.5rem",
    left: "9.8rem",
    transition: "all 0.3s",
  },
  subtitle: {
    fontFamily: "'Montserrat', 'Montserrat ExtraBold', sans-serif",
    fontWeight: 800,
    fontSize: "1.35rem",
    textAlign: "left",
    margin: "32px 0 0 0",
    maxWidth: "800px",
    position: "absolute",
    left: "10rem",
    top: "24rem",
    transition: "all 0.3s",
    color: "#fff",
  },
  description: {
    fontFamily: "'Montserrat', 'Montserrat ExtraBold', sans-serif",
    fontWeight: 800,
    fontSize: "1.05rem",
    textAlign: "justify",
    margin: "32px 0 0 0",
    maxWidth: "650px",
    position: "absolute",
    left: "10rem",
    top: "27rem",
    transition: "all 0.3s",
    color: "#fff",
  },
};

function useResponsiveStyles() {
  const [responsiveStyles, setResponsiveStyles] = React.useState(styles);

  React.useEffect(() => {
    function handleResize() {
      const width = typeof window !== "undefined" ? window.innerWidth : 1200;
      if (width <= 600) {
        setResponsiveStyles({
          container: {
            ...styles.container,
            paddingTop: "36px",
            alignItems: "flex-start",
            paddingLeft: "0.6rem",
          },
          heading: {
            ...styles.heading,
            fontSize: "2.1rem",
            left: 0,
            bottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: "0.4rem",
            position: "relative",
            textAlign: "left",
          },
          subtitle: {
            ...styles.subtitle,
            fontSize: "1rem",
            margin: 0,
            left: 0,
            top: "0.1rem",
            position: "relative",
            maxWidth: "95vw",
            textAlign: "left",
            marginTop: "0.7rem",
            color: "#fff",
          },
          description: {
            ...styles.description,
            fontSize: "0.88rem",
            margin: "0.6rem 0 0 0",
            left: 0,
            top: 0,
            position: "relative",
            maxWidth: "94vw",
            textAlign: "justify",
            color: "#fff",
          },
        });
      } else {
        setResponsiveStyles(styles);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return responsiveStyles;
}

const HomeFirst = () => {
  const responsiveStyles = useResponsiveStyles();

  return (
    <div style={responsiveStyles.container}>
      {/* ADEL Heading */}
      <h1 style={responsiveStyles.heading}>ADEL</h1>
      {/* Subtitle */}
      <p style={responsiveStyles.subtitle}>(AI - Digital Examination Ledger)</p>
      <p style={responsiveStyles.description}>
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
