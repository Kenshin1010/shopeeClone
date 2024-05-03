import { Button, ButtonGroup, Stack, SxProps, Theme } from "@mui/material";
import { useLocation } from "react-router-dom";
import ChatIcon from "../../assets/jsx-icon/ChatIcon";
import PathIcon from "../../assets/jsx-icon/PathIcon";

function ChatBox() {
  const location = useLocation();
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        position: "fixed",
        top: "92%",
        right: ".625rem",
        cursor: "pointer",
        width: "6.25rem",
        padding: ".75rem",
        borderRadius: ".1875rem",
        bgcolor: "#fff",
        "& .MuiButtonBase-root": {
          minWidth: "0px",
        },
      }}
    >
      {/* <Box
        sx={{
          background: "#ee4d2d",
          border: "1px solid #f6f6f6",
          borderRadius: "9px",
          color: "#fff",
          fontSize: "12px",
          height: "18px",
          overflow: "hidden",
          padding: "1px 5px",
          position: "absolute",
          right: "-4px",
          top: "-9px",
        }}
      >
        1
      </Box> */}
      {location.pathname !== "/portal/product/new" && (
        <ButtonGroup>
          <Button
            variant="text"
            startIcon={<PathIcon />}
            sx={styleChatBox}
          ></Button>
          <Button
            variant="text"
            startIcon={<ChatIcon />}
            sx={styleChatBox}
          ></Button>
        </ButtonGroup>
      )}
    </Stack>
  );
}

export default ChatBox;

const styleChatBox: SxProps<Theme> = {
  boxSizing: "border-box",
  outline: "none",
  border: "none",
  padding: 0,
  marginLeft: ".5rem",
};
