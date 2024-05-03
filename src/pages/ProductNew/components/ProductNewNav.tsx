import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import MoreIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Box,
  Breadcrumbs,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import Logo from "../../../assets/jsx-icon/Logo";
import NotificationIcon from "../../../assets/jsx-icon/NotificationIcon";
import ArrowRightNav from "../jsx-icon/ArrowRightNav";
import DropDownButton from "../jsx-icon/DropDownButton";
import EducationIcon from "../jsx-icon/EducationIcon";

function ProductNewNav() {
  const routerLinkActive = {
    color: "#999",
    transition: "color .2s ease-in-out",
    fontSize: "18px",
    textDecoration: "none",
    whiteSpace: "nowrap",
    cursor: "pointer",
    fontWeight: "400",
    height: "100%",
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
      href="/shopee"
      onClick={handleClick}
      sx={{ ...routerLinkActive }}
    >
      Trang chủ
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/portal/product"
      onClick={handleClick}
      sx={{ ...routerLinkActive }}
    >
      Sản phẩm
    </Link>,
    <Typography
      key="3"
      color="text.primary"
      sx={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        color: "rgba(0, 0, 0, .87)",
        fontSize: "18px",
      }}
    >
      Thêm 1 sản phẩm mới
    </Typography>,
  ];

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const IconButtonStyle = {
    borderRadius: "0",
  };

  return (
    <div className="ProductNewNav" style={{ position: "static" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#fff", color: "#333" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, width: "60px", height: "60px" }}
            >
              {/* <MenuIcon /> */}
              <Box data-v-ec4eabc4="" className="logo-box">
                <Link data-v-ec4eabc4="" href="/" className="header-logo only">
                  <Logo />
                </Link>
              </Box>
            </IconButton>
            <Stack
              className="content-box"
              spacing={1}
              sx={
                {
                  // paddingTop: "1.25rem"
                }
              }
            >
              <Breadcrumbs
                sx={{
                  display: "flex",
                  alignItems: "center",
                  minWidth: "296px",
                  maxWidth: "10000px",
                  //   height: "1rem",
                  //   lineHeight: "16px",
                  //   whiteSpace: "nowrap",
                }}
                separator={
                  <i
                    style={{
                      color: "#b7b7b7",
                      display: "inline-block",
                      transform: "translateY(10%)",
                    }}
                  >
                    <ArrowRightNav />
                  </i>
                }
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
            <Box sx={{ flexGrow: 1 }} />
            <Stack
              className="header-right"
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Box
                className="header-action"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <IconButton size="large" sx={IconButtonStyle}>
                  <DropDownButton />
                </IconButton>
                <IconButton size="large" sx={IconButtonStyle}>
                  <EducationIcon />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 20 new notifications"
                  sx={{ color: "#333", ...IconButtonStyle }}
                >
                  <Badge badgeContent={20} color="error">
                    <NotificationIcon />
                  </Badge>
                </IconButton>
                <Box
                  className="action-splitter"
                  sx={{
                    width: "1px",
                    // minWidth: "1px",
                    height: "18px",
                    backgroundColor: "#e5e5e5",
                    transform: "translateY(18px)",
                    margin: "0 8px",
                    padding: "0",
                    // margin: "0",
                    font: "inherit",
                    verticalAlign: "baseline",
                    border: "0",
                  }}
                ></Box>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  sx={{ color: "#333", ...IconButtonStyle }}
                >
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      sx={{
                        "&.MuiAvatar-root": {
                          width: "32px",
                          height: "32px",
                        },
                      }}
                      alt="akaliko1010"
                      src="https://cf.shopee.vn/file/ad0e2127b3dd95fc45994ec1f29c0e2d"
                    />
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"end"}
                      sx={{
                        maxWidth: "9.375rem",
                        overflow: "hidden",
                        paddingLeft: ".3125rem",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        fontSize: "14px",
                        lineHeight: "1.2",
                      }}
                    >
                      akaliko1010
                    </Stack>
                  </Stack>
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Stack>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </div>
  );
}

export default ProductNewNav;
