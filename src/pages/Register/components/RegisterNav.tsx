import { Link, styled, Typography } from "@mui/material";
import shopeeLogo from "../../../assets/images/shopee.svg";
import { Stack } from "@mui/system";
function RegisterNav() {
  return (
    <FlexRowSpaceBetweenAlignCenter
      sx={{
        maxWidth: "1200px",
        width: "100%",
        margin: "0 auto",
        p: "24px 0",
      }}
    >
      <Stack direction={"row"} alignItems={"end"}>
        <img
          width={"200px"}
          height={"40px"}
          src={shopeeLogo}
          alt="Shopee-Logo"
        />
        <Typography
          sx={{
            color: "#222",
            fontSize: "1.5rem",
            fontWeight: 500,
            letterSpacing: "1px",
            bottom: 0,
            transform: "translateX(-30px)",
            lineHeight: 1.4,
          }}
        >
          Đăng ký
        </Typography>
      </Stack>
      <Link
        sx={{
          color: "#ee4d2d",
          cursor: "pointer",
          fontSize: ".875rem",
          fontWeight: 500,
          textDecoration: "none",
          lineHeight: "40px",
        }}
      >
        Bạn cần giúp đỡ?
      </Link>
    </FlexRowSpaceBetweenAlignCenter>
  );
}

export default RegisterNav;
export const FlexRowSpaceBetweenAlignCenter = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

export const FlexRowSpaceBetweenAlignEnd = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "end",
  justifyContent: "space-between",
});
