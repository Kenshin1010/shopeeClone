import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  Link,
  OutlinedInput,
  Stack,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import { Theme } from "@mui/system";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import EyeClose from "../../../assets/jsx-icon/EyeClose";
import EyeOpen from "../../../assets/jsx-icon/EyeOpen";
import FacebookIcon from "../../../assets/jsx-icon/FacebookIcon";
import GoogleIcon from "../../../assets/jsx-icon/GoogleIcon";
import QRCodeIcon from "../../../assets/jsx-icon/QRCodeIcon";

export const RegisterBody = () => {
  const location = useLocation();
  console.log(location.pathname === "/register");

  return (
    <Box
      sx={{
        maxWidth: "100%",
        bgcolor: "#ee4d2d",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${"https://down-vn.img.susercontent.com/file/sg-11134004-7rcdu-lt54a69q71k03c"})`,
          maxWidth: "1040px",
          height: "600px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <SignUpForm />
      </Box>
    </Box>
  );
};

function SignUpForm() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isValidatePhoneNumberFormLogin, setIsValidatePhoneNumberFormLogin] = useState<boolean>(true);
  const [isValidatePasswordFormLogin, setIsValidatePasswordFormLogin] = useState<boolean>(true);
  const [isValidateFormLogin, setIsValidateFormLogin] = useState<boolean>(false);
  useEffect(() => {
    if (location.pathname === "/buyer/login") {
      setIsValidateFormLogin(phoneNumber !== "" && password !== "");
    } else if (location.pathname === "/buyer/signup") {
      setIsValidateFormLogin(phoneNumber !== "");
    }
  }, [location.pathname, phoneNumber, password]);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const getInputStyles = useMemo(
    () => ({
      maxHeight: "41px",
      padding: 0,
      "& .MuiInputBase-input": {
        padding: ".75rem",
        lineHeight: "20px",
      },
      "& .MuiInputBase-input:focus": { outline: "none" },
      fontSize: ".875rem",
      borderRadius: "2px",
      boxShadows: "inset 0 2px 0 rgba(0, 0, 0, .02)",
      boxSizing: "border-box",
      overflow: "hidden",
      "& .MuiInputBase-root": {
        height: "41px",
        borderRadius: "2px",
      },
      "& .MuiInputBase-root:focus": { outline: "none" },
      cursor: "text",
      "& .MuiOutlinedInput-root": { lineHeight: "20px", fontSize: ".875rem" },
      "& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
        {
          borderColor: "rgba(0, 0, 0, 0.87)",
          borderWidth: "1px",
        },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(0, 0, 0, 0.87)",
        borderWidth: "1px",
      },
    }),
    []
  );

  return (
    <Box
      className="signup-container"
      sx={{
        bgcolor: "#fff",
        width: "400px",
        position: "absolute",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        className="signup-header"
        sx={{
          padding: "22px 30px",
          flexShrink: "0",
        }}
      >
        <Typography
          variant="h2"
          className="signup-title"
          sx={{
            textAlign: "left",
            fontSize: "1.25rem",
            color: "#222",
            maxWidth: "8.5rem",
          }}
        >
          {location.pathname === "/buyer/signup" ? "Đăng ký" : "Đăng nhập"}
        </Typography>
        {location.pathname === "/buyer/login" && (
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ marginLeft: "auto" }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"end"}
              sx={{
                maxWidth: "165px",
                maxHeight: "60px",
                border: "2px solid #ffbf00",
                borderRadius: "2px",
                color: "#ffbf00",
                fontSize: ".875rem",
                fontWeight: "700",
                marginRight: "1rem",
                padding: ".6875rem .875rem",
                backgroundColor: "#fefaec",
                position: "relative",
                textAlign: "left",
                "&:after": {
                  backgroundColor: "#fefaec",
                  borderRight: "2px solid #ffbf00",
                  borderTop: "2px solid #ffbf00",
                  boxSizing: "border-box",
                  content: "''",
                  position: "absolute",
                  top: "50%",
                  right: "-.75rem",
                  transform: "rotate(45deg) translateX(-50%)",
                  width: ".75rem",
                  height: ".75rem",
                },
              }}
            >
              Đăng nhập với mã QR
            </Stack>
            <Button
              variant="outlined"
              startIcon={<QRCodeIcon />}
              sx={{
                "& .MuiButton-icon": {
                  margin: "0",
                  padding: "0",
                  border: "none",
                },
                "&.MuiButtonBase-root": {
                  minWidth: "0",
                  padding: "0",
                  margin: "0",
                  border: "none",
                },
              }}
            ></Button>
          </Stack>
        )}
      </Stack>

      <Box
        className="signup-form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          padding: "0 30px 30px 30px",
        }}
      >
        <Box component="form" sx={{ width: "100%", fontSize: ".75rem" }}>
          <FormControl
            sx={{ width: "100%", fontSize: ".75rem", marginBottom: ".875rem" }}
          >
            <TextField
              type="tel"
              placeholder={
                location.pathname === "/buyer/signup"
                  ? "Số điện thoại"
                  : "Email/Số điện thoại/Tên đăng nhập"
              }
              fullWidth // Optional: Set to true for full-width input
              sx={getInputStyles}
              onChange={(e) => {
                if (e.target.value) {
                  setPhoneNumber(e.target.value);
                  setIsValidatePhoneNumberFormLogin(true);
                } else {
                  setIsValidatePhoneNumberFormLogin(false);
                  setPhoneNumber("");
                }
              }}
            />
            {!isValidatePhoneNumberFormLogin && (
              <FormHelperText
                sx={{
                  textAlign: "left",
                  color: "#ff424f",
                  fontSize: "0.75rem",
                  margin: 0,
                  minHeight: "1rem",
                  padding: "0.25rem 0 0",
                }}
              >
                {location.pathname === "/buyer/signup"
                  ? "Số điện thoại không hợp lệ"
                  : "Vui lòng điền vào mục này."}
              </FormHelperText>
            )}
          </FormControl>

          {location.pathname === "/buyer/login" && (
            <FormControl
              variant="outlined"
              sx={{
                width: "100%",
                fontSize: ".875rem",
                marginBottom: ".875rem",
              }}
            >
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                placeholder="Mật khẩu"
                sx={getInputStyles}
                onChange={(e) => {
                  if (e.target.value) {
                    setPassword(e.target.value);
                    setIsValidatePasswordFormLogin(true);
                  } else {
                    setIsValidatePasswordFormLogin(false);
                    setPassword("");
                  }
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{ margin: "0" }}
                    >
                      {showPassword ? <EyeOpen /> : <EyeClose />}
                    </IconButton>
                  </InputAdornment>
                }
              />

              {!isValidatePasswordFormLogin && (
                <FormHelperText
                  sx={{
                    textAlign: "left",
                    color: "#ff424f",
                    fontSize: "0.75rem",
                    margin: 0,
                    minHeight: "1rem",
                    padding: "0.25rem 0 0",
                  }}
                >
                  Vui lòng điền vào mục này.
                </FormHelperText>
              )}
            </FormControl>
          )}
          <Button
            variant="contained"
            sx={{
              bgcolor: "#f3826c",
              color: "#fff",
              width: "100%",
              maxHeight: "40px",
              fontSize: ".875rem",
              fontWeight: "700",
              borderRadius: "2px",
              padding: "0.5rem 1.875rem",
              marginBottom:
                location.pathname === "/buyer/signup" ? "1.875rem" : "0",
              "&:hover": {
                backgroundColor: "#ee4d2d",
              },
            }}
            onClick={() => {
              
            }}
            disabled={!isValidateFormLogin}
          >
            {location.pathname === "/buyer/signup" ? "Tiếp theo" : "Đăng nhập"}
          </Button>
        </Box>
        {location.pathname === "/buyer/login" && (
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ width: "100%", margin: "10px 0" }}
          >
            <Link
              href="/buyer/reset"
              sx={{
                color: "#05a",
                fontSize: ".75rem",
                "&.MuiLink-root": {
                  textDecoration: "none",
                },
              }}
            >
              Quên mật khẩu
            </Link>
            <Link
              sx={{
                color: "#05a",
                fontSize: ".75rem",
                "&.MuiLink-root": {
                  textDecoration: "none",
                },
              }}
              href="/buyer/login/otp?next=https%3A%2F%2Fshopee.vn%2Fbuyer%2Flogin%3Fnext%3Dhttps%253A%252F%252Fshopee.vn%252Fbuyer%252Flogin%253Fnext%253Dhttps%25253A%25252F%25252Fshopee.vn%25252F"
            >
              Đăng nhập với SMS
            </Link>
          </Stack>
        )}
        <Stack
          className="or-divider"
          width="100%"
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          position={"relative"}
          sx={{
            paddingBottom: ".875rem",
          }}
        >
          <Box
            sx={{ width: "40%", height: "1px", backgroundColor: "#dbdbdb" }}
          ></Box>
          <Typography
            textAlign={"center"}
            variant="caption"
            sx={{
              color: "#ccc",
              fontSize: ".75rem",
              padding: "0 1rem",
            }}
          >
            HOẶC
          </Typography>
          <Box
            sx={{
              width: "40%",
              height: "1px",
              backgroundColor: "#dbdbdb",
            }}
          ></Box>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            width: "100%",
          }}
        >
          <Button
            variant="outlined"
            startIcon={<FacebookIcon />}
            sx={styleButtonSocial}
          >
            Facebook
          </Button>
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={styleButtonSocial}
          >
            Google
          </Button>
        </Stack>
        {location.pathname === "/buyer/signup" && (
          <FormLabel
            className="terms-label"
            sx={{
              marginTop: "1.5625rem",
              marginRight: ".3125rem",
              padding: "0 1.5625rem",
              fontSize: "12px",
              fontWeight: 400,
              color: "rgba(0, 0, 0, .87)",
              textAlign: "center",
            }}
          >
            Bằng việc đăng kí, bạn đã đồng ý với Shopee về{" "}
            <Link
              href="https://help.shopee.vn/portal/article/77243"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#ee4d2d",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Điều khoản dịch vụ
            </Link>{" "}
            &amp;{" "}
            <Link
              href="https://help.shopee.vn/portal/article/77244"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#ee4d2d",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Chính sách bảo mật
            </Link>
          </FormLabel>
        )}
      </Box>
      <Stack
        className="login-link-container"
        direction={"row"}
        justifyContent={"center"}
        sx={{
          marginBottom: "1.875rem",
          fontSize: "14px",
          color: "rgba(0, 0, 0, .26)",
          paddingRight: "4px",
          whiteSpace: "pre",
        }}
      >
        {location.pathname === "/buyer/signup"
          ? "Bạn đã có tài khoản? "
          : "Bạn mới biết đến Shopee? "}
        <Link
          href="/buyer/login?next=https%3A%2F%2Fshopee.vn%2FNh%25C3%25A0-S%25C3%25A1ch-Online-cat.11036863"
          underline="none"
          sx={{
            color: "#ee4d2d",
            textDecoration: "none",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          {location.pathname === "/buyer/signup" ? "Đăng nhập" : "Đăng ký"}
        </Link>
      </Stack>
    </Box>
  );
}

export default SignUpForm;

const styleButtonSocial: SxProps<Theme> = {
  bgcolor: "rgba(0, 0, 0, 0.02)",
  border: "1px solid rgba(0, 0, 0, .26)",
  borderRadius: "2px",
  boxSizing: "border-box",
  color: "rgba(0, 0, 0, .87)",
  fontSize: ".875rem",
  height: "40px",
  outline: "none",
  padding: "0 10px",
  margin: "5px",
  width: "100%",
  textTransform: "capitalize",
  display: "flex",
  direction: "row",
  alignItems: "center",
  justifyContent: "center",
};
