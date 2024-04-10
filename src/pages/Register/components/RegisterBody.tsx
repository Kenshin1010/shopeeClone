import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Link,
  Stack,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "../../../assets/jsx-icon/GoogleIcon";
import FacebookIcon from "../../../assets/jsx-icon/FacebookIcon";
import { Theme } from "@mui/system";
import { useState } from "react";
import { useLocation } from "react-router-dom";
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
  console.log("phoneNumber", phoneNumber);
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
        }}
      >
        <Typography
          variant="h2"
          className="signup-title"
          sx={{
            textAlign: "left",
            fontSize: "20px",
            color: "#222",
            lineHeight: "24px",
          }}
        >
          {location.pathname === "/buyer/signup" ? "Đăng ký" : "Đăng nhập"}
        </Typography>
        {location.pathname === "/buyer/login" && (
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box
              sx={{
                border: "2px solid #ffbf00",
                borderRadius: "2px",
                color: "#ffbf00",
                fontSize: ".875rem",
                fontWeight: "700",
                marginRight: "1rem",
                padding: ".6875rem .875rem",
                position: "relative",
                "&:after": {
                  backgroundColor: "#fefaec",
                  borderRight: "2px solid #ffbf00",
                  borderTop: "2px solid #ffbf00",
                  boxSizing: "border-box",
                  // content: '',
                  height: ".75rem",
                  position: "absolute",
                  right: "-.75rem",
                  top: "50%",
                  transform: "rotate(45deg) translateX(-50%)",
                  width: ".75rem",
                },
              }}
            >
              Đăng nhập với mã QR
            </Box>
            <Button variant="outlined" startIcon={<QRCodeIcon />}
            sx={{
              "& .MuiButton-icon" : {
                margin: "0",
                padding: "0",
                border: "none",
              },
              "&.MuiButtonBase-root" : {
                minWidth: "0",
                padding: "0",
                margin: "0",
                border: "none",
              },
            }}></Button>
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
        <FormControl component="form" sx={{ width: "100%" }}>
          <TextField
            type="tel"
            placeholder="Số điện thoại" // Translated placeholder for "Enter phone number"
            fullWidth // Optional: Set to true for full-width input
            sx={{
              padding: 0,
              borderRadius: "2px",
              boxShadows: "inset 0 2px 0 rgba(0,0,0,.02)",
              boxSizing: "border-box",
              overflow: "hidden",
              "& .MuiInputBase-root": {
                height: "40px",
              },
            }}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Typography
            variant="body2"
            color="error"
            sx={{
              textAlign: "left",
              color: "#ff424f",
              fontSize: "0.75rem",
              margin: 0,
              minHeight: "1rem",
              padding: "0.25rem 0 0",
            }}
          >
            Số điện thoại không hợp lệ
          </Typography>
          <Button
            variant="contained"
            type="submit"
            sx={{
              bgcolor: "#ee4d2d",
              color: "#fff",
              width: "100%",
              marginBottom: "1.875rem",
              "&:hover": {
                backgroundColor: "#f3826c",
              },
            }}
          >
            Tiếp theo
          </Button>
        </FormControl>
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
      </Box>
      <Stack
        className="login-link-container"
        direction={"row"}
        justifyContent={"center"}
        sx={{ marginBottom: "1.875rem", fontSize: "14px" }}
      >
        Bạn đã có tài khoản?{" "}
        <Link
          href="/buyer/login?next=https%3A%2F%2Fshopee.vn%2FNh%25C3%25A0-S%25C3%25A1ch-Online-cat.11036863"
          underline="none"
          sx={{
            color: "#ee4d2d",
            textDecoration: "none",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Đăng nhập
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
