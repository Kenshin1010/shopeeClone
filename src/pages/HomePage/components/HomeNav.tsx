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
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import shopeeLogo from "../../../assets/images/shopee2.svg";
import HelpCenterIcon from "../../../assets/jsx-icon/HelpCenterIcon";
import IconArrowDown from "../../../assets/jsx-icon/IconArrowDown";
import NotificationIcon from "../../../assets/jsx-icon/NotificationIcon";
import ShopeeAvatar from "../../../assets/jsx-icon/ShopeeAvatar";
import StardustPopover from "../../../assets/jsx-icon/StardustPopover";
import StardustPopoverTarget from "../../../assets/jsx-icon/StardustPopoverTarget";
import ShopeeSearchbarIcon from "../../../assets/jsx-icon/ShopeeSearchbarIcon";
import CartDrawer from "../../../assets/jsx-icon/CartDrawer";
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
      "&:hover": {
        transform: "scale(1.02)",
      },
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
    height: "2.125rem",
    listStyle: "none",
    margin: "0",
    padding: "0",
    color: "#fff",
  });

  const getListItemNavbarLinkStyles = () => ({
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
    color: "currentColor",
    padding: "6px 0",
    textDecoration: "none",
    backgroundColor: "initial",
    overflowClipMargin: "content-box",
    cursor: "pointer",
  });

  const getTypographyListItemNavbarStyles = useMemo(
    () => ({
      alignItems: "center",
      color: "#fff",
      textDecoration: "none",
      display: "flex",
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

  const shopeeSearchbarStyles = () => ({
    "--focus-indicator-spacing": "3px",
    alignItems: "stretch",
    background: "#fff",
    borderRadius: "2px",
    boxSizing: "border-box",
    display: "flex",
    height: "2.5rem",
    justifyContent: "space-between",
    padding: ".1875rem",
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              position: "relative",
              width: "840px",
            }}
          >
            <FormControl
              sx={{
                role: "search",
                autoComplete: "off",
                boxShadow: "0 0.125rem 0.25rem rgba(0,0,0,.09)",
                width: "100%",
                ...shopeeSearchbarStyles,
              }}
            >
              <Box>
                <Box>
                  <TextField
                  id="filled-search"
                  label="Search field"
                  type="search"
                  variant="filled"
                    aria-label="Tìm trong Nhà Sách Online"
                    inputProps={{ maxLength: 128 }}
                    placeholder="Tìm trong Nhà Sách Online"
                    autoComplete="off"
                    aria-autocomplete="list"
                    aria-controls="shopee-searchbar-listbox"
                    aria-expanded="false"
                    role="combobox"
                    value=""
                  />
                </Box>
                <Box sx={{ pointerEvents: "auto" }}>
                  <Button
                    role="combobox"
                    aria-controls="radix-19"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    aria-label=""
                  >
                    <Typography sx={{ pointerEvents: "none" }}>
                      Trong Nhà Sách Online
                    </Typography>
                    <IconArrowDown />
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
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
              </Box>
              <Button
                type="button"
                variant="outlined"
                startIcon={<ShopeeSearchbarIcon />}
              ></Button>
            </FormControl>
            <Box>
              <Box>
                <Link
                  aria-hidden="false"
                  href="/search?keyword=%C3%A1o%202%20d%C3%A2y"
                >
                  Võ Phục Karate Rikaido
                </Link>
                <Link
                  aria-hidden="false"
                  href="/search?keyword=%C3%A1o%20ph%C3%B4ng%20nam"
                >
                  Kotoro Wa
                </Link>
                <Link
                  aria-hidden="false"
                  href="/search?keyword=set%20%C3%A1o%20ki%E1%BB%83u"
                >
                  Võ Phục Karate
                </Link>
                <Link
                  aria-hidden="false"
                  href="/search?keyword=ch%C3%A2n%20v%C3%A1y%20jean"
                >
                  Màn Hình DELL N5050
                </Link>
                <Link
                  aria-hidden="false"
                  href="/search?keyword=chi%E1%BA%BFu%20%C4%91i%E1%BB%81u%20ho%C3%A0"
                >
                  Ai Trí Tuệ Nhân Tạo
                </Link>
                <Link aria-hidden="false" href="/search?keyword=hasaki">
                    Naraka Bladepoint
                </Link>
                <Link aria-hidden="false" href="/search?keyword=k%C3%ADnh">
                Bút Thư Pháp
                </Link>
                <Link aria-hidden="false" href="/search?keyword=m%C5%A9">
                Alone 4
                </Link>
                <Link
                  aria-hidden="false"
                  href="/search?keyword=m%C5%A9%20b%E1%BA%A3o%20hi%E1%BB%83m"
                >
                  Sách Thanh Lý
                </Link>
                <Link aria-hidden="false" href="/search?keyword=t%C3%BAi">
                Mô Hình Lý Cảnh Lung
                </Link>
                <Link
                  aria-hidden="false"
                  href="/search?keyword=b%C3%ACnh%20n%C6%B0%E1%BB%9Bc"
                >
                  Simon
                </Link>
                <Link
                  aria-hidden="false"
                  href="/search?keyword=qu%E1%BA%A7n%20jean%20nam"
                >
                  Đai Karate
                </Link>
                <Link
                  aria-hidden="true"
                  href="/search?keyword=kh%E1%BA%A9u%20trang%205d"
                >
                  Kanji Look And Learn
                </Link>
                <Link
                  aria-hidden="true"
                  href="/search?keyword=ch%C3%A2n%20v%C3%A1y%20d%C3%A0i"
                >
                  Kính
                </Link>
                <Link aria-hidden="true" href="/search?keyword=sticker">
                  Sticker
                </Link>
                <Link aria-hidden="true" href="/search?keyword=tai%20nghe">
                  Tai Nghe
                </Link>
                <Link
                  aria-hidden="true"
                  href="/search?keyword=n%C6%B0%E1%BB%9Bc%20hoa"
                >
                  Nước Hoa
                </Link>
                <Link
                  aria-hidden="true"
                  href="/search?keyword=qu%E1%BA%A7n%20jean%20%E1%BB%91ng%20r%E1%BB%99ng"
                >
                  Quần Jean Ống Rộng
                </Link>
                <Link aria-hidden="true" href="/search?keyword=lovito">
                  Lovito
                </Link>
                <Link aria-hidden="true" href="/search?keyword=body%20mist">
                  Body Mist
                </Link>
                <Link
                  aria-hidden="true"
                  href="/search?keyword=%C3%A1o%20kho%C3%A1c%20nam"
                >
                  Áo Khoác Nam
                </Link>
                <Link
                  aria-hidden="true"
                  href="/search?keyword=%C4%91%E1%BB%93%20%C4%83n%20v%E1%BA%B7t"
                >
                  Đồ Ăn Vặt
                </Link>
                <Link
                  aria-hidden="true"
                  href="/search?keyword=qu%E1%BA%A1t%20c%E1%BA%A7m%20tay"
                >
                  Quạt Cầm Tay
                </Link>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box>
              <Box>
                <Box>
                  <Link href="/cart">
                    <CartDrawer />
                    <Typography>
                      Shopping Cart number of items in cart 144
                    </Typography>
                    <Box aria-hidden="true">144</Box>
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
