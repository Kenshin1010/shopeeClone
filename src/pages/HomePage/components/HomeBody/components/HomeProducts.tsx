import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import ArrowDownIcon from "../../../../../assets/jsx-icon/ArrowDownIcon";
import IconDownArrowRightFilled from "../jsx-icon/IconDownArrowRightFilled";
import RatingStar from "../jsx-icon/RatingStar";
import RatingStarColored from "../jsx-icon/RatingStarColored";
import SearchFilter from "../jsx-icon/SearchFilter";
import ShopeeCategoryList from "../jsx-icon/ShopeeCategoryList";

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

  return (
    <Box className={"HomeProducts"}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: "1.875rem",
          marginLeft: "auto",
          marginRight: "auto",
          width: "1200px",
          "& .MuiContainer-root": {
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
                      <IconDownArrowRightFilled />
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
                      <IconDownArrowRightFilled />
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
                      <IconDownArrowRightFilled />
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
                      <IconDownArrowRightFilled />
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
                      <IconDownArrowRightFilled />
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
                      <IconDownArrowRightFilled />
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
                              <IconDownArrowRightFilled />
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
                              <IconDownArrowRightFilled />
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
                              <IconDownArrowRightFilled />
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
                              <IconDownArrowRightFilled />
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
              className="shopee-button-solid shopee-button-solid--primary FAYSqk"
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
            className="shopee-button-solid shopee-button-solid--primary dkvbeL"
            sx={{
              margin: "1.25rem 0 0",
              ...shopeeButtonSolidStyle,
              ...shopeeButtonSolidPrimaryStyle,
            }}
          >
            Xóa tất cả
          </Button>
        </Stack>
        <Stack role={"main"} className={shopee-filter-products}>
          
        </Stack>
      </Container>
    </Box>
  );
}

export default HomeProducts;
