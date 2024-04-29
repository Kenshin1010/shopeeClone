import {
  Box,
  Breadcrumbs,
  Button,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import ArrowRight from "../../../HomePage/components/jsx-icon/ArrowRight";
import AddQuantity from "../../jsx-icon/AddQuantity";
import Heart from "../../jsx-icon/Heart";
import StardustIconShopee from "../../jsx-icon/StardustIconShopee";
import SubtractQuantity from "../../jsx-icon/SubtractQuantity";

function ProductDetailBody() {
  const productDetailLinkShop = {
    // color: "rgba(0, 0, 0, .87)",
    color: "#05a",
    fontSize: "13px",
    textDecoration: "none",
    whiteSpace: "nowrap",
    cursor: "pointer",
  };

  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
      sx={productDetailLinkShop}
    >
      Shopee
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/Nhà-Sách-Online-cat.11036863"
      onClick={handleClick}
      sx={productDetailLinkShop}
    >
      Nhà Sách Online
    </Link>,
    <Link
      underline="hover"
      key="3"
      color="inherit"
      href="/Sách-Tiếng-Việt-cat.11036863.11108503"
      onClick={handleClick}
      sx={productDetailLinkShop}
    >
      Sách Tiếng Việt
    </Link>,
    <Link
      underline="hover"
      key="4"
      color="inherit"
      href="/Văn-Học-Giả-Tưởng-cat.11036863.11108503.11108521"
      onClick={handleClick}
      sx={productDetailLinkShop}
    >
      Văn Học Giả Tưởng
    </Link>,
    <Typography
      key="3"
      color="text.primary"
      sx={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        color: "rgba(0, 0, 0, .87)",
        fontSize: "13px",
      }}
    >
      Sách - Điều Kỳ Diệu Của Tiệm Tạp Hóa Namiya (Higashino Keigo)
    </Typography>,
  ];

  const videoEl = useRef<HTMLVideoElement>(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error: Error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  const productDetailFreeShippingReturnPolicy = {
    // display: "flex",
    // flexDirection: "row",
    // alignItems: "center",
    // justifySelf: "start",
    flexWrap: "nowrap",
  };

  const productDetailFreeShippingReturnPolicyImage = {
    marginRight: ".75rem",
    height: "3.125rem",
    width: "3.125rem",
  };

  const productDetailCardStyle = {
    background: "#fff",
    borderRadius: "3px",
    boxShadow: "0 1px 1px 0 rgba(0, 0, 0, .05)",
  };

  const productDetailH1Style = {
    height: "1px",
    margin: "0",
    overflow: "hidden",
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px",
    zIndex: "-1000",
    display: "block",
    fontSize: "2rem",
    marginBlockStart: "0.83em",
    marginBlockEnd: "0.83em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    fontWeight: "bold",
    unicodeBidi: "isolate",
  };

  const productDetailImageBox = {
    flexShrink: "0",
    padding: "15px",
    width: "480px",
  };

  const productDetailH2Style = {
    height: "1px",
    width: "1px",
    margin: "0",
    overflow: "hidden",
    position: "absolute",
    whiteSpace: "nowrap",
    zIndex: "-1000",
    display: "block",
    fontSize: "1.5em",
    marginBlockStart: "0.83em",
    marginBlockEnd: "0.83em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    fontWeight: "bold",
    unicodeBidi: "isolate",
  };

  const productDetailH3Style = {
    alignItems: "center",
    color: "#757575",
    flexShrink: "0",
    fontSize: "inherit",
    fontWeight: "400",
    margin: "0",
    textTransform: "capitalize",
    width: "110px",
  };

  const productDetailImageListStyle = {
    boxSizing: "border-box",
    display: "inline-block",
    padding: "5px",
    width: "20%",
  };

  const productDetailImageListBoxStyle = {
    position: "relative",
  };

  const productDetailShopeeImageContainerStyle = {
    paddingBottom: "100%",
    position: "relative",
    width: "100%",
  };

  const productDetailImageIconVideoStyle = {
    height: "32px",
    width: "32px",
    position: "absolute",
    left: "50%",
    top: "50%",
    border: "0",
    transform: "translate3d(-16px, -16px, 0)",
    overflowClipMargin: "content-box",
    overflow: "clip",
  };

  const productDetailShopeeImageStyle = {
    objectFit: "contain",
    objectPosition: "center",
    position: "absolute",
    height: "100%",
    width: "100%",
    left: "0",
    top: "0",
    border: "0",
    overflowClipMargin: "content-box",
    overflow: "clip",
  };

  const shopeeIconButtonImageStyle = {
    // backgroundColor: "transparent",
    // border: "1px solid rgba(0, 0, 0, .54)",
    padding: "0",
    alignItems: "center",
    border: "0",
    cursor: "pointer",
    display: "flex",
    fontSize: ".875rem",
    fontWeight: "300",
    justifyContent: "center",
    letterSpacing: "0",
    lineHeight: "1",
    outline: "none",
    transition: "background-color .1s cubic-bezier(.4,0,.6,1)",
    backgroundColor: "rgba(0, 0, 0, .2) !important",
    color: "#fff",
    height: "40px",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "20px",
    // border: "0 !important",
  };

  const shopeeAddSubtractButtonStyle = {
    "&:first-child": {
      borderBottomRightRadius: "0",
      borderTopRightRadius: "0",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    // border: "0",
    border: "1px solid rgba(0, 0, 0, .09)",
    borderRadius: "2px",
    color: "rgba(0, 0, 0, .8)",
    cursor: "pointer",
    fontSize: ".875rem",
    fontWeight: "300",
    height: "32px",
    lineHeight: "1",
    letterSpacing: "0",
    outline: "none",
    transition: "background-color .1s cubic-bezier(.4,0,.6,1)",
    width: "32px",
  };

  const shopeeAddSubtractIconStyle = {
    flexShrink: "0",
    fontSize: "10px",
    height: "10px",
    width: "10px",
    overflow: "hidden",
    display: "inline-block",
    // height: "1em",
    // width: "1em",
    fill: "currentColor",
    position: "relative",
  };

  const shopeeProductDetailTextBoxStyle = {
    color: "#222",
    fontSize: "16px",
  };

  const spriteProductSharingButtonStyle = {
    position: "relative",
    margin: "0",
    marginLeft: "5px",
    height: "25px",
    width: "25px",
    minWidth: "0",
    padding: "0",
    border: "0",
    outline: "0",
    overflow: "visible",
    backgroundColor: "initial",
    backgroundImage:
      "url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/391e34e8438d2795.png)",
    backgroundSize: "100%",
    cursor: "pointer",
    textTransform: "none",
    color: "inherit",
    font: "inherit",
  };

  const productDetailTitleStyle = {
    textOverflow: "ellipsis",
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: "24px",
    margin: "0",
    maxHeight: "48px",
    maxWidth: "665px",
    overflow: "hidden",
    overflowWrap: "break-word",
    // verticalAlign: "sub",
  };

  const productDetailButtonStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    border: "0",
    cursor: "pointer",
    padding: "0 15px",
    "&:first-child": {
      paddingLeft: "0",
    },
    // borderRight: "1px solid rgba(0, 0, 0, .14)",
    textTransform: "none",
    overflow: "visible",
    color: "inherit",
    font: "inherit",
    margin: "0",
  };

  const themeOfsStyle = {
    borderBottom: "1px solid #555",
    color: "#222",
    fontSize: "1rem",
    marginRight: "5px",
    paddingBottom: "1px",
  };

  const themeOfs = {
    borderBottomColor: "#d0011b",
    color: "#d0011b",
  };

  const themeOfsText = {
    marginRight: "5px",
    padding: "4px 0",
    color: "#767676",
    fontSize: ".875rem",
    textTransform: "capitalize",
  };

  const themeStarBoxStyle = {
    marginRight: "1px",
    position: "relative",
  };

  const themeStarLitStyle = {
    height: "100%",
    left: "0",
    overflow: "hidden",
    position: "absolute",
    top: "0",
    zIndex: "1",
  };

  const themeStarLitImage = {
    backgroundImage:
      "url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/44c46951c46c5a5e8129.svg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: "14px",
    width: "14px",
  };

  const themeStarUnlitImage = {
    backgroundImage:
      "url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/76bc916eeb1487a396ef.svg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: "14px",
    width: "14px",
  };

  const productDetailTransportStyle = {
    alignItems: "center",
    color: "#222",
    display: "flex",
    marginBottom: "25px",
    marginLeft: "-4px",
    marginTop: "-4px",
    padding: "4px",
    fontSize: "14px",
    lineHeight: "17px",
  };

  // const productDetailTransportImageStyle = {
  //   marginLeft: "5px",
  //   border: "0",
  //   pointerEvents: "none",
  //   overflowClipMargin: "content-box",
  //   overflow: "clip",
  //   verticalAlign: "middle",
  // };

  const shopeeBtnSizeL = {
    maxWidth: "250px",
    minWidth: "80px",
    height: "48px",
    padding: "0 20px",
    marginRight: "15px",
  };

  const shopeeBtnSizeS = {
    height: "34px",
    maxWidth: "190px",
    minWidth: "60px",
    padding: "0 15px",
  };

  const shopeeBtn = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
    borderRadius: "2px",
    boxShadow: "0 1px 1px 0 rgba(0, 0, 0, .09)",
    boxSizing: "border-box",
    cursor: "pointer",
    fontSize: "14px",
    outline: "0",
    textTransform: "capitalize",
  };

  const shopeeBtnInline = {
    display: "inline-flex",
  };

  const shopeeBtnTinted = {
    background: "rgba(208, 1, 27, .08)",
    boxShadow: "0 1px 1px 0 rgba(0, 0, 0, .03)",
    border: "1px solid #d0011b",
    color: "#d0011b",
    position: "relative",
  };

  const shopeeBtnSolidPrimary = {
    background: "#d0011b",
    color: "#fff",
    position: "relative",
    "&:hover": {
      background: "rgba(208, 1, 27,.9)",
      color: "#fff",
    },
  };

  const shopeeBtnLight = {
    background: "#fff",
    border: "1px solid rgba(0, 0, 0, .09)",
    boxShadow: "0 1px 1px 0 rgba(0, 0, 0, .03)",
    color: "#555",
    outline: "0",
    overflow: "visible",
    position: "relative",
  };

  const shopeeBtnLightLink = {
    color: "#555",
    textDecoration: "none",
  };

  const PoliciesSpecialOffers = {
    justifySelf: "start",
    fontSize: "16px",
    minWidth: "0",
  };

  const shopeeDrawerProductDetail = {
    outline: "0",
    overflow: "visible",
    position: "relative",
    minWidth: "0",
  };

  const shopeeDrawerProductDetailItem = {
    color: "#4a4a4a",
    cursor: "help",
    fontSize: "16px",
    overflow: "hidden",
    width: "100%",
  };

  const shopeeDrawerProductDetailItemImage = {
    flexShrink: "0",
    marginRight: "5px",
    height: "18px",
    width: "18px",
    border: "0",
    overflowClipMargin: "content-box",
    overflow: "clip",
  };

  const shopeeDrawerProductDetailItemText = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  };

  const shopeeOperationalInformationBox = {
    cursor: "default",
    outline: "0",
    overflow: "visible",
    position: "relative",
    width: "100%",
  };

  const shopeeOperationalInformationLabel = {
    color: "rgba(0, 0, 0, .4)",
    marginRight: "12px",
    textTransform: "capitalize",
    fontSize: "14px",
  };

  const shopeeOperationalInformationText = {
    color: "#d0011b",
    textAlign: "right",
    whiteSpace: "nowrap",
    fontSize: "14px",
  };

  return (
    <Box className="ProductDetailBody" sx={{ backgroundColor: "#fafafa" }}>
      <Box
        sx={{
          marginTop: "119px",
          transition: "margin-top .3s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <Box className="page-product page-product--mall">
          <Box
            className="tracking-impression-placeholder"
            sx={{
              position: "fixed",
              zIndex: "99999",
              bottom: "0px",
              left: "0px",
            }}
          ></Box>
          <Box
            role="main"
            className="container"
            sx={{
              paddingBottom: "4.375rem",
              marginLeft: "auto",
              marginRight: "auto",
              width: "1200px",
            }}
          >
            <Stack spacing={1} sx={{ paddingTop: "1.25rem" }}>
              <Breadcrumbs
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "1rem",
                  lineHeight: "16px",
                  whiteSpace: "nowrap",
                }}
                separator={<ArrowRight />}
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
            <section
              className="product-briefing card"
              style={{
                marginTop: "1.25rem",
                padding: "0",
                display: "flex",
                flexDirection: "row",
                alignItems: "start",
                justifyContent: "space-between",
                ...productDetailCardStyle,
              }}
            >
              <Typography
                component={"h1"}
                sx={{ ...productDetailH1Style, flexBasis: "100%" }}
              >
                Sách - Điều Kỳ Diệu Của Tiệm Tạp Hóa Namiya (Higashino Keigo)
              </Typography>
              <Box></Box>
              <section style={productDetailImageBox}>
                <Typography component={"h2"} sx={productDetailH2Style}>
                  Product Image Section
                </Typography>
                <Stack direction={"column"}>
                  <Box sx={{ position: "relative" }}>
                    <Box sx={{ position: "relative" }}>
                      <Box sx={{ position: "relative", display: "block" }}>
                        <Box
                          className="shopee-image-placeholder"
                          sx={{
                            backgroundColor: "#fafafa",
                            fontSize: "3.8125rem",
                            paddingTop: "100%",
                            position: "relative",
                            width: "100%",
                          }}
                        >
                          <Box
                            sx={{
                              color: "rgba(0, 0, 0, .05)",
                              fontSize: "inherit",
                              left: "50%",
                              position: "absolute",
                              top: "50%",
                              transform: "translate(-50%, -50%)",
                            }}
                          >
                            <StardustIconShopee />
                          </Box>
                        </Box>
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          justifyContent={"center"}
                          sx={{
                            height: "100%",
                            left: "0",
                            position: "absolute",
                            top: "0",
                            width: "100%",
                          }}
                        >
                          <Box
                            sx={{
                              ...productDetailShopeeImageStyle,
                              height: "1px",
                              width: "1px",
                              opacity: "0",
                            }}
                          >
                            <img
                              src="https://down-vn.img.susercontent.com/file/vn-11134211-7r98o-lmedrzmd9k2ncf_tn"
                              style={{
                                height: "1px",
                                width: "1px",
                                opacity: "0",
                                position: "absolute",
                              }}
                            />
                          </Box>
                          <Box
                            component={"video"}
                            autoPlay={true}
                            playsInline
                            loop
                            muted
                            controls
                            sx={{
                              maxHeight: "100%",
                              width: "100%",
                              margin: "auto",
                              display: "inline-block",
                              verticalAlign: "initial",
                              objectFit: "contain",
                              overflowClipMargin: "content-box",
                              overflow: "clip",
                            }}
                            poster="https://down-vn.img.susercontent.com/file/vn-11134211-7r98o-lmedrzmd9k2ncf_tn"
                            src="https://cvf.shopee.vn/file/60dea3c1f5d8d22555d23feb2423954a"
                            data-video="0"
                            ref={videoEl}
                          ></Box>
                        </Stack>
                        <Box
                          sx={{
                            ...productDetailImageIconVideoStyle,
                            height: "80px",
                            width: "80px",
                            transform: "translate3d(-40px, -40px, 0)",
                          }}
                        >
                          <img
                            alt="icon video replay"
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/5e1da1405ecbc74f70fa.svg"
                            style={{ height: "80px", width: "80px" }}
                          />
                        </Box>
                      </Box>
                      <Box sx={productDetailShopeeImageStyle}>
                        <img
                          alt=""
                          src="https://down-vn.img.susercontent.com/file/vn-50009109-41988b329ed6650c252d8644e36de2a8"
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      margin: "5px -5px",
                      position: "relative",
                    }}
                  >
                    <Box sx={{ ...productDetailImageListStyle }}>
                      <Box sx={productDetailImageListBoxStyle}>
                        <Box
                          className="shopee-image-container"
                          sx={productDetailShopeeImageContainerStyle}
                        >
                          <picture>
                            <Box sx={productDetailShopeeImageStyle}>
                              <img src="https://down-vn.img.susercontent.com/file/4d5a5aeb9c230eace8098cde7195d42f_tn" />
                            </Box>
                          </picture>
                        </Box>
                        <Box sx={productDetailShopeeImageStyle}>
                          <img
                            alt=""
                            src="https://down-vn.img.susercontent.com/file/vn-50009109-41988b329ed6650c252d8644e36de2a8"
                          />
                        </Box>
                        <Box sx={productDetailImageIconVideoStyle}>
                          <img
                            alt="icon video play"
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/160486046c4b1eafcb63.svg"
                          />
                        </Box>
                        <Box className="thumbnail-selected-mask"></Box>
                      </Box>
                    </Box>
                    <Box sx={{ ...productDetailImageListStyle }}>
                      <Box sx={productDetailImageListBoxStyle}>
                        <Box
                          className="shopee-image-container"
                          sx={productDetailShopeeImageContainerStyle}
                        >
                          <picture>
                            <Box sx={productDetailShopeeImageStyle}>
                              <img src="https://down-vn.img.susercontent.com/file/vn-11134211-7r98o-lmedrzmd9k2ncf_tn" />
                            </Box>
                          </picture>
                        </Box>
                        <Box className="thumbnail-selected-mask"></Box>
                      </Box>
                    </Box>
                    <Box sx={{ ...productDetailImageListStyle }}>
                      <Box sx={productDetailImageListBoxStyle}>
                        <Box
                          className="shopee-image-container"
                          sx={productDetailShopeeImageContainerStyle}
                        >
                          <picture>
                            <Box sx={productDetailShopeeImageStyle}>
                              <img src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmgzyx3xcbfjd4_tn" />
                            </Box>
                          </picture>
                        </Box>
                        <Box className="thumbnail-selected-mask"></Box>
                      </Box>
                    </Box>
                    <Box sx={{ ...productDetailImageListStyle }}>
                      <Box sx={productDetailImageListBoxStyle}>
                        <Box
                          className="shopee-image-container"
                          sx={productDetailShopeeImageContainerStyle}
                        >
                          <picture>
                            <Box sx={productDetailShopeeImageStyle}>
                              <img src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmgzyx3xdpzzb7_tn" />
                            </Box>
                          </picture>
                        </Box>
                        <Box className="thumbnail-selected-mask"></Box>
                      </Box>
                    </Box>
                    <Box sx={{ ...productDetailImageListStyle }}>
                      <Box sx={productDetailImageListBoxStyle}>
                        <Box
                          className="shopee-image-container"
                          sx={productDetailShopeeImageContainerStyle}
                        >
                          <picture>
                            <Box sx={productDetailShopeeImageStyle}>
                              <img src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmgzyx3xf4kf4f_tn" />
                            </Box>
                          </picture>
                        </Box>
                        <Box className="thumbnail-selected-mask"></Box>
                      </Box>
                    </Box>
                    <Button
                      className="shopee-icon-Button"
                      sx={{
                        ...shopeeIconButtonImageStyle,
                        left: "5px",
                      }}
                    >
                      <img
                        alt="icon arrow left bold"
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/be6abcdf029c79bbafd9.svg"
                      />
                    </Button>
                    <Button
                      className="shopee-icon-Button"
                      sx={{
                        ...shopeeIconButtonImageStyle,
                        right: "5px",
                      }}
                    >
                      <img
                        alt="icon arrow right bold"
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/8120e456c268426c4054.svg"
                      />
                    </Button>
                  </Box>
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{ marginTop: "15px", height: "25px" }}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    sx={{
                      padding: "0 30px",
                    }}
                  >
                    <Box sx={shopeeProductDetailTextBoxStyle}>Chia sẻ:</Box>
                    <Button
                      className="sprite-product-sharing sprite-product-sharing-fm"
                      aria-label="Share on Messenger"
                      sx={{
                        ...spriteProductSharingButtonStyle,
                        backgroundPosition: "0 -100%",
                        height: "25px",
                        width: "25px",
                        minWidth: "0",
                      }}
                    ></Button>
                    <Button
                      className="sprite-product-sharing sprite-product-sharing-fb"
                      aria-label="Share on Facebook"
                      sx={{
                        ...spriteProductSharingButtonStyle,
                        backgroundPosition: "0 0",
                      }}
                    ></Button>
                    <Button
                      className="sprite-product-sharing sprite-product-sharing-pinterest"
                      aria-label="Share on Pinterest"
                      sx={{
                        ...spriteProductSharingButtonStyle,
                        backgroundPosition: "0 -300%",
                      }}
                    ></Button>
                    <Button
                      className="sprite-product-sharing sprite-product-sharing-twitter"
                      aria-label="Share on Twitter"
                      sx={{
                        ...spriteProductSharingButtonStyle,
                        backgroundPosition: "0 -400%",
                      }}
                    ></Button>
                  </Stack>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    sx={{
                      flex: "1",
                      borderLeft: "1px solid rgba(0, 0, 0, .09)",
                    }}
                  >
                    <Button
                      sx={{
                        backgroundColor: "transparent",
                        border: "0",
                        display: "flex",
                        outline: "0",
                        overflow: "visible",
                        position: "relative",
                        cursor: "pointer",
                        textTransform: "none",
                        color: "inherit",
                        font: "inherit",
                        margin: "0",
                        height: "22px",
                      }}
                    >
                      <Box
                        sx={{
                          marginRight: "10px",
                        }}
                      >
                        <Heart />
                      </Box>
                      <Box sx={shopeeProductDetailTextBoxStyle}>
                        Đã thích (1,5k)
                      </Box>
                    </Button>
                  </Stack>
                </Stack>
              </section>
              <section
                style={{
                  flex: "1 0 auto",
                  width: "0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "start",
                }}
              >
                <Typography component={"h2"} sx={productDetailH2Style}>
                  Product Information Section
                </Typography>
                <Stack
                  direction={"column"}
                  sx={{
                    boxSizing: "border-box",
                    padding: "1.25rem 2.1875rem 0 1.25rem",
                    width: "100%",
                    flex: "1 1 auto",
                  }}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"start"}
                    sx={productDetailTitleStyle}
                  >
                    <Box
                      sx={{
                        ...productDetailTitleStyle,
                        display: "inline",
                        marginRight: "8px",
                        border: "0",
                        overflowClipMargin: "content-box",
                        overflow: "clip",
                        // lineHeight: "24px",
                        // height: "24px",
                      }}
                    >
                      <img
                        alt="mall inline badge"
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/40a453875daccf8cc324.svg"
                      />
                    </Box>
                    <Typography sx={productDetailTitleStyle}>
                      Sách - Điều Kỳ Diệu Của Tiệm Tạp Hóa Namiya (Higashino
                      Keigo)
                    </Typography>
                  </Stack>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"start"}
                    sx={{
                      marginTop: ".625rem",
                      minHeight: "1.55rem",
                      position: "relative",
                    }}
                  >
                    <Button sx={productDetailButtonStyle}>
                      <Box sx={{ ...themeOfsStyle, ...themeOfs }}>5.0</Box>
                      <Box sx={themeOfsText}>
                        <Box
                          sx={{
                            position: "relative",
                            display: "inline-flex",
                          }}
                        >
                          <Box sx={themeStarBoxStyle}>
                            <Box sx={{ ...themeStarLitStyle, width: "100%" }}>
                              <Box sx={themeStarLitImage}></Box>
                            </Box>
                            <Box sx={themeStarUnlitImage}></Box>
                          </Box>
                          <Box sx={themeStarBoxStyle}>
                            <Box sx={{ ...themeStarLitStyle, width: "100%" }}>
                              <Box sx={themeStarLitImage}></Box>
                            </Box>
                            <Box sx={themeStarUnlitImage}></Box>
                          </Box>
                          <Box sx={themeStarBoxStyle}>
                            <Box sx={{ ...themeStarLitStyle, width: "100%" }}>
                              <Box sx={themeStarLitImage}></Box>
                            </Box>
                            <Box sx={themeStarUnlitImage}></Box>
                          </Box>
                          <Box sx={themeStarBoxStyle}>
                            <Box sx={{ ...themeStarLitStyle, width: "100%" }}>
                              <Box sx={themeStarLitImage}></Box>
                            </Box>
                            <Box sx={themeStarUnlitImage}></Box>
                          </Box>
                          <Box sx={themeStarBoxStyle}>
                            <Box
                              sx={{ ...themeStarLitStyle, width: "95.3898%" }}
                            >
                              <Box sx={themeStarLitImage}></Box>
                            </Box>
                            <Box sx={themeStarUnlitImage}></Box>
                          </Box>
                        </Box>
                      </Box>
                    </Button>
                    <Button sx={productDetailButtonStyle}>
                      <Box sx={{ ...themeOfsStyle }}>2,4k</Box>
                      <Box sx={themeOfsText}>đánh giá</Box>
                    </Button>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"start"}
                      sx={{
                        // borderLeft: "1px solid rgba(0, 0, 0, .14)",
                        alignItems: "center",
                        padding: "0 15px",
                      }}
                    >
                      <Box sx={{ ...themeOfsStyle, borderBottom: "none" }}>
                        5,6k
                      </Box>
                      <Box sx={themeOfsText}>đã bán</Box>
                    </Stack>
                    <Button
                      sx={{
                        background: "none",
                        border: "unset",
                        fontSize: "14px",
                        marginLeft: "auto",
                        color: "rgba(0, 0, 0, .54)",
                        textTransform: "none",
                      }}
                    >
                      Tố cáo
                    </Button>
                  </Stack>
                  <Box
                    sx={{
                      marginTop: "10px",
                      visibility: "visible",
                      cursor: "default",
                    }}
                  >
                    <Stack
                      direction={"column"}
                      alignItems={"start"}
                      justifyContent={"start"}
                    >
                      <Stack
                        direction={"column"}
                        alignItems={"start"}
                        justifyContent={"start"}
                        sx={{ background: "#fafafa", padding: "15px 20px" }}
                      >
                        <section
                          aria-live="polite"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            justifyContent: "start",
                          }}
                        >
                          <Typography
                            component={"h2"}
                            sx={productDetailH2Style}
                          >
                            Price Section
                          </Typography>
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            justifyContent={"start"}
                            sx={{
                              // flexBasis: "625px",
                              flexWrap: "wrap",
                              minHeight: "2.25rem",
                              lineHeight: "2.25rem",
                              width: "625px",
                            }}
                          >
                            <Box
                              sx={{
                                color: "#929292",
                                fontSize: "1rem",
                                marginRight: "10px",
                                textDecoration: "line-through",
                              }}
                            >
                              ₫105.000
                            </Box>
                            <Stack
                              direction={"row"}
                              alignItems={"center"}
                              justifyContent={"start"}
                            >
                              <Box
                                sx={{
                                  color: "#d0011b",
                                  fontSize: "1.875rem",
                                  fontWeight: "500",
                                }}
                              >
                                ₫84.000
                              </Box>
                              <Box
                                sx={{
                                  backgroundColor: "#d0011b",
                                  // background: "#ee4d2d",
                                  borderRadius: "2px",
                                  color: "#fff",
                                  fontSize: ".75rem",
                                  fontWeight: "600",
                                  lineHeight: "1",
                                  marginLeft: "15px",
                                  padding: "2px 4px",
                                  textTransform: "uppercase",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                20% giảm
                              </Box>
                            </Stack>
                          </Stack>
                          <Link
                            href="/flash_sale?fromItem=6205418939&amp;promotionId=782533564640800"
                            sx={{
                              color: "#555",
                              display: "flex",
                              alignItems: "center",
                              marginTop: "10px",
                              cursor: "pointer",
                              textDecoration: "none",
                              backgroundColor: "initial",
                              lineHeight: "21px",
                            }}
                          >
                            <Typography
                              sx={{
                                backgroundImage:
                                  "url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/a2db3c5da61ea3283d59.svg)",
                                backgroundPosition: "0",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain",
                                display: "inline-block",
                                height: "21px",
                                width: "110px",
                              }}
                            ></Typography>
                            <Box
                              sx={{
                                flex: "0 1 auto",
                                marginLeft: "10px",
                                minWidth: "0",
                              }}
                            >
                              BẮT ĐẦU SAU 02:00, 29 Th04
                            </Box>
                            <img
                              alt="icon arrow right"
                              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/966fbe37fe1c72e3f2dd.svg"
                              style={{
                                flex: "0 1 auto",
                                marginLeft: "10px",
                                minWidth: "0",
                                color: "#555",
                                height: "10px",
                                verticalAlign: "middle",
                                width: "10px",
                              }}
                            />
                          </Link>
                        </section>
                      </Stack>
                    </Stack>
                  </Box>
                  <Box
                    sx={{
                      marginTop: "1.5625rem",
                      padding: "0 1.25rem",
                    }}
                  >
                    <Stack
                      direction={"column"}
                      alignItems={"start"}
                      justifyContent={"start"}
                    >
                      <section
                        style={{
                          ...productDetailTransportStyle,
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "start",
                          justifyContent: "start",
                          // alignItems: "flex-start",
                          maxWidth: "625px",
                        }}
                      >
                        <Typography
                          component={"h3"}
                          sx={{ ...productDetailH3Style, textAlign: "left" }}
                        >
                          Vận chuyển
                        </Typography>
                        <Box
                          sx={{
                            height: "auto",
                            opacity: "1",
                            transition:
                              "height .5s cubic-bezier(.4,0,.2,1), opacity .5s cubic-bezier(.4,0,.2,1)",
                            width: "515px",
                          }}
                        >
                          <Stack></Stack>
                          <Box
                            sx={{
                              display: "grid",
                              gridTemplateColumns: "auto 1fr",
                            }}
                          >
                            <img
                              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/d9e992985b18d96aab90.png"
                              height="20"
                              style={{
                                gridRow: "1",
                                marginBottom: "12px",
                                justifySelf: "center",
                                gridColumn: "1",
                                border: "0",
                                overflowClipMargin: "content-box",
                                overflow: "clip",
                              }}
                            />
                            <Box
                              sx={{
                                gridColumn: "2",
                                marginLeft: "7px",
                                gridRow: "1",
                                marginBottom: "12px",
                              }}
                            >
                              <Box
                                sx={{
                                  alignItems: "center",
                                  color: "#222",
                                  display: "flex",
                                }}
                              >
                                <Typography sx={{ fontSize: "14px" }}>
                                  Miễn phí vận chuyển
                                </Typography>
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                justifySelf: "center",
                                gridColumn: "1",
                                gridRow: "2",
                              }}
                            >
                              <img
                                alt="icon shipped locally"
                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/baa823ac1c58392c2031.svg"
                                style={{
                                  height: "20px",
                                  width: "20px",
                                  marginLeft: "5px",
                                  marginRight: "5px",
                                  marginTop: "8px",
                                }}
                              />
                            </Box>
                            <Stack
                              direction={"column"}
                              alignItems={"start"}
                              justifyContent={"start"}
                              sx={{
                                gridColumn: "2",
                                gridRow: "2",
                                marginLeft: "7px",
                              }}
                            >
                              <Stack
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"start"}
                                sx={{
                                  marginBottom: "10px",
                                }}
                              >
                                <Typography
                                  sx={{
                                    color: "#636363",
                                    marginRight: "10px",
                                    textTransform: "capitalize",
                                    width: "110px",
                                    fontSize: "14px",
                                  }}
                                >
                                  Vận chuyển tới
                                </Typography>
                                <Stack
                                  direction={"row"}
                                  alignItems={"center"}
                                  justifyContent={"start"}
                                  sx={{
                                    position: "relative",
                                  }}
                                >
                                  <Stack
                                    direction={"row"}
                                    alignItems={"center"}
                                    justifyContent={"start"}
                                  >
                                    <Box
                                      sx={{
                                        cursor: "pointer",
                                        position: "relative",
                                        userSelect: "none",
                                      }}
                                    >
                                      <Button
                                        sx={{
                                          display: "flex",
                                          alignItems: "center",
                                          backgroundColor: "transparent",
                                          border: "0",
                                          cursor: "pointer",
                                          textTransform: "none",
                                          overflow: "visible",
                                          color: "inherit",
                                          font: "inherit",
                                          margin: "0",
                                        }}
                                      >
                                        <Typography
                                          sx={{
                                            color: "#000",
                                            fontWeight: "500",
                                            fontSize: "14px",
                                          }}
                                        >
                                          Phường Tân An, Thành Phố Buôn Ma Thuột
                                        </Typography>
                                        <img
                                          alt="icon arrow down"
                                          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/c98ab2426710d89c9f14.svg"
                                          style={{
                                            height: ".625rem",
                                            width: ".625rem",
                                            marginLeft: "5px",
                                            border: "0",
                                            pointerEvents: "none",
                                            overflowClipMargin: "content-box",
                                            overflow: "clip",
                                            verticalAlign: "middle",
                                          }}
                                        />
                                      </Button>
                                    </Box>
                                  </Stack>
                                </Stack>
                              </Stack>
                              <Stack
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"start"}
                              >
                                <Typography
                                  sx={{
                                    color: "#636363",
                                    marginRight: "10px",
                                    textTransform: "capitalize",
                                    width: "110px",
                                    fontSize: "14px",
                                  }}
                                >
                                  phí vận chuyển
                                </Typography>
                                <Box>
                                  <Stack
                                    direction={"row"}
                                    className="shopee-drawer"
                                    id="pc-drawer-id-0"
                                    sx={{
                                      outline: "0",
                                      overflow: "visible",
                                      position: "relative",
                                    }}
                                  >
                                    <Stack
                                      direction={"row"}
                                      alignItems={"center"}
                                      justifyContent={"start"}
                                      sx={{
                                        color: "#222",
                                        cursor: "pointer",
                                        userSelect: "none",
                                      }}
                                    >
                                      ₫0
                                      <img
                                        alt="icon arrow down"
                                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/c98ab2426710d89c9f14.svg"
                                        style={{
                                          height: "12px",
                                          width: "12px",
                                          marginLeft: "5px",
                                          border: "0",
                                          pointerEvents: "none",
                                          overflowClipMargin: "content-box",
                                          overflow: "clip",
                                          verticalAlign: "middle",
                                        }}
                                      />
                                    </Stack>
                                  </Stack>
                                </Box>
                              </Stack>
                            </Stack>
                          </Box>
                        </Box>
                      </section>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"start"}
                        sx={{
                          // marginBottom: "25px",
                          marginBottom: "0",
                          paddingBottom: "15px",
                          color: "#222",
                          marginLeft: "-4px",
                          marginTop: "-4px",
                          padding: "4px",
                        }}
                      >
                        <Stack
                          direction={"column"}
                          alignItems={"start"}
                          justifyContent={"start"}
                        >
                          <section
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "start",
                              color: "#757575",
                              marginTop: "16px",
                              paddingBottom: "15px",
                            }}
                          >
                            <Typography
                              component={"h3"}
                              sx={{
                                ...productDetailH3Style,
                                textAlign: "left",
                                fontSize: "14px",
                              }}
                            >
                              Số lượng
                            </Typography>
                            <Stack
                              direction={"row"}
                              alignItems={"center"}
                              justifyContent={"start"}
                            >
                              <Box sx={{ marginRight: "15px" }}>
                                <Stack
                                  direction={"row"}
                                  alignItems={"center"}
                                  justifyContent={"start"}
                                  className="shopee-input-quantity"
                                  sx={{
                                    background: "#fff",
                                  }}
                                >
                                  <Button
                                    aria-label="Decrease"
                                    sx={{
                                      ...shopeeAddSubtractButtonStyle,
                                      minWidth: "32px",
                                      borderRadius: "0",
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        ...shopeeAddSubtractIconStyle,
                                      }}
                                    >
                                      <SubtractQuantity />
                                    </Box>
                                  </Button>
                                  <input
                                    // role="spin-button"
                                    // ariaLive="assertive"
                                    // ariaValuenow="1"
                                    value="1"
                                    style={{
                                      boxSizing: "border-box",
                                      cursor: "text",
                                      fontSize: "16px",
                                      fontWeight: "400",
                                      height: "32px",
                                      textAlign: "center",
                                      width: "50px",
                                      alignItems: "center",
                                      background: "transparent",
                                      border: "1px solid rgba(0, 0, 0, .09)",
                                      borderLeft: "0",
                                      borderRight: "0",
                                      borderRadius: "0",
                                      // border: "0",
                                      // borderRadius: "2px",
                                      // cursor: "pointer",
                                      // fontSize: ".875rem",
                                      // fontWeight: "300",
                                      // height: "32px",
                                      // width: "32px",
                                      display: "flex",
                                      justifyContent: "center",
                                      letterSpacing: "0",
                                      lineHeight: "1",
                                      outline: "none",
                                      color: "rgba(0, 0, 0, .8)",
                                      transition:
                                        "background-color .1s cubic-bezier(.4,0,.6,1)",
                                    }}
                                  />
                                  <Typography
                                    aria-live="polite"
                                    sx={productDetailH2Style}
                                  >
                                    Số lượng 1
                                  </Typography>
                                  <Button
                                    aria-label="Increase"
                                    sx={{
                                      ...shopeeAddSubtractButtonStyle,
                                      minWidth: "32px",
                                      borderRadius: "0",
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        ...shopeeAddSubtractIconStyle,
                                      }}
                                    >
                                      <AddQuantity />
                                    </Box>
                                  </Button>
                                </Stack>
                              </Box>
                              <Typography sx={{ fontSize: "14px" }}>
                                60 sản phẩm có sẵn
                              </Typography>
                            </Stack>
                          </section>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Box>
                  <Box sx={{ marginTop: "15px" }}>
                    <Box
                      className="high-Button-section"
                      sx={{ paddingLeft: "20px" }}
                    >
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"start"}
                        className="high-end-Button-group"
                      >
                        <Button
                          className="btn btn-tinted btn--l"
                          aria-disabled="false"
                          sx={{
                            // flexDirection: "row",
                            // background: "rgba(255, 87, 34, .1)",
                            // background: "rgba(208, 1, 27, .08",
                            // boxShadow: "0 1px 1px 0 rgba(0, 0, 0, .03)",
                            // outline: "0",
                            // overflow: "visible",
                            // fontSize: "16px",
                            ...shopeeBtn,
                            ...shopeeBtnSizeL,
                            ...shopeeBtnTinted,
                            fontSize: "14px !important",
                            minWidth: "180px !important",
                          }}
                        >
                          <img
                            alt="icon-add-to-cart"
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b96050554b3be4feea08.svg"
                            style={{
                              height: "20px",
                              marginRight: "10px",
                              width: "20px",
                              border: "0",
                              overflowClipMargin: "content-box",
                              overflow: "clip",
                            }}
                          />
                          <Typography sx={{ fontSize: "14px" }}>
                            thêm vào giỏ hàng
                          </Typography>
                        </Button>
                        <Button
                          className="btn btn-solid-primary btn--l"
                          aria-disabled="false"
                          sx={{
                            ...shopeeBtn,
                            ...shopeeBtnSizeL,
                            ...shopeeBtnSolidPrimary,
                            fontSize: "14px !important",
                            minWidth: "180px !important",
                          }}
                        >
                          Mua ngay
                        </Button>
                      </Stack>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      marginTop: "30px",
                      borderTop: "1px solid rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <Stack
                      direction={"column"}
                      alignItems={"start"}
                      justifyContent={"start"}
                      sx={{
                        margin: "25px 15px",
                        rowGap: "15px",
                      }}
                    >
                      <Box sx={{ width: "100%" }}>
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                          sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr",
                            gridGap: "4px",
                            background: "#fff",
                            gap: "4px",
                          }}
                        >
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            justifyContent={"start"}
                            sx={{ ...PoliciesSpecialOffers, width: "100%" }}
                          >
                            <Stack
                              direction={"row"}
                              alignItems={"center"}
                              justifyContent={"start"}
                              className="shopee-drawer"
                              id="pc-drawer-id-1"
                              sx={shopeeDrawerProductDetail}
                            >
                              <Stack
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"start"}
                                sx={shopeeDrawerProductDetailItem}
                              >
                                <Box sx={shopeeDrawerProductDetailItemImage}>
                                  <img
                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/2bcf834c40468ebcb90b.svg"
                                    height="18px"
                                    width="18px"
                                  />
                                </Box>
                                <Typography
                                  sx={shopeeDrawerProductDetailItemText}
                                >
                                  Đổi ý miễn phí 15 ngày
                                </Typography>
                              </Stack>
                            </Stack>
                          </Stack>
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            sx={{ ...PoliciesSpecialOffers, width: "100%" }}
                          >
                            <Stack
                              direction={"row"}
                              alignItems={"center"}
                              justifyContent={"center"}
                              className="shopee-drawer"
                              id="pc-drawer-id-2"
                              sx={shopeeDrawerProductDetail}
                            >
                              <Stack
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                sx={shopeeDrawerProductDetailItem}
                              >
                                <Box sx={shopeeDrawerProductDetailItemImage}>
                                  <img
                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/511aca04cc3ba9234ab0.png"
                                    height="18px"
                                    width="18px"
                                  />
                                </Box>
                                <Typography
                                  sx={shopeeDrawerProductDetailItemText}
                                >
                                  Hàng chính hãng 100%
                                </Typography>
                              </Stack>
                            </Stack>
                          </Stack>
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            justifyContent={"end"}
                            sx={{ ...PoliciesSpecialOffers, width: "100%" }}
                          >
                            <Stack
                              direction={"row"}
                              alignItems={"center"}
                              justifyContent={"end"}
                              className="shopee-drawer"
                              id="pc-drawer-id-3"
                              sx={shopeeDrawerProductDetail}
                            >
                              <Stack
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"end"}
                                sx={shopeeDrawerProductDetailItem}
                              >
                                <Box sx={shopeeDrawerProductDetailItemImage}>
                                  <img
                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/16ead7e0a68c3cff9f32.png"
                                    height="18px"
                                    width="18px"
                                  />
                                </Box>
                                <Typography
                                  sx={shopeeDrawerProductDetailItemText}
                                >
                                  Miễn phí vận chuyển
                                </Typography>
                              </Stack>
                            </Stack>
                          </Stack>
                        </Stack>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </section>
            </section>
            <section
              className="page-product__shop"
              style={{
                background: "#fff",
                borderRadius: ".125rem",
                boxShadow: "0 1px 1px 0 rgba(0, 0, 0, .05)",
                marginTop: ".9375rem",
                overflow: "hidden",
                // padding: ".625rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                // overflow: "visible",
                padding: "25px",
              }}
            >
              <Typography component={"h2"} sx={productDetailH2Style}>
                Shop Information Section
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                sx={{
                  borderRight: "1px solid rgba(0, 0, 0, .05)",
                  boxSizing: "border-box",
                  maxWidth: "440px",
                  paddingRight: "25px",
                }}
              >
                <Link
                  href="/nhanam59?categoryId=100643&amp;entryPoint=ShopByPDP&amp;itemId=6205418939&amp;upstream=dd"
                  sx={{
                    flexShrink: "0",
                    marginRight: "20px",
                    outline: "0",
                    overflow: "visible",
                    position: "relative",
                    cursor: "pointer",
                    textDecoration: "none",
                    backgroundColor: "initial",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      height: "80px",
                      width: "80px",
                      border: "1px solid rgba(0, 0, 0, .09)",
                      borderRadius: "50%",
                      boxSizing: "border-box",
                      // height: "1.875rem",
                      // width: "1.875rem",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#f5f5f5",
                        borderRadius: "50%",
                        overflow: "hidden",
                        paddingTop: "100%",
                        width: "100%",
                        position: "relative",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          stroke: "#c6c6c6",
                          fontSize: "1.5rem",
                          fontWeight: "400",
                          left: "50%",
                          lineHeight: "2rem",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <img
                          alt="icon head shot"
                          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/1e1b08f78a2608ccffa9.svg"
                          height="24px"
                          width="24px"
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        left: "0",
                        top: "0",
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        alt="click here to visit shop"
                        src="https://down-vn.img.susercontent.com/file/vn-11134216-7r98o-lkz0yba84r1974_tn"
                        height="100%"
                        width="100%"
                        style={{
                          borderRadius: "50%",
                        }}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      bottom: "0",
                      position: "absolute",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      className="official-shop-new-badge"
                      sx={{ whiteSpace: "normal" }}
                    >
                      <img
                        alt="mall shop badge"
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/483071c49603aa7163a7.png"
                        loading="lazy"
                        width="64px"
                        height="16px"
                      />
                    </Stack>
                  </Box>
                </Link>
                <Stack
                  direction={"column"}
                  alignItems={"start"}
                  justifyContent={"space-between"}
                  sx={{
                    flexGrow: "1",
                    overflow: "hidden",
                  }}
                >
                  <Typography
                    sx={{
                      color: "rgba(0, 0, 0, .87)",
                      fontSize: "16px",
                      fontWeight: "400",
                      margin: "0",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Nhã Nam (Hiệu sách Nhã Nam)
                  </Typography>
                  <Stack
                    alignItems={"center"}
                    sx={{
                      color: "#757575",
                      fontSize: "14px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, .54)",
                        fontSize: "14px",
                        textTransform: "capitalize",
                      }}
                    >
                      Online 9 phút trước
                    </Typography>
                  </Stack>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    sx={{
                      marginTop: "8px",
                    }}
                  >
                    <Button
                      className="btn btn-tinted btn--s btn--inline"
                      sx={{
                        ...shopeeBtn,
                        ...shopeeBtnSizeS,
                        ...shopeeBtnInline,
                        ...shopeeBtnTinted,
                        marginRight: "10px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          backgroundImage:
                            "url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/cca4d4ed5534d55ee735.svg)",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          display: "inline-block",
                          flexShrink: "0",
                          height: "14px",
                          marginRight: "5px",
                          width: "14px",
                          textTransform: "capitalize",
                        }}
                      ></Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                        }}
                      >
                        Chat ngay
                      </Typography>
                    </Button>
                    <Button
                      className="btn btn-light btn--s btn--inline btn-light--link"
                      // href="/nhanam59?categoryId=100643&amp;entryPoint=ShopByPDP&amp;itemId=6205418939&amp;upstream=dd"
                      sx={{
                        ...shopeeBtn,
                        ...shopeeBtnInline,
                        ...shopeeBtnLight,
                        ...shopeeBtnLightLink,
                      }}
                    >
                      <img
                        alt="icon shop"
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/192a8dfc1c23525d396b.svg"
                        style={{
                          display: "inline-block",
                          flexShrink: "0",
                          height: "14px",
                          marginRight: "5px",
                          width: "14px",
                          border: "0",
                          overflowClipMargin: "content-box",
                          overflow: "clip",
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "14px",
                        }}
                      >
                        xem shop
                      </Typography>
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                sx={{
                  flexGrow: "1",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, auto)",
                  gridGap: "20px 50px",
                  color: "rgba(0, 0, 0, .4)",
                  gap: "20px 50px",
                  paddingLeft: "25px",
                }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  sx={shopeeOperationalInformationBox}
                >
                  <Typography sx={{ ...shopeeOperationalInformationLabel }}>
                    Đánh giá
                  </Typography>
                  <Typography sx={{ ...shopeeOperationalInformationText }}>
                    116,3k
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  sx={shopeeOperationalInformationBox}
                >
                  <Typography sx={{ ...shopeeOperationalInformationLabel }}>
                    tỉ lệ phản hồi
                  </Typography>
                  <Typography sx={{ ...shopeeOperationalInformationText }}>
                    78%
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  sx={shopeeOperationalInformationBox}
                >
                  <Typography sx={{ ...shopeeOperationalInformationLabel }}>
                    tham gia
                  </Typography>
                  <Typography sx={{ ...shopeeOperationalInformationText }}>
                    5 năm trước
                  </Typography>
                </Stack>
                <Link
                  sx={{
                    ...shopeeOperationalInformationBox,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textDecoration: "none",
                  }}
                  href="/nhanam59#product_list"
                >
                  <Typography sx={{ ...shopeeOperationalInformationLabel }}>
                    Sản phẩm
                  </Typography>
                  <Typography sx={{ ...shopeeOperationalInformationText }}>
                    2,6k
                  </Typography>
                </Link>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  sx={shopeeOperationalInformationBox}
                >
                  <Typography sx={{ ...shopeeOperationalInformationLabel }}>
                    thời gian phản hồi
                  </Typography>
                  <Typography sx={{ ...shopeeOperationalInformationText }}>
                    trong vài giờ
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  sx={shopeeOperationalInformationBox}
                >
                  <Typography sx={{ ...shopeeOperationalInformationLabel }}>
                    Người theo dõi
                  </Typography>
                  <Typography sx={{ ...shopeeOperationalInformationText }}>
                    314k
                  </Typography>
                </Stack>
              </Stack>
            </section>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          // "&:after": {
          width: "100%",
          height: "4px",
          backgroundColor: "#fff",
          borderTop: "4px solid #d0011b",
          color: "rgba(0, 0, 0, .54)",
          minWidth: "75rem",
          // },
        }}
      ></Box>
      <Box
        sx={{
          borderBottom: "1px solid rgba(0, 0, 0, .12)",
          height: "7.5rem",
          width: "100%",
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            margin: "0 auto",
            width: "75rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            height: "100%",
            justifyItems: "center",
            // margin: "0 -.3125rem",
            overflow: "hidden",
            alignItems: "center",
            fontSize: "14px",
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"start"}
            sx={{
              ...productDetailFreeShippingReturnPolicy,
              width: "100%",
              justifyItems: "start",
            }}
          >
            <Box sx={productDetailFreeShippingReturnPolicyImage}>
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/6c502a2641457578b0d5.png"
                height="50px"
                width="50px"
              />
            </Box>
            <Box
              sx={{
                maxWidth: "17.1875rem",
                textAlign: "left",
              }}
            >
              <Typography sx={{ margin: "0", fontSize: "14px" }}>
                7 ngày miễn phí trả hàng
              </Typography>
              <Typography
                sx={{ margin: "0", textAlign: "left", fontSize: "14px" }}
              >
                Trả hàng miễn phí trong 7 ngày
              </Typography>
            </Box>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              ...productDetailFreeShippingReturnPolicy,
              width: "100%",
              justifyItems: "center",
            }}
          >
            <Box sx={productDetailFreeShippingReturnPolicyImage}>
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/511aca04cc3ba9234ab0.png"
                height="50px"
                width="50px"
              />
            </Box>
            <Box sx={{ maxWidth: "17.1875rem", textAlign: "left" }}>
              <Typography
                sx={{ margin: "0", textAlign: "left", fontSize: "14px" }}
              >
                Hàng chính hãng 100%
              </Typography>
              <Typography
                sx={{ margin: "0", textAlign: "left", fontSize: "14px" }}
              >
                Đảm bảo hàng chính hãng hoặc hoàn tiền gấp đôi
              </Typography>
            </Box>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"end"}
            sx={{
              ...productDetailFreeShippingReturnPolicy,
              width: "100%",
              justifyItems: "end",
            }}
          >
            <Box sx={productDetailFreeShippingReturnPolicyImage}>
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/16ead7e0a68c3cff9f32.png"
                height="50px"
                width="50px"
              />
            </Box>
            <Box sx={{ maxWidth: "17.1875rem", textAlign: "left" }}>
              <Typography
                sx={{ margin: "0", textAlign: "left", fontSize: "14px" }}
              >
                Miễn phí vận chuyển
              </Typography>
              <Typography
                sx={{ margin: "0", textAlign: "left", fontSize: "14px" }}
              >
                Giao hàng miễn phí toàn quốc
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default ProductDetailBody;
