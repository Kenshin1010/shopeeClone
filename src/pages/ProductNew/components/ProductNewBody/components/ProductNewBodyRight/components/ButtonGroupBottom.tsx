import { Button, Stack } from "@mui/material";

function ButtonGroupBottom() {
  const shopeeButtonXl = {
    minWidth: "140px",
    fontSize: "14px",
    alignItems: "center",
    appearance: "none",
    backgroundColor: "#fff",
    border: "1px solid #e5e5e5",
    borderRadius: "4px",
    boxSizing: "border-box",
    color: "#333",
    cursor: "pointer",
    display: "inline-flex",
    fontWeight: "500",
    height: "32px",
    justifyContent: "center",
    // minWidth: "72px",
    outline: "none",
    padding: "0 16px",
    position: "relative",
    textDecoration: "none",
    transition: "all .2s ease-in-out",
    userSelect: "none",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    textTransform: "none",
  };
  return (
    <div className="ButtonGroupBottom">
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"flex-end"}
        spacing={2}
        sx={{ flex: "1", padding: "24px" }}
      >
        <Button variant="outlined" sx={{ ...shopeeButtonXl }}>
          Hủy
        </Button>
        <Button
          variant="outlined"
          sx={{
            ...shopeeButtonXl,
            "&.Mui-disabled": {
              pointerEvents: "unset", // allow :hover styles to be triggered
              cursor: "not-allowed",
            },
          }}
          disabled
        >
          Lưu &amp; Ẩn
        </Button>
        <Button
          variant="contained"
          href="#outlined-buttons"
          sx={{
            ...shopeeButtonXl,
            "&.Mui-disabled": {
              pointerEvents: "unset", // allow :hover styles to be triggered
              cursor: "not-allowed", // and custom cursor can be defined without :hover state
              bgcolor: "#ee4d2d",
              opacity: ".7",
              color: "#fff",
            },
            backgroundColor: "#ee4d2d",
            color: "#fff",
          }}
          disabled
        >
          Lưu &amp; Hiển thị
        </Button>
      </Stack>
    </div>
  );
}

export default ButtonGroupBottom;
