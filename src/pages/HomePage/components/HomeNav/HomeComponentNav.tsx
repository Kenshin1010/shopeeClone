import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import shopeeLogo from "../../../../assets/images/shopee2.svg";
import ArrowDownIcon from "../../../../assets/jsx-icon/ArrowDownIcon";
import CartDrawer from "../../../../assets/jsx-icon/CartDrawer";
import SearchIcon from "../../../../assets/jsx-icon/SearchIcon";

const optionsSearchList = ["Trong Nhà Sách Online", "Trong Shopee"];

function HomeComponentNav() {
  const getLinkStylesFocusBefore = {
    "& .MuiOutlinedInput-input:before": {
      borderRadius: "2px",
      bottom: "-4px",
      content: "''",
      left: "-4px",
      margin: "calc(var(--focus-indicator-spacing)* -1)",
      outline:
        "var(--focus-indicator-stroke-width) solid var(--focus-indicator-color)",
      padding: "var(--focus-indicator-spacing)",
      position: "absolute",
      right: "7px",
      pointerEvents: "none",
      top: "-4px",
      zIndex: "1",
    },
  };

  const shopeeSearchbarStyles = {
    borderRadius: "2px",
    boxSizing: "border-box",
    "--focus-indicator-spacing": "3px",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  };

  const getInputStyles = {
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
    // overflow: "hidden",
    cursor: "text",
    "& .MuiInputBase-root": {
      height: "40px",
      borderRadius: "2px",
      border: "none",
      borderBlockColor: "none",
      outline: "none",
    },
    "& .MuiOutlinedInput-root": { lineHeight: "20px", fontSize: ".875rem" },
    "& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
      {
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
  };

  const shopeeSearchbarSelectorStyles = () => ({
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
    "& .css-i9irp6-MuiButtonBase-root-MuiButton-root": {
      borderRadius: "none",
    },
  });

  const shopeeSearchbarSelectorTriggerStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderLeft: "1px solid rgba(0, 0, 0, .09)",
    boxSizing: "border-box",
    height: "75%",
    lineHeight: "1.25rem",
    // overflow: "hidden",
    paddingLeft: ".9375rem",
    paddingRight: ".625rem",
    // textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "150px",
    cursor: "pointer",
    "& .MuiInputBase-root": {
      padding: "0",
    },
    "& .MuiOutlinedInput-root": {
      padding: "0",
    },
    "& .css-84nhb1-MuiAutocomplete-root .MuiOutlinedInput-root": {
      padding: "0",
    },
  };

  const optionSelectMenuItemStyles = {
    fontWeight: "normal",
    display: "block",
    minHeight: "1.2em",
    padding: "0px 2px 1px",
    whiteSpace: "nowrap",
    "& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
      {
        borderColor: "rgba(255, 255, 255, 1)",
        borderWidth: "1px",
      },
  };

  const stackLinkProductStyles = {
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
  };

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
    <div className="HomeComponentNav">
      <Stack
        direction={"row"}
        alignItems={"start"}
        justifyContent={"space-between"}
        width={"100%"}
        sx={{ padding: "1rem 0 .625rem" }}
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
              width={"120px"}
              height={"40px"}
              src={shopeeLogo}
              alt="Shopee-Logo"
            />
          </Box>
        </Link>
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          sx={{
            position: "relative",
            visibility: "visible",
            // height: "41px",
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
              height: "40px",
              maxHeight: "40px",
              boxShadow: "0 0.125rem 0.25rem rgba(0,0,0,.09)",
              width: "100%",
              bgcolor: "#fff",
              padding: "5px 5px 5px 0",
              borderRadius: "2px",
            }}
          >
            <Box
              className={"shopee-searchbar__main"}
              sx={{ ...getLinkStylesFocusBefore, ...shopeeSearchbarStyles }}
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
                  ...shopeeSearchbarSelectorStyles,
                }}
              >
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={optionsSearchList}
                  sx={{
                    ...shopeeSearchbarSelectorTriggerStyles,
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Trong Nhà Sách Online"
                      sx={{
                        pointerEvents: "none",
                        textTransform: "none",
                        font: "inherit",
                        color: "#000",
                        ...getInputStyles,
                        ...optionSelectMenuItemStyles,
                      }}
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <InputAdornment position="end">
                            <ArrowDownIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
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
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flex={"1"}
            width={"100%"}
          >
            <Box
              sx={{
                overflow: "hidden",
                ...stackLinkProductStyles,
              }}
            >
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
                aria-hidden="true"
                href="/search?keyword=m%C3%B4%20h%C3%ACnh%20l%C3%BD%20c%E1%BA%A3nh%20lung"
                sx={LinkProductStyles}
              >
                Mô Hình Lý Cảnh Lung
              </Link>
              <Link
                aria-hidden="true"
                href="/search?keyword=simon"
                sx={LinkProductStyles}
              >
                Simon
              </Link>
              <Link
                aria-hidden="true"
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
                      // left: "-1.25rem",
                      // top: "-.6875rem",
                      backgroundColor: "#fff",
                      border:
                        ".125rem solid var(--brand-primary-color, #ee4d2d)",
                      borderRadius: "2.75rem",
                      color: "var(--brand-primary-color, #ee4d2d)",
                      height: "1.2rem",
                      lineHeight: "1.2rem",
                      marginRight: "-.875rem",
                      minWidth: ".6875rem",
                      width: "max-content",
                      padding: "0 .3125rem",
                      position: "relative",
                      textAlign: "center",
                      alignContent: "center",
                      fontSize: ".875rem",
                      left: "-1.125rem",
                      top: "-.5rem",
                    }}
                  >
                    144
                  </Box>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
    </div>
  );
}

export default HomeComponentNav;
