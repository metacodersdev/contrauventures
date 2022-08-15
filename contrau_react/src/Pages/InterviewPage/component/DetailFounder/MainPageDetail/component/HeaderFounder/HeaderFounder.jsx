import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, useMediaQuery } from "@mui/material";

import logoheader from "assets/interview-img/logoheadertrau.svg";
import "./style.scss";
import { Link } from "react-router-dom";
import TemporaryDrawer from "./TemporaryDrawer";
import { useEffect } from "react";

HeaderFounder.propTypes = {
  detailFounder: PropTypes.object,
};

function HeaderFounder({ detailFounder }) {
  // CHECK EVENT SCROLL DOWN
  const [y, setY] = useState(0);

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (document.getElementById("refHeader2")) {
      if (window.scrollY < 15) {
        // HEADER WHEN FIRST LOAD
        document.getElementById("refHeader2").style.display = "block";
        document.getElementById("refHeader2").style.backgroundColor =
          "transparent ";
      } else {
        if (y > window.scrollY) {
          // HEADER WHEN SCROLL UP
          document.getElementById("refHeader2").style.display = "block";
          document.getElementById("refHeader2").style.backgroundColor =
            "rgba(0,0,0,0.5)";
        } else if (y < window.scrollY) {
          // HIDE HEADER WHEN SCROLL DOWN
          document.getElementById("refHeader2").style.display = "none";
        }
      }

      setY(window.scrollY);
    }
  };

  useEffect(() => {
    setY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);

  const matchMobile = useMediaQuery("(max-width:639px)");

  const datacontentHeader = [
    {
      id: 1,
      url: "",
      content: "Home",
      active: false,
    },
    {
      id: 2,
      url: "story",
      content: "Story",
      active: true,
    },
  ];

  return (
    <div>
      <Box className="frameheaderfoundermain">
        <div
          style={{
            height: "80px",
            position: "fixed",
            zIndex: "1000",
            width: "100%",
          }}
          id="refHeader2"
        >
          <Box className="imglogotrauframe-header">
            <Link to="/">
              <img src={logoheader} alt="logotrau" className="logotrau" />
            </Link>
          </Box>
          {matchMobile ? (
            <TemporaryDrawer />
          ) : (
            <Box className="titledetaimainframeheader" style={{ opacity: "1" }}>
              {datacontentHeader?.map((item, index) => (
                <Link to={`/${item.url}`} key={index}>
                  <Box
                    className={
                      item.active
                        ? "titledetaiframeheader-active"
                        : "titledetaiframeheader"
                    }
                  >
                    {item.content}
                  </Box>
                </Link>
              ))}
            </Box>
          )}
        </div>
        <Box className="frameimglayout">
          <img
            src={detailFounder?.acf?.header_image}
            className="logobackgroundheader"
            alt="Header"
          />
        </Box>

        <Box className="framemaintilecenterheader">
          {matchMobile
            ? detailFounder?.acf?.first_name.toUpperCase() || ""
            : detailFounder?.acf?.first_name.toUpperCase() || ""}
          <Box className="framedetailtitlemain">
            {matchMobile
              ? detailFounder?.acf?.last_name.toUpperCase() || ""
              : detailFounder?.acf?.last_name.toUpperCase() || ""}
          </Box>
          <Box className="titlecompany">
            {detailFounder?.acf?.company_name.split('"')[0]}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default HeaderFounder;
