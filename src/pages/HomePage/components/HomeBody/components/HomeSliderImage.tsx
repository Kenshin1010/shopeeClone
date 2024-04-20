import { Box } from "@mui/material";
import { useMemo } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function HomeSliderImage() {
    const BoxStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundSize: "cover",
      width: "1200px",
      height: "360px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "9.5rem",
      positions: "relative",
    };
    const slideImages = [
      {
        url: "src/assets/images/slide_1.png",
        dots: "true",
        caption: "Slide 1",
      },
      {
        url: "src/assets/images/slide_2.png",
        dots: "true",
        caption: "Slide 2",
      },
      {
        url: "src/assets/images/slide_3.png",
        dots: "true",
        caption: "Slide 3",
      },
      {
        url: "src/assets/images/slide_4.png",
        dots: "true",
        caption: "Slide 4",
      },
      {
        url: "src/assets/images/slide_5.png",
        dots: "true",
        caption: "Slide 5",
      },
      {
        url: "src/assets/images/slide_6.png",
        dots: "true",
        caption: "Slide 6",
      },
    ];

    // const spanStyle = {
    //   padding: "20px",
    //   background: "#efefef",
    //   color: "#000000",
    // };

    const dotsStyle = useMemo(
      () => ({
      position: "absolute",
      bottom: "16px",
      left: "50%",
      transform: "translate(-50%, 0%)",
      transition: "opacity 0.5s ease 0s",
      width: "100%",
      textAlign: "center",
      fontSize: "16px",
    }),
    []
  );

    const dotStyle = useMemo(
      () => ({
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      display: "inline-block",
      cursor: "pointer",
      opacity: "1",
      border: "1px solid rgba(137, 137, 137, 0.4)",
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      "&:active": {
        opacity: "1",
        backgroundColor: "rgb(238, 77, 45)",
        borderColor: "rgb(238, 77, 45)",
      },
    }),
    []
  );

    const ButtonStyle = useMemo(
      () => ({
        "& .react-slideshow-container > .default-nav": {
          cursor: "pointer",
          userSelect: "none",
          display: "inline-flex",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          top: "50%",
          transform: "translate(0px, -50%)",
          fontSize: "20px",
          lineHeight: "20px",
          textAlign: "center",
          boxShadow: "rgba(0, 0, 0, 0.09) 0px 1px 8px 0px",
          color: "rgba(0, 0, 0, 0.87)",
          fill: "rgba(0, 0, 0, 0.87)",
          transition: "opacity 0.3s ease 0s",
          width: "35px",
          height: "60px",
          backgroundColor: "rgba(0, 0, 0, 0.18)",
          borderRadius: "initial",
          opacity: "0",
        },
      }),
      []
    );

    // const dots = [];
    // for (let i = 0; i < slideImages.length; i++) {
    //   dots.push(<Box className="stardust-carousel__dot"></Box>);
    // }

    return (
    <Box className="HomeSliderImage">
      <Box
        className="slide-container"
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
           '& .react-slideshow-container button': {
            marginTop: "168px",
           }
        }}
      >
        <Slide cssClass="">
          {slideImages.map((slideImage, index) => (
            <Box key={index}>
              <Box
                sx={{
                  ...BoxStyle,
                  backgroundImage: `url(${slideImage.url})`,
                  ...ButtonStyle,
                }}
              >
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
                <Box className="stardust-carousel__dots" sx={dotsStyle}>
                  <Box
                    className="stardust-carousel__dot"
                    sx={{
                      ...dotStyle,
                      "&:active": "${slideImage.dots}",
                    }}
                  >
                    {/* `${dots}` */}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Slide>
      </Box>
    </Box>
  );
}

export default HomeSliderImage;
