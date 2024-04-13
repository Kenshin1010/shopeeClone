import {
  AppBar,
  Box,
  Button,
  Container,
  FormControl,
  Link,
  List,
  ListItem,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Toolbar,
  Typography
} from "@mui/material";
import { useMemo, useState } from "react";
import shopeeLogo from "../../../assets/images/shopee2.svg";
import ArrowDownIcon from "../../../assets/jsx-icon/ArrowDownIcon";
import CartDrawer from "../../../assets/jsx-icon/CartDrawer";
import HelpCenterIcon from "../../../assets/jsx-icon/HelpCenterIcon";
import NotificationIcon from "../../../assets/jsx-icon/NotificationIcon";
import SearchIcon from "../../../assets/jsx-icon/SearchIcon";
import ShopeeAvatar from "../../../assets/jsx-icon/ShopeeAvatar";
import StardustPopover from "../../../assets/jsx-icon/StardustPopover";
import StardustPopoverTarget from "../../../assets/jsx-icon/StardustPopoverTarget";

const options = ["Trong Nhà Sách Online", "Trong Shopee"];
function HomeNav() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value);
    console.log("selectedValue", selectedValue);
  };

  const topShopeeContainerStyles = useMemo(
    () => ({
      background: "linear-gradient(-180deg, #f53d2d, #f63)",
      transition:
        "transform .2s cubic-bezier(.4,0,.2,1), linear .2s cubic-bezier(.4,0,.2,1)",
      //   "&:hover": {
      //     transform: "scale(1.02)",
      //   },
      visibility: "visible",
      lineHeight: "1.2",
    }),
    []
  );

  const toolbarContainerStyles = useMemo(
    () => ({
      color: "#fff",
      marginLeft: "auto",
      marginRight: "auto",
      width: "1200px",
      display: "flex",
      alignItems: "center",
    }),
    []
  );

  const marginLeftLink = () => ({
    marginLeft: ".625rem",
  });

  const getLinkStyles = useMemo(
    () => ({
      textDecoration: "none",
      color: "#fff",
      fontSize: ".8125rem",
      fontWeight: "300",
      outline: "0",
      overflow: "visible",
      padding: ".25rem",
      position: "relative",
      "&:hover": {
        color: "hsla(0, 0%, 100%, .7)",
      },
    }),
    []
  );

  const getLinkStylesBefore = useMemo(
    () => ({
      "&:focus-visible:before": {
        "--focus-indicator-spacing": "0px",
        borderRadius: "var(--focus-indicator-border-radius)",
        content: "''",
        height: "calc(100% + var(--focus-indicator-spacing)* 2)",
        left: "calc(var(--focus-indicator-spacing)* -1)",
        margin: "calc(var(--focus-indicator-spacing)* -1)",
        outline:
          "var(--focus-indicator-stroke-width) solid var(--focus-indicator-color)",
        padding: "var(--focus-indicator-spacing)",
        position: "absolute",
        top: "calc(var(--focus-indicator-spacing)* -1)",
        width: "calc(100% + var(--focus-indicator-spacing)* 2)",
      },
    }),
    []
  );

  const getLinkStylesAfter = useMemo(
    () => ({
      "&:after": {
        borderLeft: "1px solid hsla(0, 0%, 100%, .22)",
        borderRight: "1px solid hsla(0, 0%, 100%, .22)",
        content: "''",
        height: ".9375rem",
        left: "-6px",
        position: "absolute",
        top: "calc(50% - 7px)",
        width: "0",
      },
    }),
    []
  );

  const shopeeDrawerBoxStyles = () => ({
    display: "flex",
    outline: "0",
    overflow: "visible",
    position: "relative",
    backdropFilter: "blur(1px)",
  });

  const shopeeDrawerIconLinkStyles = () => ({
    border: "0",
    paddingRight: "0",
  });

  const getLinkDrawerIconStyles = useMemo(
    () => ({
      height: "16px",
      width: "16px",
      display: "inline-block",
      marginRight: "10px",
      overflow: "hidden",
      textAlign: "left",
      textIndent: "-9999px",
      backgroundImage:
        "url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/74e7710903007bb7.png)",
    }),
    []
  );

  const getListNavbarLinkStyles = () => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "end",
    height: "2.125rem",
    listStyle: "none",
    margin: "0",
    padding: "0",
    color: "#fff",
  });

  const getListItemNavbarLinkStyles = () => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "end",
    position: "relative",
    color: "currentColor",
    fontSize: ".875rem",
    padding: "0 .625rem",
    textDecoration: "none",
    cursor: "pointer",
    userSelect: "none",
    "&:hover": {
      color: "hsla(0, 0%, 100%, .7)",
    },
  });

  const getLinkListItemNavbarStyles = () => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "end",
    color: "currentColor",
    padding: "6px 0",
    textDecoration: "none",
    backgroundColor: "initial",
    overflowClipMargin: "content-box",
    cursor: "pointer",
  });

  const getTypographyListItemNavbarStyles = useMemo(
    () => ({
      minWidth: "max-content",
      display: "flex",
      alignItems: "center",
      justifyContent: "end",
      color: "#fff",
      textDecoration: "none",
      fontSize: ".8125rem",
      fontWeight: "300",
      textTransform: "capitalize",
      "&:hover": {
        color: "hsla(0, 0%, 100%, .7)",
      },
      cursor: "pointer",
    }),
    []
  );

  const getBoxIconStyles = useMemo(
    () => ({
      alignItems: "center",
      color: "#fff",
      textDecoration: "none",
      display: "flex",
      justifyContent: "center",
      marginLeft: ".5rem",
      marginRight: ".3125rem",
    }),
    []
  );

  const getClassStardustPopoverStyles = () => ({
    position: "relative",
    cursor: "pointer",
  });

  const getClassStardustPopoverTargetStyles = () => ({
    unicodeBidi: "isolate",
    cursor: "pointer",
  });

  const shopeeSearchbarStyles = useMemo(
    () => ({
      borderRadius: "2px",
      boxSizing: "border-box",
      "--focus-indicator-spacing": "3px",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    }),
    []
  );

  const getInputStyles = useMemo(
    () => ({
      positions: "relative",
      backgroundColor: "#fff",
      border: "none",
      borderBlockColor: "none",
      outline: "none",
      maxHeight: "40px",
      padding: 0,
      flex: "1",
      // padding: "0 .625rem",
      "& .MuiInputBase-input": {
        padding: ".75rem",
        lineHeight: "20px",
        border: "none",
        borderBlockColor: "none",
        outline: "none",
      },
      "& .MuiInputBase-input:focus": { outline: "none" },
      fontSize: ".875rem",
      borderRadius: "2px",
      boxShadows: "inset 0 2px 0 rgba(0, 0, 0, .02)",
      boxSizing: "border-box",
      overflow: "hidden",

      cursor: "text",
      "& .MuiInputBase-root": {
        height: "40px",
        borderRadius: "2px",
        border: "none",
        borderBlockColor: "none",
        outline: "none",
      },
      "& .MuiInputBase-root:focus": { outline: "none" },

      "& .MuiOutlinedInput-root": { lineHeight: "20px", fontSize: ".875rem" },
      "& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
        {
          borderColor: "rgba(0, 0, 0, 0.87)",
          borderWidth: "1px",
        },
      "&.Mui-focused.MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(0, 0, 0, 0.87)",
        borderWidth: "1px",
      },

      "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
        border: "1px solid #fff",
        borderBlockColor: "none",
        outline: "none",
      },

      "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline:focus": {
        border: "1px solid rgba(0, 0, 0, 0.87)",
      },
    }),
    []
  );

  const shopeeSearchBarSelectorStyles = () => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "rgba(0, 0, 0, .87)",
    cursor: "pointer",
    height: "2.5rem",
    lineHeight: "2.5rem",
    maxWidth: "9.375rem",
    position: "relative",
    userSelect: "none",
    borderRadius: "none",
  });

  const shopeeSearchBarSelectorTriggerStyles = () => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    border: "0",
    borderLeft: "1px solid rgba(0, 0, 0, .09)",
    boxSizing: "border-box",
    height: "75%",
    lineHeight: "1.25rem",
    overflow: "hidden",
    paddingLeft: ".9375rem",
    paddingRight: ".625rem",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "100%",
    cursor: "pointer",
  });

  const optionSelectMenuItemStyles = () => ({
    fontWeight: "normal",
    display: "block",
    minHeight: "1.2em",
    padding: "0px 2px 1px",
    whiteSpace: "nowrap",
  });

  const stackLinkProductStyles = () => ({
    position: "relative",
    // flexWrap: "nowrap",
    flexWrap: "wrap",
    fontSize: ".75rem",
    fontWeight: "300",
    height: "1.5rem",
    lineHeight: "1.5rem",
    marginTop: ".1875rem",
    // overflowY: "visible",
    overflowY: "clip",
  });

  const LinkProductStyles = () => ({
    "&:first-child": {
      // marginLeft: "0",
    },
    // color: "rgba(0, 0, 0, .87)",
    // color: "rgba(0, 0, 0, .54)",
    color: "hsla(0, 0%, 100%, .9)",
    // display: "block",
    height: ".875rem",
    lineHeight: ".875rem",
    marginBottom: ".3125rem",
    marginLeft: "13px",
    marginTop: ".3125rem",
    outline: "0",
    overflow: "visible",
    position: "relative",
    textDecoration: "none",
    whiteSpace: "nowrap",
  });

  const cartWrapperStyles = () => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
    margin: "0 10px",
    paddingBottom: "5px",
  });

  const cartContainerStyles = () => ({
    padding: "10px 0",
  });

  const cartDrawerStyles = () => ({
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
    margin: "0 0 0 5px",
    outline: "0",
    overflow: "visible",
    position: "relative",
    textDecoration: "none",
    whiteSpace: "nowrap",
  });

  return (
    <AppBar
      sx={{
        minWidth: "1200px",
        ...topShopeeContainerStyles,
      }}
    >
      <Container
        sx={{
          background: "transparent",
          height: "2.125rem",
          position: "relative",
          zIndex: "400",
        }}
      >
        <Toolbar sx={toolbarContainerStyles}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Link
              href="//banhang.shopee.vn"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{ marginLeftLink, ...getLinkStyles, ...getLinkStylesBefore }}
            >
              Kênh Người Bán
            </Link>
            <Box sx={{ marginLeftLink, shopeeDrawerBoxStyles }}>
              <Link
                href="/web/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ ...getLinkStyles, ...getLinkStylesAfter }}
              >
                Tải ứng dụng
              </Link>
            </Box>
            <Box
              sx={{
                shopeeDrawerBoxStyles,
                shopeeDrawerIconLinkStyles,
                marginLeftLink,
                ...getLinkStyles,
                ...getLinkStylesAfter,
              }}
            >
              Kết nối
            </Box>
            <Box sx={{ shopeeDrawerBoxStyles, shopeeDrawerIconLinkStyles }}>
              <Link
                href="https://facebook.com/ShopeeVN"
                target="_blank"
                rel="noopener noreferrer"
                title="Kết nối Facebook"
                sx={{
                  ...getLinkStyles,
                  ...getLinkStylesAfter,
                  ...getLinkDrawerIconStyles,
                  backgroundPosition: "8.064516129032258% 16.129032258064516%",
                  backgroundSize: "487.5% 293.75%",
                }}
              ></Link>
              <Link
                href="https://instagram.com/Shopee_VN"
                target="_blank"
                rel="noopener noreferrer"
                title="Kết nối Instagram!"
                sx={{
                  ...getLinkStyles,
                  ...getLinkStylesAfter,
                  ...getLinkDrawerIconStyles,
                  backgroundPosition: "58.064516129032256% 16.129032258064516%",
                  backgroundSize: "487.5% 293.75%",
                }}
              ></Link>
            </Box>
          </Stack>
          <Box sx={{ flex: "1" }}></Box>
          <List sx={getListNavbarLinkStyles}>
            <ListItem sx={getListItemNavbarLinkStyles}>
              <Box sx={getClassStardustPopoverStyles}>
                <Box role="button" sx={getClassStardustPopoverTargetStyles}>
                  <Link
                    href="/user/notifications/order"
                    underline="none"
                    color="inherit"
                    display="flex"
                    alignItems="center"
                    sx={getLinkListItemNavbarStyles}
                  >
                    <NotificationIcon />{" "}
                    {/* Sử dụng NotificationIcon component */}
                    <Typography sx={getTypographyListItemNavbarStyles}>
                      Thông báo
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </ListItem>
            <Link
              href="https://help.shopee.vn/vn/s"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                getListItemNavbarLinkStyles,
                getLinkListItemNavbarStyles,
                ...getTypographyListItemNavbarStyles,
              }}
            >
              <Box sx={getBoxIconStyles}>
                <HelpCenterIcon />
              </Box>
              <Typography sx={getTypographyListItemNavbarStyles}>
                Hỗ Trợ
              </Typography>
            </Link>
            <ListItem sx={getListItemNavbarLinkStyles}>
              <Box sx={getClassStardustPopoverStyles}>
                <Box role="button" sx={getClassStardustPopoverTargetStyles}>
                  <Box
                    sx={{
                      alignItems: "center",
                      color: "#fff",
                      display: "flex",
                      padding: ".4375rem .625rem",
                    }}
                  >
                    <Box sx={getBoxIconStyles}>
                      <StardustPopover />
                    </Box>
                    <Typography sx={getTypographyListItemNavbarStyles}>
                      Tiếng Việt
                    </Typography>
                    <StardustPopoverTarget />
                  </Box>
                </Box>
              </Box>
            </ListItem>
            <ListItem sx={getListItemNavbarLinkStyles}>
              <Box sx={getClassStardustPopoverStyles}>
                <Box role="button" sx={getClassStardustPopoverTargetStyles}>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      padding: "5px 0",
                      textTransform: "none",
                    }}
                  >
                    <Box
                      sx={{
                        height: "1.375rem",
                        width: "1.375rem",
                        border: ".0625rem solid rgba(0, 0, 0, .09)",
                        borderRadius: "50%",
                        boxSizing: "border-box",
                        display: "inline-block",
                        position: "relative",
                      }}
                    >
                      <Box
                        sx={{
                          //   height: "1.875rem",
                          //   width: "1.875rem",
                          backgroundColor: "#f5f5f5",
                          borderRadius: "50%",
                          overflow: "hidden",
                          paddingTop: "100%",
                          position: "relative",
                          // width: "100%",
                        }}
                      >
                        <ShopeeAvatar />
                      </Box>
                      <img
                        style={{
                          borderRadius: "50%",
                          display: "block",
                          height: "100%",
                          left: 0,
                          position: "absolute",
                          top: 0,
                          width: "100%",
                          border: 0,
                          overflowClipMargin: "content-box",
                          overflow: "clip",
                        }}
                        src="src/assets/images/avatar.jpeg"
                        alt="Avatar"
                      />
                    </Box>
                    <Box
                      sx={{
                        maxWidth: "9.375rem",
                        overflow: "hidden",
                        paddingLeft: ".3125rem",
                        textOverflow: "ellipsis",
                      }}
                    >
                      akaliko1010
                    </Box>
                  </Box>
                </Box>
              </Box>
            </ListItem>
          </List>
        </Toolbar>
      </Container>

      <Container
        sx={{
          minWidth: "1200px",
          background: "transparent",
          boxShadow: "0 1px 1px 0 rgba(0,0,0,.05)",
        }}
      >
        <Toolbar
          sx={{
            height: "5.3125rem",
            justifyContent: "space-between",
            padding: "1rem 0 .625rem",
            ...toolbarContainerStyles,
          }}
        >
          <Link
            rel="stylesheet"
            href="/shopee"
            sx={{
              cursor: "pointer",
              paddingRight: "2.5rem",
              position: "relative",
              top: "-.1875rem",
            }}
          >
            <Box
              sx={{
                borderRadius: "2px",
                margin: "-2px",
                padding: "2px",
              }}
            >
              <img
                width={"200px"}
                height={"40px"}
                src={shopeeLogo}
                alt="Shopee-Logo"
              />
            </Box>
          </Link>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              position: "relative",
              visibility: "visible",
              height: "41px",
              width: "840px",
            }}
          >
            <FormControl
              component={"form"}
              role="search"
              autoComplete="off"
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flex: "1",
                height: "41px",
                boxShadow: "0 0.125rem 0.25rem rgba(0,0,0,.09)",
                width: "100%",
              }}
            >
              <Box
                className={"shopee-searchbar__main"}
                sx={shopeeSearchbarStyles}
              >
                <TextField
                  id="filled-search"
                  type="search"
                  inputProps={{ maxLength: 128 }}
                  placeholder="Tìm trong Nhà Sách Online"
                  autoComplete="off"
                  role="combobox"
                  value=""
                  fullWidth // Optional: Set to true for full-width input
                  aria-autocomplete="list"
                  aria-controls="shopee-searchbar-listbox"
                  aria-expanded="false"
                  sx={{
                    ...getInputStyles,
                  }}
                />
                <Box
                  className="shopee-searchbar-selector"
                  sx={{
                    pointerEvents: "auto",
                    ...shopeeSearchBarSelectorStyles,
                  }}
                >
                  <Button
                    className="shopee-searchbar-selector__trigger"
                    role="combobox"
                    aria-controls="radix-19"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    aria-label=""
                    sx={shopeeSearchBarSelectorTriggerStyles}
                  >
                    <Typography
                      sx={{
                        pointerEvents: "none",
                        textTransform: "none",
                        font: "inherit",
                        color: "#000",
                      }}
                    >
                      Trong Nhà Sách Online
                    </Typography>
                    <ArrowDownIcon />
                  </Button>
                  <Select
                    value={selectedValue} // Set an initial value
                    onChange={handleChange}
                    aria-hidden="true"
                    sx={{
                      position: "absolute",
                      border: 0,
                      width: "1px",
                      height: "1px",
                      padding: 0,
                      margin: "-1px",
                      overflow: "hidden",
                      clip: "rect(0px, 0px, 0px, 0px)",
                      whiteSpace: "nowrap",
                      overflowWrap: "normal",
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem value={option} sx={optionSelectMenuItemStyles}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
              </Box>
              <Button
                sx={{
                  background: "linear-gradient(-180deg, #f53d2d, #f63)",
                  width: "60px",
                  height: "34px",
                  padding: "0 15px",
                  minWidth: "60px",
                  maxWidth: "190px",
                }}
              >
                <SearchIcon />
              </Button>
            </FormControl>
            <Stack flex={"1"} width={"100%"}>
              <Box sx={stackLinkProductStyles}>
                <Link
                  aria-hidden="false"
                  href="/search?keyword=kotoro%20wa"
                  sx={LinkProductStyles}
                >
                  Kotoro Wa
                </Link>
                <Link
                  aria-hidden="false"
                  href="/search?keyword=v%C3%B5%20ph%E1%BB%A5c%20karate"
                  sx={LinkProductStyles}
                >
                  Võ Phục Karate
                </Link>
                <Link
                  aria-hidden="false"
                  href="/search?keyword=m%C3%A0n%20h%C3%ACnh%20dell%20n5050"
                  sx={LinkProductStyles}
                >
                  Màn Hình DELL N5050
                </Link>
                <Link
                  aria-hidden="false"
                  href="/search?keyword=ai%20tr%C3%AD%20tu%E1%BB%87%20nh%C3%A2n%20t%E1%BA%A1o"
                  sx={LinkProductStyles}
                >
                  Ai Trí Tuệ Nhân Tạo
                </Link>
                <Link
                  aria-hidden="false"
                  href="/search?keyword=naraka%20bladepoint"
                  sx={LinkProductStyles}
                >
                  Naraka Bladepoint
                </Link>
                <Link
                  aria-hidden="false"
                  href="/search?keyword=b%C3%BAt%20th%C6%B0%20ph%C3%A1p"
                  sx={LinkProductStyles}
                >
                  Bút Thư Pháp
                </Link>
                <Link
                  aria-hidden="false"
                  href="/search?keyword=s%C3%A1ch%20thanh%20l%C3%BD"
                  sx={LinkProductStyles}
                >
                  Sách Thanh Lý
                </Link>
                <Link
                  aria-hidden="false"
                  href="/search?keyword=m%C3%B4%20h%C3%ACnh%20l%C3%BD%20c%E1%BA%A3nh%20lung"
                  sx={LinkProductStyles}
                >
                  Mô Hình Lý Cảnh Lung
                </Link>
                <Link
                  aria-hidden="false"
                  href="/search?keyword=simon"
                  sx={LinkProductStyles}
                >
                  Simon
                </Link>
                <Link
                  aria-hidden="false"
                  href="/search?keyword=%C4%91ai%20karate"
                  sx={LinkProductStyles}
                >
                  Đai Karate
                </Link>
                <Link
                  aria-hidden="true"
                  href="/search?keyword=kanji%20look%20and%20learn"
                  sx={LinkProductStyles}
                >
                  Kanji Look And Learn
                </Link>
                <Link
                  aria-hidden="true"
                  href="/search?keyword=v%C6%B0%C6%A1ng%20kh%C3%AD%20r%E1%BB%ABng%20s%C3%A2u"
                  sx={LinkProductStyles}
                >
                  Vương Khí Rừng Sâu
                </Link>
                <Link
                  aria-hidden="true"
                  href="/search?keyword=sticker"
                  sx={LinkProductStyles}
                >
                  Sticker
                </Link>
                <Link
                  aria-hidden="true"
                  href="/search?keyword=qu%E1%BA%A1t%20t%E1%BA%A3n%20nhi%E1%BB%87t%20laptop"
                  sx={LinkProductStyles}
                >
                  Quạt Tản Nhiệt Laptop
                </Link>
                <Link
                  aria-hidden="true"
                  href="/search?keyword=n%C6%B0%E1%BB%9Bc%20hoa"
                  sx={LinkProductStyles}
                >
                  Nước Hoa
                </Link>
                <Link
                  aria-hidden="true"
                  href="/search?keyword=n%C3%B3i%20ti%E1%BA%BFng%20anh%20nh%C6%B0%20gi%C3%B3"
                  sx={LinkProductStyles}
                >
                  Nói Tiếng Anh Như Gió
                </Link>
                <Link
                  aria-hidden="true"
                  href="/search?keyword=lovito"
                  sx={LinkProductStyles}
                >
                  Lovito
                </Link>
                <Link
                  aria-hidden="true"
                  href="/search?keyword=body%20mist"
                  sx={LinkProductStyles}
                >
                  Body Mist
                </Link>
                <Link
                  aria-hidden="true"
                  href="/search?keyword=alone%204"
                  sx={LinkProductStyles}
                >
                  Alone 4
                </Link>
                <Link
                  aria-hidden="true"
                  href="/search?keyword=s%C3%A1ch%20vi%E1%BB%87t"
                  sx={LinkProductStyles}
                >
                  Sách Việt
                </Link>
                <Link
                  aria-hidden="true"
                  href="/search?keyword=tr%E1%BA%A5n%20qu%E1%BB%91c%20th%E1%BA%A7n%20k%C3%ADch%20ho%C3%A0n%20m%E1%BB%B9"
                  sx={LinkProductStyles}
                >
                  Trấn Quốc Thần Kích Hoàn Mỹ
                </Link>
                <Link
                  aria-hidden="true"
                  href="/search?keyword=m%C3%B4%20h%C3%ACnh%20t%E1%BA%A7n%20th%E1%BB%9Di%20minh%20nguy%E1%BB%87t"
                  sx={LinkProductStyles}
                >
                  Mô Hình Tần Thời Minh Nguyệt
                </Link>
              </Box>
            </Stack>
          </Stack>
          <Box sx={cartWrapperStyles}>
            <Box position={"relative"}>
              <Box role="button">
                <Box sx={cartContainerStyles}>
                  <Link href="/cart" sx={cartDrawerStyles}>
                    <CartDrawer />
                    <Typography
                      sx={{
                        transformOrigin: "0px 0px",
                        fontSize: "1.0625rem",
                        marginRight: ".625rem",
                        display: "none",
                      }}
                    >
                      Shopping Cart number of items in cart 144
                    </Typography>
                    <Box
                      aria-hidden="true"
                      sx={{
                        left: "-1.25rem",
                        top: "-.6875rem",
                        backgroundColor: "#fff",
                        border:
                          ".125rem solid var(--brand-primary-color, #ee4d2d)",
                        borderRadius: "2.75rem",
                        color: "var(--brand-primary-color, #ee4d2d)",
                        height: "1rem",
                        lineHeight: "1.2em",
                        marginRight: "-.875rem",
                        minWidth: ".6875rem",
                        padding: "0 .3125rem",
                        position: "relative",
                        textAlign: "center",
                        // left: "-1.125rem",
                        // top: "-.5rem",
                      }}
                    >
                      144
                    </Box>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HomeNav;
