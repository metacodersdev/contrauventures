import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useMediaQuery } from "@mui/material";
import { createTheme, makeStyles, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
ListFounder.propTypes = {};

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // smol phone
      xs: 640, // phone
      sm: 768, // tablets
      md: 1024, // small laptop
      lg: 1280, // desktop
      xl: 1536, // large screens
    },
  },
});

function ListFounder({ listDataFounder }) {
  const matchMobile = useMediaQuery("(max-width:1279px)");
  const history = useNavigate();

  // CLICK TO DIRECT DETAIL FOUNDER
  const clickDetailFounder = async (item) => {
    // const founderId = item.acf.interview[0];
    const founderId = item.id;
    history(`/detailfounder/${founderId}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: [
            "310px", // theme.breakpoints.up('xxs')
            "480px", // theme.breakpoints.up('xs')
            "640px", // theme.breakpoints.up('sm')
            "870px", // theme.breakpoints.up('md')
            "880px", // theme.breakpoints.up('lg')
            "1325px", // theme.breakpoints.up('xl')
          ],
        }}
        style={{ margin: "auto", marginTop: "100px" }}
      >
        <Grid
          container
          columns={{ xss: 1, xs: 1, sm: 1, md: 5, lg: 12, xl: 4 }}
          sx={{
            columnGap: [
              "15px", //0
              "20px", //xs 640
              "15px", //sm 768
              "15px", //md 1024
              "25px", //lg 1280
              "25px", //xl 1536
            ],
            rowGap: [
              "15px", //0
              "20px", //xs 640
              "20px", //sm 768
              "5px", //md 1024
              "40px", //lg 1280
              "40px", //xl 1536
            ],
          }}
        >
          {listDataFounder &&
            Object.values(listDataFounder).map((item) => (
              <Grid item key={item.id} className="framefounder">
                <Box
                  className="frameimgfounder"
                  key={item.id}
                  sx={{
                    width: [
                      "144px",
                      "144px", //xs
                      "144px",
                      "144px",
                      "424px",
                      "424px", //xl
                    ],
                  }}
                >
                  <img
                    src={item.acf.image}
                    alt=""
                    className="imgfounder"
                    onClick={() => {
                      clickDetailFounder(item);
                    }}
                  />
                  <div
                    className="framemaintile"
                    onClick={() => {
                      clickDetailFounder(item);
                    }}
                  >
                    {/* <div className="hidden 2xl:block absolute bottom-[9%] w-full imgText z-50 smooth"> */}
                    <div className="framedetailfoundername absolute">
                      <div className="detailfoundername">
                        <p className="titlename">
                          {item.acf.first_name.toUpperCase()} &nbsp;
                          {item.acf.last_name.toUpperCase()}
                        </p>
                      </div>
                      <Box className="titledetail">{item.acf.title}</Box>
                    </div>
                  </div>
                  <div
                    className="hidden lg:block  w-full h-full absolute bgBlur2"
                    style={{
                      background: `linear-gradient(to top, #191C21 0, rgba(25, 28, 33, 0.5) 66%, rgba(25, 28, 33, 0) 90%) center no-repeat`,
                    }}
                  ></div>

                  <div className="btnInterviewfounder">
                    <div className="hidden lg:block w-[200px] h-[60px] bg-white  cursor-pointer z-50">
                      <div className="flex items-center justify-center w-full h-full">
                        <p
                          className="popinsFont font-semibold text-[20px] text-black mb-0"
                          onClick={() => {
                            clickDetailFounder(item);
                          }}
                        >
                          See Full Interview
                        </p>
                      </div>
                    </div>
                  </div>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default ListFounder;
