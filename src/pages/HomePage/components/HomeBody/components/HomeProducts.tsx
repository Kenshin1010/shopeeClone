import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  Link,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import ArrowDownIcon from "../../../../../assets/jsx-icon/ArrowDownIcon";
import ArrowLeft from "../../jsx-icon/ArrowLeft";
import ArrowLeftSmall from "../../jsx-icon/ArrowLeftSmall";
import ArrowRight from "../../jsx-icon/ArrowRight";
import ArrowRightSmall from "../../jsx-icon/ArrowRightSmall";
import DarkStar from "../../jsx-icon/DarkStar";
import DownArrowRightFilled from "../../jsx-icon/DownArrowRightFilled";
import GoldStar from "../../jsx-icon/GoldStar";
import PuzzlePieceFirst from "../../jsx-icon/PuzzlePieceFirst";
import PuzzlePieceLast from "../../jsx-icon/PuzzlePieceLast";
import RatingStar from "../../jsx-icon/RatingStar";
import RatingStarColored from "../../jsx-icon/RatingStarColored";
import SearchFilter from "../../jsx-icon/SearchFilter";
import ShopeeCategoryList from "../../jsx-icon/ShopeeCategoryList";
import Transport from "../../jsx-icon/Transport";
import VideoPlayIcon from "../../../../../assets/jsx-icon/VideoPlayIcon";

