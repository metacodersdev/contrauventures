import { useMediaQuery } from "@mui/material";

import React, { useEffect, useRef, useState } from "react";

import { Element, Events, Link } from "react-scroll";
import { interviewServices } from "../../../../../../../services/interviewService";
import ListImage from "./ListImage";

function ReactScroll({ founderID }) {
  const [listGallery, setListGallery] = useState([{}]);
  const [keyGallery, setkeyGallery] = useState([{}]);
  const matchMobile = useMediaQuery("(max-width:639px)");
  const matchMobileTablet = useMediaQuery("(max-width:1279px)");

  // GET DETAIL GALLERY
  async function getGalleryFounderDetail(id) {
    try {
      let detailgallery = await interviewServices.getGalleryFounder(id);

      return detailgallery;
    } catch (error) {
      console.log("Failed to fetch", error);
    }
  }

  const refCategory = useRef(null);
  // CHECK MOBILE OR PC TO CHANGE HIDE/SHOW CATEGORY YEAR
  const onScroll = () => {
    // const position = window.pageYOffset;
    // const bottom =
    //   Math.ceil(window.innerHeight + window.scrollY) >=
    //   document.documentElement.scrollHeight;
    // if (!matchMobile) {
    //   if (position >= 715) {
    //     const myReference = refCategory.current;
    //     myReference.style.display = "block";
    //   } else if (position < 720) {
    //     const myReference = refCategory.current;
    //     myReference.style.display = "none";
    //   }
    //   if (bottom) {
    //     const myReference = refCategory.current;
    //     myReference.style.display = "none";
    //   }
    // } else {
    //   if (position >= 500) {
    //     const myReference = refCategory.current;
    //     myReference.style.display = "block";
    //   } else if (position < 600) {
    //     const myReference = refCategory.current;
    //     myReference.style.display = "none";
    //   }
    //   if (bottom) {
    //     const myReference = refCategory.current;
    //     myReference.style.display = "none";
    //   }
    // }
  };

  // USE EFFECT TO APPLY LIBRARY AND HIDE AND SHOW YEAR CATEGORY
  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      // Remove animation add color of user scroll roller
      // window.removeEventListener("scroll", scrollHandler);
    });

    Events.scrollEvent.register("end", function () {
      // Add again animation add color of user scroll roller
      // window.addEventListener("scroll", scrollHandler);
      var addColor =
        arguments[1].children[0].children[0].children[0].children[0].children[0]
          .children[0];
      var addColor2 =
        arguments[1].children[0].children[0].children[0].children[0].children[1]
          .children[0];
      var addColor3 =
        arguments[1].children[0].children[0].children[0].children[1].children[0]
          .children[0];
      var addColor4 =
        arguments[1].children[0].children[0].children[0].children[1].children[1]
          .children[0];
      addColor.style.filter = "grayscale(0%)";
      addColor2.style.filter = "grayscale(0%)";
      addColor3.style.filter = "grayscale(0%)";
      addColor4.style.filter = "grayscale(0%)";

      for (var i = 0; i < itemsRef.current.length; i++) {
        if (
          arguments[0] !=
          itemsRef.current[i].children[1].children[0].textContent
        ) {
          var addColor =
            itemsRef.current[i].children[0].children[0].children[0].children[0];
          var addColor2 =
            itemsRef.current[i].children[0].children[0].children[1].children[0];
          var addColor3 =
            itemsRef.current[i].children[0].children[1].children[0].children[0];
          var addColor4 =
            itemsRef.current[i].children[0].children[1].children[1].children[0];

          addColor.style.filter = "grayscale(100%)";
          addColor2.style.filter = "grayscale(100%)";
          addColor3.style.filter = "grayscale(100%)";
          addColor4.style.filter = "grayscale(100%)";
        }
        // setoff(0);
      }
    });

    window.addEventListener("scroll", onScroll);
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  // GET DATA TO RENDER FIRST TIME
  useEffect(() => {
    // changeColor();
    async function fechData() {
      // FIND ID FROM LIST ALL GALLERY

      let detailfoundergallery = await getGalleryFounderDetail(founderID);

      var array = [];

      Object.values(detailfoundergallery.data.acf.image).map((item, index) => {
        if (item.year != "") {
          array.push(item);
        }
      });

      setListGallery([...array]);
    }
    fechData();
  }, []);
  const itemsRef = useRef([]);
  const itemsRefYear = useRef([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, listGallery.length);
  }, [listGallery]);

  const handleSetActive = (to) => {
    for (var i = 0; i < itemsRef.current.length; i++) {
      if (to == itemsRef.current[i].children[1].children[0].textContent) {
        var addColor =
          itemsRef.current[i].children[0].children[0].children[0].children[0];
        var addColor2 =
          itemsRef.current[i].children[0].children[0].children[1].children[0];
        var addColor3 =
          itemsRef.current[i].children[0].children[1].children[0].children[0];
        var addColor4 =
          itemsRef.current[i].children[0].children[1].children[1].children[0];

        addColor.style.filter = "grayscale(0%)";
        addColor2.style.filter = "grayscale(0%)";
        addColor3.style.filter = "grayscale(0%)";
        addColor4.style.filter = "grayscale(0%)";
      }
    }
  };

  const handleSetInactive = (to) => {
    for (var i = 0; i < itemsRef.current.length; i++) {
      if (itemsRef.current[i].children[1].children[0].textContent !== "") {
        if (to == itemsRef.current[i].children[1].children[0].textContent) {
          var noColor =
            itemsRef.current[i].children[0].children[0].children[0].children[0];
          var noColor2 =
            itemsRef.current[i].children[0].children[0].children[1].children[0];
          var noColor3 =
            itemsRef.current[i].children[0].children[1].children[0].children[0];
          var noColor4 =
            itemsRef.current[i].children[0].children[1].children[1].children[0];
          noColor.style.filter = "grayscale(100%)";
          noColor2.style.filter = "grayscale(100%)";
          noColor3.style.filter = "grayscale(100%)";
          noColor4.style.filter = "grayscale(100%)";
        }
      }
    }
  };
  // CHECK AT BOTTOM
  const handleScroll3 = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom) {
      // HIDE CATEGORY YEAR
      if (matchMobileTablet) {
        const myReference = refCategory.current;
        myReference.style.display = "none";
        // ADD COLOR LAST IMAGES YEAR
        var addColor =
          itemsRef.current[itemsRef.current.length - 1].children[0].children[0]
            .children[0].children[0];
        var addColor2 =
          itemsRef.current[itemsRef.current.length - 1].children[0].children[0]
            .children[1].children[0];
        var addColor3 =
          itemsRef.current[itemsRef.current.length - 1].children[0].children[1]
            .children[0].children[0];
        var addColor4 =
          itemsRef.current[itemsRef.current.length - 1].children[0].children[1]
            .children[1].children[0];

        addColor.style.filter = "grayscale(0%)";
        addColor2.style.filter = "grayscale(0%)";
        addColor3.style.filter = "grayscale(0%)";
        addColor4.style.filter = "grayscale(0%)";
      }
    } else {
      if (matchMobileTablet) {
        var noColor =
          itemsRef.current[itemsRef.current.length - 1].children[0].children[0]
            .children[0].children[0];

        var noColor2 =
          itemsRef.current[itemsRef.current.length - 1].children[0].children[0]
            .children[1].children[0];

        var noColor3 =
          itemsRef.current[itemsRef.current.length - 1].children[0].children[1]
            .children[0].children[0];

        var noColor4 =
          itemsRef.current[itemsRef.current.length - 1].children[0].children[1]
            .children[1].children[0];

        if (noColor.src !== "") {
          noColor.style.filter = "grayscale(100%)";
        }
        if (noColor2.src !== "") {
          noColor2.style.filter = "grayscale(100%)";
        }
        if (noColor3.src !== "") {
          noColor3.style.filter = "grayscale(100%)";
        }
        if (noColor3.src !== "") {
          noColor4.style.filter = "grayscale(100%)";
        }
      }
    }
    // }
  };

  // ADD SCROLL EVENT FOR CHECK BOTTOM
  useEffect(() => {
    window.addEventListener("scroll", handleScroll3, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll3);
    };
  }, []);

  // CHECK LENGTH FOR YEAR
  const checkLength = (numberImage) => {
    if (!numberImage) {
      return;
    }

    const frameImage = {
      1: "frameimgmain1",
      2: "frameimgmain2",
      3: "frameimgmain3",
      4: "frameimgmain4",
    };

    return frameImage[numberImage];
  };

  return (
    <div className="framemaingallery">
      <div className="categorydetailyear" ref={refCategory}>
        <div
          className="frameyearcategory"
          style={
            Object.keys(listGallery).length > 6
              ? {
                  columnGap: "5px ",
                }
              : {}
          }
        >
          {Object.keys(listGallery).length > 1 &&
            listGallery?.map((item, index) => (
              <div ref={(el) => (itemsRefYear.current[index] = el)}>
                <Link
                  className="yeartitle"
                  // to={item.year == "" ? item.year : keyGallery[index]}
                  to={item.year}
                  key={item.year}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={matchMobile ? -250 : -150}
                  onSetActive={handleSetActive}
                  onSetInactive={handleSetInactive}
                >
                  <div className="titleyeardetail">{item.year}</div>
                </Link>
              </div>
            ))}
        </div>
      </div>
      {/* LIST IMAGE */}
      <div style={{ display: "flex", flexDirection: "column", rowGap: "20vw" }}>
        {Object.keys(listGallery).length > 1 &&
          listGallery?.map((item, index) => (
            <Element name={item.year} className="element" key={item.year}>
              <div
                className="rootgallery"
                // onScroll={() => onScroll2(index)}
              >
                <div
                  key={item.year}
                  className="carousel-gallery"
                  ref={(el) => (itemsRef.current[index] = el)}
                >
                  <div className={checkLength(item?.image?.length)}>
                    <div className="frameimgtop">
                      <div className="frameimg1">
                        <img
                          style={{ filter: "grayscale(100%)" }}
                          // src={item?.image[1]?.guid}
                          src={
                            item.image && item.image.length > 0
                              ? item?.image[0]?.guid
                              : ""
                          }
                        />
                      </div>
                      <div className="frameimg2">
                        <img
                          style={{ filter: "grayscale(100%)" }}
                          src={
                            item.image && item.image.length > 0
                              ? item.image[1]?.guid
                              : ""
                          }
                        />
                      </div>
                    </div>
                    <div className="frameimgbot">
                      <div className="frameimg3">
                        <img
                          style={{ filter: "grayscale(100%)" }}
                          src={
                            item.image && item.image.length > 0
                              ? item.image[2]?.guid
                              : ""
                          }
                        />
                      </div>
                      <div className="frameimg4">
                        <img
                          style={{ filter: "grayscale(100%)" }}
                          src={
                            item.image && item.image.length > 0
                              ? item.image[3]?.guid
                              : ""
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="frametitleyear"
                    style={
                      checkLength(item?.image?.length) == "frameimgmain1"
                        ? { top: "35%" }
                        : {}
                    }
                  >
                    <div className="titleyeardetail">{item.year}</div>
                  </div>
                </div>
              </div>
            </Element>
          ))}
      </div>
    </div>
  );
}
export default ReactScroll;
