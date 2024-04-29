import { Button } from "@mui/material";

// Định nghĩa các lớp CSS tùy chỉnh bằng makeStyles
// const useStyles = makeStyles(() => ({
//   customButton: {
//     backgroundColor: "blue",
//     color: "white",
//     "&:hover": {
//       backgroundColor: "darkblue",
//     },
//   },
// }));

function CustomButton() {
  // const classes = useStyles();

  return (
    // Sử dụng thuộc tính cssClass để áp dụng các lớp CSS tùy chỉnh
    <Button>Click Me</Button>
  );
}

export default CustomButton;
