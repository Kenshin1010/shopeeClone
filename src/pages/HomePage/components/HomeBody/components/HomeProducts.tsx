import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  Link,
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
import ArrowLeftSmall from "../../jsx-icon/ArrowLeftSmall";
import ArrowRightSmall from "../../jsx-icon/ArrowRightSmall";
import DownArrowRightFilled from "../../jsx-icon/DownArrowRightFilled";
import RatingStar from "../../jsx-icon/RatingStar";
import RatingStarColored from "../../jsx-icon/RatingStarColored";
import SearchFilter from "../../jsx-icon/SearchFilter";
import ShopeeCategoryList from "../../jsx-icon/ShopeeCategoryList";
import ArrowLeft from "../../jsx-icon/ArrowLeft";
import ArrowRight from "../../jsx-icon/ArrowRight";

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
    display: "inline-block",
    height: "1em",
    width: "1em",
    fill: "currentColor",
    position: "relative",
    overflowClipMargin: "content-box",
    overflow: "hidden",
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
                      }}
                      size="small"
                    >
                      <InputLabel
                        id="demo-select-small-label"
                        sx={{
                          "&.MuiFormLabel-root": {
                            lineHeigh: "1rem",
                          },
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
