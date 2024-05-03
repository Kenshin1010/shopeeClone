import { Box, Button, Container, Link, Stack } from "@mui/material";
import ShopeeLogoIcon from "../jsx-icon/ShopeeLogoIcon";
import SearchIcon from "../jsx-icon/SearchIcon";

function CartComponentNav() {
  return (
    <div className="CartComponentNav">
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        className="cart-page-header-wrapper container-wrapper"
        sx={{
          width: "100%",
          background: "#fff",
          borderBottom: "1px solid rgba(0, 0, 0, .09)",
          height: "6.25rem",
          minWidth: "1200px",
        }}
      >
        <Container
          className="container"
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "1200px",
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"start"}
            sx={{}}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"start"}
              className="cart-page-header"
              sx={{
                flex: "1",
                paddingLeft: "1.125rem",
              }}
            >
              <Link
                className="cart-page-logo"
                href="/shopee"
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  color: "rgba(0, 0, 0, .87)",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    backgroundPosition: "50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    cursor: "pointer",
                    height: "2.875rem",
                    width: "8.125rem",
                    fill: "#ee4d2d",
                    alignItems: "center",
                  }}
                >
                  <ShopeeLogoIcon />
                </Box>
                <Box
                  className="cart-page-logo__page-name"
                  sx={{
                    borderLeft: ".0625rem solid #ee4d2d",
                    color: "#ee4d2d",
                    fontSize: "1.25rem",
                    height: "1.875rem",
                    lineHeight: "1.875rem",
                    marginBottom: ".0625rem",
                    marginLeft: ".9375rem",
                    paddingLeft: ".9375rem",
                    textTransform: "capitalize",
                  }}
                >
                  Giỏ hàng
                </Box>
              </Link>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"end"}
              className="cart-page-searchbar"
              sx={{ position: "relative", width: "38.8125rem" }}
            >
              <form
                role="search"
                // autocomplete="off"
                className="shopee-searchbar"
                style={{
                  border: "2px solid #ee4d2d",
                  padding: "0",
                  // --focusIndicatorSpacing: "3px",
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "space-between",
                  background: "#fff",
                  borderRadius: "2px",
                  boxSizing: "border-box",
                  height: "2.5rem",
                  //   padding: ".1875rem",
                  position: "relative",
                  width: "38.8125rem",
                }}
              >
                <Box
                  className="shopee-searchbar__main"
                  sx={{
                    boxSizing: "border-box",
                    display: "flex",
                    flex: "1",
                    position: "relative",
                  }}
                >
                  <Box
                    className="shopee-searchbar-input"
                    sx={{
                      boxSizing: "border-box",
                      display: "flex",
                      flex: "1",
                      padding: "0 .625rem",
                      position: "relative",
                    }}
                  >
                    <input
                      aria-label="Tìm sản phẩm, thương hiệu, và tên shop"
                      className="shopee-searchbar-input__input"
                      //   maxlength="128"
                      placeholder="Tìm sản phẩm, thương hiệu, và tên shop"
                      //   autocomplete="off"
                      aria-autocomplete="list"
                      aria-controls="shopee-searchbar-listbox"
                      aria-expanded="false"
                      role="combobox"
                      value=""
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flex: "1",
                        border: "0",
                        margin: "0",
                        outline: "none",
                        padding: "0",
                        lineHeight: "normal",
                        color: "inherit",
                        font: "inherit",
                      }}
                    />
                  </Box>
                </Box>
                <Button
                  type="button"
                  className="btn btn-solid-primary btn--s btn--inline shopee-searchbar__search-button"
                  sx={{
                    borderRadius: "0",
                    height: "unset",
                    width: "5rem",
                    color: "#fff",
                    position: "relative",
                    overflow: "visible",
                    outline: "0",
                    background: "#ee4d2d",
                    "&:hover": {
                      background: "rgba(238, 77, 45, .9)",
                    },
                  }}
                >
                  <SearchIcon />
                </Button>
              </form>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </div>
  );
}

export default CartComponentNav;
