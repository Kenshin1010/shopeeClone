import { Box, Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../../../assets/jsx-icon/Logo";
import ArrowRightNav from "../jsx-icon/ArrowRightNav";

function ProductNewNav() {
  const routerLinkActive = {
    color: "#05a",
    fontSize: "18px",
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
  return (
    <div className="ProductNewNav">
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"start"}
        className="header-content"
      >
        <Box data-v-ec4eabc4="" className="logo-box">
          <Link data-v-ec4eabc4="" href="/" className="header-logo only">
            <Logo />
          </Link>
        </Box>
        <Stack
          className="content-box"
          spacing={1}
          sx={{ paddingTop: "1.25rem" }}
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
              <i>
                <ArrowRightNav />
              </i>
            }
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Stack>
    </div>
  );
}

export default ProductNewNav;