function HomeProducts() {
  const shopeeCategoryListBoxLinkStyle = useMemo(
    () => ({
      //   alignItems: "center",
      position: "relative",
      textOverflow: "ellipsis",
      //   overflow: "hidden",
      maxHeight: "3rem",
      padding: ".5rem .625rem .5rem .75rem",
      lineHeight: "1rem",
      wordWrap: "break-word",
      textAlign: "left",
    }),
    []
  );

  const shopeeCategoryList = useMemo(
    () => ({
      color: "rgba(0, 0, 0, .8)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    }),
    []
  );

  const shopeeCategoryListLink = useMemo(
    () => ({
      textDecoration: "none",
      fontWeight: "700",
      fontSize: ".875rem",
      color: "rgba(0, 0, 0, .87)",
    }),
    []
  );

  const iconDownArrowRightFilledStyle = useMemo(
    () => ({
      opacity: "1",
      position: "absolute",
      left: "0",
      width: "7px",
      height: "7px",
      marginTop: "4px",
      // opacity: "0",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      // display: "none",
    }),
    []
  );

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const shopeeFilterGroupBoxStyle = useMemo(
    () => ({
      padding: "1.25rem 0",
      borderBottom: "1px solid rgba(0, 0, 0, .09)",
    }),
    []
  );

  const shopeeFilterGroupHeaderStyle = useMemo(
    () => ({
      marginBottom: ".625rem",
      fontWeight: "500",
      textAlign: "left",
    }),
    []
  );

  const shopeeFilterGroupBodyStyle = useMemo(
    () => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    }),
    []
  );

  const shopeeFilterStyle = useMemo(
    () => ({
      alignItems: "flex-start",
      padding: ".5rem 0",
    }),
    []
  );

  const shopeeFilterCheckBoxStyle = useMemo(
    () => ({
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      overflow: "hidden",
      color: "rgba(0, 0, 0, .8)",
    }),
    []
  );

  const shopeeCheckBoxControlStyle = useMemo(
    () => ({
      display: "flex",
      flexDirection: "row",
      //   alignItems: "end",
      alignItems: "center",
      justifyContent: "start",
      cursor: "pointer",
      userSelect: "none",
      "& .MuiTypography-root": {
        fontSize: ".875rem",
      },
      "& .MuiSvgIcon-root": {
        fontSize: "13px",
        color: "#ee4d2d",
        marginTop: ".0625rem",
        justifyContent: "center",
        boxSizing: "border-box",
        // backgroundColor: "#fff",
        textAlign: "center",
        // width: ".8125rem",
        // height: ".8125rem",
        // lineHeight: ".6875rem",
        // border: "1px solid rgba(0, 0, 0, .26)",
        borderRadius: "2px",
        // flexShrink: "0",
        marginRight: ".625rem",
        // boxShadow: "inset 0 1px 0 0 rgba(0,0,0,.05)",
      },
      "&.Mui-checked": {
        color: "#ee4d2d",
      },
    }),
    []
  );

  // const shopeeCheckboxBoxStyle = useMemo(
  //   () => ({
  //     marginTop: ".0625rem",
  //     justifyContent: "center",
  //     boxSizing: "border-box",
  //     backgroundColor: "#fff",
  //     textAlign: "center",
  //     width: ".8125rem",
  //     height: ".8125rem",
  //     lineHeight: ".6875rem",
  //     border: "1px solid rgba(0, 0, 0, .26)",
  //     borderRadius: "2px",
  //     flexShrink: "0",
  //     marginRight: ".625rem",
  //     boxShadow: "inset 0 1px 0 0 rgba(0,0,0,.05)",
  //   }),
  //   []
  // );

  const shopeePriceRangeFilterTextFieldStyle = useMemo(
    () => ({
      "& .MuiInputBase-input": {
        width: "5rem",
        fontSize: ".75rem",
        // width: "4.375rem",
        height: "1.875rem",
        lineHeight: "normal",
        backgroundColor: "#fff",
        outline: "none",
        boxSizing: "border-box",
        padding: "4px 0 5px",
        paddingLeft: ".3125rem",
        // fontSize: ".8125rem",
        boxShadow: "inset 0 1px 0 0 rgba(0,0,0,.05)",
      },

      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "1px solid rgba(0, 0, 0, .26)",
        borderRadius: ".125rem",
      },
    }),
    []
  );

  const shopeeButtonSolidStyle = {
    outline: "none",
    cursor: "pointer",
    border: "0",
    fontSize: ".875rem",
    fontWeight: "300",
    lineHeight: "1",
    letterSpacing: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color .1s cubic-bezier(.4,0,.6,1) opacity .2s ease",
    position: "relative",
    backgroundColor: "rgba(0, 0, 0, .54)",
    color: "#fff",
    borderRadius: "2px",
    userSelect: "none",
    boxShadow: "0 1px 1px 0 rgba(0,0,0,.09)",
    textTransform: "uppercase",
    height: "1.875rem",
    width: "100%",
  };

  const shopeeButtonSolidPrimaryStyle = {
    position: "relative",
    overflow: "visible",
    outline: "0",
    backgroundColor: "rgb(238, 77, 45)",
  };

  const shopeeStarFoldingItems = {
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    height: "1.5625rem",
    padding: "0 .75rem",
    whiteSpace: "nowrap",
  };

  const ratingStarsContainerStyle = {
    marginBottom: "1px",
    display: "flex",
  };

  const ratingStarsStarStyle = {
    margin: "0 .25rem 0 0",
    color: "#ffce3d",
    stroke: "currentColor",
    display: "inline-block",
    height: "1em",
    width: "1em",
    fill: "currentColor",
    position: "relative",
    cursor: "pointer",
  };

  const ratingStarTypography = {
    color: "rgba(0, 0, 0, .8)",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "17px",
  };

  const [price, setPrice] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setPrice(event.target.value);
  };

  const shopeeSortBarStyle = {
    fontWeight: "400",
    background: "rgba(0, 0, 0, .03)",
    padding: ".8125rem 1.25rem",
    borderRadius: "2px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const productFieldSetStyle = {
    marginInlineStart: "2px",
    marginInlineEnd: "2px",
    // paddingBlockStart: ".35em",
    paddingInlineStart: ".75em",
    paddingInlineEnd: ".75em",
    // paddingBlockEnd: ".625em",
    minInlineSize: "min-content",
    // borderWidth: "2px",
    // borderStyle: "groove",
    // borderColor: "rgb(192, 192, 192)",
    // borderImage: "initial",
    // border: "1px solid silver",
    // margin: "0 2px",
    // padding: ".35em .625em .75em",
  };

  const shopeeSortByOptionStyle = {
    display: "flex",
    alignItems: "stretch",
    flex: "1",
    gridGap: ".625rem",
    gap: ".625rem",
    justifyContent: "flex-start",
  };

  const shopeeSortByOptionGroupStyle = {
    display: "flex",
    gridGap: ".625rem",
    gap: ".625rem",
    marginLeft: ".625rem",
    // boxShadow: "none",
  };

  const shopeeButtonSortByOption = {
    color: "rgba(0, 0, 0, .8)",
    boxShadow: "0 1px 1px 0 rgba(0,0,0,.02)",
    height: "2.125rem",
    lineHeight: "2.125rem",
    borderRadius: "2px",
    border: "0",
    overflow: "visible",
    outline: "0",
    cursor: "pointer",
    userSelect: "none",
    position: "relative",
    display: "flex",
    minWidth: "5.625rem",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "capitalize",
    padding: "0 .9375rem",
    backgroundColor: "#fff",
    whiteSpace: "nowrap",
  };

  const shopeePriceSelectStyle = {
    textAlign: "left",
    cursor: "pointer",
    border: "0",
    borderRadius: "2px",
    height: "2.125rem",
    lineHeight: "2.125rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    boxSizing: "border-box",
    minWidth: "12.5rem",
    background: "#fff",
    transition: "border-color .1s ease",
    paddingLeft: ".75rem",
    boxShadow: "0 1px 1px 0 rgba(0,0,0,.02)",
  };

  // const shopeeSearchItemResult = {
  //   margin: "1.25rem 0 3.75rem",
  // };

  const shopeePageController = {
    margin: "1.25rem 0 3.75rem",
    position: "relative",
    overflow: "visible",
    outline: "0",
    color: "rgba(0, 0, 0, .4)",
    minWidth: "2.5rem",
    height: "1.875rem",
    border: "0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };

  const shopeeIconButton = {
    pointerEvents: "none",
    // border: "1px solid rgba(0, 0, 0, .54)",
    backgroundColor: "transparent",
    padding: "0",
    // outline: "none",
    cursor: "pointer",
    border: "0",
    fontSize: ".875rem",
    fontWeight: "300",
    lineHeight: "1",
    letterSpacing: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color .1s cubic-bezier(.4,0,.6,1)",
    textDecoration: "none",
    position: "relative",
    overflow: "visible",
    outline: "0",
    color: "rgba(0, 0, 0, .4)",
    minWidth: "2.5rem",
    height: "1.875rem",
  };

  const shopeeButtonSolid = {
    color: "#fff",
    padding: "0",
    minWidth: "2.5rem",
    textAlign: "center",
    height: "1.875rem",
    fontSize: "1.25rem",
    marginLeft: ".9375rem",
    marginRight: ".9375rem",
    textDecoration: "none",
  };

  const shopeeButtonSolidPrimary = {
    position: "relative",
    overflow: "visible",
    outline: "0",
    background: "#ee4d2d",
  };

  const shopeeButtonNoOutline = {
    position: "relative",
    overflow: "visible",
    // outline: "0",
    padding: ".3125rem .4375rem",
    color: "rgba(0, 0, 0, .8)",
    backgroundColor: "transparent",
    outline: "none",
    cursor: "pointer",
    border: "0",
    // fontSize: ".875rem",
    fontWeight: "300",
    lineHeight: "1",
    letterSpacing: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color .1s cubic-bezier(.4,0,.6,1)",
    textDecoration: "none",
  };

  const shopeeSVGIcon = {
    verticalAlign: "middle",
    // display: "inline-block",
    fill: "currentColor",
    // position: "relative",
    overflowClipMargin: "content-box",
    overflow: "hidden",
  };

  const ListItemSearchResult = {
    height: "338px",
    maxHeight: "338px",
    overflow: "visible",
    boxSizing: "border-box",
    margin: ".3125rem 0",
    flex: "0 0 auto",
    padding: "0",
    paddingLeft: ".3125rem",
    paddingRight: ".3125rem",
  };

  const LinkProductStyle = {
    textDecoration: "none",
    backgroundColor: "initial",
    cursor: "pointer",
  };

  const BoxProductStyle = {
    textDecoration: "none",
    color: "rgba(0, 0, 0, .87)",
    boxShadow: "0 0.0625rem 0.125rem 0 rgba(0,0,0,.1)",
    borderRadius: ".125rem",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    position: "relative",
    // overflow: "visible",
    cursor: "pointer",
    userSelect: "none",
    padding: "0",
    transition:
      "transform .1s cubic-bezier(.4,0,.6,1), box-shadow .1s cubic-bezier(.4,0,.6,1)",
    "&:active": {
      boxShadow: "0 0.0625rem 5px 0 rgba(0,0,0,.05)",
      transform: "translateY(0)",
    },
    "&:focus-visible": {
      boxShadow: "0 0.0625rem 20px 0 rgba(0,0,0,.05)",
      transform: "translateY(-.0625rem)",
      zIndex: "1",
    },
    "&:hover": {
      boxShadow: "0 0.0625rem 20px 0 rgba(0,0,0,.05)",
      transform: "translateY(-.0625rem)",
      zIndex: "1",
    },
  };

  const BoxProductImageStyle = {
    position: "relative",
    width: "100%",
    paddingTop: "100%",
    "& Image": {
      verticalAlign: "bottom",
      border: "0",
    },
  };

  const ImageProductStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    opacity: "1",
    transition: "opacity .2s ease",
  };

  const ProductTypeStyle = {
    position: "absolute",
    left: "0",
    top: ".625rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    zIndex: "1",
    maxWidth: "70%",
  };

  const TypeTextMallStyle = useMemo(
    () => ({
      height: "1rem",
      fontSize: ".75rem",
      lineHeight: ".875rem",
      paddingLeft: ".25rem",
      paddingRight: ".25rem",
    }),
    []
  );

  const TypeTextOrderProcessingStyle = useMemo(
    () => ({
      height: "auto",
      fontSize: ".75rem",
      lineHeight: ".875rem",
      padding: ".1875rem .25rem",
    }),
    []
  );

  const TypeTextFavouriteStyle = useMemo(
    () => ({
      padding: "0 .25rem",
      height: "auto !important",
      textAlign: "center",
      color: "#fff",
      fontSize: ".75rem",
      lineHeight: ".875rem",
      width: "100%",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }),
    []
  );

  const TypeTextFavouritePlusStyle = useMemo(
    () => ({
      padding: "0 .25rem",
      height: "1rem",
      textAlign: "center",
      color: "#fff",
      fontSize: ".75rem",
      lineHeight: ".875rem",
      width: "100%",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }),
    []
  );

  const TypeTextPositionStyle = useMemo(
    () => ({
      position: "relative",
      display: "flex",
      alignItems: "center",
      // height: ".9375rem",
      // fontSize: ".5625rem",
      // lineHeight: ".6875rem",
      fontWeight: "500",
      padding: "0 4px",
      borderTopRightRadius: ".125rem",
      borderBottomRightRadius: ".125rem",
      background: "currentColor",
      left: "-.1875rem",
      "&:before": {
        content: '""',
        display: "inline-block",
        position: "absolute",
        left: "0",
        bottom: "-.1875rem",
        borderTop: ".1875rem solid",
        borderLeft: ".1875rem solid transparent",
        filter: "brightness(60%)",
        // zIndex: "999",
      },
    }),
    []
  );

  const BoxClearAfterImageMallStyle = {
    backgroundImage:
      "url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/categoryfe/1ea7594a0e6dbc0cdb8640b83a1079bb.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: ".5rem",
    width: "1.25rem",
    position: "relative",
  };

  const BoxClearAfterImageOrderProcessingStyle = {
    backgroundImage:
      "url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/categoryfe/3361d5d49cdd25810414e42aaa37f7fb.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: ".9375rem",
    width: "3.5rem",
    position: "relative",
  };

  const BoxClearAfterImageFavouritePlusStyle = {
    backgroundImage:
      "url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/categoryfe/f67540f14c9c3888a0187b5954de12e6.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: ".75rem",
    width: "3.4375rem",
    position: "relative",
  };

  const shopeeIconVideo = {
    position: "absolute",
    right: "0",
    bottom: "0",
    zIndex: "1",
  };

  const shopeeIconVideoPlay = {
    position: "absolute",
    right: ".25rem",
    bottom: ".25rem",
    // width: "1.25rem",
    // height: "1.25rem",
    stroke: "none",
    fill: "rgba(0, 0, 0, .5)",
  };

  const CustomizedOverlay = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  };

  const CustomizedOverlayImage = {
    "& Image": {
      width: "100%",
      verticalAlign: "bottom",
      border: "0",
      overflowClipMargin: "content-box",
      overflow: "clip",
    },
  };

  const productContentStyle = {
    flex: "1 0 auto",
    display: "flex",
    flexDirection: "column",
    padding: ".5rem",
    overflow: "hidden",
    height: "150px",
  };

  const productBoxName = {
    flex: "1 0 auto",
    display: "flex",
    flexDirection: "column",
  };

  const productBoxNameGrow = {
    flexGrow: "1",
    minHeight: "1.75rem",
    "& .MuiTypography-root": {
      height: "1.75rem",
      lineHeight: "1.2",
    },
  };

  const productNameStyle = {
    // display: "inline-block",
    wordWrap: "break-word",
    whiteSpace: "normal",
    // overflow: "hidden",
    // textOverflow: "ellipsis",
    // display: "inline",
    lineHeight: "14px",
    fontSize: ".75rem",
    // fontSize: ".875rem",
    // lineHeight: "1.25rem",
    "& .MuiTypography-root": {
      fontSize: ".75rem",
    },
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
  };

  const productPriceAtTime = {
    overflow: "hidden",
    marginTop: ".25rem",
  };

  const productPriceAtTimeCurrency = {
    display: "flex",
    alignItems: "center",
    width: "fit-content",
  };

  const productPriceTime = {
    maxWidth: "100%",
    height: "100%",
    color: "#ee4d2d",
    borderColor: "#ee4d2d",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    display: "inline-block",
    alignItems: "center",
    cursor: "default",
    userSelect: "none",
    padding: ".125rem .25rem",
    marginTop: "0",
    marginBottom: "0",
    // height: "1rem",
    boxSizing: "border-box",
    border: ".0625rem solid",
    borderRadius: ".0625rem",
    backgroundColor: "transparent",
    fontSize: ".625rem",
  };

  const productPrice = {
    padding: ".5rem 0 0",
    height: "1.25rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  };

  const productCurrentPrice = {
    marginRight: ".3125rem",

    flexGrow: "0",
    flexShrink: "0",
    color: "#ee4d2d",
    // maxWidth: "100%",
    transition: "all .1s cubic-bezier(.4,0,.6,1)",
  };

  const productPriceDisplay = {
    // display: "inline",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  };

  const productCurrentPriceCurrency = {
    fontSize: ".75rem",
    color: "#ee4d2d",
    flex: "0 1 auto",
  };

  const productCurrentPriceValue = {
    fontSize: "1rem",
    color: "#ee4d2d",
    flex: "0 1 auto",
  };

  const productOlderPrice = {
    color: "rgba(0, 0, 0, .54)",
    textDecoration: "line-through",
    maxWidth: "100%",
    transition: "all .1s cubic-bezier(.4,0,.6,1)",
    flex: "0 1 auto",
  };

  const pricePercentDiscountAlign = {
    marginRight: ".25rem",
  };

  const pricePercentDiscountBox = {
    marginLeft: ".125rem",
    borderRadius: ".125rem !important",
    padding: ".125rem !important",
    display: "block",
    // padding: ".125rem .25rem",
    backgroundColor: "#feeeea",
    borderBottomLeftRadius: ".125rem",
  };

  const pricePercentDiscountValue = {
    fontSize: ".625rem",
    lineHeight: ".75rem",
    display: "block",
    color: "#ee4d2d",
    // fontSize: ".75rem",
    // lineHeight: ".875rem",
    fontWeight: "500",
  };

  const ratingSold = {
    height: "1.25rem",
    marginTop: ".75rem",
  };

  const ratingStyle = {
    color: "rgba(0, 0, 0, .26)",
    cursor: "pointer",
    fontSize: ".625rem",
    overflow: "hidden",
    flexShrink: "0",
  };

  const shopeeRatingStars = {
    position: "relative",
    display: "inline-block",
  };

  const shopeeRatingStarsWrapper = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    position: "relative",
    marginRight: "1px",
  };

  const shopeeRatingStarsLit = {
    overflow: "hidden",
    position: "absolute",
    height: "100%",
    left: "0",
    top: "0",
    zIndex: "1",
    color: "#ffce3d",
    fill: "#ffce3d",
    display: "block",
    overflowX: "hidden",
  };

  const shopeeRatingStarsUnlit = {
    overflow: "hidden",
    // position: "absolute",
    height: "100%",
    // left: "0",
    // top: "0",
    color: "#d5d5d5",
    fill: "#d5d5d5",
    transformOrigin: "0px 0px",
    display: "block",
    overflowX: "hidden",
  };

  const shopeeSoldStyle = {
    marginLeft: ".25rem",
    color: "rgba(0, 0, 0, .87)",
    fontSize: ".75rem",
    lineHeight: ".875rem",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  };

  const shopeeTransport = {
    marginTop: ".5rem",
  };

  const shopeeTransportTime = {
    fontSize: ".75rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    lineHeight: "1.125rem",
    maxWidth: "90%",
    color: "#26aa99",
    margin: "0 .25rem 0 .125rem",
    flex: "0 0 auto",
  };

  const shopeeTransportLocation = {
    fontSize: ".75rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    lineHeight: "1.125rem",
    color: "rgba(0, 0, 0, .65)",
    minHeight: "1em",
    textAlign: "left",
    fontWeight: "200",
    flex: "0 1 auto",
  };

  const priceDiscountCoupons = {
    overflow: "hidden",
    marginTop: ".25rem",
    height: "1rem",
  };

  const priceDiscountCoupon = {
    display: "flex",
    maxWidth: "60%",
    flexShrink: "0",
    marginRight: ".25rem",
    "& .MuiBox-root": {
      padding: "0",
    },
  };

  const priceDiscountCouponContent = {
    color: "white",
    backgroundColor: "rgb(246, 145, 19)",
    lineHeight: "1rem",
    height: "1rem",
    margin: "0 .1875rem",
    // padding: "0 .0625rem",
    padding: "0 calc(var(--ns-a, .25rem) - .1875rem)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    position: "relative",
    zIndex: "1",
  };

  const priceDiscountCouponDeal = {
    color: "#ee4d2d",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    display: "inline-block",
    alignItems: "center",
    cursor: "default",
    userSelect: "none",
    padding: ".125rem .25rem",
    marginTop: "0",
    marginBottom: "0",
    height: "1rem",
    boxSizing: "border-box",
    lineHeight: "100%",
    border: ".0625rem solid",
    borderRadius: ".0625rem",
    backgroundColor: "transparent",
    fontSize: ".625rem",
  };

  const priceDiscountCouponWholeSale = {
    color: "#44b5ff",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    display: "inline-block",
    alignItems: "center",
    cursor: "default",
    userSelect: "none",
    padding: ".125rem .25rem",
    marginTop: "0",
    marginBottom: "0",
    height: "1rem",
    boxSizing: "border-box",
    lineHeight: "100%",
    border: ".0625rem solid",
    borderRadius: ".0625rem",
    backgroundColor: "transparent",
    fontSize: ".625rem",
    flexShrink: "0",
  };

  const ntFoot = {
    color: "rgb(246, 145, 19)",
    fontWeight: "500",
    fontSize: ".625rem",
    lineHeight: "1rem",
    "& .MuiBox-root": {
      padding: "0",
    },
  };

  const ntFootInsert = {
    boxSizing: "border-box",
    display: "inline-block",
    height: "1rem",
    minWidth: "0",
    position: "relative",
    overflow: "hidden",
    "&:before": {
      transform: "none",
      transformOrigin: "0 0",
      top: "0",
      content: "''",
      display: "block",
      height: ".0625rem",
      // transform: "scaleY(.5)",
      background: "currentColor",
      position: "absolute",
      left: ".25rem",
      right: ".25rem",
    },
    "&:after": {
      transform: "none",
      transformOrigin: "0 100%",
      bottom: "0",
      content: "''",
      display: "block",
      height: ".0625rem",
      // transform: "scaleY(.5)",
      background: "currentColor",
      position: "absolute",
      left: ".25rem",
      right: ".25rem",
    },
  };

  const PuzzlePieceStyle = {
    overflow: "hidden",
    width: ".25rem",
    height: "1rem",
    position: "absolute",
    top: "0",
    transform: "translateZ(0)",
  };

  return (
    <Box className={"HomeProducts"}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: "1.875rem",
          marginLeft: "auto",
          marginRight: "auto",
          width: "1200px",
          "&.MuiContainer-root": {
            padding: "0",
          },
          textAlign: "left",
          lineHeight: "1.2",
        }}
      >
        <Stack
          className="shopee-filter-panel"
          direction={"column"}
          alignContent={"start"}
          justifyContent={"start"}
          sx={{
            flex: "0 0 11.875rem",
            minWidth: "0",
            margin: "0 1.25rem 1.25rem 0",
          }}
        >
          <Box className="shopee-category-list" sx={{ shopeeCategoryList }}>
            <Link
              className="shopee-category-list__header"
              href="/all_categories"
              sx={{
                height: "3.1875rem",
                marginBottom: ".625rem",
                fontSize: "1rem",
                fontWeight: "700",
                lineHeight: "3.1875rem",
                color: "rgba(0, 0, 0, .8)",
                textDecoration: "none",
                textTransform: "capitalize",
                borderBottom: "1px solid rgba(0, 0, 0, .05)",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <Box
                sx={{
                  overflow: "hidden",
                  marginRight: ".625rem",
                  fill: "currentColor",
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ShopeeCategoryList />
              </Box>
              Tất cả Danh mục
            </Link>
            <Box
              className="shopee-category-list__body"
              sx={{ textAlign: "left" }}
            >
              <Box className="shopee-category-list__category">
                <Box
                  className="shopee-category-list__main-category shopee-category-list__main-category--active"
                  sx={shopeeCategoryListBoxLinkStyle}
                >
                  <Link
                    className="shopee-category-list__main-category__link"
                    href="/Nhà-Sách-Online-cat.11036863"
                    sx={{
                      ...shopeeCategoryListLink,
                      color: "#ee4d2d",
                    }}
                  >
                    <Box
                      sx={{
                        opacity: "1",
                        fill: "#ee4d2d",
                        position: "absolute",
                        left: "0",
                        width: "7px",
                        height: "7px",
                        marginTop: "4px",
                        // opacity: "0",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <DownArrowRightFilled />
                    </Box>
                    Nhà Sách Online
                  </Link>
                </Box>
                <Box
                  className="folding-items shopee-category-list__sub-category-list folding-items--folded"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    // alignItems: "start",
                    justifyContent: "start",
                  }}
                >
                  <Link
                    className="shopee-category-list__sub-category"
                    href="/Sách-Tiếng-Việt-cat.11036863.11108503"
                    sx={{
                      ...shopeeCategoryListBoxLinkStyle,
                      ...shopeeCategoryListLink,
                    }}
                  >
                    <Box
                      sx={{
                        fill: "#ee4d2d",
                        ...iconDownArrowRightFilledStyle,
                      }}
                    >
                      <DownArrowRightFilled />
                    </Box>
                    Sách Tiếng Việt
                  </Link>
                  <Link
                    className="shopee-category-list__sub-category"
                    href="/Sách-ngoại-văn-cat.11036863.11108540"
                    sx={{
                      ...shopeeCategoryListBoxLinkStyle,
                      ...shopeeCategoryListLink,
                    }}
                  >
                    <Box
                      sx={{
                        fill: "#ee4d2d",
                        ...iconDownArrowRightFilledStyle,
                      }}
                    >
                      <DownArrowRightFilled />
                    </Box>
                    Sách ngoại văn
                  </Link>
                  <Link
                    className="shopee-category-list__sub-category"
                    href="/Gói-Quà-cat.11036863.11108576"
                    sx={{
                      ...shopeeCategoryListBoxLinkStyle,
                      ...shopeeCategoryListLink,
                    }}
                  >
                    <Box
                      sx={{
                        fill: "#ee4d2d",
                        ...iconDownArrowRightFilledStyle,
                      }}
                    >
                      <DownArrowRightFilled />
                    </Box>
                    Gói Quà
                  </Link>
                  <Link
                    className="shopee-category-list__sub-category"
                    href="/Bút-viết-cat.11036863.11108584"
                    sx={{
                      ...shopeeCategoryListBoxLinkStyle,
                      ...shopeeCategoryListLink,
                    }}
                  >
                    <Box
                      sx={{
                        fill: "#ee4d2d",
                        ...iconDownArrowRightFilledStyle,
                      }}
                    >
                      <DownArrowRightFilled />
                    </Box>
                    Bút viết
                  </Link>
                  <Link
                    className="shopee-category-list__sub-category"
                    href="/Dụng-cụ-học-sinh-văn-phòng-cat.11036863.11108591"
                    sx={{
                      ...shopeeCategoryListBoxLinkStyle,
                      ...shopeeCategoryListLink,
                    }}
                  >
                    <Box
                      sx={{
                        fill: "#ee4d2d",
                        ...iconDownArrowRightFilledStyle,
                      }}
                    >
                      <DownArrowRightFilled />
                    </Box>
                    Dụng cụ học sinh &amp; văn phòng
                  </Link>
                  <Box className="stardust-dropdown folding-items__toggle">
                    <Box className="stardust-dropdown__item-header">
                      <Button
                        className="shopee-category-list__toggle-btn"
                        onClick={handleToggle}
                        style={{ display: isExpanded ? "none" : "flex" }} // Ẩn đi nút Button nếu isExpanded là true
                        sx={{
                          ...shopeeCategoryListBoxLinkStyle,
                          ...shopeeCategoryListLink,
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "start",
                          textTransform: "none",
                        }}
                      >
                        Thêm
                        <Box
                          sx={{
                            width: ".4375rem",
                            height: ".4375rem",
                            marginLeft: ".625rem",
                            fill: "rgba(0, 0, 0, .8)",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "start",
                          }}
                        >
                          <ArrowDownIcon />
                        </Box>
                      </Button>
                    </Box>
                    {isExpanded && (
                      <Box className="stardust-dropdown__item-body">
                        <Box
                          className="folding-items__folded-items"
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            justifyContent: "start",
                          }}
                        >
                          <Link
                            className="shopee-category-list__sub-category"
                            href="/Màu-Họa-Cụ-và-Đồ-Thủ-Công-cat.11036863.11108635"
                            sx={{
                              ...shopeeCategoryListBoxLinkStyle,
                              ...shopeeCategoryListLink,
                            }}
                          >
                            <Box
                              sx={{
                                fill: "#ee4d2d",
                                ...iconDownArrowRightFilledStyle,
                              }}
                            >
                              <DownArrowRightFilled />
                            </Box>
                            Màu, Họa Cụ và Đồ Thủ Công
                          </Link>
                          <Link
                            className="shopee-category-list__sub-category"
                            href="/Sổ-và-Giấy-Các-Loại-cat.11036863.11108610"
                            sx={{
                              ...shopeeCategoryListBoxLinkStyle,
                              ...shopeeCategoryListLink,
                            }}
                          >
                            <Box
                              sx={{
                                fill: "#ee4d2d",
                                ...iconDownArrowRightFilledStyle,
                              }}
                            >
                              <DownArrowRightFilled />
                            </Box>
                            Sổ và Giấy Các Loại
                          </Link>
                          <Link
                            className="shopee-category-list__sub-category"
                            href="/Quà-Lưu-Niệm-cat.11036863.11036914"
                            sx={{
                              ...shopeeCategoryListBoxLinkStyle,
                              ...shopeeCategoryListLink,
                            }}
                          >
                            <Box
                              sx={{
                                fill: "#ee4d2d",
                                ...iconDownArrowRightFilledStyle,
                              }}
                            >
                              <DownArrowRightFilled />
                            </Box>
                            Quà Lưu Niệm
                          </Link>
                          <Link
                            className="shopee-category-list__sub-category"
                            href="/Nhạc-cụ-và-phụ-kiện-âm-nhạc-cat.11036863.11108624"
                            sx={{
                              ...shopeeCategoryListBoxLinkStyle,
                              ...shopeeCategoryListLink,
                            }}
                          >
                            <Box
                              sx={{
                                fill: "#ee4d2d",
                                ...iconDownArrowRightFilledStyle,
                              }}
                            >
                              <DownArrowRightFilled />
                            </Box>
                            Nhạc cụ và phụ kiện âm nhạc
                          </Link>
                        </Box>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box></Box>
          <Box
            className="shopee-search-filter-status"
            sx={{
              marginTop: "1.875rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              textTransform: "uppercase",
              color: "rgba(0, 0, 0, .8)",
              height: "1.875rem",
              fontWeight: "700",
              fontSize: "1rem",
            }}
          >
            <Box
              sx={{
                fontSize: ".75rem",
                marginRight: ".625rem",
                stroke: "currentColor",
                display: "inline-block",
                height: "1em",
                width: "1em",
                fill: "currentColor",
                position: "relative",
              }}
            >
              <SearchFilter />
            </Box>
            <Box
              className="shopee-search-filter-status__text"
              sx={{
                flex: "1",
              }}
            >
              Bộ lọc tìm kiếm
            </Box>
          </Box>
          <Box
            className="shopee-filter-group shopee-facet-filter"
            sx={{ ...shopeeFilterGroupBoxStyle }}
          >
            <Box
              className="shopee-filter-group__header"
              sx={{
                ...shopeeFilterGroupHeaderStyle,
                ...shopeeCategoryListLink,
              }}
            >
              Theo Danh Mục
            </Box>
            <FormGroup
              sx={{ ...shopeeFilterStyle, ...shopeeFilterCheckBoxStyle }}
            >
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Thiết Bị Trường Học (568k+)"
              />
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Quà Lưu Niệm (446k+)"
              />
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Sổ &amp; Giấy Các Loại (426k+)"
              />
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Bút Các Loại (344k+)"
              />
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Thiết Bị Trường Học (568k+)"
              />
            </FormGroup>
            <Button
              className="shopee-category-list__toggle-btn"
              onClick={handleToggle}
              style={{ display: isExpanded ? "none" : "flex" }} // Ẩn đi nút Button nếu isExpanded là true
              sx={{
                ...shopeeCategoryListBoxLinkStyle,
                ...shopeeCategoryListLink,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "start",
                textTransform: "none",
              }}
            >
              Thêm
              <Box
                sx={{
                  width: ".4375rem",
                  height: ".4375rem",
                  marginLeft: ".625rem",
                  fill: "rgba(0, 0, 0, .8)",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <ArrowDownIcon />
              </Box>
            </Button>
            {isExpanded && (
              <FormGroup>
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Quà Tặng - Giấy Gói (169k+)"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Nhạc Cụ &amp; Phụ Kiện (168k+)"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Sách Giáo Dục (120k+)"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Họa cụ (116k+)"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Dụng Cụ May Vá (105k+)"
                />
              </FormGroup>
            )}
          </Box>
          <Box
            className="shopee-filter-group shopee-location-filter"
            sx={{ ...shopeeFilterGroupBoxStyle }}
          >
            <Box
              className="shopee-filter-group__header"
              sx={{
                ...shopeeFilterGroupHeaderStyle,
                ...shopeeCategoryListLink,
              }}
            >
              Nơi Bán
            </Box>
            <FormGroup
              sx={{ ...shopeeFilterStyle, ...shopeeFilterCheckBoxStyle }}
            >
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="TP. Hồ Chí Minh"
              />
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Đắk Lắk"
              />
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Bình Dương"
              />
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Đồng Nai"
              />
            </FormGroup>
            <Button
              className="shopee-category-list__toggle-btn"
              onClick={handleToggle}
              style={{ display: isExpanded ? "none" : "flex" }} // Ẩn đi nút Button nếu isExpanded là true
              sx={{
                ...shopeeCategoryListBoxLinkStyle,
                ...shopeeCategoryListLink,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "start",
                textTransform: "none",
              }}
            >
              Thêm
              <Box
                sx={{
                  width: ".4375rem",
                  height: ".4375rem",
                  marginLeft: ".625rem",
                  fill: "rgba(0, 0, 0, .8)",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <ArrowDownIcon />
              </Box>
            </Button>
            {isExpanded && (
              <FormGroup>
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Hà Nội"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Thái Nguyên"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Vĩnh Phúc"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Hải Phòng"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Hưng Yên"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Bắc Ninh"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Đà Nẵng"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Quảng Ninh"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Hải Dương"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Nam Định"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Cần Thơ"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Phú Thọ"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Bà Rịa - Vũng Tàu"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Thanh Hóa"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Thái Bình"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Nước ngoài"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Khác &gt;"
                />
              </FormGroup>
            )}
          </Box>
          <Box
            className="shopee-filter-group shopee-logistics-filter"
            sx={{ ...shopeeFilterGroupBoxStyle }}
          >
            <Box
              className="shopee-filter-group__header"
              sx={{
                ...shopeeFilterGroupHeaderStyle,
                ...shopeeCategoryListLink,
              }}
            >
              Đơn Vị Vận Chuyển
            </Box>
            <FormGroup
              sx={{ ...shopeeFilterStyle, ...shopeeFilterCheckBoxStyle }}
            >
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Hỏa Tốc"
              />
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Nhanh"
              />
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Tiết Kiệm"
              />
            </FormGroup>
          </Box>
          <Box
            className="shopee-filter-group shopee-brands-filter"
            sx={{ ...shopeeFilterGroupBoxStyle }}
          >
            <Box
              className="shopee-filter-group__header"
              sx={{
                ...shopeeFilterGroupHeaderStyle,
                ...shopeeCategoryListLink,
              }}
            >
              Thương Hiệu
            </Box>
            <FormGroup
              sx={{ ...shopeeFilterStyle, ...shopeeFilterCheckBoxStyle }}
            >
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Nhiều tác giả"
              />
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Deli"
              />
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Nguyễn Nhật Ánh"
              />
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="ONO Eriko"
              />
            </FormGroup>
            <Button
              className="shopee-category-list__toggle-btn"
              onClick={handleToggle}
              style={{ display: isExpanded ? "none" : "flex" }} // Ẩn đi nút Button nếu isExpanded là true
              sx={{
                ...shopeeCategoryListBoxLinkStyle,
                ...shopeeCategoryListLink,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "start",
                textTransform: "none",
              }}
            >
              Thêm
              <Box
                sx={{
                  width: ".4375rem",
                  height: ".4375rem",
                  marginLeft: ".625rem",
                  fill: "rgba(0, 0, 0, .8)",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <ArrowDownIcon />
              </Box>
            </Button>
            {isExpanded && (
              <FormGroup>
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Casio"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="FAHASA"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="THANH HƯƠNG"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="DK"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Thiên Long"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Yamaha"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Châu Sa Đáy Mắt"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Trang Anh"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="José Mauro de Vasconcelos"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Nhựa HVT"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="TUANVIET BOOKS"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Eiichiro Oda"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Keigo Higashino"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Gosho Aoyama"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Colokit"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="MCBooks"
                />
              </FormGroup>
            )}
          </Box>
          <Box
            className="shopee-filter-group shopee-price-range-filter shopee-price-range-filter--vn"
            sx={{ ...shopeeFilterGroupBoxStyle }}
          >
            <Box
              className="shopee-filter-group__header shopee-price-range-filter__header"
              sx={{
                ...shopeeFilterGroupHeaderStyle,
                ...shopeeCategoryListLink,
              }}
            >
              Khoảng Giá
            </Box>
            <Box className="shopee-filter-group__body shopee-price-range-filter__edit">
              <Box
                className="shopee-price-range-filter__TextFields"
                sx={{
                  margin: "1.25rem 0 .625rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TextField
                  type="text"
                  className="shopee-price-range-filter__TextField"
                  placeholder="₫ TỪ"
                  value=""
                  sx={shopeePriceRangeFilterTextFieldStyle}
                />
                <Box
                  className="shopee-price-range-filter__range-line"
                  sx={{
                    flex: "1",
                    height: "1px",
                    backgroundColor: "#bdbdbd",
                    margin: "0 .625rem",
                  }}
                ></Box>
                <TextField
                  type="text"
                  className="shopee-price-range-filter__TextField"
                  placeholder="₫ ĐẾN"
                  value=""
                  sx={shopeePriceRangeFilterTextFieldStyle}
                />
              </Box>
            </Box>
            <Button
              className="shopee-button-solid shopee-button-solid--primary"
              sx={{
                margin: "1.25rem 0 0",
                ...shopeeButtonSolidStyle,
                ...shopeeButtonSolidPrimaryStyle,
              }}
            >
              Áp dụng
            </Button>
          </Box>
          <Box
            className="shopee-filter-group"
            sx={{ ...shopeeFilterGroupBoxStyle }}
          >
            <Box
              className="shopee-filter-group__header"
              sx={{
                ...shopeeFilterGroupHeaderStyle,
                ...shopeeCategoryListLink,
              }}
            >
              Loại Shop
            </Box>
            <FormGroup
              sx={{ ...shopeeFilterStyle, ...shopeeFilterCheckBoxStyle }}
            >
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Shopee Mall"
              />
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Shop Yêu thích"
              />
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Xử lý đơn hàng bởi Shopee"
              />
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Shop Yêu Thích +"
              />
            </FormGroup>
            <Button
              className="shopee-category-list__toggle-btn"
              onClick={handleToggle}
              style={{ display: isExpanded ? "none" : "flex" }} // Ẩn đi nút Button nếu isExpanded là true
              sx={{
                ...shopeeCategoryListBoxLinkStyle,
                ...shopeeCategoryListLink,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "start",
                textTransform: "none",
              }}
            >
              Thêm
              <Box
                sx={{
                  width: ".4375rem",
                  height: ".4375rem",
                  marginLeft: ".625rem",
                  fill: "rgba(0, 0, 0, .8)",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <ArrowDownIcon />
              </Box>
            </Button>
            {isExpanded && (
              <FormGroup>
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Shop Xu Hướng"
                />
              </FormGroup>
            )}
          </Box>
          <Box
            className="shopee-filter-group"
            sx={{ ...shopeeFilterGroupBoxStyle }}
          >
            <Box
              className="shopee-filter-group__header"
              sx={{
                ...shopeeFilterGroupHeaderStyle,
                ...shopeeCategoryListLink,
              }}
            >
              Tình Trạng
            </Box>
            <FormGroup
              sx={{ ...shopeeFilterStyle, ...shopeeFilterCheckBoxStyle }}
            >
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Đã sử dụng"
              />
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Mới"
              />
            </FormGroup>
          </Box>
          <Box
            className="shopee-filter-group"
            sx={{ ...shopeeFilterGroupBoxStyle }}
          >
            <Box
              className="shopee-filter-group__header"
              sx={{
                ...shopeeFilterGroupHeaderStyle,
                ...shopeeCategoryListLink,
              }}
            >
              Các lựa chọn thanh toán
            </Box>
            <FormGroup
              sx={{ ...shopeeFilterStyle, ...shopeeFilterCheckBoxStyle }}
            >
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="0% TRẢ GÓP"
              />
            </FormGroup>
          </Box>
          <Box
            className="shopee-filter-group"
            sx={{ ...shopeeFilterGroupBoxStyle }}
          >
            <Box
              className="shopee-filter-group__header"
              sx={{
                ...shopeeFilterGroupHeaderStyle,
                ...shopeeCategoryListLink,
              }}
            >
              Đánh Giá
            </Box>
            <Box
              className="folding-items shopeee-filter-group__body folding-items--folded"
              sx={{
                ...shopeeFilterGroupBodyStyle,
                ...shopeeFilterStyle,
                ...shopeeFilterCheckBoxStyle,
                padding: "0",
              }}
            >
              <Box sx={{ ...shopeeStarFoldingItems }}>
                <Box
                  className="rating-stars__container"
                  sx={{ ...ratingStarsContainerStyle }}
                >
                  <Box sx={ratingStarsStarStyle}>
                    <RatingStarColored />
                  </Box>
                  <Box sx={ratingStarsStarStyle}>
                    <RatingStarColored />
                  </Box>
                  <Box sx={ratingStarsStarStyle}>
                    <RatingStarColored />
                  </Box>
                  <Box sx={ratingStarsStarStyle}>
                    <RatingStarColored />
                  </Box>
                  <Box sx={ratingStarsStarStyle}>
                    <RatingStarColored />
                  </Box>
                </Box>
              </Box>
              <Box sx={{ ...shopeeStarFoldingItems }}>
                <Box
                  className="rating-stars__container"
                  sx={{ ...ratingStarsContainerStyle }}
                >
                  <Box sx={ratingStarsStarStyle}>
                    <RatingStarColored />
                  </Box>
                  <Box sx={ratingStarsStarStyle}>
                    <RatingStarColored />
                  </Box>
                  <Box sx={ratingStarsStarStyle}>
                    <RatingStarColored />
                  </Box>
                  <Box sx={ratingStarsStarStyle}>
                    <RatingStarColored />
                  </Box>
                  <Box sx={{ ...ratingStarsStarStyle }}>
                    <RatingStar />
                  </Box>
                </Box>
                <Typography sx={{ ...ratingStarTypography }}>
                  trở lên
                </Typography>
              </Box>
              <Box sx={{ ...shopeeStarFoldingItems }}>
                <Box
                  className="rating-stars__container"
                  sx={{ ...ratingStarsContainerStyle }}
                >
                  <Box sx={ratingStarsStarStyle}>
                    <RatingStarColored />
                  </Box>
                  <Box sx={ratingStarsStarStyle}>
                    <RatingStarColored />
                  </Box>
                  <Box sx={ratingStarsStarStyle}>
                    <RatingStarColored />
                  </Box>
                  <Box sx={{ ...ratingStarsStarStyle }}>
                    <RatingStar />
                  </Box>
                  <Box sx={{ ...ratingStarsStarStyle }}>
                    <RatingStar />
                  </Box>
                </Box>
                <Typography sx={{ ...ratingStarTypography }}>
                  trở lên
                </Typography>
              </Box>
              <Box sx={{ ...shopeeStarFoldingItems }}>
                <Box
                  className="rating-stars__container"
                  sx={{ ...ratingStarsContainerStyle }}
                >
                  <Box sx={ratingStarsStarStyle}>
                    <RatingStarColored />
                  </Box>
                  <Box sx={ratingStarsStarStyle}>
                    <RatingStarColored />
                  </Box>
                  <Box sx={{ ...ratingStarsStarStyle }}>
                    <RatingStar />
                  </Box>
                  <Box sx={{ ...ratingStarsStarStyle }}>
                    <RatingStar />
                  </Box>
                  <Box sx={{ ...ratingStarsStarStyle }}>
                    <RatingStar />
                  </Box>
                </Box>
                <Typography sx={{ ...ratingStarTypography }}>
                  trở lên
                </Typography>
              </Box>
              <Box className="stardust-dropdown folding-items__toggle">
                <Button
                  className="shopee-category-list__toggle-btn"
                  onClick={handleToggle}
                  style={{ display: isExpanded ? "none" : "flex" }} // Ẩn đi nút Button nếu isExpanded là true
                  sx={{
                    ...shopeeCategoryListBoxLinkStyle,
                    ...shopeeCategoryListLink,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    textTransform: "none",
                  }}
                >
                  Thêm
                  <Box
                    sx={{
                      width: ".4375rem",
                      height: ".4375rem",
                      marginLeft: ".625rem",
                      fill: "rgba(0, 0, 0, .8)",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "start",
                    }}
                  >
                    <ArrowDownIcon />
                  </Box>
                </Button>
                {isExpanded && (
                  <Box className="stardust-dropdown__item-body">
                    <Box className="folding-items__folded-items">
                      <Box sx={{ ...shopeeStarFoldingItems }}>
                        <Box
                          className="rating-stars__container"
                          sx={{ ...ratingStarsContainerStyle }}
                        >
                          <Box sx={ratingStarsStarStyle}>
                            <RatingStarColored />
                          </Box>
                          <Box sx={{ ...ratingStarsStarStyle }}>
                            <RatingStar />
                          </Box>
                          <Box sx={{ ...ratingStarsStarStyle }}>
                            <RatingStar />
                          </Box>
                          <Box sx={{ ...ratingStarsStarStyle }}>
                            <RatingStar />
                          </Box>
                          <Box sx={{ ...ratingStarsStarStyle }}>
                            <RatingStar />
                          </Box>
                        </Box>
                        <Typography sx={{ ...ratingStarTypography }}>
                          trở lên
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
          <Box
            className="shopee-filter-group"
            sx={{ ...shopeeFilterGroupBoxStyle }}
          >
            <Box
              className="shopee-filter-group__header"
              sx={{
                ...shopeeFilterGroupHeaderStyle,
                ...shopeeCategoryListLink,
              }}
            >
              Dịch Vụ &amp; Khuyến Mãi
            </Box>
            <FormGroup
              sx={{ ...shopeeFilterStyle, ...shopeeFilterCheckBoxStyle }}
            >
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Voucher Xtra"
              />
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Đang giảm giá"
              />
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Miễn phí vận chuyển"
              />
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Gì Cũng Rẻ"
              />
            </FormGroup>
            <FormGroup
              sx={{ ...shopeeFilterStyle, ...shopeeFilterCheckBoxStyle }}
            >
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Shopee Mall"
              />
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Shop Yêu thích"
              />
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Xử lý đơn hàng bởi Shopee"
              />
              <FormControlLabel
                sx={{ ...shopeeCheckBoxControlStyle }}
                control={<Checkbox defaultChecked />}
                label="Shop Yêu Thích +"
              />
            </FormGroup>
            <Button
              className="shopee-category-list__toggle-btn"
              onClick={handleToggle}
              style={{ display: isExpanded ? "none" : "flex" }} // Ẩn đi nút Button nếu isExpanded là true
              sx={{
                ...shopeeCategoryListBoxLinkStyle,
                ...shopeeCategoryListLink,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "start",
                textTransform: "none",
              }}
            >
              Thêm
              <Box
                sx={{
                  width: ".4375rem",
                  height: ".4375rem",
                  marginLeft: ".625rem",
                  fill: "rgba(0, 0, 0, .8)",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <ArrowDownIcon />
              </Box>
            </Button>
            {isExpanded && (
              <FormGroup>
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Hàng có sẵn"
                />
                <FormControlLabel
                  sx={{ ...shopeeCheckBoxControlStyle }}
                  control={<Checkbox defaultChecked />}
                  label="Mua giá bán buôn/ bán sỉ"
                />
              </FormGroup>
            )}
          </Box>
          <Button
            className="shopee-button-solid shopee-button-solid--primary"
            sx={{
              margin: "1.25rem 0 0",
              ...shopeeButtonSolidStyle,
              ...shopeeButtonSolidPrimaryStyle,
            }}
          >
            Xóa tất cả
          </Button>
        </Stack>

        {/* main filter products list */}
        <Stack
          role={"main"}
          className={"shopee-filter-products"}
          direction={"row"}
          alignItems={"start"}
          justifyContent={"space-between"}
          sx={{
            flex: "1",
            // width: "0", minWidth: "0"
          }}
        >
          <Paper
            component={"section"}
            aria-label=""
            className="shopee-search-item-result"
            elevation={0}
            sx={{
              flex: "1",
            }}
          >
            {/* fieldset */}
            <Box
              component={"fieldset"}
              className="shopee-sort-bar"
              sx={{
                border: "0px",
                ...shopeeSortBarStyle,
                ...productFieldSetStyle,
              }}
            >
              <Box
                component={"legend"}
                sx={{
                  display: "none",
                  border: "0",
                  padding: "0",
                  paddingInlineStart: "2px",
                  paddingInlineEnd: "2px",
                  unicodeBidi: "isolate",
                  borderWidth: "initial",
                  borderStyle: "none",
                  borderColor: "initial",
                  borderImage: "initial",
                }}
              ></Box>
              <Box
                className="shopee-sort-bar__label"
                sx={{
                  color: "#555",
                  margin: "0 .3125rem 0 0",
                }}
              >
                Sắp xếp theo
              </Box>
              <Box
                className="shopee-sort-by-options"
                sx={{ ...shopeeSortByOptionStyle }}
              >
                <Box
                  component={"section"}
                  className="shopee-sort-by-options__option-group"
                  sx={{ ...shopeeSortByOptionGroupStyle }}
                >
                  <Button
                    aria-label=""
                    aria-pressed="true"
                    className="shopee-sort-by-options__option shopee-sort-by-options__option--selected"
                    sx={{
                      ...shopeeButtonSortByOption,
                      backgroundColor: "rgb(238, 77, 45)",
                      color: "#fff",
                    }}
                  >
                    <Typography aria-hidden="true">Phổ biến</Typography>
                  </Button>
                  <Button
                    aria-label=""
                    aria-pressed="false"
                    className="shopee-sort-by-options__option"
                    sx={{
                      ...shopeeButtonSortByOption,
                    }}
                  >
                    <Typography aria-hidden="true">Mới nhất</Typography>
                  </Button>
                  <Button
                    aria-label=""
                    aria-pressed="false"
                    className="shopee-sort-by-options__option"
                    sx={{
                      ...shopeeButtonSortByOption,
                    }}
                  >
                    <Typography aria-hidden="true">Bán chạy</Typography>
                  </Button>
                </Box>
                <Box>
                  <Box sx={{ pointerEvents: "auto" }}>
                    <FormControl
                      sx={{
                        m: "1",
                        "& .MuiFormLabel-root": {
                          lineHeigh: "1rem",
                        },
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      size="small"
                    >
                      <InputLabel
                        id="demo-select-small-label"
                        sx={{
                          "& .MuiFormLabel-root-MuiInputLabel-root": {
                            lineHeigh: "1rem",
                          },
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          lineHeigh: "1rem",
                        }}
                      >
                        Giá
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={price}
                        onChange={handleChange}
                        sx={{
                          "& .MuiSelect-nativeInput": {
                            position: "relative",
                          },
                          "& .MuiSelect-select": {
                            padding: "0",
                          },
                          ...shopeePriceSelectStyle,
                        }}
                      >
                        <MenuItem value={"Giá: Thấp đến cao"}>
                          Giá: Thấp đến cao
                        </MenuItem>
                        <MenuItem value={"Giá: Cao đến thấp"}>
                          Giá: Cao đến thấp
                        </MenuItem>
                      </Select>
                    </FormControl>
                    {/* <SortPriceSelect /> */}
                  </Box>
                </Box>
              </Box>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                className="shopee-mini-page-controller"
              >
                <Box
                  className="shopee-mini-page-controller__state"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    className="shopee-mini-page-controller__current"
                    sx={{ color: "#ee4d2d" }}
                  >
                    1
                  </Typography>
                  /
                  <Typography className="shopee-mini-page-controller__total">
                    17
                  </Typography>
                </Box>
                <Link
                  aria-disabled="true"
                  aria-label=""
                  className="shopee-button-outline shopee-button-outline--disabled shopee-mini-page-controller__prev-btn"
                  href="/"
                >
                  <Box>
                    <ArrowLeftSmall />
                  </Box>
                </Link>
                <Link
                  aria-disabled="false"
                  aria-label=""
                  className="shopee-button-outline shopee-mini-page-controller__next-btn"
                  href="/Nhà-Sách-Online-cat.11036863?is_from_login=true&amp;page=1&amp;ratingFilter=4&amp;sortBy=pop"
                >
                  <Box>
                    <ArrowRightSmall />
                  </Box>
                </Link>
              </Stack>
            </Box>

            {/* grid products */}
            <Grid container spacing={0}>
              {/* list products */}
              <List
                id="productList"
                className="product-list"
                sx={{
                  listStyleType: "none",
                  paddingLeft: "0",
                  paddingRight: "0",
                  margin: "0",
                }}
              >
                <Grid container item xs={12} sm={12} md={12} spacing={0}>
                  <Grid item xs={12} sm={6} md={2.4}>
                    <ListItem
                      className="shopee-search-item-result__item"
                      data-sqe="item"
                      sx={{
                        ...ListItemSearchResult,
                      }}
                    >
                      <Link
                        data-sqe="link"
                        href="/Sách-Điều-Kỳ-Diệu-Của-Tiệm-Tạp-Hóa-Namiya-i.441515460.23929647696?sp_atk=8e76e6e9-b671-42c1-9f87-beea850bf711&amp;xptdk=8e76e6e9-b671-42c1-9f87-beea850bf711"
                        sx={{ ...LinkProductStyle }}
                      >
                        <Box sx={{ height: "100%" }}>
                          <Box
                            className="product-style"
                            sx={{ ...BoxProductStyle }}
                          >
                            <Box sx={{ pointerEvents: "none" }}>
                              <Box
                                className="product-image"
                                sx={{
                                  ...BoxProductImageStyle,
                                }}
                              >
                                <Box
                                  sx={{
                                    objectFit: "contain",
                                    ...ImageProductStyle,
                                  }}
                                >
                                  <img
                                    alt="Sách - Điều Kỳ Diệu Của Tiệm Tạp Hóa Namiya"
                                    src="https://down-vn.img.susercontent.com/file/vn-11134211-23030-1y5lili3aiov19_tn"
                                    width="188px"
                                    height="188px"
                                  />
                                </Box>
                                <Box
                                  className="product-type"
                                  sx={{
                                    ...ProductTypeStyle,
                                  }}
                                >
                                  <Box
                                    className="type-text-style"
                                    sx={{
                                      ...TypeTextMallStyle,
                                      ...TypeTextPositionStyle,
                                      color: "rgb(208, 1, 27)",
                                    }}
                                  >
                                    <Box
                                      className="clear-after-image"
                                      sx={BoxClearAfterImageMallStyle}
                                    ></Box>
                                  </Box>
                                </Box>
                                <Box
                                  className="customized-overlay"
                                  sx={CustomizedOverlay}
                                >
                                  <Box
                                    className="customized-overlay-image"
                                    sx={CustomizedOverlayImage}
                                  >
                                    <img
                                      alt="overlay image"
                                      src="https://down-vn.img.susercontent.com/file/vn-50009109-d27d1f83ee9507ced0c3dbd0f8693020"
                                      width="188px"
                                      height="188px"
                                    />
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                            <Box
                              className="product-content"
                              sx={productContentStyle}
                            >
                              <Box
                                className="product-name"
                                data-sqe="name"
                                sx={productBoxName}
                              >
                                <Box sx={productBoxNameGrow}>
                                  <ListItemText
                                    aria-hidden="true"
                                    className="product-name"
                                    sx={{ ...productNameStyle }}
                                  >
                                    Sách - Điều Kỳ Diệu Của Tiệm Tạp Hóa Namiya
                                  </ListItemText>
                                </Box>
                                <Stack
                                  direction={"row"}
                                  alignItems={"center"}
                                  className="price-at-time"
                                  sx={productPriceAtTime}
                                >
                                  <Box
                                    aria-hidden="true"
                                    className="price-at-time-currency price-time"
                                    sx={{
                                      ...productPriceAtTimeCurrency,
                                      ...productPriceTime,
                                    }}
                                  >
                                    ₫ 8?.??0I 25.4 lúc 00:00
                                  </Box>
                                </Stack>
                              </Box>
                              <Box className="product-price" sx={productPrice}>
                                <Stack
                                  direction="row"
                                  alignItems={"center"}
                                  justifyContent={"space-between"}
                                  className="product-current-price"
                                  sx={{
                                    maxWidth: "calc(100% - 34.0156px)",
                                    ...productCurrentPrice,
                                    ...productPriceDisplay,
                                  }}
                                >
                                  <Typography
                                    aria-label="current price"
                                    sx={productCurrentPriceCurrency}
                                  ></Typography>
                                  <Typography
                                    className="current-price-currency"
                                    sx={productCurrentPriceCurrency}
                                  >
                                    ₫
                                  </Typography>
                                  <Typography
                                    className="current-price-value"
                                    sx={productCurrentPriceValue}
                                  >
                                    84.000
                                  </Typography>
                                </Stack>
                                <Box
                                  className="older-price"
                                  aria-hidden="true"
                                  sx={{
                                    ...productOlderPrice,
                                    ...productPriceDisplay,
                                  }}
                                >
                                  ₫105.000
                                </Box>
                                <Box
                                  className="price-percent-discount-align"
                                  sx={pricePercentDiscountAlign}
                                >
                                  <Box
                                    className="price-percent-discount"
                                    sx={pricePercentDiscountBox}
                                  >
                                    <Typography
                                      className="price-percent-discount-value"
                                      sx={pricePercentDiscountValue}
                                    >
                                      -20%
                                    </Typography>
                                  </Box>
                                </Box>
                              </Box>
                              <Stack
                                className="rating-sold"
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"start"}
                                sx={{ ...ratingSold }}
                              >
                                <Stack
                                  direction={"row"}
                                  alignItems={"center"}
                                  justifyContent={"start"}
                                  className="rating"
                                  data-sqe="rating"
                                  sx={{
                                    ...ratingStyle,
                                  }}
                                >
                                  <Box
                                    className="shopee-rating-stars"
                                    sx={{ ...shopeeRatingStars }}
                                  >
                                    <Stack
                                      className="shopee-rating-stars__stars"
                                      direction={"row"}
                                      alignItems={"center"}
                                      justifyContent={"start"}
                                    >
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                    </Stack>
                                  </Box>
                                </Stack>
                                <Box sx={shopeeSoldStyle}>Đã bán 699</Box>
                              </Stack>
                              <Stack
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"start"}
                                className="transport"
                                sx={shopeeTransport}
                              >
                                <Box>
                                  <Transport />
                                </Box>
                                <Box
                                  className="transport-time"
                                  sx={shopeeTransportTime}
                                >
                                  3 - 5 ngày
                                </Box>
                                <Box
                                  className="transport-location"
                                  aria-label="from"
                                  sx={shopeeTransportLocation}
                                >
                                  | Hà Nội
                                </Box>
                              </Stack>
                            </Box>
                          </Box>
                        </Box>
                      </Link>
                    </ListItem>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2.4}>
                    <ListItem
                      className="shopee-search-item-result__item"
                      data-sqe="item"
                      sx={{
                        ...ListItemSearchResult,
                      }}
                    >
                      <Link
                        data-sqe="link"
                        href="/Sách-Combo-2-cuốn-Tư-Duy-Ngược-Tư-Duy-Mở-Nguyễn-Anh-Dũng-SBOOKS-i.182607782.22374558225?sp_atk=03ceedb3-1a70-458d-adee-07c749f156a0&amp;xptdk=03ceedb3-1a70-458d-adee-07c749f156a0"
                        sx={{ ...LinkProductStyle }}
                      >
                        <Box sx={{ height: "100%" }}>
                          <Box
                            className="product-style"
                            sx={{ ...BoxProductStyle }}
                          >
                            <Box sx={{ pointerEvents: "none" }}>
                              <Box
                                className="product-image"
                                sx={{
                                  ...BoxProductImageStyle,
                                }}
                              >
                                <Box
                                  sx={{
                                    objectFit: "contain",
                                    ...ImageProductStyle,
                                  }}
                                >
                                  <img
                                    alt="Sách - Combo 2 cuốn Tư Duy Ngược + Tư Duy Mở - Nguyễn Anh Dũng - SBOOKS"
                                    src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljhy12vejmde30_tn"
                                    width="188px"
                                    height="188px"
                                  />
                                </Box>
                                <Box
                                  className="product-type"
                                  sx={{
                                    ...ProductTypeStyle,
                                  }}
                                >
                                  <Box
                                    className="type-text-style"
                                    sx={{
                                      color: "rgb(208, 1, 27)",
                                      ...TypeTextMallStyle,
                                      ...TypeTextPositionStyle,
                                    }}
                                  >
                                    <Box
                                      className="clear-after-image"
                                      sx={BoxClearAfterImageMallStyle}
                                    ></Box>
                                  </Box>
                                </Box>
                                <Box
                                  className="customized-overlay"
                                  sx={CustomizedOverlay}
                                >
                                  <Box
                                    className="customized-overlay-image"
                                    sx={CustomizedOverlayImage}
                                  >
                                    <img
                                      alt="overlay image"
                                      src="https://down-vn.img.susercontent.com/file/vn-50009109-201b3f92d583892749316322b111ee5d"
                                      width="188px"
                                      height="188px"
                                    />
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                            <Box
                              className="product-content"
                              sx={productContentStyle}
                            >
                              <Box
                                className="product-name"
                                data-sqe="name"
                                sx={productBoxName}
                              >
                                <Box sx={productBoxNameGrow}>
                                  <ListItemText
                                    aria-hidden="true"
                                    className="product-name"
                                    sx={{ ...productNameStyle }}
                                  >
                                    Sách - Combo 2 cuốn Tư Duy Ngược + Tư Duy Mở
                                    - Nguyễn Anh Dũng - SBOOKS
                                  </ListItemText>
                                </Box>
                                <Stack
                                  direction={"row"}
                                  alignItems={"center"}
                                  justifyContent={"space-between"}
                                  sx={priceDiscountCoupons}
                                >
                                  <Box
                                    aria-hidden="true"
                                    sx={{ ...priceDiscountCoupon }}
                                  >
                                    <Box
                                      className="nt-foot"
                                      sx={{ ...ntFoot, ...ntFootInsert }}
                                    >
                                      <Box
                                        className="puzzle-piece-first"
                                        sx={{ left: "0", ...PuzzlePieceStyle }}
                                      >
                                        <PuzzlePieceFirst />
                                      </Box>
                                      <Box
                                        sx={{
                                          ...priceDiscountCouponContent,
                                        }}
                                      >
                                        Giảm ₫25k
                                      </Box>
                                      <Box
                                        className="puzzle-piece-last"
                                        sx={{ right: "0", ...PuzzlePieceStyle }}
                                      >
                                        <PuzzlePieceLast />
                                      </Box>
                                    </Box>
                                  </Box>
                                  <Box
                                    aria-hidden="true"
                                    className="price-deal"
                                    sx={priceDiscountCouponDeal}
                                  >
                                    Mua Kèm Deal Sốc
                                  </Box>
                                </Stack>
                              </Box>
                              <Box className="product-price" sx={productPrice}>
                                <Stack
                                  direction="row"
                                  alignItems={"center"}
                                  justifyContent={"space-between"}
                                  className="product-current-price"
                                  sx={{
                                    maxWidth: "calc(100% - 34.0156px)",
                                    ...productCurrentPrice,
                                    ...productPriceDisplay,
                                  }}
                                >
                                  <Typography
                                    aria-label="current price"
                                    sx={productCurrentPriceCurrency}
                                  ></Typography>
                                  <Typography
                                    className="current-price-currency"
                                    sx={productCurrentPriceCurrency}
                                  >
                                    ₫
                                  </Typography>
                                  <Typography
                                    className="current-price-value"
                                    sx={productCurrentPriceValue}
                                  >
                                    145.000
                                  </Typography>
                                </Stack>
                                <Box
                                  className="older-price"
                                  aria-hidden="true"
                                  sx={{
                                    ...productOlderPrice,
                                    ...productPriceDisplay,
                                  }}
                                >
                                  ₫276.000
                                </Box>
                                <Box
                                  className="price-percent-discount-align"
                                  sx={pricePercentDiscountAlign}
                                >
                                  <Box
                                    className="price-percent-discount"
                                    sx={pricePercentDiscountBox}
                                  >
                                    <Typography
                                      className="price-percent-discount-value"
                                      sx={pricePercentDiscountValue}
                                    >
                                      -47%
                                    </Typography>
                                  </Box>
                                </Box>
                              </Box>
                              <Stack
                                className="rating-sold"
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"start"}
                                sx={{ ...ratingSold }}
                              >
                                <Stack
                                  direction={"row"}
                                  alignItems={"center"}
                                  justifyContent={"start"}
                                  className="rating"
                                  data-sqe="rating"
                                  sx={{
                                    ...ratingStyle,
                                  }}
                                >
                                  <Box
                                    className="shopee-rating-stars"
                                    sx={{ ...shopeeRatingStars }}
                                  >
                                    <Stack
                                      className="shopee-rating-stars__stars"
                                      direction={"row"}
                                      alignItems={"center"}
                                      justifyContent={"start"}
                                    >
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "90.5709%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                    </Stack>
                                  </Box>
                                </Stack>
                                <Box sx={shopeeSoldStyle}>Đã bán 5,1k</Box>
                              </Stack>
                              <Stack
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"start"}
                                className="transport"
                                sx={shopeeTransport}
                              >
                                <Box
                                  className="transport-location"
                                  aria-label="from"
                                  sx={shopeeTransportLocation}
                                >
                                  TP. Hồ Chí Minh
                                </Box>
                              </Stack>
                            </Box>
                          </Box>
                        </Box>
                      </Link>
                    </ListItem>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2.4}>
                    <ListItem
                      className="shopee-search-item-result__item"
                      data-sqe="item"
                      sx={{
                        ...ListItemSearchResult,
                      }}
                    >
                      <Link
                        data-sqe="link"
                        href="/-Mã-CLS2404B-giảm-30k-đơn-99k-Bìa-Đựng-Tài-Liệu-5-Ngăn-Có-Nhãn-Dán-Kích-Thước-Nhỏ-Gọn-Dành-Cho-Văn-Phòng-Trường-Học-i.196261835.22986888775?sp_atk=3c991788-a26b-463e-b4ac-e6b237ec3de9&amp;xptdk=3c991788-a26b-463e-b4ac-e6b237ec3de9"
                        sx={{ ...LinkProductStyle }}
                      >
                        <Box sx={{ height: "100%" }}>
                          <Box
                            className="product-style"
                            sx={{ ...BoxProductStyle }}
                          >
                            <Box sx={{ pointerEvents: "none" }}>
                              <Box
                                className="product-image"
                                sx={{
                                  ...BoxProductImageStyle,
                                }}
                              >
                                <Box
                                  sx={{
                                    objectFit: "contain",
                                    ...ImageProductStyle,
                                  }}
                                >
                                  <img
                                    alt="[Mã CLS2404B giảm 30k đơn 99k] Bìa Đựng Tài Liệu 5 Ngăn Có Nhãn Dán Kích Thước Nhỏ Gọn Dành Cho Văn Phòng Trường Học"
                                    className="+nCgfX KbUcCB"
                                    src="https://down-vn.img.susercontent.com/file/sg-11134201-22100-onobtrl9o2iv97_tn"
                                    width="188px"
                                    height="188px"
                                  />
                                </Box>
                                <Box
                                  className="product-type"
                                  sx={{
                                    ...ProductTypeStyle,
                                  }}
                                >
                                  <Box
                                    className="type-text-style"
                                    sx={{
                                      color: "rgb(208, 1, 27)",
                                      ...TypeTextPositionStyle,
                                      ...TypeTextOrderProcessingStyle,
                                    }}
                                  >
                                    <Box
                                      className="clear-after-image"
                                      sx={
                                        BoxClearAfterImageOrderProcessingStyle
                                      }
                                    ></Box>
                                  </Box>
                                </Box>
                                <Box
                                  className="customized-overlay"
                                  sx={CustomizedOverlay}
                                >
                                  <Box
                                    className="customized-overlay-image"
                                    sx={CustomizedOverlayImage}
                                  >
                                    <img
                                      alt="overlay image"
                                      src="https://down-vn.img.susercontent.com/file/vn-50009109-42f64c07d684f86d1d825f221b74397c"
                                      width="188px"
                                      height="188px"
                                    />
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                            <Box
                              className="product-content"
                              sx={productContentStyle}
                            >
                              <Box
                                className="product-name"
                                data-sqe="name"
                                sx={productBoxName}
                              >
                                <Box sx={productBoxNameGrow}>
                                  <ListItemText
                                    aria-hidden="true"
                                    className="product-name"
                                    sx={{ ...productNameStyle }}
                                  >
                                    [Mã CLS2404B giảm 30k đơn 99k] Bìa Đựng Tài
                                    Liệu 5 Ngăn Có Nhãn Dán Kích Thước Nhỏ Gọn
                                    Dành Cho Văn Phòng Trường Học
                                  </ListItemText>
                                </Box>
                                <Stack
                                  direction={"row"}
                                  alignItems={"center"}
                                  justifyContent={"space-between"}
                                  sx={priceDiscountCoupons}
                                >
                                  <Box
                                    aria-hidden="true"
                                    sx={{ ...priceDiscountCoupon }}
                                  >
                                    <Box
                                      className="nt-foot"
                                      sx={{
                                        ...ntFoot,
                                        ...ntFootInsert,
                                        color: "rgb(246, 145, 19)",
                                      }}
                                    >
                                      <Box
                                        className="puzzle-piece-first"
                                        sx={{ left: "0", ...PuzzlePieceStyle }}
                                      >
                                        <PuzzlePieceFirst />
                                      </Box>

                                      <Box
                                        sx={{
                                          ...priceDiscountCouponContent,
                                          color: "white",
                                          backgroundColor: "rgb(246, 145, 19)",
                                        }}
                                      >
                                        15% Giảm
                                      </Box>
                                      <Box
                                        className="puzzle-piece-last"
                                        sx={{ right: "0", ...PuzzlePieceStyle }}
                                      >
                                        <PuzzlePieceLast />
                                      </Box>
                                    </Box>
                                  </Box>
                                  <Box
                                    aria-hidden="true"
                                    className="price-deal"
                                    sx={priceDiscountCouponDeal}
                                  >
                                    Mua 2 &amp; giảm 3%
                                  </Box>
                                </Stack>
                              </Box>
                              <Box className="product-price" sx={productPrice}>
                                <Stack
                                  direction="row"
                                  alignItems={"center"}
                                  justifyContent={"space-between"}
                                  className="product-current-price"
                                  sx={{
                                    maxWidth: "calc(100% - 34.0156px)",
                                    ...productCurrentPrice,
                                    ...productPriceDisplay,
                                  }}
                                >
                                  <Typography
                                    aria-label="current price"
                                    sx={productCurrentPriceCurrency}
                                  ></Typography>
                                  <Typography
                                    className="current-price-currency"
                                    sx={productCurrentPriceCurrency}
                                  >
                                    ₫
                                  </Typography>
                                  <Typography
                                    className="current-price-value"
                                    sx={productCurrentPriceValue}
                                  >
                                    50.000
                                  </Typography>
                                </Stack>
                                <Box
                                  className="older-price"
                                  aria-hidden="true"
                                  sx={{
                                    ...productOlderPrice,
                                    ...productPriceDisplay,
                                  }}
                                >
                                  ₫87.242
                                </Box>
                                <Box
                                  className="price-percent-discount-align"
                                  sx={pricePercentDiscountAlign}
                                >
                                  <Box
                                    className="price-percent-discount"
                                    sx={pricePercentDiscountBox}
                                  >
                                    <Typography
                                      className="price-percent-discount-value"
                                      sx={pricePercentDiscountValue}
                                    >
                                      -43%
                                    </Typography>
                                  </Box>
                                </Box>
                              </Box>
                              <Stack
                                className="rating-sold"
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"start"}
                                sx={{ ...ratingSold }}
                              >
                                <Stack
                                  direction={"row"}
                                  alignItems={"center"}
                                  justifyContent={"start"}
                                  className="rating"
                                  data-sqe="rating"
                                  sx={{
                                    ...ratingStyle,
                                  }}
                                >
                                  <Box
                                    className="shopee-rating-stars"
                                    sx={{ ...shopeeRatingStars }}
                                  >
                                    <Stack
                                      className="shopee-rating-stars__stars"
                                      direction={"row"}
                                      alignItems={"center"}
                                      justifyContent={"start"}
                                    >
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "92.0608%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                    </Stack>
                                  </Box>
                                </Stack>
                                <Box sx={shopeeSoldStyle}>Đã bán 2,6k</Box>
                              </Stack>
                              <Stack
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"start"}
                                className="transport"
                                sx={shopeeTransport}
                              >
                                <Box
                                  className="transport-location"
                                  aria-label="from"
                                  sx={shopeeTransportLocation}
                                >
                                  Nước ngoài
                                </Box>
                              </Stack>
                            </Box>
                          </Box>
                        </Box>
                      </Link>
                    </ListItem>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2.4}>
                    <ListItem
                      className="shopee-search-item-result__item"
                      data-sqe="item"
                      sx={{
                        ...ListItemSearchResult,
                      }}
                    >
                      <Link
                        data-sqe="link"
                        href="/File-đựng-tài-liệu-a4-nhiều-ngăn-30-60-lá-văn-phòng-phẩm-file-lá-đựng-tài-liệu-văn-phòng-giá-rẻ-MIYABI-STORE-i.38778987.23941841712?sp_atk=8514441f-be2a-4aa0-b3dc-23bc6b5e1f74&amp;xptdk=8514441f-be2a-4aa0-b3dc-23bc6b5e1f74"
                        sx={{ ...LinkProductStyle }}
                      >
                        <Box sx={{ height: "100%" }}>
                          <Box
                            className="product-style"
                            sx={{ ...BoxProductStyle }}
                          >
                            <Box sx={{ pointerEvents: "none" }}>
                              <Box
                                className="product-image"
                                sx={{
                                  ...BoxProductImageStyle,
                                }}
                              >
                                <Box
                                  sx={{
                                    objectFit: "contain",
                                    ...ImageProductStyle,
                                  }}
                                >
                                  <img
                                    alt="File đựng tài liệu a4 nhiều ngăn - 30 / 60 lá - văn phòng phẩm - file lá đựng tài liệu văn phòng giá rẻ - MIYABI STORE"
                                    src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lglqf1ifikx6b7_tn"
                                    width="188px"
                                    height="188px"
                                  />
                                </Box>
                                <Box
                                  className="product-type"
                                  sx={{
                                    ...ProductTypeStyle,
                                  }}
                                >
                                  <Box
                                    className="type-text-style"
                                    sx={{
                                      ...TypeTextFavouriteStyle,
                                      ...TypeTextPositionStyle,
                                      color: "rgb(242, 82, 32)",
                                    }}
                                  >
                                    <Typography
                                      sx={{ ...TypeTextFavouriteStyle }}
                                    >
                                      Yêu thích
                                    </Typography>
                                  </Box>
                                </Box>
                                <Box
                                  className="icon-video"
                                  sx={shopeeIconVideo}
                                >
                                  <Box aria-hidden="true">
                                    <Box
                                      sx={{
                                        ...shopeeSVGIcon,
                                        ...shopeeIconVideoPlay,
                                      }}
                                    >
                                      <VideoPlayIcon />
                                    </Box>
                                  </Box>
                                </Box>
                                <Box
                                  className="customized-overlay"
                                  sx={CustomizedOverlay}
                                >
                                  <Box
                                    className="customized-overlay-image"
                                    sx={CustomizedOverlayImage}
                                  >
                                    <img
                                      alt="overlay image"
                                      src="https://down-vn.img.susercontent.com/file/vn-50009109-bceb1cea39526a7545c21e0b6c4567b2"
                                      width="188px"
                                      height="188px"
                                    />
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                            <Box
                              className="product-content"
                              sx={productContentStyle}
                            >
                              <Box
                                className="product-name"
                                data-sqe="name"
                                sx={productBoxName}
                              >
                                <Box sx={productBoxNameGrow}>
                                  <ListItemText
                                    aria-hidden="true"
                                    className="product-name"
                                    sx={{ ...productNameStyle }}
                                  >
                                    File đựng tài liệu a4 nhiều ngăn - 30 / 60
                                    lá - văn phòng phẩm - file lá đựng tài liệu
                                    văn phòng giá rẻ - MIYABI STORE
                                  </ListItemText>
                                </Box>
                                <Stack
                                  direction={"row"}
                                  alignItems={"center"}
                                  justifyContent={"space-between"}
                                  sx={priceDiscountCoupons}
                                >
                                  <Box
                                    aria-hidden="true"
                                    sx={{ ...priceDiscountCoupon }}
                                  >
                                    <Box
                                      className="nt-foot"
                                      sx={{
                                        ...ntFoot,
                                        ...ntFootInsert,
                                        color: "rgb(246, 145, 19)",
                                      }}
                                    >
                                      <Box
                                        className="puzzle-piece-first"
                                        sx={{ left: "0", ...PuzzlePieceStyle }}
                                      >
                                        <PuzzlePieceFirst />
                                      </Box>
                                      <Box
                                        sx={{
                                          ...priceDiscountCouponContent,
                                          backgroundColor: "rgb(246, 145, 19)",
                                        }}
                                      >
                                        Giảm ₫299,999k
                                      </Box>
                                      <Box
                                        className="puzzle-piece-last"
                                        sx={{ right: "0", ...PuzzlePieceStyle }}
                                      >
                                        <PuzzlePieceLast />
                                      </Box>
                                    </Box>
                                  </Box>
                                  <Box
                                    aria-hidden="true"
                                    className="price-deal"
                                    sx={priceDiscountCouponDeal}
                                  >
                                    Mua để nhận quà
                                  </Box>
                                </Stack>
                              </Box>
                              <Box className="product-price" sx={productPrice}>
                                <Stack
                                  direction="row"
                                  alignItems={"center"}
                                  justifyContent={"space-between"}
                                  className="product-current-price"
                                  sx={{
                                    maxWidth: "calc(100% - 34.0156px)",
                                    ...productCurrentPrice,
                                    ...productPriceDisplay,
                                  }}
                                >
                                  <Typography
                                    aria-label="current price"
                                    sx={productCurrentPriceCurrency}
                                  ></Typography>
                                  <Typography
                                    className="current-price-currency"
                                    sx={productCurrentPriceCurrency}
                                  >
                                    ₫
                                  </Typography>
                                  <Typography
                                    className="current-price-value"
                                    sx={productCurrentPriceValue}
                                  >
                                    27.000
                                  </Typography>
                                </Stack>
                                <Box
                                  className="older-price"
                                  aria-hidden="true"
                                  sx={{
                                    ...productOlderPrice,
                                    ...productPriceDisplay,
                                  }}
                                >
                                  ₫50.000
                                </Box>
                                <Box
                                  className="price-percent-discount-align"
                                  sx={pricePercentDiscountAlign}
                                >
                                  <Box
                                    className="price-percent-discount"
                                    sx={pricePercentDiscountBox}
                                  >
                                    <Typography
                                      className="price-percent-discount-value"
                                      sx={pricePercentDiscountValue}
                                    >
                                      -46%
                                    </Typography>
                                  </Box>
                                </Box>
                              </Box>
                              <Stack
                                className="rating-sold"
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"start"}
                                sx={{ ...ratingSold }}
                              >
                                <Stack
                                  direction={"row"}
                                  alignItems={"center"}
                                  justifyContent={"start"}
                                  className="rating"
                                  data-sqe="rating"
                                  sx={{
                                    ...ratingStyle,
                                  }}
                                >
                                  <Box
                                    className="shopee-rating-stars"
                                    sx={{ ...shopeeRatingStars }}
                                  >
                                    <Stack
                                      className="shopee-rating-stars__stars"
                                      direction={"row"}
                                      alignItems={"center"}
                                      justifyContent={"start"}
                                    >
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "88.3758%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                    </Stack>
                                  </Box>
                                </Stack>
                                <Box sx={shopeeSoldStyle}>Đã bán 21,2k</Box>
                              </Stack>
                              <Stack
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"start"}
                                className="transport"
                                sx={shopeeTransport}
                              >
                                <Box>
                                  <Transport />
                                </Box>
                                <Box
                                  className="transport-time"
                                  sx={shopeeTransportTime}
                                >
                                  3 - 5 ngày
                                </Box>
                                <Box
                                  className="transport-location"
                                  aria-label="from"
                                  sx={shopeeTransportLocation}
                                >
                                  | Hà Nội
                                </Box>
                              </Stack>
                            </Box>
                          </Box>
                        </Box>
                      </Link>
                    </ListItem>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2.4}>
                    <ListItem
                      className="shopee-search-item-result__item"
                      data-sqe="item"
                      sx={{
                        ...ListItemSearchResult,
                      }}
                    >
                      <Link
                        data-sqe="link"
                        href="/Sổ-Take-note-tổng-hợp-kiến-thức-Môn-Toán-Lớp-2-3-4-5-8-9-10-11-12-Hình-học-Đại-số-i.9781991.23754454908?sp_atk=8e0beb42-d54f-41e9-813c-a422b7c437ed&amp;xptdk=8e0beb42-d54f-41e9-813c-a422b7c437ed"
                        sx={{ ...LinkProductStyle }}
                      >
                        <Box sx={{ height: "100%" }}>
                          <Box
                            className="product-style"
                            sx={{ ...BoxProductStyle }}
                          >
                            <Box sx={{ pointerEvents: "none" }}>
                              <Box
                                className="product-image"
                                sx={{
                                  ...BoxProductImageStyle,
                                }}
                              >
                                <Box
                                  sx={{
                                    objectFit: "contain",
                                    ...ImageProductStyle,
                                  }}
                                >
                                  <img
                                    alt="Sổ Take note tổng hợp kiến thức - Môn Toán - Lớp 2/3/4/5/8/9/10/11/12 - Hình học, Đại số"
                                    src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lljj0uu4bt1268_tn"
                                    width="188px"
                                    height="188px"
                                  />
                                </Box>
                                <Box
                                  className="customized-overlay"
                                  sx={CustomizedOverlay}
                                >
                                  <Box
                                    className="customized-overlay-image"
                                    sx={CustomizedOverlayImage}
                                  >
                                    <img
                                      alt="overlay image"
                                      src="https://down-vn.img.susercontent.com/file/vn-50009109-551ba21d2a3df202efaa754e6c7efdf9"
                                      width="188px"
                                      height="188px"
                                    />
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                            <Box
                              className="product-content"
                              sx={productContentStyle}
                            >
                              <Box
                                className="product-name"
                                data-sqe="name"
                                sx={productBoxName}
                              >
                                <Box sx={productBoxNameGrow}>
                                  <ListItemText
                                    aria-hidden="true"
                                    className="product-name"
                                    sx={{ ...productNameStyle }}
                                  >
                                    Sổ Take note tổng hợp kiến thức - Môn Toán -
                                    Lớp 2/3/4/5/8/9/10/11/12 - Hình học, Đại số
                                  </ListItemText>
                                </Box>
                                <Stack
                                  direction={"row"}
                                  alignItems={"center"}
                                  justifyContent={"space-between"}
                                  sx={priceDiscountCoupons}
                                >
                                  <Box
                                    aria-hidden="true"
                                    sx={{ ...priceDiscountCoupon }}
                                  >
                                    <Box
                                      className="nt-foot"
                                      sx={{
                                        ...ntFoot,
                                        ...ntFootInsert,
                                        color: "rgb(246, 145, 19)",
                                      }}
                                    >
                                      <Box
                                        className="puzzle-piece-first"
                                        sx={{ left: "0", ...PuzzlePieceStyle }}
                                      >
                                        <PuzzlePieceFirst />
                                      </Box>
                                      <Box
                                        sx={{
                                          ...priceDiscountCouponContent,
                                          backgroundColor: "rgb(246, 145, 19)",
                                        }}
                                      >
                                        Giảm ₫8k
                                      </Box>
                                      <Box
                                        className="puzzle-piece-last"
                                        sx={{ right: "0", ...PuzzlePieceStyle }}
                                      >
                                        <PuzzlePieceLast />
                                      </Box>
                                    </Box>
                                  </Box>
                                  <Box
                                    aria-hidden="true"
                                    className="price-deal"
                                    sx={priceDiscountCouponDeal}
                                  >
                                    Mua 2 &amp; giảm 5%
                                  </Box>
                                </Stack>
                              </Box>
                              <Box className="product-price" sx={productPrice}>
                                <Stack
                                  direction="row"
                                  alignItems={"center"}
                                  justifyContent={"space-between"}
                                  className="product-current-price"
                                  sx={{
                                    maxWidth: "calc(100% - 34.0156px)",
                                    ...productCurrentPrice,
                                    ...productPriceDisplay,
                                  }}
                                >
                                  <Typography
                                    aria-label="current price"
                                    sx={productCurrentPriceCurrency}
                                  ></Typography>
                                  <Typography
                                    className="current-price-currency"
                                    sx={productCurrentPriceCurrency}
                                  >
                                    ₫
                                  </Typography>
                                  <Typography
                                    className="current-price-value"
                                    sx={productCurrentPriceValue}
                                  >
                                    79.000
                                  </Typography>
                                </Stack>
                                <Box
                                  sx={{
                                    fontSize: ".75rem",
                                    lineHeight: ".875rem",
                                  }}
                                ></Box>
                              </Box>
                              <Stack
                                className="rating-sold"
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"start"}
                                sx={{ ...ratingSold }}
                              >
                                <Stack
                                  direction={"row"}
                                  alignItems={"center"}
                                  justifyContent={"start"}
                                  className="rating"
                                  data-sqe="rating"
                                  sx={{
                                    ...ratingStyle,
                                  }}
                                >
                                  <Box
                                    className="shopee-rating-stars"
                                    sx={{ ...shopeeRatingStars }}
                                  >
                                    <Stack
                                      className="shopee-rating-stars__stars"
                                      direction={"row"}
                                      alignItems={"center"}
                                      justifyContent={"start"}
                                    >
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "95%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                    </Stack>
                                  </Box>
                                </Stack>
                                <Box sx={shopeeSoldStyle}>Đã bán 112</Box>
                              </Stack>
                              <Stack
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"start"}
                                className="transport"
                                sx={shopeeTransport}
                              >
                                <Box>
                                  <Transport />
                                </Box>
                                <Box
                                  className="transport-time"
                                  sx={shopeeTransportTime}
                                >
                                  2 - 4 ngày
                                </Box>
                                <Box
                                  className="transport-location"
                                  aria-label="from"
                                  sx={shopeeTransportLocation}
                                >
                                  | TP. Hồ Chí Minh
                                </Box>
                              </Stack>
                            </Box>
                          </Box>
                        </Box>
                      </Link>
                    </ListItem>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2.4}>
                    <ListItem
                      className="shopee-search-item-result__item"
                      data-sqe="item"
                      sx={{
                        ...ListItemSearchResult,
                      }}
                    >
                      <Link
                        data-sqe="link"
                        href="/Tấm-nhựa-mica-trong-suốt-A3-A4-A5-(1.2mm-1.8mm-3mm-5mm)-i.55301979.16319925131?sp_atk=a88d7fc6-0670-41f9-bbe3-e67f955cb821&amp;xptdk=a88d7fc6-0670-41f9-bbe3-e67f955cb821"
                        sx={{ ...LinkProductStyle }}
                      >
                        <Box sx={{ height: "100%" }}>
                          <Box
                            className="product-style"
                            sx={{ ...BoxProductStyle }}
                          >
                            <Box sx={{ pointerEvents: "none" }}>
                              <Box
                                className="product-image"
                                sx={{
                                  ...BoxProductImageStyle,
                                }}
                              >
                                <Box
                                  sx={{
                                    objectFit: "contain",
                                    ...ImageProductStyle,
                                  }}
                                >
                                  <img
                                    alt="Tấm nhựa mica trong suốt A3,A4,A5 (1.2mm, 1.8mm, 3mm, 5mm)"
                                    src="https://down-vn.img.susercontent.com/file/86bf7064a21c72f55026108f7d4274b9_tn"
                                    width="188px"
                                    height="188px"
                                  />
                                </Box>
                                <Box
                                  className="product-type"
                                  sx={{
                                    ...ProductTypeStyle,
                                  }}
                                >
                                  <Box
                                    className="type-text-style"
                                    sx={{
                                      ...TypeTextFavouritePlusStyle,
                                      ...TypeTextPositionStyle,
                                      color: "rgb(242, 82, 32)",
                                    }}
                                  >
                                    <Box
                                      className="clear-after-image"
                                      sx={BoxClearAfterImageFavouritePlusStyle}
                                    ></Box>
                                  </Box>
                                </Box>
                                <Box
                                  className="customized-overlay"
                                  sx={CustomizedOverlay}
                                >
                                  <Box
                                    className="customized-overlay-image"
                                    sx={CustomizedOverlayImage}
                                  >
                                    <img
                                      alt="overlay image"
                                      src="https://down-vn.img.susercontent.com/file/vn-50009109-25370a2a70652ec8b73f1d22907e58da"
                                      width="188px"
                                      height="188px"
                                    />
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                            <Box
                              className="product-content"
                              sx={productContentStyle}
                            >
                              <Box
                                className="product-name"
                                data-sqe="name"
                                sx={productBoxName}
                              >
                                <Box sx={productBoxNameGrow}>
                                  <ListItemText
                                    aria-hidden="true"
                                    className="product-name"
                                    sx={{ ...productNameStyle }}
                                  >
                                    Tấm nhựa mica trong suốt A3,A4,A5 (1.2mm,
                                    1.8mm, 3mm, 5mm)
                                  </ListItemText>
                                </Box>
                                <Stack
                                  direction={"row"}
                                  alignItems={"center"}
                                  justifyContent={"space-between"}
                                  sx={priceDiscountCoupons}
                                >
                                  <Box
                                    aria-hidden="true"
                                    className="trend-shop"
                                    sx={{
                                      ...priceDiscountCouponDeal,
                                      color: "rgb(246, 145, 19)",
                                    }}
                                  >
                                    #ShopXuHuong
                                  </Box>
                                </Stack>
                              </Box>
                              <Box className="product-price" sx={productPrice}>
                                <Stack
                                  direction="row"
                                  alignItems={"center"}
                                  justifyContent={"space-between"}
                                  className="product-current-price"
                                  sx={{
                                    maxWidth: "calc(100% - 34.0156px)",
                                    ...productCurrentPrice,
                                    ...productPriceDisplay,
                                  }}
                                >
                                  <Typography
                                    aria-label="current price"
                                    sx={productCurrentPriceCurrency}
                                  ></Typography>
                                  <Typography
                                    className="current-price-currency"
                                    sx={productCurrentPriceCurrency}
                                  >
                                    ₫
                                  </Typography>
                                  <Typography
                                    className="current-price-value"
                                    sx={productCurrentPriceValue}
                                  >
                                    7.200
                                  </Typography>
                                </Stack>
                                <Box
                                  className="older-price"
                                  aria-hidden="true"
                                  sx={{
                                    ...productOlderPrice,
                                    ...productPriceDisplay,
                                  }}
                                ></Box>
                              </Box>
                              <Stack
                                className="rating-sold"
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"start"}
                                sx={{ ...ratingSold }}
                              >
                                <Stack
                                  direction={"row"}
                                  alignItems={"center"}
                                  justifyContent={"start"}
                                  className="rating"
                                  data-sqe="rating"
                                  sx={{
                                    ...ratingStyle,
                                  }}
                                >
                                  <Box
                                    className="shopee-rating-stars"
                                    sx={{ ...shopeeRatingStars }}
                                  >
                                    <Stack
                                      className="shopee-rating-stars__stars"
                                      direction={"row"}
                                      alignItems={"center"}
                                      justifyContent={"start"}
                                    >
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "79.0314%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                    </Stack>
                                  </Box>
                                </Stack>
                                <Box sx={shopeeSoldStyle}>Đã bán 23k</Box>
                              </Stack>
                              <Stack
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"start"}
                                className="transport"
                                sx={shopeeTransport}
                              >
                                <Box
                                  className="transport-location"
                                  aria-label="from"
                                  sx={shopeeTransportLocation}
                                >
                                  TP. Hồ Chí Minh
                                </Box>
                              </Stack>
                            </Box>
                          </Box>
                        </Box>
                      </Link>
                    </ListItem>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2.4}>
                    <ListItem
                      className="shopee-search-item-result__item"
                      data-sqe="item"
                      sx={{
                        ...ListItemSearchResult,
                      }}
                    >
                      <Link
                        data-sqe="link"
                        href="/❌Rộng-3cm❌-Băng-Dính-2-Mặt-Nano-Trong-Suốt-Siêu-Dính-Mọi-Bề-Mặt-88127-Shop-Giao-Hàng-Nhanh-88-i.262349252.7838848161?sp_atk=2c345a88-e843-4029-b1fc-2b45cff58752&amp;xptdk=2c345a88-e843-4029-b1fc-2b45cff58752"
                        sx={{ ...LinkProductStyle }}
                      >
                        <Box sx={{ height: "100%" }}>
                          <Box
                            className="product-style"
                            sx={{ ...BoxProductStyle }}
                          >
                            <Box sx={{ pointerEvents: "none" }}>
                              <Box
                                className="product-image"
                                sx={{
                                  ...BoxProductImageStyle,
                                }}
                              >
                                <Box
                                  sx={{
                                    objectFit: "contain",
                                    ...ImageProductStyle,
                                  }}
                                >
                                  <img
                                    alt="❌Rộng 3cm❌ Băng Dính 2 Mặt Nano Trong Suốt Siêu Dính Mọi Bề Mặt 88127 Shop Giao Hàng Nhanh 88"
                                    src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh9ylyjh12k267_tn"
                                    width="188px"
                                    height="188px"
                                  />
                                </Box>
                                <Box
                                  className="product-type"
                                  sx={{
                                    ...ProductTypeStyle,
                                  }}
                                >
                                  <Box
                                    className="type-text-style"
                                    sx={{
                                      ...TypeTextFavouriteStyle,
                                      ...TypeTextPositionStyle,
                                      color: "rgb(242, 82, 32)",
                                    }}
                                  >
                                    <Typography
                                      sx={{ ...TypeTextFavouriteStyle }}
                                    >
                                      Yêu thích
                                    </Typography>
                                  </Box>
                                </Box>
                                <Box
                                  className="icon-video"
                                  sx={shopeeIconVideo}
                                >
                                  <Box aria-hidden="true">
                                    <Box
                                      sx={{
                                        ...shopeeSVGIcon,
                                        ...shopeeIconVideoPlay,
                                      }}
                                    >
                                      <VideoPlayIcon />
                                    </Box>
                                  </Box>
                                </Box>
                                <Box
                                  className="customized-overlay"
                                  sx={CustomizedOverlay}
                                >
                                  <Box
                                    className="customized-overlay-image"
                                    sx={CustomizedOverlayImage}
                                  >
                                    <img
                                      alt="overlay image"
                                      src="https://down-vn.img.susercontent.com/file/vn-50009109-bceb1cea39526a7545c21e0b6c4567b2"
                                      width="188px"
                                      height="188px"
                                    />
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                            <Box
                              className="product-content"
                              sx={productContentStyle}
                            >
                              <Box
                                className="product-name"
                                data-sqe="name"
                                sx={productBoxName}
                              >
                                <Box sx={productBoxNameGrow}>
                                  <ListItemText
                                    aria-hidden="true"
                                    className="product-name"
                                    sx={{ ...productNameStyle }}
                                  >
                                    ❌Rộng 3cm❌ Băng Dính 2 Mặt Nano Trong Suốt
                                    Siêu Dính Mọi Bề Mặt 88127 Shop Giao Hàng
                                    Nhanh 88
                                  </ListItemText>
                                </Box>
                                <Stack
                                  direction={"row"}
                                  alignItems={"center"}
                                  justifyContent={"space-between"}
                                  sx={priceDiscountCoupons}
                                >
                                  <Box
                                    aria-hidden="true"
                                    sx={{ ...priceDiscountCoupon }}
                                  >
                                    <Box
                                      className="nt-foot"
                                      sx={{
                                        ...ntFoot,
                                        ...ntFootInsert,
                                        color: "rgb(246, 145, 19)",
                                      }}
                                    >
                                      <Box
                                        className="puzzle-piece-first"
                                        sx={{ left: "0", ...PuzzlePieceStyle }}
                                      >
                                        <PuzzlePieceFirst />
                                      </Box>
                                      <Box
                                        sx={{
                                          ...priceDiscountCouponContent,
                                          backgroundColor: "rgb(246, 145, 19)",
                                        }}
                                      >
                                        Hoàn 88% xu
                                      </Box>
                                      <Box
                                        className="puzzle-piece-last"
                                        sx={{ right: "0", ...PuzzlePieceStyle }}
                                      >
                                        <PuzzlePieceLast />
                                      </Box>
                                    </Box>
                                  </Box>
                                  <Box
                                    aria-hidden="true"
                                    className="price-deal"
                                    sx={priceDiscountCouponDeal}
                                  >
                                    Mua để nhận quà
                                  </Box>
                                </Stack>
                              </Box>
                              <Box className="product-price" sx={productPrice}>
                                <Stack
                                  direction="row"
                                  alignItems={"center"}
                                  justifyContent={"space-between"}
                                  className="product-current-price"
                                  sx={{
                                    maxWidth: "calc(100% - 34.0156px)",
                                    ...productCurrentPrice,
                                    ...productPriceDisplay,
                                  }}
                                >
                                  <Typography
                                    aria-label="current price"
                                    sx={productCurrentPriceCurrency}
                                  ></Typography>
                                  <Typography
                                    className="current-price-currency"
                                    sx={productCurrentPriceCurrency}
                                  >
                                    ₫
                                  </Typography>
                                  <Typography
                                    className="current-price-value"
                                    sx={productCurrentPriceValue}
                                  >
                                    1.100
                                  </Typography>
                                </Stack>
                                <Box
                                  className="older-price"
                                  aria-hidden="true"
                                  sx={{
                                    ...productOlderPrice,
                                    ...productPriceDisplay,
                                  }}
                                >
                                  ₫11.000
                                </Box>
                                <Box
                                  className="price-percent-discount-align"
                                  sx={pricePercentDiscountAlign}
                                >
                                  <Box
                                    className="price-percent-discount"
                                    sx={pricePercentDiscountBox}
                                  >
                                    <Typography
                                      className="price-percent-discount-value"
                                      sx={pricePercentDiscountValue}
                                    >
                                      -90%
                                    </Typography>
                                  </Box>
                                </Box>
                              </Box>
                              <Stack
                                className="rating-sold"
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"start"}
                                sx={{ ...ratingSold }}
                              >
                                <Stack
                                  direction={"row"}
                                  alignItems={"center"}
                                  justifyContent={"start"}
                                  className="rating"
                                  data-sqe="rating"
                                  sx={{
                                    ...ratingStyle,
                                  }}
                                >
                                  <Box
                                    className="shopee-rating-stars"
                                    sx={{ ...shopeeRatingStars }}
                                  >
                                    <Stack
                                      className="shopee-rating-stars__stars"
                                      direction={"row"}
                                      alignItems={"center"}
                                      justifyContent={"start"}
                                    >
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "73.4779%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                    </Stack>
                                  </Box>
                                </Stack>
                                <Box sx={shopeeSoldStyle}>Đã bán 57,4k</Box>
                              </Stack>
                              <Stack
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"start"}
                                className="transport"
                                sx={shopeeTransport}
                              >
                                <Box
                                  className="transport-location"
                                  aria-label="from"
                                  sx={shopeeTransportLocation}
                                >
                                  Hà Nội
                                </Box>
                              </Stack>
                            </Box>
                          </Box>
                        </Box>
                      </Link>
                    </ListItem>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2.4}>
                    <ListItem
                      className="shopee-search-item-result__item"
                      data-sqe="item"
                      sx={{
                        ...ListItemSearchResult,
                      }}
                    >
                      <Link
                        data-sqe="link"
                        href="/Phong-bì-thư-vân-vải-linen-phong-cách-cổ-điển-làm-bưu-thiệp-kỷ-niệm-quà-tặng-i.21736750.23846291549?sp_atk=cefffaf4-079b-4d44-bd38-9350aa1ab5f2&amp;xptdk=cefffaf4-079b-4d44-bd38-9350aa1ab5f2"
                        sx={{ ...LinkProductStyle }}
                      >
                        <Box sx={{ height: "100%" }}>
                          <Box
                            className="product-style"
                            sx={{ ...BoxProductStyle }}
                          >
                            <Box sx={{ pointerEvents: "none" }}>
                              <Box
                                className="product-image"
                                sx={{
                                  ...BoxProductImageStyle,
                                }}
                              >
                                <Box
                                  sx={{
                                    objectFit: "contain",
                                    ...ImageProductStyle,
                                  }}
                                >
                                  <img
                                    alt="Phong bì thư vân vải linen phong cách cổ điển làm bưu thiệp kỷ niệm, quà tặng"
                                    src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lid3o879zmdod3_tn"
                                    width="188px"
                                    height="188px"
                                  />
                                </Box>
                                <Box
                                  className="product-type"
                                  sx={{
                                    ...ProductTypeStyle,
                                  }}
                                >
                                  <Box
                                    className="type-text-style"
                                    sx={{
                                      ...TypeTextFavouriteStyle,
                                      ...TypeTextPositionStyle,
                                      color: "rgb(242, 82, 32)",
                                    }}
                                  >
                                    <Typography
                                      sx={{ ...TypeTextFavouriteStyle }}
                                    >
                                      Yêu thích
                                    </Typography>
                                  </Box>
                                </Box>
                                <Box
                                  className="icon-video"
                                  sx={shopeeIconVideo}
                                >
                                  <Box aria-hidden="true">
                                    <Box
                                      sx={{
                                        ...shopeeSVGIcon,
                                        ...shopeeIconVideoPlay,
                                      }}
                                    >
                                      <VideoPlayIcon />
                                    </Box>
                                  </Box>
                                </Box>
                                <Box
                                  className="customized-overlay"
                                  sx={CustomizedOverlay}
                                >
                                  <Box
                                    className="customized-overlay-image"
                                    sx={CustomizedOverlayImage}
                                  >
                                    <img
                                      alt="overlay image"
                                      src="https://down-vn.img.susercontent.com/file/vn-50009109-b70645d5f730aefc82659b88bfa6d94e"
                                      width="188px"
                                      height="188px"
                                    />
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                            <Box
                              className="product-content"
                              sx={productContentStyle}
                            >
                              <Box
                                className="product-name"
                                data-sqe="name"
                                sx={productBoxName}
                              >
                                <Box sx={productBoxNameGrow}>
                                  <ListItemText
                                    aria-hidden="true"
                                    className="product-name"
                                    sx={{ ...productNameStyle }}
                                  >
                                    Phong bì thư vân vải linen phong cách cổ
                                    điển làm bưu thiệp kỷ niệm, quà tặng
                                  </ListItemText>
                                </Box>
                                <Stack
                                  direction={"row"}
                                  alignItems={"center"}
                                  justifyContent={"space-between"}
                                  sx={priceDiscountCoupons}
                                >
                                  <Box
                                    aria-hidden="true"
                                    className="trend-shop"
                                    sx={{
                                      ...priceDiscountCouponDeal,
                                      color: "rgb(246, 145, 19)",
                                    }}
                                  >
                                    #ShopXuHuong
                                  </Box>
                                </Stack>
                              </Box>
                              <Box className="product-price" sx={productPrice}>
                                <Stack
                                  direction="row"
                                  alignItems={"center"}
                                  justifyContent={"space-between"}
                                  className="product-current-price"
                                  sx={{
                                    maxWidth: "calc(100% - 34.0156px)",
                                    ...productCurrentPrice,
                                    ...productPriceDisplay,
                                  }}
                                >
                                  <Typography
                                    aria-label="current price"
                                    sx={productCurrentPriceCurrency}
                                  ></Typography>
                                  <Typography
                                    className="current-price-currency"
                                    sx={productCurrentPriceCurrency}
                                  >
                                    ₫
                                  </Typography>
                                  <Typography
                                    className="current-price-value"
                                    sx={productCurrentPriceValue}
                                  >
                                    3.400
                                  </Typography>
                                </Stack>
                                <Box
                                  className="older-price"
                                  aria-hidden="true"
                                  sx={{
                                    ...productOlderPrice,
                                    ...productPriceDisplay,
                                  }}
                                >
                                  ₫4.000
                                </Box>
                                <Box
                                  className="price-percent-discount-align"
                                  sx={pricePercentDiscountAlign}
                                >
                                  <Box
                                    className="price-percent-discount"
                                    sx={pricePercentDiscountBox}
                                  >
                                    <Typography
                                      className="price-percent-discount-value"
                                      sx={pricePercentDiscountValue}
                                    >
                                      -33%
                                    </Typography>
                                  </Box>
                                </Box>
                              </Box>
                              <Stack
                                className="rating-sold"
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"start"}
                                sx={{ ...ratingSold }}
                              >
                                <Stack
                                  direction={"row"}
                                  alignItems={"center"}
                                  justifyContent={"start"}
                                  className="rating"
                                  data-sqe="rating"
                                  sx={{
                                    ...ratingStyle,
                                  }}
                                >
                                  <Box
                                    className="shopee-rating-stars"
                                    sx={{ ...shopeeRatingStars }}
                                  >
                                    <Stack
                                      className="shopee-rating-stars__stars"
                                      direction={"row"}
                                      alignItems={"center"}
                                      justifyContent={"start"}
                                    >
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "94.2387%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                    </Stack>
                                  </Box>
                                </Stack>
                                <Box sx={shopeeSoldStyle}>Đã bán 16,3k</Box>
                              </Stack>
                              <Stack
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"start"}
                                className="transport"
                                sx={shopeeTransport}
                              >
                                <Box>
                                  <Transport />
                                </Box>
                                <Box
                                  className="transport-time"
                                  sx={shopeeTransportTime}
                                >
                                  4 - 5 ngày
                                </Box>
                                <Box
                                  className="transport-location"
                                  aria-label="from"
                                  sx={shopeeTransportLocation}
                                >
                                  | Hà Nội
                                </Box>
                              </Stack>
                            </Box>
                          </Box>
                        </Box>
                      </Link>
                    </ListItem>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2.4}>
                    <ListItem
                      className="shopee-search-item-result__item"
                      data-sqe="item"
                      sx={{
                        ...ListItemSearchResult,
                      }}
                    >
                      <Link
                        data-sqe="link"
                        href="/Sách-10000-từ-vựng-tiếng-Nhật-thông-dụng-i.30302081.23612355907?sp_atk=15e532c9-42b7-417a-ad3b-efd6974704c1&amp;xptdk=15e532c9-42b7-417a-ad3b-efd6974704c1"
                        sx={{ ...LinkProductStyle }}
                      >
                        <Box sx={{ height: "100%" }}>
                          <Box
                            className="product-style"
                            sx={{ ...BoxProductStyle }}
                          >
                            <Box sx={{ pointerEvents: "none" }}>
                              <Box
                                className="product-image"
                                sx={{
                                  ...BoxProductImageStyle,
                                }}
                              >
                                <Box
                                  sx={{
                                    objectFit: "contain",
                                    ...ImageProductStyle,
                                  }}
                                >
                                  <img
                                    alt="Sách - 10000 từ vựng tiếng Nhật thông dụng"
                                    src="https://down-vn.img.susercontent.com/file/sg-11134201-22120-975owhw6k9kv0d_tn"
                                    width="188px"
                                    height="188px"
                                  />
                                </Box>
                                <Box
                                  className="product-type"
                                  sx={{
                                    ...ProductTypeStyle,
                                  }}
                                >
                                  <Box
                                    className="type-text-style"
                                    sx={{
                                      ...TypeTextMallStyle,
                                      ...TypeTextPositionStyle,
                                      color: "rgb(208, 1, 27)",
                                    }}
                                  >
                                    <Box
                                      className="clear-after-image"
                                      sx={BoxClearAfterImageMallStyle}
                                    ></Box>
                                  </Box>
                                </Box>
                                <Box
                                  className="customized-overlay"
                                  sx={CustomizedOverlay}
                                >
                                  <Box
                                    className="customized-overlay-image"
                                    sx={CustomizedOverlayImage}
                                  >
                                    <img
                                      alt="overlay image"
                                      src="https://down-vn.img.susercontent.com/file/vn-50009109-48af93118722196d205b2a8473f8bfdf"
                                      width="188px"
                                      height="188px"
                                    />
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                            <Box
                              className="product-content"
                              sx={productContentStyle}
                            >
                              <Box
                                className="product-name"
                                data-sqe="name"
                                sx={productBoxName}
                              >
                                <Box sx={productBoxNameGrow}>
                                  <Box
                                    aria-hidden="true"
                                    className="product-name"
                                    sx={{ ...productNameStyle }}
                                  >
                                    Sách - 10000 từ vựng tiếng Nhật thông dụng
                                  </Box>
                                </Box>
                                <Stack
                                  direction={"row"}
                                  alignItems={"center"}
                                  justifyContent={"space-between"}
                                  sx={priceDiscountCoupons}
                                >
                                  <Box
                                    aria-hidden="true"
                                    className="price-deal"
                                    sx={{
                                      ...priceDiscountCouponWholeSale,
                                    }}
                                  >
                                    Mua giá bán buôn/ bán sỉ
                                  </Box>
                                </Stack>
                              </Box>
                              <Box className="product-price" sx={productPrice}>
                                <Stack
                                  direction="row"
                                  alignItems={"center"}
                                  justifyContent={"space-between"}
                                  className="product-current-price"
                                  sx={{
                                    maxWidth: "calc(100% - 34.0156px)",
                                    ...productCurrentPrice,
                                    ...productPriceDisplay,
                                  }}
                                >
                                  <Typography
                                    aria-label="current price"
                                    sx={productCurrentPriceCurrency}
                                  ></Typography>
                                  <Typography
                                    className="current-price-currency"
                                    sx={productCurrentPriceCurrency}
                                  >
                                    ₫
                                  </Typography>
                                  <Typography
                                    className="current-price-value"
                                    sx={productCurrentPriceValue}
                                  >
                                    84.000
                                  </Typography>
                                </Stack>
                                <Box
                                  className="older-price"
                                  aria-hidden="true"
                                  sx={{
                                    ...productOlderPrice,
                                    ...productPriceDisplay,
                                  }}
                                >
                                  ₫120.000
                                </Box>
                                <Box
                                  className="price-percent-discount-align"
                                  sx={pricePercentDiscountAlign}
                                >
                                  <Box
                                    className="price-percent-discount"
                                    sx={pricePercentDiscountBox}
                                  >
                                    <Typography
                                      className="price-percent-discount-value"
                                      sx={pricePercentDiscountValue}
                                    >
                                      -30%
                                    </Typography>
                                  </Box>
                                </Box>
                              </Box>
                              <Stack
                                className="rating-sold"
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"start"}
                                sx={{ ...ratingSold }}
                              >
                                <Stack
                                  direction={"row"}
                                  alignItems={"center"}
                                  justifyContent={"start"}
                                  className="rating"
                                  data-sqe="rating"
                                  sx={{
                                    ...ratingStyle,
                                  }}
                                >
                                  <Box
                                    className="shopee-rating-stars"
                                    sx={{ ...shopeeRatingStars }}
                                  >
                                    <Stack
                                      className="shopee-rating-stars__stars"
                                      direction={"row"}
                                      alignItems={"center"}
                                      justifyContent={"start"}
                                    >
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                      <Box
                                        className="shopee-rating-stars__star-wrapper"
                                        sx={{ ...shopeeRatingStarsWrapper }}
                                      >
                                        <Box
                                          className="shopee-rating-stars__lit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsLit,
                                          }}
                                        >
                                          <GoldStar />
                                        </Box>
                                        <Box
                                          className="shopee-rating-stars__unlit"
                                          sx={{
                                            width: "100%",
                                            ...shopeeSVGIcon,
                                            ...shopeeRatingStarsUnlit,
                                          }}
                                        >
                                          <DarkStar />
                                        </Box>
                                      </Box>
                                    </Stack>
                                  </Box>
                                </Stack>
                                <Box sx={shopeeSoldStyle}>Đã bán 5</Box>
                              </Stack>
                              <Stack
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"start"}
                                className="transport"
                                sx={shopeeTransport}
                              >
                                <Box>
                                  <Transport />
                                </Box>
                                <Box
                                  className="transport-time"
                                  sx={shopeeTransportTime}
                                >
                                  2 - 5 ngày
                                </Box>
                                <Box
                                  className="transport-location"
                                  aria-label="from"
                                  sx={shopeeTransportLocation}
                                >
                                  | Hà Nội
                                </Box>
                              </Stack>
                            </Box>
                          </Box>
                        </Box>
                      </Link>
                    </ListItem>
                  </Grid>
                </Grid>
              </List>
            </Grid>

            {/* page controller */}
            <Box sx={{ marginTop: "2.5rem" }}>
              <Box
                component={"nav"}
                aria-label=""
                className="shopee-page-controller"
                role="navigation"
                sx={{ ...shopeePageController }}
              >
                <Link
                  aria-disabled="true"
                  aria-label=""
                  className="shopee-icon-button shopee-icon-button--left shopee-icon-button--disabled"
                  href="/"
                  sx={{
                    ...shopeeIconButton,
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "right",
                      marginRight: ".9375rem",
                      ...shopeeSVGIcon,
                    }}
                  >
                    <ArrowLeft />
                  </Box>
                </Link>
                <Link
                  aria-current="true"
                  aria-label=""
                  className="shopee-button-solid shopee-button-solid--primary"
                  href="/Nhà-Sách-Online-cat.11036863?is_from_login=true&amp;page=0&amp;ratingFilter=4&amp;sortBy=pop"
                  sx={{
                    backgroundColor: "rgb(238, 77, 45)",
                    ...shopeeButtonSolid,
                    ...shopeeButtonSolidPrimary,
                  }}
                >
                  1
                </Link>
                <Link
                  aria-label=""
                  className="shopee-button-no-outline"
                  href="/Nhà-Sách-Online-cat.11036863?is_from_login=true&amp;page=1&amp;ratingFilter=4&amp;sortBy=pop"
                  sx={{ ...shopeeButtonSolid, ...shopeeButtonNoOutline }}
                >
                  2
                </Link>
                <Link
                  aria-label=""
                  className="shopee-button-no-outline"
                  href="/Nhà-Sách-Online-cat.11036863?is_from_login=true&amp;page=2&amp;ratingFilter=4&amp;sortBy=pop"
                  sx={{ ...shopeeButtonSolid, ...shopeeButtonNoOutline }}
                >
                  3
                </Link>
                <Link
                  aria-label=""
                  className="shopee-button-no-outline"
                  href="/Nhà-Sách-Online-cat.11036863?is_from_login=true&amp;page=3&amp;ratingFilter=4&amp;sortBy=pop"
                  sx={{ ...shopeeButtonSolid, ...shopeeButtonNoOutline }}
                >
                  4
                </Link>
                <Link
                  aria-label=""
                  className="shopee-button-no-outline"
                  href="/Nhà-Sách-Online-cat.11036863?is_from_login=true&amp;page=4&amp;ratingFilter=4&amp;sortBy=pop"
                  sx={{ ...shopeeButtonSolid, ...shopeeButtonNoOutline }}
                >
                  5
                </Link>
                <Link
                  className="shopee-button-no-outline shopee-button-no-outline--non-click"
                  sx={{ ...shopeeButtonSolid, ...shopeeButtonNoOutline }}
                >
                  ...
                </Link>
                <Link
                  aria-disabled="false"
                  aria-label=""
                  className="shopee-icon-button shopee-icon-button--right"
                  href="/Nhà-Sách-Online-cat.11036863?is_from_login=true&amp;page=1&amp;ratingFilter=4&amp;sortBy=pop"
                  sx={{
                    ...shopeeIconButton,
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "left",
                      marginLeft: ".9375rem",
                      ...shopeeSVGIcon,
                    }}
                  >
                    <ArrowRight />
                  </Box>
                </Link>
              </Box>
            </Box>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}

export default HomeProducts;
