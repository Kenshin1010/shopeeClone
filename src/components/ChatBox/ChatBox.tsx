import PathIcon from "../../assets/jsx-icon/PathIcon";
import ChatIcon from "../../assets/jsx-icon/ChatIcon";
import { Button, Stack, SxProps, Theme } from "@mui/material";

function ChatBox() {
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        position: "fixed",
        top: "92%",
        right: ".625rem",
        cusor: "pointer",
        width: "6.25rem",
        padding: ".75rem",
        borderRadius: ".1875rem",
        bgcolor: "#fff",
        "& .MuiButtonBase-root": {
          minWidth: "0px",
        },
      }}
    >
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
