import {
  AppBar,
  Container,
  Box,
  Link,
  List,
  ListItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import HelpCenterIcon from "../../../../assets/jsx-icon/HelpCenterIcon";
import NotificationIcon from "../../../../assets/jsx-icon/NotificationIcon";
import ShopeeAvatar from "../../../../assets/jsx-icon/ShopeeAvatar";
import StardustPopover from "../../../../assets/jsx-icon/StardustPopover";
import StardustPopoverTarget from "../../../../assets/jsx-icon/StardustPopoverTarget";
import HomeComponentNav from "./HomeComponentNav";
import CartComponentNav from "../../../Cart/components/CartComponentNav";

function HomeNav() {
  // const theme = createTheme({
  //   breakpoints: {
  //     values: {
  //       xs: 0,
  //       sm: 600,
  //       md: 960,
  //       lg: 1280,
  //       xl: 1920,
  //     },
  //   },
  // });

  const topShopeeContainerStyles = {
    background: "linear-gradient(-180deg, #f53d2d, #f63)",
    transition:
      "transform .2s cubic-bezier(.4,0,.2,1), linear .2s cubic-bezier(.4,0,.2,1)",
    //   "&:hover": {
    //     transform: "scale(1.02)",
    //   },
    visibility: "visible",
    lineHeight: "1.2",
  };

  const containerStyles = {
    minWidth: "1200px",
    background: "transparent",
    position: "relative",
    "&.MuiContainer-root": {
      padding: "0",
      minHeight: "0",
    },
  };

  const toolbarContainerStyles = {
    color: "#fff",
    marginLeft: "auto",
    marginRight: "auto",
    width: "1200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "&.MuiToolbar-root": {
      padding: "0",
      minHeight: "0",
    },
    padding: "1rem 0 .625rem",
  };

  const getLinkStyles = {
    textDecoration: "none",
    color: "#fff",
    fontSize: ".8125rem",
    fontWeight: "300",
    outline: "0",
    overflow: "visible",
    height: "1.4375rem",
    padding: ".25rem",
    position: "relative",
    "&:hover": {
      color: "hsla(0, 0%, 100%, .7)",
    },
  };

  const getLinkStylesBefore = {
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
  };

  const getLinkStylesAfter = {
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
  };

  const shopeeDrawerBoxStyles = () => ({
    display: "flex",
    alignItem: "center",
    outline: "0",
    overflow: "visible",
    position: "relative",
    backdropFilter: "blur(1px)",
  });

  const shopeeDrawerIconLinkStyles = () => ({
    border: "0",
    paddingRight: "0",
  });

  const getLinkDrawerIconStyles = {
    height: "16px",
    width: "16px",
    display: "inline-block",
    marginRight: "10px",
    overflow: "hidden",
    textAlign: "left",
    textIndent: "-9999px",
    backgroundImage:
      "url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/74e7710903007bb7.png)",
  };

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

  const getTypographyListItemNavbarStyles = {
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
  };

  const getBoxIconStyles = {
    alignItems: "center",
    color: "#fff",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    marginLeft: ".5rem",
    marginRight: ".3125rem",
  };

  const getClassStardustPopoverStyles = () => ({
    position: "relative",
    cursor: "pointer",
  });

  const getClassStardustPopoverTargetStyles = () => ({
    unicodeBidi: "isolate",
    cursor: "pointer",
  });

  return (
    <AppBar
      sx={{
        width: "100%",
        ...topShopeeContainerStyles,
      }}
    >
      <Container
        sx={{
          ...containerStyles,
        }}
      >
        <Toolbar
          sx={{
            ...toolbarContainerStyles,
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box sx={{ paddingRight: ".375rem", shopeeDrawerBoxStyles }}>
              <Link
                href="/portal/product/new"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{
                  ...getLinkStyles,
                  ...getLinkStylesBefore,
                }}
              >
                Kênh Người Bán
              </Link>
            </Box>
            <Box
              sx={{
                marginLeft: ".375rem",
                paddingRight: ".375rem",
                shopeeDrawerBoxStyles,
              }}
            >
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
                marginLeft: ".375rem",
                shopeeDrawerBoxStyles,
                shopeeDrawerIconLinkStyles,
                paddingRight: "0",
                marginRight: "0",
              }}
            >
              <Link
                sx={{
                  ...getLinkStyles,
                  ...getLinkStylesAfter,
                  paddingRight: "0",
                }}
              >
                Kết nối
              </Link>
            </Box>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{
                padding: "4px 0 4px 4px",
                shopeeDrawerBoxStyles,
                shopeeDrawerIconLinkStyles,
              }}
            >
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
            </Stack>
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
                    <Box sx={getBoxIconStyles}>
                      <NotificationIcon />
                    </Box>
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
                    <Box sx={getBoxIconStyles}>
                      <StardustPopoverTarget />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </ListItem>
            <ListItem sx={getListItemNavbarLinkStyles}>
              <Link
                href="/buyer/login"
                sx={{
                  ...getClassStardustPopoverStyles,
                  textDecoration: "none",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
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
                        src="https://down-vn.img.susercontent.com/file/ad0e2127b3dd95fc45994ec1f29c0e2d_tn"
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
              </Link>
            </ListItem>
          </List>
        </Toolbar>
      </Container>
      {location.pathname !== "/cart" && (
        <Container
          sx={{
            ...containerStyles,
          }}
        >
          <Toolbar
            sx={{
              ...toolbarContainerStyles,
              height: "5.3125rem",
            }}
          >
            <HomeComponentNav />
          </Toolbar>
        </Container>
      )}
      {location.pathname === "/cart" && <CartComponentNav />}
    </AppBar>
  );
}

export default HomeNav;
