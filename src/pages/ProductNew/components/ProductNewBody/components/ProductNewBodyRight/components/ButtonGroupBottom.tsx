import { Button, Stack } from "@mui/material";

function ButtonGroupBottom() {
  return (
    <div className="ButtonGroupBottom">
      <Stack direction="row" spacing={2}>
        <Button variant="outlined">Hủy</Button>
        <Button variant="outlined" disabled>
          Lưu &amp; Ẩn
        </Button>
        <Button variant="contained" href="#outlined-buttons" disabled>
          Lưu &amp; Hiển thị
        </Button>
      </Stack>
    </div>
  );
}

export default ButtonGroupBottom;
