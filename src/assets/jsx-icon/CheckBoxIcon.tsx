import { Box } from "@mui/material";

function CheckBoxIcon() {
  return (
    <Box
      sx={{
        margin: "0",
        boxSizing: "border-box",
        appearance: "none",
        backgroundColor: "#fff",
        border: "1px solid rgba(0, 0, 0, .26)",
        borderRadius: "2px",
        boxShadow: "inset 0 1px 0 0 rgba(0, 0, 0, .05)",
        display: "flex",
        flexShrink: "0",
        justifyContent: "center",
        textAlign: "center",
        cursor: "pointer",
        userSelect: "none",
        lineHeight: ".6875rem",
        width: ".8125rem",
        height: ".8125rem",
      }}
    ></Box>
  );
}

export default CheckBoxIcon;
