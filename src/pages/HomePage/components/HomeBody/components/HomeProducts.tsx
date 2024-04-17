import {
  Box,
  Button,
  Container,
  Icon,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo } from "react";
import ShopeeCategoryList from "../jsx-icon/ShopeeCategoryList";
import IconDownArrowRightFilled from "../jsx-icon/IconDownArrowRightFilled";
import { color } from "@mui/system";
import ArrowDownIcon from "../../../../../assets/jsx-icon/ArrowDownIcon";

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
      display: "none",
    }),
    []
  );

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
                      <Box className="shopee-category-list__toggle-btn">
                        Thêm
                        <Box
                          sx={{
                            alignItems: "center",
                            color: "#fff",
                            textDecoration: "none",
                            display: "flex",
                            justifyContent: "center",
                            marginLeft: ".5rem",
                            marginRight: ".3125rem",
                          }}
                        >
                          <ArrowDownIcon />
                        </Box>
                      </Box>
                    </Box>
                    <Box className="stardust-dropdown__item-body">
                      <Box className="folding-items__folded-items">
                        <Link
                          className="shopee-category-list__sub-category"
                          href="/Màu-Họa-Cụ-và-Đồ-Thủ-Công-cat.11036863.11108635"
                        >
                          <svg
                            viewBox="0 0 4 7"
                            className="shopee-svg-icon shopee-category-list__sub-category__caret icon-down-arrow-right-filled"
                          >
                            <polygon points="4 3.5 0 0 0 7"></polygon>
                          </svg>
                          Màu, Họa Cụ và Đồ Thủ Công
                        </Link>
                        <Link
                          className="shopee-category-list__sub-category"
                          href="/Sổ-và-Giấy-Các-Loại-cat.11036863.11108610"
                        >
                          <svg
                            viewBox="0 0 4 7"
                            className="shopee-svg-icon shopee-category-list__sub-category__caret icon-down-arrow-right-filled"
                          >
                            <polygon points="4 3.5 0 0 0 7"></polygon>
                          </svg>
                          Sổ và Giấy Các Loại
                        </Link>
                        <Link
                          className="shopee-category-list__sub-category"
                          href="/Quà-Lưu-Niệm-cat.11036863.11036914"
                        >
                          <svg
                            viewBox="0 0 4 7"
                            className="shopee-svg-icon shopee-category-list__sub-category__caret icon-down-arrow-right-filled"
                          >
                            <polygon points="4 3.5 0 0 0 7"></polygon>
                          </svg>
                          Quà Lưu Niệm
                        </Link>
                        <Link
                          className="shopee-category-list__sub-category"
                          href="/Nhạc-cụ-và-phụ-kiện-âm-nhạc-cat.11036863.11108624"
                        >
                          <svg
                            viewBox="0 0 4 7"
                            className="shopee-svg-icon shopee-category-list__sub-category__caret icon-down-arrow-right-filled"
                          >
                            <polygon points="4 3.5 0 0 0 7"></polygon>
                          </svg>
                          Nhạc cụ và phụ kiện âm nhạc
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box></Box>
          <Box className="shopee-search-filter-status tcrSK+">
            <svg
              enable-background="new 0 0 15 15"
              viewBox="0 0 15 15"
              x="0"
              y="0"
              className="shopee-svg-icon"
            >
              <g>
                <polyline
                  fill="none"
                  points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                ></polyline>
              </g>
            </svg>
            <Box className="shopee-search-filter-status__text">
              Bộ lọc tìm kiếm
            </Box>
          </Box>
          <Box className="shopee-filter-group shopee-facet-filter">
            <Box className="shopee-filter-group__header">Theo Danh Mục</Box>
            <Box className="folding-items shopeee-filter-group__body folding-items--folded">
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="100732" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Thiết Bị Trường Học (568k+)
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="100738" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Quà Lưu Niệm (446k+)
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="100734" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Sổ &amp; Giấy Các Loại (426k+)
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="100731" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Bút Các Loại (344k+)
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="stardust-dropdown folding-items__toggle">
                <Box className="stardust-dropdown__item-header">
                  <Box className="shopee-filter-group__toggle-btn">
                    Thêm
                    <svg
                      enable-background="new 0 0 11 11"
                      viewBox="0 0 11 11"
                      x="0"
                      y="0"
                      className="shopee-svg-icon icon-arrow-down"
                    >
                      <g>
                        <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"></path>
                      </g>
                    </svg>
                  </Box>
                </Box>
                <Box className="stardust-dropdown__item-body">
                  <Box className="folding-items__folded-items">
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="100730" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Quà Tặng - Giấy Gói (169k+)
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="100741" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Nhạc Cụ &amp; Phụ Kiện (168k+)
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="101568" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Sách Giáo Dục (120k+)
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="100733" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Họa cụ (116k+)
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="100744" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Dụng Cụ May Vá (105k+)
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="101541" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Sách Thiếu Nhi (99k+)
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="101566" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Sách Hướng Nghiệp &amp; Phát Triển Bản Thân (82k+)
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="100736" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Văn Phòng Phẩm / Khác (64k+)
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="shopee-filter-group shopee-location-filter">
            <Box className="shopee-filter-group__header">Nơi Bán</Box>
            <Box className="folding-items shopeee-filter-group__body folding-items--folded">
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField
                      type="checkbox"
                      name=""
                      value="TP. Hồ Chí Minh"
                    />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      TP. Hồ Chí Minh
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="Đắk Lắk" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Đắk Lắk
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="Bình Dương" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Bình Dương
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="Đồng Nai" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Đồng Nai
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="stardust-dropdown folding-items__toggle">
                <Box className="stardust-dropdown__item-header">
                  <Box className="shopee-filter-group__toggle-btn">
                    Thêm
                    <svg
                      enable-background="new 0 0 11 11"
                      viewBox="0 0 11 11"
                      x="0"
                      y="0"
                      className="shopee-svg-icon icon-arrow-down"
                    >
                      <g>
                        <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"></path>
                      </g>
                    </svg>
                  </Box>
                </Box>
                <Box className="stardust-dropdown__item-body">
                  <Box className="folding-items__folded-items">
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="Hà Nội" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Hà Nội
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField
                            type="checkbox"
                            name=""
                            value="Thái Nguyên"
                          />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Thái Nguyên
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField
                            type="checkbox"
                            name=""
                            value="Vĩnh Phúc"
                          />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Vĩnh Phúc
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField
                            type="checkbox"
                            name=""
                            value="Hải Phòng"
                          />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Hải Phòng
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="Hưng Yên" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Hưng Yên
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="Bắc Ninh" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Bắc Ninh
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="Đà Nẵng" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Đà Nẵng
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField
                            type="checkbox"
                            name=""
                            value="Quảng Ninh"
                          />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Quảng Ninh
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField
                            type="checkbox"
                            name=""
                            value="Hải Dương"
                          />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Hải Dương
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="Nam Định" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Nam Định
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="Cần Thơ" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Cần Thơ
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="Phú Thọ" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Phú Thọ
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField
                            type="checkbox"
                            name=""
                            value="Bà Rịa - Vũng Tàu"
                          />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Bà Rịa - Vũng Tàu
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField
                            type="checkbox"
                            name=""
                            value="Thanh Hóa"
                          />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Thanh Hóa
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField
                            type="checkbox"
                            name=""
                            value="Thái Bình"
                          />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Thái Bình
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField
                            type="checkbox"
                            name=""
                            value="Nước ngoài"
                          />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Nước ngoài
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="QxHbGm">
                      <Box className="stardust-popover" id="stardust-popover0">
                        <Box role="button" className="stardust-popover__target">
                          <Box className="g7rQZz">Khác &gt;</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="shopee-filter-group shopee-logistics-filter">
            <Box className="shopee-filter-group__header">Đơn Vị Vận Chuyển</Box>
            <Box className="folding-items shopeee-filter-group__body folding-items--folded">
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="1" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Hỏa Tốc
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="2" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Nhanh
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="3" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Tiết Kiệm
                    </Typography>
                  </label>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="shopee-filter-group shopee-brands-filter">
            <Box className="shopee-filter-group__header">Thương Hiệu</Box>
            <Box className="folding-items shopeee-filter-group__body folding-items--folded">
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="1139260" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Nhiều tác giả
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="2560878" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Deli
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="1135602" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Nguyễn Nhật Ánh
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="1072619" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      ONO Eriko
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="stardust-dropdown folding-items__toggle">
                <Box className="stardust-dropdown__item-header">
                  <Box className="shopee-filter-group__toggle-btn">
                    Thêm
                    <svg
                      enable-background="new 0 0 11 11"
                      viewBox="0 0 11 11"
                      x="0"
                      y="0"
                      className="shopee-svg-icon icon-arrow-down"
                    >
                      <g>
                        <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"></path>
                      </g>
                    </svg>
                  </Box>
                </Box>
                <Box className="stardust-dropdown__item-body">
                  <Box className="folding-items__folded-items">
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="1695271" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Casio
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="1255544" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            FAHASA
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="1074665" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            THANH HƯƠNG
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="1143002" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            DK
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="1251091" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Thiên Long
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="1802940" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Yamaha
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="3793394" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Châu Sa Đáy Mắt
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="1080038" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Trang Anh
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="1255824" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            José Mauro de Vasconcelos
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="1256216" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Nhựa HVT
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="2816972" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            TUANVIET BOOKS
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="1067160" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Eiichiro Oda
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="1069612" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Keigo Higashino
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="1069678" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Gosho Aoyama
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="1071472" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Colokit
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="1073358" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            MCBooks
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="shopee-filter-group shopee-price-range-filter shopee-price-range-filter--vn">
            <Box className="shopee-filter-group__header shopee-price-range-filter__header">
              Khoảng Giá
            </Box>
            <Box className="shopee-filter-group__body shopee-price-range-filter__edit">
              <Box className="shopee-price-range-filter__TextFields">
                <TextField
                  type="text"
                  className="shopee-price-range-filter__TextField"
                  placeholder="₫ TỪ"
                  value=""
                />
                <Box className="shopee-price-range-filter__range-line"></Box>
                <TextField
                  type="text"
                  className="shopee-price-range-filter__TextField"
                  placeholder="₫ ĐẾN"
                  value=""
                />
              </Box>
            </Box>
            <Button
              className="shopee-button-solid shopee-button-solid--primary FAYSqk"
              sx={{ backgroundColor: "rgb(238, 77, 45)" }}
            >
              Áp dụng
            </Button>
          </Box>
          <Box className="shopee-filter-group">
            <Box className="shopee-filter-group__header">Loại Shop</Box>
            <Box className="folding-items shopeee-filter-group__body folding-items--folded">
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="5" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Shopee Mall
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="7" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Shop Yêu thích
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField
                      type="checkbox"
                      name=""
                      value="814381247172614"
                    />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Xử lý đơn hàng bởi Shopee
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="6" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Shop Yêu Thích +
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="stardust-dropdown folding-items__toggle">
                <Box className="stardust-dropdown__item-header">
                  <Box className="shopee-filter-group__toggle-btn">
                    Thêm
                    <svg
                      enable-background="new 0 0 11 11"
                      viewBox="0 0 11 11"
                      x="0"
                      y="0"
                      className="shopee-svg-icon icon-arrow-down"
                    >
                      <g>
                        <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"></path>
                      </g>
                    </svg>
                  </Box>
                </Box>
                <Box className="stardust-dropdown__item-body">
                  <Box className="folding-items__folded-items">
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField
                            type="checkbox"
                            name=""
                            value="1400525060"
                          />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Shop Xu Hướng
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="shopee-filter-group">
            <Box className="shopee-filter-group__header">Tình Trạng</Box>
            <Box className="folding-items shopeee-filter-group__body folding-items--folded">
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="9" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Đã sử dụng
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="8" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Mới
                    </Typography>
                  </label>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="shopee-filter-group">
            <Box className="shopee-filter-group__header">
              Các lựa chọn thanh toán
            </Box>
            <Box className="folding-items shopeee-filter-group__body folding-items--folded">
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="installment" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      0% TRẢ GÓP
                    </Typography>
                  </label>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="shopee-filter-group Uw+KWN">
            <Box className="shopee-filter-group__header">Đánh Giá</Box>
            <Box className="folding-items shopeee-filter-group__body folding-items--folded">
              <Box className="zc93YK">
                <Box className="rating-stars__container">
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset="0" stop-color="#ffca11"></stop>
                        <stop offset="1" stop-color="#ffad27"></stop>
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      ></polygon>
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fill-rule="evenodd"
                      stroke="none"
                      stroke-width="1"
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                {/* <use
                                  stroke="#ffa727"
                                  stroke-width=".5"
                                  xlink:href="#ratingStar"
                                ></use> */}
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset="0" stop-color="#ffca11"></stop>
                        <stop offset="1" stop-color="#ffad27"></stop>
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      ></polygon>
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fill-rule="evenodd"
                      stroke="none"
                      stroke-width="1"
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                {/* <use
                                  stroke="#ffa727"
                                  stroke-width=".5"
                                  xlink:href="#ratingStar"
                                ></use> */}
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset="0" stop-color="#ffca11"></stop>
                        <stop offset="1" stop-color="#ffad27"></stop>
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      ></polygon>
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fill-rule="evenodd"
                      stroke="none"
                      stroke-width="1"
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                {/* <use
                                  stroke="#ffa727"
                                  stroke-width=".5"
                                  xlink:href="#ratingStar"
                                ></use> */}
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset="0" stop-color="#ffca11"></stop>
                        <stop offset="1" stop-color="#ffad27"></stop>
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      ></polygon>
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fill-rule="evenodd"
                      stroke="none"
                      stroke-width="1"
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                {/* <use
                                  stroke="#ffa727"
                                  stroke-width=".5"
                                  xlink:href="#ratingStar"
                                ></use> */}
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset="0" stop-color="#ffca11"></stop>
                        <stop offset="1" stop-color="#ffad27"></stop>
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      ></polygon>
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fill-rule="evenodd"
                      stroke="none"
                      stroke-width="1"
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                {/* <use
                                  stroke="#ffa727"
                                  stroke-width=".5"
                                  xlink:href="#ratingStar"
                                ></use> */}
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </Box>
              </Box>
              <Box className="zc93YK">
                <Box className="rating-stars__container">
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset="0" stop-color="#ffca11"></stop>
                        <stop offset="1" stop-color="#ffad27"></stop>
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      ></polygon>
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fill-rule="evenodd"
                      stroke="none"
                      stroke-width="1"
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                {/* <use
                                  stroke="#ffa727"
                                  stroke-width=".5"
                                  xlink:href="#ratingStar"
                                ></use> */}
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset="0" stop-color="#ffca11"></stop>
                        <stop offset="1" stop-color="#ffad27"></stop>
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      ></polygon>
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fill-rule="evenodd"
                      stroke="none"
                      stroke-width="1"
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                {/* <use
                                  stroke="#ffa727"
                                  stroke-width=".5"
                                  xlink:href="#ratingStar"
                                ></use> */}
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset="0" stop-color="#ffca11"></stop>
                        <stop offset="1" stop-color="#ffad27"></stop>
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      ></polygon>
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fill-rule="evenodd"
                      stroke="none"
                      stroke-width="1"
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                {/* <use
                                  stroke="#ffa727"
                                  stroke-width=".5"
                                  xlink:href="#ratingStar"
                                ></use> */}
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset="0" stop-color="#ffca11"></stop>
                        <stop offset="1" stop-color="#ffad27"></stop>
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      ></polygon>
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fill-rule="evenodd"
                      stroke="none"
                      stroke-width="1"
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                {/* <use
                                  stroke="#ffa727"
                                  stroke-width=".5"
                                  xlink:href="#ratingStar"
                                ></use> */}
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <Box
                    className="rating-stars__star r7EugV"
                    sx={{ width: "14px", height: "14px" }}
                  >
                    <svg viewBox="0 0 30 30" className="ckFEIU">
                      <defs>
                        <linearGradient
                          id="star__hollow"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="99.0177926%"
                        >
                          <stop offset="0%" stop-color="#FFD211"></stop>
                          <stop offset="100%" stop-color="#FFAD27"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="none"
                        fill-rule="evenodd"
                        stroke="url(#star__hollow)"
                        stroke-width="2"
                        d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                      ></path>
                    </svg>
                    <svg
                      viewBox="0 0 30 30"
                      className="ckFEIU"
                      style={{ width: "0%" }}
                    >
                      <defs>
                        <linearGradient
                          id="star__solid"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stop-color="#FFCA11"></stop>
                          <stop offset="100%" stop-color="#FFAD27"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#star__solid)"
                        fill-rule="evenodd"
                        d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                      ></path>
                    </svg>
                  </Box>
                </Box>
                trở lên
              </Box>
              <Box className="zc93YK">
                <Box className="rating-stars__container">
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset="0" stop-color="#ffca11"></stop>
                        <stop offset="1" stop-color="#ffad27"></stop>
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      ></polygon>
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fill-rule="evenodd"
                      stroke="none"
                      stroke-width="1"
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                {/* <use
                                  stroke="#ffa727"
                                  stroke-width=".5"
                                  xlink:href="#ratingStar"
                                ></use> */}
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset="0" stop-color="#ffca11"></stop>
                        <stop offset="1" stop-color="#ffad27"></stop>
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      ></polygon>
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fill-rule="evenodd"
                      stroke="none"
                      stroke-width="1"
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                {/* <use
                                  stroke="#ffa727"
                                  stroke-width=".5"
                                  xlink:href="#ratingStar"
                                ></use> */}
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset="0" stop-color="#ffca11"></stop>
                        <stop offset="1" stop-color="#ffad27"></stop>
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      ></polygon>
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fill-rule="evenodd"
                      stroke="none"
                      stroke-width="1"
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                {/* <use
                                  stroke="#ffa727"
                                  stroke-width=".5"
                                  xlink:href="#ratingStar"
                                ></use> */}
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <Box
                    className="rating-stars__star r7EugV"
                    sx={{ width: "14px", height: "14px" }}
                  >
                    <svg viewBox="0 0 30 30" className="ckFEIU">
                      <defs>
                        <linearGradient
                          id="star__hollow"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="99.0177926%"
                        >
                          <stop offset="0%" stop-color="#FFD211"></stop>
                          <stop offset="100%" stop-color="#FFAD27"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="none"
                        fill-rule="evenodd"
                        stroke="url(#star__hollow)"
                        stroke-width="2"
                        d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                      ></path>
                    </svg>
                    <svg
                      viewBox="0 0 30 30"
                      className="ckFEIU"
                      style={{ width: "0%" }}
                    >
                      <defs>
                        <linearGradient
                          id="star__solid"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stop-color="#FFCA11"></stop>
                          <stop offset="100%" stop-color="#FFAD27"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#star__solid)"
                        fill-rule="evenodd"
                        d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                      ></path>
                    </svg>
                  </Box>
                  <Box
                    className="rating-stars__star r7EugV"
                    sx={{ width: "14px", height: "14px" }}
                  >
                    <svg viewBox="0 0 30 30" className="ckFEIU">
                      <defs>
                        <linearGradient
                          id="star__hollow"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="99.0177926%"
                        >
                          <stop offset="0%" stop-color="#FFD211"></stop>
                          <stop offset="100%" stop-color="#FFAD27"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="none"
                        fill-rule="evenodd"
                        stroke="url(#star__hollow)"
                        stroke-width="2"
                        d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                      ></path>
                    </svg>
                    <svg
                      viewBox="0 0 30 30"
                      className="ckFEIU"
                      style={{ width: "0%" }}
                    >
                      <defs>
                        <linearGradient
                          id="star__solid"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stop-color="#FFCA11"></stop>
                          <stop offset="100%" stop-color="#FFAD27"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#star__solid)"
                        fill-rule="evenodd"
                        d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                      ></path>
                    </svg>
                  </Box>
                </Box>
                trở lên
              </Box>
              <Box className="zc93YK">
                <Box className="rating-stars__container">
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset="0" stop-color="#ffca11"></stop>
                        <stop offset="1" stop-color="#ffad27"></stop>
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      ></polygon>
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fill-rule="evenodd"
                      stroke="none"
                      stroke-width="1"
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                {/* <use
                                  stroke="#ffa727"
                                  stroke-width=".5"
                                  xlink:href="#ratingStar"
                                ></use> */}
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg
                    viewBox="0 0 9.5 8"
                    className="shopee-svg-icon rating-stars__star icon-rating-colored"
                  >
                    <defs>
                      <linearGradient
                        id="ratingStarGradient"
                        x1="50%"
                        x2="50%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset="0" stop-color="#ffca11"></stop>
                        <stop offset="1" stop-color="#ffad27"></stop>
                      </linearGradient>
                      <polygon
                        id="ratingStar"
                        points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                      ></polygon>
                    </defs>
                    <g
                      fill="url(#ratingStarGradient)"
                      fill-rule="evenodd"
                      stroke="none"
                      stroke-width="1"
                    >
                      <g transform="translate(-876 -1270)">
                        <g transform="translate(155 992)">
                          <g transform="translate(600 29)">
                            <g transform="translate(10 239)">
                              <g transform="translate(101 10)">
                                {/* <use
                                  stroke="#ffa727"
                                  stroke-width=".5"
                                  xlink:href="#ratingStar"
                                ></use> */}
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <Box
                    className="rating-stars__star r7EugV"
                    sx={{ width: "14px", height: "14px" }}
                  >
                    <svg viewBox="0 0 30 30" className="ckFEIU">
                      <defs>
                        <linearGradient
                          id="star__hollow"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="99.0177926%"
                        >
                          <stop offset="0%" stop-color="#FFD211"></stop>
                          <stop offset="100%" stop-color="#FFAD27"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="none"
                        fill-rule="evenodd"
                        stroke="url(#star__hollow)"
                        stroke-width="2"
                        d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                      ></path>
                    </svg>
                    <svg
                      viewBox="0 0 30 30"
                      className="ckFEIU"
                      style={{ width: "0%" }}
                    >
                      <defs>
                        <linearGradient
                          id="star__solid"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stop-color="#FFCA11"></stop>
                          <stop offset="100%" stop-color="#FFAD27"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#star__solid)"
                        fill-rule="evenodd"
                        d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                      ></path>
                    </svg>
                  </Box>
                  <Box
                    className="rating-stars__star r7EugV"
                    sx={{ width: "14px", height: "14px" }}
                  >
                    <svg viewBox="0 0 30 30" className="ckFEIU">
                      <defs>
                        <linearGradient
                          id="star__hollow"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="99.0177926%"
                        >
                          <stop offset="0%" stop-color="#FFD211"></stop>
                          <stop offset="100%" stop-color="#FFAD27"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="none"
                        fill-rule="evenodd"
                        stroke="url(#star__hollow)"
                        stroke-width="2"
                        d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                      ></path>
                    </svg>
                    <svg
                      viewBox="0 0 30 30"
                      className="ckFEIU"
                      style={{ width: "0%" }}
                    >
                      <defs>
                        <linearGradient
                          id="star__solid"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stop-color="#FFCA11"></stop>
                          <stop offset="100%" stop-color="#FFAD27"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#star__solid)"
                        fill-rule="evenodd"
                        d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                      ></path>
                    </svg>
                  </Box>
                  <Box
                    className="rating-stars__star r7EugV"
                    sx={{ width: "14px", height: "14px" }}
                  >
                    <svg viewBox="0 0 30 30" className="ckFEIU">
                      <defs>
                        <linearGradient
                          id="star__hollow"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="99.0177926%"
                        >
                          <stop offset="0%" stop-color="#FFD211"></stop>
                          <stop offset="100%" stop-color="#FFAD27"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="none"
                        fill-rule="evenodd"
                        stroke="url(#star__hollow)"
                        stroke-width="2"
                        d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                      ></path>
                    </svg>
                    <svg
                      viewBox="0 0 30 30"
                      className="ckFEIU"
                      style={{ width: "0%" }}
                    >
                      <defs>
                        <linearGradient
                          id="star__solid"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stop-color="#FFCA11"></stop>
                          <stop offset="100%" stop-color="#FFAD27"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#star__solid)"
                        fill-rule="evenodd"
                        d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                      ></path>
                    </svg>
                  </Box>
                </Box>
                trở lên
              </Box>
              <Box className="stardust-dropdown folding-items__toggle">
                <Box className="stardust-dropdown__item-header">
                  <Box className="shopee-filter-group__toggle-btn">
                    Thêm
                    <svg
                      enable-background="new 0 0 11 11"
                      viewBox="0 0 11 11"
                      x="0"
                      y="0"
                      className="shopee-svg-icon icon-arrow-down"
                    >
                      <g>
                        <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"></path>
                      </g>
                    </svg>
                  </Box>
                </Box>
                <Box className="stardust-dropdown__item-body">
                  <Box className="folding-items__folded-items">
                    <Box className="zc93YK">
                      <Box className="rating-stars__container">
                        <svg
                          viewBox="0 0 9.5 8"
                          className="shopee-svg-icon rating-stars__star icon-rating-colored"
                        >
                          <defs>
                            <linearGradient
                              id="ratingStarGradient"
                              x1="50%"
                              x2="50%"
                              y1="0%"
                              y2="100%"
                            >
                              <stop offset="0" stop-color="#ffca11"></stop>
                              <stop offset="1" stop-color="#ffad27"></stop>
                            </linearGradient>
                            <polygon
                              id="ratingStar"
                              points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                            ></polygon>
                          </defs>
                          <g
                            fill="url(#ratingStarGradient)"
                            fill-rule="evenodd"
                            stroke="none"
                            stroke-width="1"
                          >
                            <g transform="translate(-876 -1270)">
                              <g transform="translate(155 992)">
                                <g transform="translate(600 29)">
                                  <g transform="translate(10 239)">
                                    <g transform="translate(101 10)">
                                      {/* <use
                                        stroke="#ffa727"
                                        stroke-width=".5"
                                        xlink:href="#ratingStar"
                                      ></use> */}
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                        <Box
                          className="rating-stars__star r7EugV"
                          sx={{ width: "14px", height: "14px" }}
                        >
                          <svg viewBox="0 0 30 30" className="ckFEIU">
                            <defs>
                              <linearGradient
                                id="star__hollow"
                                x1="50%"
                                x2="50%"
                                y1="0%"
                                y2="99.0177926%"
                              >
                                <stop offset="0%" stop-color="#FFD211"></stop>
                                <stop offset="100%" stop-color="#FFAD27"></stop>
                              </linearGradient>
                            </defs>
                            <path
                              fill="none"
                              fill-rule="evenodd"
                              stroke="url(#star__hollow)"
                              stroke-width="2"
                              d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                            ></path>
                          </svg>
                          <svg
                            viewBox="0 0 30 30"
                            className="ckFEIU"
                            style={{ width: "0%" }}
                          >
                            <defs>
                              <linearGradient
                                id="star__solid"
                                x1="50%"
                                x2="50%"
                                y1="0%"
                                y2="100%"
                              >
                                <stop offset="0%" stop-color="#FFCA11"></stop>
                                <stop offset="100%" stop-color="#FFAD27"></stop>
                              </linearGradient>
                            </defs>
                            <path
                              fill="url(#star__solid)"
                              fill-rule="evenodd"
                              d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                            ></path>
                          </svg>
                        </Box>
                        <Box
                          className="rating-stars__star r7EugV"
                          sx={{ width: "14px", height: "14px" }}
                        >
                          <svg viewBox="0 0 30 30" className="ckFEIU">
                            <defs>
                              <linearGradient
                                id="star__hollow"
                                x1="50%"
                                x2="50%"
                                y1="0%"
                                y2="99.0177926%"
                              >
                                <stop offset="0%" stop-color="#FFD211"></stop>
                                <stop offset="100%" stop-color="#FFAD27"></stop>
                              </linearGradient>
                            </defs>
                            <path
                              fill="none"
                              fill-rule="evenodd"
                              stroke="url(#star__hollow)"
                              stroke-width="2"
                              d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                            ></path>
                          </svg>
                          <svg
                            viewBox="0 0 30 30"
                            className="ckFEIU"
                            style={{ width: "0%" }}
                          >
                            <defs>
                              <linearGradient
                                id="star__solid"
                                x1="50%"
                                x2="50%"
                                y1="0%"
                                y2="100%"
                              >
                                <stop offset="0%" stop-color="#FFCA11"></stop>
                                <stop offset="100%" stop-color="#FFAD27"></stop>
                              </linearGradient>
                            </defs>
                            <path
                              fill="url(#star__solid)"
                              fill-rule="evenodd"
                              d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                            ></path>
                          </svg>
                        </Box>
                        <Box
                          className="rating-stars__star r7EugV"
                          sx={{ width: "14px", height: "14px" }}
                        >
                          <svg viewBox="0 0 30 30" className="ckFEIU">
                            <defs>
                              <linearGradient
                                id="star__hollow"
                                x1="50%"
                                x2="50%"
                                y1="0%"
                                y2="99.0177926%"
                              >
                                <stop offset="0%" stop-color="#FFD211"></stop>
                                <stop offset="100%" stop-color="#FFAD27"></stop>
                              </linearGradient>
                            </defs>
                            <path
                              fill="none"
                              fill-rule="evenodd"
                              stroke="url(#star__hollow)"
                              stroke-width="2"
                              d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                            ></path>
                          </svg>
                          <svg
                            viewBox="0 0 30 30"
                            className="ckFEIU"
                            style={{ width: "0%" }}
                          >
                            <defs>
                              <linearGradient
                                id="star__solid"
                                x1="50%"
                                x2="50%"
                                y1="0%"
                                y2="100%"
                              >
                                <stop offset="0%" stop-color="#FFCA11"></stop>
                                <stop offset="100%" stop-color="#FFAD27"></stop>
                              </linearGradient>
                            </defs>
                            <path
                              fill="url(#star__solid)"
                              fill-rule="evenodd"
                              d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                            ></path>
                          </svg>
                        </Box>
                        <Box
                          className="rating-stars__star r7EugV"
                          sx={{ width: "14px", height: "14px" }}
                        >
                          <svg viewBox="0 0 30 30" className="ckFEIU">
                            <defs>
                              <linearGradient
                                id="star__hollow"
                                x1="50%"
                                x2="50%"
                                y1="0%"
                                y2="99.0177926%"
                              >
                                <stop offset="0%" stop-color="#FFD211"></stop>
                                <stop offset="100%" stop-color="#FFAD27"></stop>
                              </linearGradient>
                            </defs>
                            <path
                              fill="none"
                              fill-rule="evenodd"
                              stroke="url(#star__hollow)"
                              stroke-width="2"
                              d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                            ></path>
                          </svg>
                          <svg
                            viewBox="0 0 30 30"
                            className="ckFEIU"
                            style={{ width: "0%" }}
                          >
                            <defs>
                              <linearGradient
                                id="star__solid"
                                x1="50%"
                                x2="50%"
                                y1="0%"
                                y2="100%"
                              >
                                <stop offset="0%" stop-color="#FFCA11"></stop>
                                <stop offset="100%" stop-color="#FFAD27"></stop>
                              </linearGradient>
                            </defs>
                            <path
                              fill="url(#star__solid)"
                              fill-rule="evenodd"
                              d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                            ></path>
                          </svg>
                        </Box>
                      </Box>
                      trở lên
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="shopee-filter-group">
            <Box className="shopee-filter-group__header">
              Dịch Vụ &amp; Khuyến Mãi
            </Box>
            <Box className="folding-items shopeee-filter-group__body folding-items--folded">
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="1000742" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Voucher Xtra
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="10" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Đang giảm giá
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="700085110" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Miễn phí vận chuyển
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="shopee-filter shopee-checkbox-filter">
                <Box className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <TextField type="checkbox" name="" value="15" />
                    <Box className="shopee-checkbox__box">
                      <Icon></Icon>
                    </Box>
                    <Typography className="shopee-checkbox__label">
                      Gì Cũng Rẻ
                    </Typography>
                  </label>
                </Box>
              </Box>
              <Box className="stardust-dropdown folding-items__toggle">
                <Box className="stardust-dropdown__item-header">
                  <Box className="shopee-filter-group__toggle-btn">
                    Thêm
                    <svg
                      enable-background="new 0 0 11 11"
                      viewBox="0 0 11 11"
                      x="0"
                      y="0"
                      className="shopee-svg-icon icon-arrow-down"
                    >
                      <g>
                        <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"></path>
                      </g>
                    </svg>
                  </Box>
                </Box>
                <Box className="stardust-dropdown__item-body">
                  <Box className="folding-items__folded-items">
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="12" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Hàng có sẵn
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                    <Box className="shopee-filter shopee-checkbox-filter">
                      <Box className="shopee-checkbox">
                        <label className="shopee-checkbox__control">
                          <TextField type="checkbox" name="" value="14" />
                          <Box className="shopee-checkbox__box">
                            <Icon></Icon>
                          </Box>
                          <Typography className="shopee-checkbox__label">
                            Mua giá bán buôn/ bán sỉ
                          </Typography>
                        </label>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Button
            className="shopee-button-solid shopee-button-solid--primary dkvbeL"
            sx={{ backgroundColor: "rgb(238, 77, 45)" }}
          >
            Xóa tất cả
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default HomeProducts;
